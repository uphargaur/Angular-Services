import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { StudentComponent } from "./student/student.component";
import { MyServiceService } from "./Service/my-service.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, StudentComponent], // Ensure HttpClientModule is here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Uphar Gaur';
  value: number = 0;

  constructor(private _myServiceService: MyServiceService) { }

  increment() {
    this.value = this.value + 1;
  }

  decrement() {
    this.value = this.value - 1;
  }

  onButtonClick() {
    this._myServiceService.fetchData().subscribe(data => {
      const restructuredData = this._myServiceService.restructureData(data);
      console.log(restructuredData);
      this._myServiceService.downloadJson(restructuredData); // Download restructured data if needed
    });
  }
}
