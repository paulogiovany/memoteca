import { ThoughtService } from './../thought.service';
import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent implements OnInit {
  thoughtsList: Thought[] = [];
  favoritesList: Thought[] = [];
  currentPage: number = 1;
  isThereMoreThoughts: boolean = true;
  filter: string = '';
  favorites: boolean = false;
  title: string = 'Meu Mural';

  constructor(private thoughtSevice: ThoughtService, private router: Router) {}

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

  reloadComponent() {
    this.favorites = false;
    this.currentPage = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  listFavorites() {
    this.title = 'Meus favoritos';
    this.isThereMoreThoughts = true;
    this.currentPage = 1;
    this.favorites = true;
    this.thoughtSevice
      .list(this.currentPage, this.filter, this.favorites)
      .subscribe((favoriteThoughtsList: Thought[]) => {
        this.thoughtsList = favoriteThoughtsList;
        this.favoritesList = favoriteThoughtsList;
      });
  }
}
