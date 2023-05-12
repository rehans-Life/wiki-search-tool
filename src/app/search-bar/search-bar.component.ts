import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  // Creating a custom event on our component like the click,
  // submit and input event which the parent can listen to
  // And by using class generics we are stating that as we
  // emit this event we are going to send out some information
  // which is a string.
  @Output() search = new EventEmitter<string>();

  term = '';

  onInput(event: any) {
    this.term = event.target.value || '';
  }

  onSubmit(event: any) {
    // This prevents the browser from reloading the page.
    event.preventDefault();
    // The search evnet is triggered and search term is being sent out.
    this.search.emit(this.term);
  }
}
