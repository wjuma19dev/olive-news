import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Injectable()
export class ActionsService {

    constructor(
        private actionSheetCtrl: ActionSheetController
    ) {}

    async cardMenuActionSheet() {
        const actionSheet = await this.actionSheetCtrl.create({
            buttons: [
                {
                    text: 'Compartir',
                    icon: 'share-outline',
                    cssClass: 'action-dark',
                    handler: () => {
                        console.log('Compartiendo');
                    }
                },
                {
                    text: 'Favoritos',
                    icon: 'star-outline',
                    cssClass: 'action-dark',
                    handler: () => {
                        console.log('Favoritos');
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
