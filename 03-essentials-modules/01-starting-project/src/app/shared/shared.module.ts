import { NgModule } from '@angular/core';
import {DatePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {CardComponent} from "./card/card.component";


@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class SharedModule {

}
