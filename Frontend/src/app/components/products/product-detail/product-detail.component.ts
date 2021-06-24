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
        width: '40%',
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
        small: 'https://lcdn.altex.ro/resize/media/catalog/product/U/A/2bd48d28d1c32adea0e55139a4e6434a/UA65AU8000WXZW_007_Dynamic3_Black.jpg',
        medium: 'https://lcdn.altex.ro/resize/media/catalog/product/U/A/2bd48d28d1c32adea0e55139a4e6434a/UA65AU8000WXZW_007_Dynamic3_Black.jpg',
        big: 'https://lcdn.altex.ro/resize/media/catalog/product/U/A/2bd48d28d1c32adea0e55139a4e6434a/UA65AU8000WXZW_007_Dynamic3_Black.jpg'
      },
      {
        small: 'https://lcdn.altex.ro/resize/media/catalog/product/U/A/2bd48d28d1c32adea0e55139a4e6434a/UA65AU8000WXZW_008_Dynamic-Back_Black.jpg',
        medium: 'https://lcdn.altex.ro/resize/media/catalog/product/U/A/2bd48d28d1c32adea0e55139a4e6434a/UA65AU8000WXZW_008_Dynamic-Back_Black.jpg',
        big: 'https://lcdn.altex.ro/resize/media/catalog/product/U/A/2bd48d28d1c32adea0e55139a4e6434a/UA65AU8000WXZW_008_Dynamic-Back_Black.jpg'
      },
      {
        small: 'https://lcdn.altex.ro/resize/media/catalog/product/U/A/2bd48d28d1c32adea0e55139a4e6434a/UA65AU8000WXZW_004_L-side_Black.jpg',
        medium: 'https://lcdn.altex.ro/resize/media/catalog/product/U/A/2bd48d28d1c32adea0e55139a4e6434a/UA65AU8000WXZW_004_L-side_Black.jpg',
        big: 'https://lcdn.altex.ro/resize/media/catalog/product/U/A/2bd48d28d1c32adea0e55139a4e6434a/UA65AU8000WXZW_004_L-side_Black.jpg'
      },

    ];
  }
}


