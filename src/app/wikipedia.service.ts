import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Page {
  pageid: number;
  title: string;
  snippet: string;
  wordcount: number;
}

interface WikipediaResponse {
  query: {
    search: Page[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  url = 'https://en.wikipedia.org/w/api.php';
  // We need an instance of the HttpClient class inside of our
  // WikipediaService so either we can create an instance of it
  // or we can inject it as a dependency using our constructor.
  // Second way is better.
  constructor(private http: HttpClient) {}

  search(term: string) {
    // The http get method returns an observable to which we can
    // subscribe too.
    return this.http
      .get<WikipediaResponse>(this.url, {
        // These key value pairs inside of the params property will
        // automatically be added as params in the url.
        params: {
          action: 'query',
          list: 'search',
          srsearch: term,
          format: 'json',
          utf8: '1',
          origin: '*',
        },
      })
      .pipe(map((value) => value.query.search));
  }
}
