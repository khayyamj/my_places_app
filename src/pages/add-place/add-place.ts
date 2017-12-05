import { Component } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'page-add-place',
  templateUrl: 'add-place.html',
})
export class AddPlacePage {

  onSubmit(form: NgForm) {
    console.log('form: ', form.value);
  }
}
