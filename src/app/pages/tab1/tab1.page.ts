import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interface/interface';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {


  @ViewChild('infiniteScroll', {static: true}) infiniteScroll: IonInfiniteScroll;

  noticias: Article[] = [];

  constructor( private noticiasService: NoticiasService ) { }

  ngOnInit() {
    this.loadNews();
  }

  onInfiniteScroll( event: any ): void {
    this.loadNews();
  }

  loadNews(): void {
    this.noticiasService.getHeadlines()
      .subscribe(resp => {

        // If not data come in request
        if( resp.articles.length === 0 ) {
          this.infiniteScroll.disabled = true;
          this.infiniteScroll.complete();
          return;
        }

        this.noticias.push( ...resp.articles );

        // when data is loaded, complete infinte scroll
        this.infiniteScroll.complete();
      });
  }

}
