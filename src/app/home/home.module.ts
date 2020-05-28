import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DtButtonModule } from '@dynatrace/barista-components/button';
import { DtCardModule } from "@dynatrace/barista-components/card";
import { DtInputModule } from "@dynatrace/barista-components/input";
import { DtTableModule } from "@dynatrace/barista-components/table";
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserAnimationsModule, CommonModule, SharedModule, HomeRoutingModule, DtButtonModule, DtCardModule, DtTableModule, DtInputModule],
})
export class HomeModule {
}
