import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { homeLocal } from '../../local/home';
import { GlobalService } from 'src/app/global.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lang = this._GlobalService.lang.getValue();
  isLoading = false;

  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  homeData: any = {};

  slider = this._HomeService.home.slider;
  topics = this._HomeService.home.topics;
  programs = this._HomeService.home.educationPrograms.slice(0,3);
  homeLocal = homeLocal;

  constructor(
    private _HomeService: HomeService,
    private _GlobalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this._GlobalService.lang.subscribe({
      next: () => {
        this.lang = this._GlobalService.lang.getValue();
      },
    });

    this._HomeService.getHomeData().subscribe({
      next: (data) => {
        this.homeData = data;
        this.isLoading = false;
      },
    });
  }

  ngAfterViewInit(): void {
    const videoElement = this.videoPlayer.nativeElement;

    // Ensure video loads properly on init
    if (videoElement) {
      videoElement.muted = true; // Ensure autoplay works with mute
      videoElement.play().catch((error: any) => {
        console.warn('Autoplay prevented:', error);
      });
    }
  }

  onVideoLoaded(): void {
    console.log('Video loaded successfully');
  }

  onVideoError(): void {
    console.error('Video failed to load');
  }
}