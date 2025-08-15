import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private titleService: Title, private router: Router) {
    this.titleService.setTitle("Trotman Clothing")
  }

  BtnClick() {
    this.router.navigate(['/shop']);
  }
}
