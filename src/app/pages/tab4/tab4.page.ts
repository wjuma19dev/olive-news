import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interface/interface';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  @ViewChild('infiniteScroll', {static: true}) infiniteScroll: IonInfiniteScroll;

  noticias: Article[] = [];
  categoriaSelected = '';
  categorias: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  constructor(private noticiaService: NoticiasService) {}

  ngOnInit() {
    this.categoriaSelected = this.categorias[0];
    this.loadCategory(this.categoriaSelected);
  }

  loadCategory(categoria: string) {
    this.noticiaService.getHeadlinesCatgegoria(categoria)
      .subscribe(response => {
        this.noticias.push(...response.articles);
        this.infiniteScroll.complete();
      });
  }

  onChange(ev) {
    this.noticias = [];
    this.categoriaSelected = ev.detail.value;
    this.loadCategory(ev.detail.value);
  }

  onInfiniteScroll(event) {
    this.loadCategory(this.categoriaSelected);
  }

}
