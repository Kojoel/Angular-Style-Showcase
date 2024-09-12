import { Component } from '@angular/core';
import { ReasonService } from '../../services/reason.service';
import { Observable, of } from 'rxjs';
import { Reason } from '../../model/reason.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-reasons',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './reasons.component.html',
  styleUrl: './reasons.component.scss'
})
export class ReasonsComponent {

  reasonItems$: Observable<Reason[]> | undefined;

  constructor(public reasons: ReasonService) {}

  ngOnInit() {
    this.reasons.getReasons().subscribe(item => this.reasonItems$ = of(item))
  }
  
}
