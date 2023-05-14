import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent {
    constructor() { }

    ngOnInit(): void {
      console.log("@@@@@@@@")
      console.log(AppComponent.getCurrentUser())
    }

}
