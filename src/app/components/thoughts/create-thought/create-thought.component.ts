import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  thought: Thought = {
    content: '',
    authorship: '',
    template: 'modelo1',
  };

  constructor(private thoughtService: ThoughtService, private router: Router) {}

  ngOnInit(): void {}

  createThought(): void {
    this.thoughtService.create(this.thought).subscribe();
    this.router.navigate(['/list-thoughts'])
  }

  cancelCreation(): void {
    this.router.navigate(['/list-thoughts'])
  }
}
