import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonFab, 
  IonFabButton, 
  IonIcon 
} from '@ionic/angular/standalone';
import { TareaService } from '../services/tarea.service';
import { Tarea } from '../models/tarea.model';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonList, 
    IonItem, 
    IonLabel, 
    IonFab, 
    IonFabButton, 
    IonIcon
  ],
})
export class HomePage {
  
  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) {
    addIcons({ add });
  }

  ionViewWillEnter() {
    this.loadTareas();
  }

  loadTareas() {
    this.tareas = this.tareaService.getTareas();
  }
}