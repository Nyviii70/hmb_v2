import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reading } from './reading';
import { Observable } from 'rxjs';

@Injectable()
export class ReadingsService {

  private apiUrl = 'http://localhost:3000/readings';

  constructor(private http: HttpClient) {}

  getReadings(): Observable<Reading[]> {
    return this.http.get<Reading[]>(this.apiUrl);
  }

  createReading(reading: Reading): Observable<Reading> {
    return this.http.post<Reading>(this.apiUrl, reading);
  }

  updateReading(id: number, updatedReading: Reading): Observable<Reading> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Reading>(url, updatedReading);
  }

  deleteReading(id: number): Observable<Reading> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Reading>(url);
  }
}
