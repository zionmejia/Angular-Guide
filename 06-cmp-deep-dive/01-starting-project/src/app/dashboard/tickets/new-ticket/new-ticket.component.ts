import {AfterViewInit, Component, ElementRef, EventEmitter, input, OnInit, Output, ViewChild} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {FormsModule} from "@angular/forms";
import {ControlComponent} from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent, FormsModule, ControlComponent
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  @Output() public add = new EventEmitter<{ title: string; text: string; }>();
  public enteredTitle = "";
  public enteredRequest = "";


  ngOnInit() {

    console.log('ngOnInit');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('ngAfterContentInit');
    console.log(this.form?.nativeElement);
  }

  onSubmit(): void {
    this.add.emit({title: this.enteredTitle, text: this.enteredRequest});
    this.enteredTitle =  "";
    this.enteredRequest = "";
  }
}
