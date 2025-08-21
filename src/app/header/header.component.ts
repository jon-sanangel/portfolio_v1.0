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
    const altSection = document.querySelectorAll('.alt-section');
    const boxContent = document.querySelectorAll('.box-content');
    
    if(this.darkMode == false) {
      this.document.body.classList.add('dark');
      altSection.forEach(el => {
        el.classList.add('dark-secondary');
        el.classList.remove('light-secondary');
      });
      boxContent.forEach(el => {
        el.classList.add('dark-box');
        el.classList.remove('light-box');
      });
      this.darkMode = true;
      return;
    }
    this.darkMode = false;
    this.document.body.classList.remove('dark');
    altSection.forEach(el => {
      el.classList.remove('dark-secondary');
      el.classList.add('light-secondary');
    });
    boxContent.forEach(el => {
      el.classList.remove('dark-box');
      el.classList.add('light-box');
    })
  }

}
