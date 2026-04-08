import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Missionlist } from './missionlist/missionlist';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Missionlist], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'studentid-lab-test2-comp3133';
}