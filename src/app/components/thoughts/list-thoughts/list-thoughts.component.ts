import { ThoughtService } from './../thought.service';
import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent implements OnInit {
  thoughtsList: Thought[] = [];
  currentPage: number = 1;
  isThereMoreThoughts: boolean = true;
  filter: string = '';
  favorites: boolean = false;
  constructor(private thoughtSevice: ThoughtService) {}

  ngOnInit(): void {
    this.thoughtSevice
      .list(this.currentPage, this.filter, this.favorites)
      .subscribe((thoughtsList) => {
        this.thoughtsList = thoughtsList;
      });
  }

  loadMoreThoughts() {
    this.thoughtSevice
      .list(++this.currentPage, this.filter, this.favorites)
      .subscribe((thoughtsList) => {
        this.thoughtsList.push(...thoughtsList);
        if (!thoughtsList.length) {
          this.isThereMoreThoughts = false;
        }
      });
  }

  searchThought() {
    this.currentPage = 1;
    this.isThereMoreThoughts = true;
    this.thoughtSevice
      .list(this.currentPage, this.filter, this.favorites)
      .subscribe((thoughtsList) => {
        this.thoughtsList = thoughtsList;
      });
  }

  listFavorites() {
    this.isThereMoreThoughts = true;
    this.currentPage = 1;
    this.favorites = true;
    this.thoughtSevice
      .list(this.currentPage, this.filter, this.favorites)
      .subscribe((thoughts: Thought[]) => {
        this.thoughtsList = thoughts;
      });
  }
}
