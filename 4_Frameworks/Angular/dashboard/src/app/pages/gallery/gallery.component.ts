import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Image {
  id: number;
  src: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images: Image[] = [];
  selectedImage: number = 0;
  selectedPreviewImage: number = 1;
  playButton: boolean = true;
  intervalId: number = 0;
  scaleFactor: number = 1.0;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('assets/images.mock.json').subscribe((data) => {
      this.images = data as Image[];
    });
  }

  selectImage(image: Image): void {
    this.selectedImage = image.id;
    this.scaleFactor = 1.0;
  }

  nextImage(): void {
    this.selectedImage++;
    this.scaleFactor = 1.0;

    if (this.selectedImage >= this.images.length) this.selectedImage = 0;

    this.selectedPreviewImage = this.selectedImage;
  }

  previousImage(): void {
    this.selectedImage--;
    this.scaleFactor = 1.0;

    if (this.selectedImage < 0) this.selectedImage = this.images.length - 1;

    this.selectedPreviewImage = this.selectedImage;
  }

  nextPreviewImage(): void {
    this.selectedPreviewImage++;

    if (this.selectedPreviewImage > this.images.length - 2)
      this.selectedPreviewImage = this.images.length - 2;
  }

  previousPreviewImage(): void {
    this.selectedPreviewImage--;

    if (this.selectedPreviewImage < 1) this.selectedPreviewImage = 1;
  }

  play(): void {
    if (this.playButton) {
      // Added to improve feedback to the user
      this.nextImage();

      // play gallery
      this.intervalId = window.setInterval(() => {
        this.nextImage();
      }, 2000);
    } else {
      // stop gallery
      if (this.intervalId) window.clearInterval(this.intervalId);
    }

    this.playButton = !this.playButton;
  }

  sliceFirstRange(id: number) {
    if (id < 2) return 0;
    else {
      if (id === this.images.length - 1) return id - 2;
      else return id - 1;
    }
  }

  sliceEndRange(id: number) {
    if (id > this.images.length - 2) return this.images.length;
    else {
      if (id === 0) return id + 3;
      else return id + 2;
    }
  }

  scaleIn(): void {
    this.scaleFactor += 0.1;
  }

  scaleOut(): void {
    this.scaleFactor -= 0.1;
  }
}
