import { Component } from '@angular/core';
import { Header } from "../../components/layout/header/header";
import { Footer } from "../../components/layout/footer/footer";

@Component({
  selector: 'app-forgot-password',
  imports: [Header, Footer],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss',
})
export class ForgotPassword {

  sendCode() {
    
  }

}
