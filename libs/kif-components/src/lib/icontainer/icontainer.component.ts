import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import * as icons from 'lucide-angular';

@Component({
  selector: 'kif-icontainer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './icontainer.component.html',
  styleUrl: './icontainer.component.scss',
})
export class IcontainerComponent {
  @Input() icon = 'chevron-right';
  @Input() size = 24;
  @Input() strokeWidth = 2;

  get selectedIcon() {
    return (icons as any)[this.icon] || (icons as any)['ChevronRight'];
  }
}
