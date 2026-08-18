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

  navigateToHome(route?: string){

    if(route){
      this.router.navigateByUrl(route);
    }else{
      this.router.navigateByUrl('/login');
    }
  }
  
}
