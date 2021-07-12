import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../interface/interface';

// Native
import { Browser } from '@capacitor/browser';
import { ActionsService } from '../../../services/actions.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: number;

  constructor(
    private actionsService: ActionsService
  ) { }

  ngOnInit() {}

  async openNoticeInBrowser(): Promise<void>  {
    console.log('Abriendo el navegador en: ', this.noticia.url);
    await Browser.open({ url: this.noticia.url });
  }

  onActionSheet(): void {
    this.actionsService.cardMenuActionSheet(this.noticia);
  }

}
