import { Component } from '@angular/core';
import { HeroPageComponent } from '../hero-page/hero-page.component';
import { ReasonsComponent } from '../reasons/reasons.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeroPageComponent, ReasonsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  constructor(public theme: ThemeService) {}
}
