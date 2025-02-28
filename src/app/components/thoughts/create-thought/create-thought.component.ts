import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css'],
})
export class CreateThoughtComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      content: [],
      authorship: [],
      template: ['modelo1'],
    })
  }

  createThought(): void {
    this.thoughtService.create(this.form.value).subscribe();
    this.router.navigate(['/list-thoughts']);
  }

  cancelCreation(): void {
    this.router.navigate(['/list-thoughts']);
  }
}
