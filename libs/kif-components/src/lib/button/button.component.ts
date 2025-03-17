import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IcontainerComponent } from '../icontainer/icontainer.component';

@Component({
  selector: 'kif-button',
  standalone: true,
  imports: [CommonModule, IcontainerComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonText = 'Button';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() buttonType = 'primary';
  @Input() size = 'small';

  // Inputs para configurar el icono
  @Input() icon?: string;
  @Input() iconSize = 24;
  @Input() iconStrokeWidth = 2;

  getButtonClasses() {
    return {
      [`btn-${this.buttonType}`]: true,
      [`btn-${this.size}`]: true,
      [`iconPosition-${this.iconPosition}`]: true,
    };
  }
}
