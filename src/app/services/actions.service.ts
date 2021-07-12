import { Injectable, EventEmitter } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Article } from '../interface/interface';

// Native
import { Share } from '@capacitor/share';
import { Storage } from '@ionic/storage-angular';

@Injectable()
export class ActionsService {

    noticias: Article[] = [];
    private storage: Storage | null = null;

    constructor(
        private actionSheetCtrl: ActionSheetController,
        private storageService: Storage
    ) {
        this.init();
        this.cargarFavoritos();
    }

    async init() {
        this.storage  = await this.storageService.create();
    }

    public guardarFavoritos(noticia: Article) {
        const noticeExists = this.noticias.find(noti => noti.title === noticia.title);
        if ( !noticeExists ) {
            this.noticias.unshift(noticia);
            this.storage?.set('favoritos', this.noticias);
        }
    }

    public cargarFavoritos() {
        this.storageService.get('favoritos')
            .then(favoritos => {
                this.noticias = [...favoritos];
            })
    }

    async cardMenuActionSheet(noticia: Article ) {
        const actionSheet = await this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Compartir',
                    icon: 'share-outline',
                    cssClass: 'action-dark',
                    handler: async () => {
                        await Share.share({
                            title: noticia.title,
                            text: noticia.source.name,
                            url: noticia.url,
                            dialogTitle: noticia.description
                        });
                    }
                },
                {
                    text: 'Favoritos',
                    icon: 'star-outline',
                    cssClass: 'action-dark',
                    handler: () => {
                        this.guardarFavoritos(noticia);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'action-dark',
                    icon: 'close',
                    handler: () => {
                        console.log('Salir');
                    }
                }
            ]
        });
        await actionSheet.present();
    }
}
