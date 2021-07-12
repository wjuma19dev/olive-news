import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../../services/actions.service';
import { Article } from '../../interface/interface';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor( private actionsService: ActionsService ) { }

  ngOnInit() {
    this.actionsService.cargarFavoritos();
    console.log(this.actionsService.noticias);
  }

}
