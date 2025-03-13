import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../libs/kif-components/src/lib/button/button.component';
@Component({
  selector: 'kipit-mrna-root',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-app-test';
}
