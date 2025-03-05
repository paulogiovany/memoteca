import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';
import { ThoughtService } from '../thought.service';

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
  constructor(private thoughtSevice: ThoughtService) {}

  ngOnInit(): void {
    this.thoughtSevice
      .list(this.currentPage, this.filter)
      .subscribe((thoughtsList) => {
        this.thoughtsList = thoughtsList;
      });
  }

  loadMoreThoughts() {
    this.thoughtSevice
      .list(++this.currentPage, this.filter)
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
      .list(this.currentPage, this.filter)
      .subscribe((thoughtsList) => {
        this.thoughtsList = thoughtsList;
      });
  }
}
