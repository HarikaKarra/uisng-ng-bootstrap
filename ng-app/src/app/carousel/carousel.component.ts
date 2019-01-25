import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
slides: {image: string }[] = [];
activeSlideIndex = 0;

  constructor() {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }
  }
addSlide(): void {
this.slides.push({
  image: 'assets/images/1.jpg/${this.slides.length % 8 + 1}.jpg'
});
}
removeSlide(index?: number): void {
  const toRemove = index ? index : this.activeSlideIndex;
  this.slides.splice(toRemove, 1);
}

}
