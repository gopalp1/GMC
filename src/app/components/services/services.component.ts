import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  services = [
    {
      point: 'Supply of brand new Servo Motors and Servo Drives for different brands.'
    },
    {
      point: 'Offers Reconditioned Servo Motors, Servo Drives, HMIs with warranty.'
    },
    {
      point: 'Diagnosis, Repair, Reconditioning and Upgrading of AC Servo Drives.'
    },
    {
      point: 'Troubleshooting, Repair, Rewinding and Calibration of AC Servo Motors.'
    },
    {
      point: 'Maintenance and repair of Variable Frequency Drives (VFDs).'
    },
    {
      point: 'Inspection, Repair and Replacement of Resolvers and Encoders.'
    },
    {
      point: 'Identification and repair of faults at the circuit board level for motherboards.'
    },
    {
      point: 'Servicing, Troubleshooting and Maintenance of Industrial PLCs and HMIs.'
    },
    {
      point: 'Preventive maintenance of servo drives and motors.'
    }
  ];
  
}
