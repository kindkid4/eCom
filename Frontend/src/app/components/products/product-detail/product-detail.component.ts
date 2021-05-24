import { rendererTypeName } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  galleryOptions! : NgxGalleryOptions[];
  galleryImages! : NgxGalleryImage[];
  @Input() product : any;
  constructor() { }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '60%',
        height: '500px',
        thumbnailsColumns: 3,
        previewZoom:true,
        previewZoomMax:1.5,
        previewZoomMin:1,
        previewFullscreen:true,
        previewInfinityMove:true,
        imageAnimation:NgxGalleryAnimation.Fade,
        previewZoomStep:1,
        previewCloseOnEsc:true
      }


    ];

    this.galleryImages = [
      {
        small: 'https://lcdn.altex.ro/media/catalog/product/2/e/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg',
        medium: 'https://lcdn.altex.ro/media/catalog/product/2/e/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg',
        big: 'https://lcdn.altex.ro/media/catalog/product/2/e/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg'
      },
      {
        small: 'https://lcdn.altex.ro/media/catalog/product/2/e/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg',
        medium: 'https://lcdn.altex.ro/media/catalog/product/2/e/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg',
        big: 'https://lcdn.altex.ro/media/catalog/product/2/e/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg'
      },
      {
        small: 'https://lcdn.altex.ro/media/catalog/product/2/e/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg',
        medium: 'https://lcdn.altex.ro/media/catalog/product/2/e/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg',
        big: 'https://lcdn.altex.ro/media/catalog/product/2/e/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg'
      },
      {
        small: 'https://lcdn.altex.ro/media/catalog/product/2/e/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg',
        medium: 'https://lcdn.altex.ro/media/catalog/product/2/e/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg',
        big: 'https://lcdn.altex.ro/media/catalog/product/2/e/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg'
      },
      {
        small: 'https://lcdn.altex.ro/media/catalog/product/2/e/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg',
        medium: 'https://lcdn.altex.ro/media/catalog/product/2/e/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg',
        big: 'https://lcdn.altex.ro/media/catalog/product/2/e/2e29d0ff1c72a537798ce1cafe6a7579_154230_2.jpg'
      },



    ];
  }
}


