import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tolerance-inline',
  templateUrl: './tolerance-inline.component.html',
  styleUrls: ['./tolerance-inline.component.css']
})
export class ToleranceInlineComponent implements OnInit {

  @Input('min') toleranceMin: number;
  @Input('max') toleranceMax: number;
  @Input('value') value: number;

  toleranceText: string;
  toleranceColor: string;
  constructor() { }

  ngOnInit(): void {
    this.getTolerance();
  }

  getTolerance(): void {
    if (this.value !== null) {
      const difference = this.toleranceMax - this.toleranceMin;
      const halfDifference = difference / 2;
      const median = (this.toleranceMax + this.toleranceMin) / 2;
      const valueOffset = Math.abs(this.value - median);

      if (valueOffset <= halfDifference) {
        if (valueOffset < (0.8 * halfDifference)) {
          this.toleranceText = '✔ Inside optimal values';
        } else {
          this.toleranceText = '✔ Borderline optimal value';
        }
      } else {
        this.toleranceText = '❌ Outside optimal values';
      }
    }
  }

}
