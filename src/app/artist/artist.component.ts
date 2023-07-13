import { Component} from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
public artists = [

    {'grade' :1, 'name': 'Pranav', 'country': 'America'},
    {'grade': 2, 'name': 'David', 'country': 'Australia'},
    {'grade' :3, 'name': "Nikitha", 'country': 'France'},
    {'grade' :4, 'name': 'Jacqline', 'country': 'New york'},
    {'grade' :5, 'name': 'pallavi', 'country': 'India'}
]

  constructor() { }
  ngOnInit() : void {

  }
}
