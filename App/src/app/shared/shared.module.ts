import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, LoadingSpinnerComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [NavbarComponent, FooterComponent, LoadingSpinnerComponent]
})
export class SharedModule {}
