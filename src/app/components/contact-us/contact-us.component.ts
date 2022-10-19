import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  socialHearing = [
    { id: 1, label: "Google", status: "true" },
    { id: 2, label: "Facebook", status: "false" },
    { id: 3, label: "Drive By", status: "false" },
    { id: 4, label: "Yelp", status: "false" },
    { id: 5, label: "Referral", status: "false" },
    { id: 6, label: "Other", status: "false" }
  ];
  intrestedIn =[
    { id: 1, label: "6 MONTHS", status: "true" },
    { id: 2, label: "8 MONTHS", status: "false" },
    { id: 3, label: "12 MONTHS", status: "false" },
    { id: 4, label: "Free Session", status: "false" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
