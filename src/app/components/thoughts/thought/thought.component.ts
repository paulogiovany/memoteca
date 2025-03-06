import { Component, Input, OnInit } from '@angular/core';
import { Thought } from './thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css'],
})
export class ThoughtComponent implements OnInit {
  @Input() thought: Thought = {
    id: 0,
    content: 'Content example',
    authorship: 'Author example',
    template: 'modelo3',
    favorite: false,
  };

  @Input() favoritesList: Thought[] = [];

  constructor(private thoughtService: ThoughtService) {}

  ngOnInit(): void {}

  thoughtLenght(): string {
    return this.thought.content.length >= 256 ? 'pensamento-g' : 'pensamento-p';
  }

  getFavoriteState(): string {
    return this.thought.favorite ? 'active' : 'inactive';
  }

  toggleFavorite(): void {
    this.thoughtService.toggleFavorite(this.thought).subscribe(() => {
      this.favoritesList.splice(this.favoritesList.indexOf(this.thought), 1);
    });
  }
}
