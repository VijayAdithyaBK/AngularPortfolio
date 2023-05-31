import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: { [icon: string]: string } = {
    javascript: 'JS',
    html5: 'HTML5',
    ionic: 'IONIC',
    amazon: 'AWS',
    angular: 'ANGULAR',
    react: 'REACT',
    python: 'PYTHON',
    github: 'GITHUB'
  };

  projects: { [title: string]: { description: string; website: string } } = {
    'Angular Portfolio': {
      description:
        "An elegant and dynamic Angular portfolio website showcasing a creative individual's talent and expertise.",
      website: 'https://vijayadithyabk.github.io/AngularPortfolio/home',
    },
    'Movie Ticket Booking Website': {
      description:
        'It lets the customer book movie tickets at their convenience and check their tickets on-line. The administrator can update/add/remove the cinemas in accordance with the movie in the theatres.',
      website: 'https://example.com/movie-ticket-booking',
    },
    'In-Sure': {
      description:
        'A material-designed website to choose an insurance which they need from the various insurance policies available. They can even claim their insurance from the website by providing the basic details and uploading the required documents.',
      website: 'https://vijayadithyabk.github.io/Insure/',
    },
    'Recognition of Human Actions': {
      description:
        'Final year project to recognize human actions using Deep Convolutional Neural Networks on two types of data for human action representation - Depth maps and body postures.',
      website: 'https://example.com/human-actions',
    },
    'Colors-Palletes': {
      description:
        'Unleash your creativity with our website that generates vibrant color palettes on-the-fly. Explore an endless array of random colors and discover inspiring hex codes for your design projects. Spark your imagination with the Colors-Palletes.',
      website: 'https://vijayadithyabk.github.io/Colors-Palletes/',
    },
    'Weather App': {
      description:
        'A simple weather app built using Angular.',
      website: 'https://github.com/VijayAdithyaBK/WeatherApp',
    },
    'Daily Python': {
      description:
        'A repo with multiple pyhton projects.',
      website: 'https://github.com/VijayAdithyaBK/Daily-Python',
    },
    'Voice Notes': {
      description:
        'Using Python Speech Recognition write down notes by dictating.',
      website: 'https://github.com/VijayAdithyaBK/voice_notes',
    },
    'Speech Assistant': {
      description:
        'A simple python based Speech Assistant.',
      website: 'https://github.com/VijayAdithyaBK/speech_assistant',
    },
  };

  constructor() {}
}
