import { Component} from '@angular/core';



@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent {

  movieName: String | undefined;
  selectedDate: Date | undefined;
  selectedTime: String | undefined;


  bookTicket(){
    console.log('Movie Name', this.movieName);
    console.log('Movie Date', this.selectedDate);
    console.log('Movie Time', this.selectedTime);
    alert("Ticket Booked");
  }


  
 
    }


