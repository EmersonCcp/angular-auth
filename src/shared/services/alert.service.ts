import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  loader() {
    Swal.fire({
      title: 'Aguarde!',
      html: 'Se esta realizando el proceso.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  close() {
    Swal.close();
  }

  successOrError(texto1: string, texto2: string, status: SweetAlertIcon) {
    Swal.fire(texto1, texto2, status);
  }
}
