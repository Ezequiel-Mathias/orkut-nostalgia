import { Component } from '@angular/core';
import { Header } from "../../components/layout/header/header";
import { Footer } from "../../components/layout/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
