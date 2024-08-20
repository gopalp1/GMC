import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 0 ) {
      header?.classList.add('header-scroll');
    } else {
      header?.classList.remove('header-scroll');
    }
  }
}
