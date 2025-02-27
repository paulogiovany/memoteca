import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Thought } from './thought/thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API_THOUGHTS_URL = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) {}

  list(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API_THOUGHTS_URL)
  }

  create(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API_THOUGHTS_URL, thought)
  }

}
