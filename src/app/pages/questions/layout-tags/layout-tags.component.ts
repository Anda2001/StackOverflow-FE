import {Component, Input, OnInit} from '@angular/core';
import {AppComponent} from "../../../app.component";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Tag_interface} from "../../../../utils/tag_interface";

@Component({
  selector: 'app-layout-tags',
  templateUrl: './layout-tags.component.html',
  styleUrls: ['./layout-tags.component.scss']
})
export class LayoutTagsComponent implements OnInit{
   tags: Tag_interface[]|any;

  constructor(private route: ActivatedRoute, private router: Router, private http:HttpClient) {}

  ngOnInit(): void {
    this.tags = [];
    this.http.get("http://localhost:8080/tags/getAll")
      .subscribe((data: any) => {
        console.log(data);
        this.tags = data;

      }
    );
  }


  handleTagClick(tag: any) {
    console.log("Tag:", tag.title, tag.tagId)
    this.router.navigate(['/questions'], { queryParams: { tag: tag.tagId} });


  }
}
