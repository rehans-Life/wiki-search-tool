import { Component } from '@angular/core';
import { Page, WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wiki-search-tool';
  pages: Page[] = [];

  // Here whenever an instance of this appComponent is created
  // an instance of the wikipediaService is passed inside
  // of the constructor of this object and assigned to the
  // wikipediaService property
  constructor(private wikipediaService: WikipediaService) {}

  // We sent out the search term as event when we emitted
  // the search event so we know the event object is a string
  onSearch(term: string) {
    // Then we make a get request to the wikimedia api through our
    // service and get an observable which we listen to provide
    // us the response our get request.
    this.wikipediaService
      .search(term)
      .subscribe((pages) => (this.pages = pages));
  }
}
