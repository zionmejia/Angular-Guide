import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent, FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit , AfterViewInit {
@ViewChild('form') private form? : ElementRef<HTMLFormElement>;

@Output() public add = new EventEmitter<{ title: string; text: ticketText;}>();


  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit() {
    console.log('ngAfterContentInit');
    console.log.(this.form?.nativeElement);
  }

  onSubmit (title:string, ticketText:string):void {
this.add.emit({ title : title, text : ticketText });

    this.form?.nativeElement.reset();
  }
}
