import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  categoriaSelected = '';
  categorias: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  constructor() {}

  ngOnInit() {
    this.categoriaSelected = this.categorias[0];
  }

  onChange(ev) {
    console.log(ev);
    this.categoriaSelected = ev.detail.value;
  }

}
