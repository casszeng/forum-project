import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';

  list_room = [
    {'post':"Fist_Post"}
  ];

  contents = ""

  post(contents: any) {
    this.list_room.push({'post':contents})
    contents = ""
  }
}
