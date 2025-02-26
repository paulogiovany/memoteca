import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought = {
    content: "I'm learning Angular",
    authorship: "Paulo.dev",
    template: "modelo2"
  }

  constructor() { }

  ngOnInit(): void {
  }

  thoughtLenght(): string {
    return this.thought.content.length >= 256 ? 'pensamento-g' : 'pensamento-p';
  }
}
