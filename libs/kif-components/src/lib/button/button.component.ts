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
  @Input() buttonText!: string;
  ngOnInit() {
    if (!this.buttonText) {
      this.buttonText = 'Button Text';
    }
  }
  @Input() iconPosition = 'left';
  @Input() buttonType = 'primary';
  @Input() size = 'small';

  getButtonClasses() {
    return {
      [`btn-${this.buttonType}`]: true,
      [`btn-${this.size}`]: true,
      [`iconPosition-${this.iconPosition}`]: true,
    };
  }
}
