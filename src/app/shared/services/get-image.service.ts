import { Injectable } from '@angular/core';

@Injectable()
export class GetImageService {
  constructor() {}

  getImage(nameImage: string): string {
    return nameImage != null
      ? `https://image.tmdb.org/t/p/w500${nameImage}`
      : '/assets/500x750.png';
  }
}
