import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist2',
  templateUrl: './artist2.component.html',
  styleUrls: ['./artist2.component.css']
})
export class Artist2Component {
public artists2 = [
  {'grade': 1, 'name': 'geroge', 'place': 'California'},
  {'grade': 2, 'name': 'Victor', 'place': 'texas'},
  {'grade': 3, 'name': 'Jack', 'place':'boston'},
  {'grade': 4, 'name': 'Harry', 'place': 'Washington'}
]

constructor() { }

ngOnInit() : void {

}



}
