import {Component, EventEmitter, input, model, output} from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  public size = model.required<{ width: string; height: string }>();
  public sizeChange =   output<{ width: string; height: string }>();

  onReset() {
    this.size.set({
      width: '200',
      height: '100'
    });
  }
}
