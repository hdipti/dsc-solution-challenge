import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
  
  imports: [
    CommonModule,
    TranslateModule,    
    FormsModule,
    ReactiveFormsModule,
    RegisterRoutingModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
