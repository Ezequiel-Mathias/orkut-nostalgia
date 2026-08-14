import { Component } from '@angular/core';
import { Header } from "../../components/layout/header/header";
import { Router } from '@angular/router';
import { Footer } from "../../components/layout/footer/footer";

@Component({
  selector: 'app-login',
  imports: [Header, Footer],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})

export class Login {

  constructor(private router: Router) {
    this.router = router;
  }

  navigateToForgotPassword() {
    this.router.navigate(['/forgot-password']);  
  }

}
