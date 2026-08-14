import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  @Input() loggedIn: boolean = false;
  @Input() notLoggedIn: boolean = false;

  constructor(private router: Router){
    this.router = router;
  }

  navigateToHome(){
    this.router.navigateByUrl('/login');
  }
  
}
