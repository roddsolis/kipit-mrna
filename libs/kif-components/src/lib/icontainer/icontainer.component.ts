import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'kif-icontainer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './icontainer.component.html',
  styleUrl: './icontainer.component.css',
})
export class IcontainerComponent {
  readonly ChevronRight = ChevronRight;
}
