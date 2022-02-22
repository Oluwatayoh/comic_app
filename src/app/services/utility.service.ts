import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
// import Swal from 'sweetalert2';

// import $ from 'jquery';
declare var $: any;

@Injectable()
export class UtilityService {
  constructor(private toastr: ToastrService) {}

  showSuccess(message: any, title: any) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      showConfirmButton: false
      })
  }

  showError(message: any, title: any) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      showConfirmButton: false
      })
    // this.toastr.error(message, title);
  }

  showInfo(message: any, title: any) {
    this.toastr.info(message, title);
  }

  showWarning(message: any, title: any) {
    this.toastr.warning(message, title);
  }

  showLoading(): void {
    $('#loading-overlay').show();
  }

  hideLoading(): void {
    $('#loading-overlay').hide();
  }
}