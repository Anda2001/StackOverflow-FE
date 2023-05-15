import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-layout-tags',
  templateUrl: './layout-tags.component.html',
  styleUrls: ['./layout-tags.component.scss']
})
export class LayoutTagsComponent implements OnInit{

  constructor() {}

  tags = AppComponent.getUniqueTags();

  ngOnInit(): void {
    console.log(this.tags);
  }



}
