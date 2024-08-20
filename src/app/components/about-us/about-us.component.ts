import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {

  about:any=[
    {
      point:'GMC automation and solutions is a leading provider of repair and maintenance services for industrial Electrical & Electronics.'
    },
    {
      point:'Our company specializes in sales, service, and repairing of industrial automation products, servo drives/servo motors, HMI/PLC controllers, and VFD/Induction motors and Electrical services.'
    },
    {
      point:'At GMC Automation and solutions, we are committed to providing high-quality services to our customers and our team consists of experienced professionals ensuring customer satisfaction.'
    },
    {
      point:'We believe that industrial automation products service and repairing can be of great benefit to your organization and we would like to explore the possibility of working together. We offer competitive pricing and flexible options to meet your specific needs.'
    },
    {
      point:'We are providing the service in a wide range of industries: Plastic injection molding machines, Plastic blowing machines, textile, woodcutting, paper, automobile printing, and CNC machines.'
    },
  ]
}
