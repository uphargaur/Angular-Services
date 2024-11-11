import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styles: `.ram{
    color: blue;
}`
})
export class StudentComponent {
  showAlert(){
    alert("Thanks for clicking")
  }
}
