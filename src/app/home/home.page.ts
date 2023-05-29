import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items: {[icon: string]: string} = {'javascript': 'JS', 'html5': 'HTML5', 'ionic': 'IONIC', 'amazon': 'AWS'}

  projects: {[title: string]: string} = {'Movie Ticket Booking Website': 'It lets the customer book movie tickets at their convenience and check their tickets on-line. The administrator can update/add/remove the cinemas in accordance with the movie in the theatres.', 'In-Sure': 'A material-designed website to choose an insurance which they need from the various insurance policies available. They can even claim their insurance from the website by providing the basic details and uploading the required documents.', 'Recognition of Human Actions': 'Final year project to recognize human actions using Deep Convolutional Neural Networks on two types of data for human action representation - Depth maps and body postures.'}


  constructor() {}

}
