import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  darkMode: boolean = true;
  logoSrc: string = "../../assets/images/JSALogoWhite.png";
  
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  toggleDarkMode() {
    if(this.darkMode == false) {
      this.document.body.classList.add('dark');
      this.darkMode = true;
      return;
    }
    this.darkMode = false;
    this.document.body.classList.remove('dark');
  }

}
