import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-little-lane-header',
  templateUrl: './little-lane-header.component.html',
  styleUrls: ['./little-lane-header.component.css']
})

export class LittleLaneHeaderComponent {
  @Input() title = 'Little Lane';
  @Input() subtitle = 'Coffee Company';

  constructor() { }
}
