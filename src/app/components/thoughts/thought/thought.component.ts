import { Component, Input, OnInit } from '@angular/core';
import { Thought } from './thought';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought: Thought = {
    id: 0,
    content: "Content example",
    authorship: "Author example",
    template: "modelo3"
  }

  constructor() { }

  ngOnInit(): void {
  }

  thoughtLenght(): string {
    return this.thought.content.length >= 256 ? 'pensamento-g' : 'pensamento-p';
  }
}
