import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactForm;
  isSubmitted: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      description: [''],
    })
  }

  ngOnInit(): void {
    this.contactForm.valueChanges.subscribe((changes)=> {
      console.log(changes)
    })

    this.contactForm.controls.name.valueChanges.subscribe((changes)=> {
      console.log('Cambios de name', changes)
    })

  }

  submitted(){
    this.isSubmitted = true;
    console.log(this.contactForm)
    console.log(this.contactForm.value)
  }

}
