import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface NewsInterface {
  title: string;
  description: string;
  text: string;
  imgUrl: string;
}
@Injectable({
  providedIn: 'root',
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<NewsInterface[]>('../../assets/texts/news.json');
  }

}
