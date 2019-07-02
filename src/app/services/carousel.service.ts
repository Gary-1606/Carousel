import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CarouselImages } from '../models/carouselimages';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http: HttpClient ) { }
  // http response as Observable
  getCarouselImages(): Observable<CarouselImages[]> {
    return this.http.get<CarouselImages[]>('./../../assets/data/banner.json');
  }
}
