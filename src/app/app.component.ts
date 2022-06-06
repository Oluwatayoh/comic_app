import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private util: UtilityService) {}

  ngOnInit() {}
}
