import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interface/interface';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  // Propieades
  noticias: Article[] = [];

  constructor( private noticiasService: NoticiasService ) { }

  ngOnInit() {

    this.noticiasService.getHeadlines()
      .subscribe(resp => {
        this.noticias.push( ...resp.articles );
      });

  }

}
