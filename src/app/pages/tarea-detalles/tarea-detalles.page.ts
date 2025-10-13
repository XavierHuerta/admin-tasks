import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  IonIcon,
  AlertController,
  IonDatetimeButton,
  IonModal,
  IonDatetime
} from '@ionic/angular/standalone';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea.model';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';
import { fechaFuturaValidator } from '../../validators/date.validators';

@Component({
  selector: 'app-tarea-detalles',
  templateUrl: './tarea-detalles.page.html',
  styleUrls: ['./tarea-detalles.page.scss'],
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
    IonIcon,
    IonDatetimeButton,
    IonModal,
    IonDatetime
  ]
})
export class TareaDetallesPage implements OnInit {
  tarea: Tarea | undefined;
  tareaForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private tareaService: TareaService,
    private alertController: AlertController
  ) {
    this.tareaForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fechaVencimiento: [null, [Validators.required, fechaFuturaValidator]]
    });
    addIcons({ trash });
  }

  ngOnInit() {
    this.loadTarea();
  }

  loadTarea() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.tarea = this.tareaService.getTareaById(id);
      if (this.tarea) {
        const fechaISO = this.tarea.fechaVencimiento.toISOString();
        this.tareaForm.patchValue({
          ...this.tarea,
          fechaVencimiento: fechaISO
        });
      } else {
        this.router.navigate(['/home']);
      }
    }
  }

  actualizarTarea() {
    if (this.tareaForm.invalid || !this.tarea) {
      this.tareaForm.markAllAsTouched();
      return;
    }
    const tareaActualizada: Tarea = {
      id: this.tarea.id,
      ...this.tareaForm.value
    };
    this.tareaService.updateTarea(tareaActualizada);
    this.router.navigate(['/home']);
  }

  async eliminarTarea() {
    if (!this.tarea) return;

    const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Estás seguro de que quieres eliminar esta tarea?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        }, {
          text: 'Eliminar',
          handler: () => {
            this.tareaService.deleteTarea(this.tarea!.id);
            this.router.navigate(['/home']);
          }
        }
      ]
    });

    await alert.present();
  }
}
