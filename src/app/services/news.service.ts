import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
export interface NewsInterface {
  titleEn: string;
  titleEs: string;
  contentEs: string;
  contentEn: string;
  imgUrl: string;
  sliderImageUrl: string,
  publishDate: Date;
  id: number;
  url: string;
}
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private supabase: SupabaseClient;

  constructor(private http: HttpClient) {
    this.supabase = createClient(environment.supaUrl, environment.supaKey);
  }

  setToInterface(item: any): NewsInterface {
    return {
      contentEn: item.content_en,
      contentEs: item.content_es,
      id: item.id,
      imgUrl: item.image_url,
      publishDate: item.publish_date,
      titleEn: item.title_en,
      titleEs: item.title_es,
      sliderImageUrl: item.slider_image_url,
      url: item.url
    };
  }

  async getNews() {
    const result = await this.supabase.from('news').select();
    return <NewsInterface[]>result.data?.map(this.setToInterface);
  }

  async getNewsByUrl(url: string) {
    const result = await this.supabase.from('news').select().eq('url', url);
    return <NewsInterface>this.setToInterface(result.data![0]);
  }
}
