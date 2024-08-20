import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  img: any = '../../../assets/images/map.png';

  offer = [
    {
      img: '../../../assets/images/img1.png',
      title: 'Component level repair',
      subtitle1: 'Cost effective repair for end user',
    },
    {
      img: '../../../assets/images/img1.png',
      title: 'QualityRepair with warranty',
      subtitle1: 'Before Repair After repair',
    },
    {
      img: '../../../assets/images/img1.png',
      title: 'QuickSupport',
      subtitle1: 'Reduced turn-around time',
    },
  ];
  leading: any = [
    {
      img: '../../../assets/images/leading/img1.png',
    },
    {
      img:'../../../assets/images/leading/img2.png' 
     }, {
      img:'../../../assets/images/leading/img3.png' 
     }, {
      img:'../../../assets/images/leading/img4.png' 
     }, {
      img:'../../../assets/images/leading/img5.png' 
     },
     {
      img:'../../../assets/images/leading/img6.png' 
     }, {
      img:'../../../assets/images/leading/img7.png' 
     },
     {
      img:'../../../assets/images/leading/img8.png' 
     }, {
      img:'../../../assets/images/leading/img9.png' 
     },
  ];
  ngOnInit() {
    AOS.init(
      {
        offset: 120, // Offset from the original trigger point
        duration: 3000, // Animation duration
        easing: 'ease', // Easing function
      }
    );
  }
}
