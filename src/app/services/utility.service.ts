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

  showLoading(): void {
    $('#loading-overlay').show();
  }

  hideLoading(): void {
    $('#loading-overlay').hide();
  }
}
