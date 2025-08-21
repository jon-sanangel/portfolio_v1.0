import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  developmentView: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  leftClick() {
    let btn = document.getElementById('btn');
    btn!.style.left = '0';
    this.developmentView = true;
  }

  rightClick() {
    let btn = document.getElementById('btn');
    //TO DO - Change the font color
    btn!.style.left = '170px';
    this.developmentView = false;
  }
}
