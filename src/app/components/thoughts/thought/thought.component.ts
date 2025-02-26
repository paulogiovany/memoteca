import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thuoght = {
    conteudo: "I'm learning Angular",
    autoria: "Paulo.dev",
    modelo: "modelo2"
  }

  constructor() { }

  ngOnInit(): void {
  }

  thoughtLenght(): string {
    return this.thuoght.conteudo.length >= 256 ? 'pensamento-g' : 'pensamento-p';
  }
}
