import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tolerance',
  templateUrl: './tolerance.component.html',
  styleUrls: ['./tolerance.component.css']
})
export class ToleranceComponent implements OnInit {

  @Input('min') toleranceMin: number;
  @Input('max') toleranceMax: number;
  @Input('toleranceEvent') toleranceEvent: Observable<number>;

  toleranceValue = 0;
  toleranceType = 'success';
  toleranceText = '';

  constructor() { }

  ngOnInit(): void {
    this.toleranceEvent.subscribe((value) => this.onValueChange(value));
  }

  onValueChange(value: number) {
    if (value !== null) {
      const difference = this.toleranceMax - this.toleranceMin;
      const halfDifference = difference / 2;
      const median = (this.toleranceMax + this.toleranceMin) / 2;
      const valueOffset = Math.abs(value - median);

      if (valueOffset <= halfDifference) {
        if (valueOffset < (0.8 * halfDifference)) {
          this.toleranceType = 'success';
          this.toleranceValue = 50;
          this.toleranceText = 'Inside optimal values';
        } else {
          this.toleranceType = 'warning';
          this.toleranceValue = 75;
          this.toleranceText = 'Borderline optimal value';
        }
      } else {
        this.toleranceType = 'danger';
        this.toleranceValue = 100;
        this.toleranceText = 'Outside optimal values';
      }
    }
  }
}
