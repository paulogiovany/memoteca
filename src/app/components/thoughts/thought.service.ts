import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Thought } from './thought/thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API_THOUGHTS_URL = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) {}

  list(page: number, filter: string, favorites: boolean): Observable<Thought[]> {
    const pageSize = 6;
    let params = new HttpParams().set('_page', page).set('_limit', pageSize);

    if (filter.trim().length > 2) {
      params = params.set("q", filter)
    }

    if(favorites) {
      params = params.set("favorite", true);
    }
    return this.http.get<Thought[]>(this.API_THOUGHTS_URL, { params });
  }

  create(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API_THOUGHTS_URL, thought);
  }

  update(thought: Thought): Observable<Thought> {
    const editionURL = `${this.API_THOUGHTS_URL}/${thought.id}`;
    return this.http.put<Thought>(editionURL, thought);
  }

  toggleFavorite(thought: Thought): Observable<Thought> {
    thought.favorite = !thought.favorite;
    return this.update(thought);
  }

  delete(id: number): Observable<Thought> {
    const deletionURL = `${this.API_THOUGHTS_URL}/${id}`;
    return this.http.delete<Thought>(deletionURL);
  }

  getById(id: number): Observable<Thought> {
    const retrievalURL = `${this.API_THOUGHTS_URL}/${id}`;
    return this.http.get<Thought>(retrievalURL);
  }
}
