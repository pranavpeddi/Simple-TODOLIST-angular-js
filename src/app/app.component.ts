import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  todos:string[]=["eat","sleep"];

  onClick(value:string)
  {
      this.todos.push(value);
  }

  delete(i:number)
  {
    this.todos.splice(i,1);
  }
}
