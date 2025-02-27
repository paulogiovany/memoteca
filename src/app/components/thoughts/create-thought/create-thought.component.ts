import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thought: Thought = {
    id: 1,
    content: 'Aprendendo Angular',
    authorship: 'Dev',
    template:'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  createThought(): void {
    alert('Creating thought')
  }

  cancelCreation(): void {

  }
}
