import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { ContactFormService } from 'src/app/services/contact-form.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  socialHearing = [
    { id: 1, label: "Google", status: true},
    { id: 2, label: "Facebook", status: false },
    { id: 3, label: "Drive By", status: false },
    { id: 4, label: "Yelp", status: false },
    { id: 5, label: "Referral", status: false },
    { id: 6, label: "Other", status: false }
  ];

  selectedSociaHearing: string = '';
  selectChangeHandler1(event: any) {
    this.selectedSociaHearing = event.target.value;
  }

  constructor(private spinner: NgxSpinnerService, private http: HttpClient, private _contactForm: ContactFormService, private _toast: NgToastService) {
   
  }
  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
  this.spinner.hide();
    }, 2000);
  }

  tryFreeSessionData(form: NgForm) {
    console.log(form.value);
    console.log(this.selectedSociaHearing);
    if (this.selectedSociaHearing == '') {
      this.selectedSociaHearing = 'Google';
    }
    this.spinner.show();

    this._contactForm.sendtryfreesessiondata(form.value.first_name, form.value.last_name, form.value.email, form.value.phone, this.selectedSociaHearing, form.value.comments).subscribe(
      res => {
        setTimeout(() => {
         
          this.spinner.hide();
        }, 1000);
        this._toast.success({ detail: "SUCCESS", summary: 'Form successfully submitted', position: 'br' });
        setTimeout(function () {
          window.location.href = '/thank-you'
        }, 1000);

      },
      err => {
        this._toast.warning({ detail: " FAILED", summary: 'Please try after sometime', position: 'br' });

      }, () => console.log("QUOTE FORM SUMBITTED SUCCESSFULLY"))
  }


}
