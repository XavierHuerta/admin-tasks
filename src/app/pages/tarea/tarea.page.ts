import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { 
  FormBuilder, 
  FormGroup, 
  Validators, 
  ReactiveFormsModule, 
  AbstractControl, 
  ValidationErrors 
} from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonTextarea, 
  IonButton, 
  IonButtons, 
  IonBackButton,
  IonDatetimeButton, 
  IonModal,
  IonDatetime
} from '@ionic/angular/standalone';
import { TareaService } from '../../services/tarea.service';
import { fechaFuturaValidator } from '../../validators/date.validators';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.page.html',
  styleUrls: ['./tarea.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonList, 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonTextarea, 
    IonButton, 
    IonButtons, 
    IonBackButton, 
    IonDatetimeButton, 
    IonModal,
    IonDatetime
  ]
})
export class TareaPage implements OnInit {
  tareaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private tareaService: TareaService,
    private router: Router,
    private location: Location
  ) {
    this.tareaForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaVencimiento: [null, [Validators.required, fechaFuturaValidator]]
    });
  }

  ngOnInit() {
  }

  guardarTarea() {
    if (this.tareaForm.invalid) {
      this.tareaForm.markAllAsTouched();
      return;
    }

    this.tareaService.addTarea(this.tareaForm.value);
    this.router.navigate(['/home']);
  }

  cancelar() {
    this.location.back();
  }
}