import { Component } from '@angular/core';
import { Header } from "../../components/layout/header/header";

@Component({
  selector: 'app-profile',
  imports: [Header],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {}
