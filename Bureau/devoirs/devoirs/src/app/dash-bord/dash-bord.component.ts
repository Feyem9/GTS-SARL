import { Component } from '@angular/core';
import { AouthService } from '../Aouth/aouth.service';
import { Router } from '@angular/router';
import {UserInterface} from '../Aouth/interfaces/user.interface'; 

@Component({
  selector: 'app-dash-bord',
  templateUrl: './dash-bord.component.html',
  styleUrls: ['./dash-bord.component.css']
})
export class DashBordComponent {

  auth!: UserInterface;

  constructor (
    private authService: AouthService,
    private router: Router
  ) {}
  ngOnInit(): void {
  
    const auth = this.authService.auth();
    if (auth.error) {

      this.router.navigate(['login']);
    } else {

      this.auth = auth.data;
    }
  }
}
