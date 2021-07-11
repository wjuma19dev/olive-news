import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../../interface/interface';

// Native
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: number;

  constructor() { }

  ngOnInit() {}

  openNoticeInBrowser(): void {
    console.log('Abriendo el navegador en: ', this.noticia.url);
  }

}
