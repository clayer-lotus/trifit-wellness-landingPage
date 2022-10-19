import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  socialHearing = [
    { id: 1, label: "Google", status: "false" },
    { id: 2, label: "Facebook", status: "false" }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
