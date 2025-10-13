import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private readonly storageKey = 'tareas';

  constructor() { }

  // Obtener todas las tareas
  getTareas(): Tarea[] {
    const tareasJson = localStorage.getItem(this.storageKey);
    if (tareasJson) {
      // Asegurarse de que las fechas se conviertan de string a Date
      return JSON.parse(tareasJson).map((tarea: any) => ({
        ...tarea,
        fechaVencimiento: new Date(tarea.fechaVencimiento)
      }));
    }
    return [];
  }

  // Obtener una tarea por su ID
  getTareaById(id: number): Tarea | undefined {
    const tareas = this.getTareas();
    return tareas.find(tarea => tarea.id === id);
  }

  // Agregar una nueva tarea
  addTarea(tareaData: Omit<Tarea, 'id'>): void {
    const tareas = this.getTareas();
    const nuevaTarea: Tarea = {
      id: new Date().getTime(), // ID único basado en el timestamp
      ...tareaData
    };
    tareas.push(nuevaTarea);
    this.saveTareas(tareas);
  }

  // Actualizar una tarea existente
  updateTarea(tareaActualizada: Tarea): void {
    let tareas = this.getTareas();
    const index = tareas.findIndex(t => t.id === tareaActualizada.id);
    if (index !== -1) {
      tareas[index] = tareaActualizada;
      this.saveTareas(tareas);
    }
  }

  // Eliminar una tarea
  deleteTarea(id: number): void {
    let tareas = this.getTareas();
    tareas = tareas.filter(t => t.id !== id);
    this.saveTareas(tareas);
  }

  // Método privado para guardar las tareas en localStorage
  private saveTareas(tareas: Tarea[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(tareas));
  }
}
