import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteTeste } from "./components/componente-teste/componente-teste";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponenteTeste],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  protected readonly title = signal('orkut-nostalgia');

  teste: boolean = true;

}
