import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {
  constructor(private metaService: Meta, private titleService: Title) { }
  
  ngOnInit(): void {
    
    this.titleService.setTitle('About us');

    this.metaService.updateTag({ name: 'description', content: 'This is the new description for the page' });
    this.metaService.updateTag({ name: 'keywords', content: 'angular, meta tags, dynamic title, seo' });
    this.metaService.updateTag({ name: 'news_keywords', content: 'angular, meta tags, dynamic title, seo' });

    this.metaService.updateTag({ property: 'og:title', content: 'New Open Graph Title' });
    this.metaService.updateTag({ property: 'og:description', content: 'This is the description for Open Graph' });
    this.metaService.updateTag({ property: 'canonical', content: 'canonical set' });

  }
}
