import { Component, OnInit,ElementRef, ViewChild } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { CartComponent } from './component/cart/cart.component';  
import { HomeComponent } from './component/home/home.component'; 
import { ApiService } from './service/api.service'; 
import { FormsModule } from '@angular/forms';  
 


@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [ FormsModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})       

export class AppComponent {
  
  title = 'MyStore';

  
}
