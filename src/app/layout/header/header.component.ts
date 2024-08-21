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

  navigation = [
    {
      text: "Home",
      icon: "home",
      routerLink: "Home",
      routerLinkActiveOptions: { exact: true },
      class: "relative hidden lg:flex items-center font-medium ",
      activeLinkClass: "active-link",
 
    },
    {
      text: "About us",
      icon: "info",
      routerLink: "about-us",
      class: "relative hidden lg:flex items-center font-medium",
      activeLinkClass: "active-link",
     
    },
    {
      text: "Services",
      icon: "build",
      routerLink: "services",
      class: "relative hidden lg:flex items-center font-medium",
      activeLinkClass: "active-link",
     
    },
    {
      text: "Contact us",
      icon: "contact_mail",
      routerLink: "contact-us",
      class: "relative hidden lg:flex items-center font-medium",
      activeLinkClass: "active-link",
     
    }
  ];
  closeMenu(){
    this.menuOpen =false
  }
}
