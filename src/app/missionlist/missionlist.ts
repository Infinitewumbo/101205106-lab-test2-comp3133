import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missionlist.html',
  styleUrl: './missionlist.css'
})
export class Missionlist implements OnInit {
  missions = signal<Mission[]>([]);
  searchYear = signal<string>('');

  filteredMissions = computed(() => {
    const year = this.searchYear();
    if (!year) return this.missions();
    return this.missions().filter(m => m.launch_year.includes(year));
  });

  constructor(private spacexService: SpacexapiService, private router: Router) {}

  ngOnInit(): void {
    this.spacexService.getMissions().subscribe((data) => {
      this.missions.set(data);
    });
  }

  updateFilter(event: any) {
    this.searchYear.set(event.target.value);
  }

  selectMission(flightNumber: number) {
    this.router.navigate(['/mission', flightNumber]);
  }
}