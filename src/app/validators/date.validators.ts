import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Validador personalizado para asegurar que la fecha seleccionada no sea en el pasado.
 * @param control El control del formulario que contiene la fecha.
 * @returns Un objeto de error si la fecha es pasada, de lo contrario, null.
 */
export function fechaFuturaValidator(control: AbstractControl): ValidationErrors | null {
  // Si no hay valor, no se puede validar. La validación 'required' se encarga de eso.
  if (!control.value) {
    return null;
  }
  
  const fechaSeleccionada = new Date(control.value);
  const hoy = new Date();

  // Resetear la hora, minutos, segundos y milisegundos para comparar solo la fecha.
  hoy.setHours(0, 0, 0, 0);

  // La fecha seleccionada no debe ser anterior a hoy.
  if (fechaSeleccionada < hoy) {
    return { fechaPasada: true };
  }

  return null;
}
