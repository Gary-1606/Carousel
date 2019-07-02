import { Component, OnInit, HostBinding } from '@angular/core';
import { CarouselService } from '../services/carousel.service';
import { element } from 'protractor';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  carouselimages: any = [];
  @HostBinding('class') classes = 'wrapper px-2 px-md-3 py-4';

  /**
   * randomising banner
   */
  bigimages = [0, 1, 2, 3, 4, 5, 6].map(() => `https://picsum.photos/900/450?random&t=${Math.random()}`);
  smallimages = [6, 5, 4, 3, 2, 1, 0].map(() => `https://picsum.photos/424/306?random&t=${Math.random()}`);

constructor(private _carouselService: CarouselService) { }

ngOnInit() {
    this._carouselService.getCarouselImages()
        .subscribe(data => {
          this.carouselimages = data;
        });
  }
}
