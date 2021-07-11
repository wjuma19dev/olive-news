import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias/noticias.component';
import { NoticiaComponent } from './noticias/noticia/noticia.component';
import { IonicModule } from '@ionic/angular';
import { ActionsService } from '../services/actions.service';

@NgModule({
  declarations: [
    NoticiasComponent,
    NoticiaComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    NoticiasComponent
  ],
  providers: [
    ActionsService
  ]
})
export class ComponentsModule { }
