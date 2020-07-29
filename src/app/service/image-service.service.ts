import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  public currentImage: Observable<Response> ;

  constructor(private http: HttpClient) {}


  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post(`http://localhost:3000/file_upload`, formData);
  }
}
