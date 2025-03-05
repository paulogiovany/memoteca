import { ThoughtService } from './../thought.service';
import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css'],
})
export class EditThoughtComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.thoughtService.getById(parseInt(id!)).subscribe((thought) => {
      this.form = this.formBuilder.group({
        id: [thought.id],
        content: [
          thought.content,
          Validators.compose([
            Validators.required,
            Validators.pattern(/.*\S.*/),
          ]),
        ],
        authorship: [
          thought.authorship,
          Validators.compose([
            Validators.required,
            Validators.pattern(/^[\p{Ll}\s]+$/u),
            Validators.minLength(3),
          ]),
        ],
        template: [thought.template],
      });
    });
  }

  editThought() {
    console.log(this.form)
    if (this.form.valid) {
      this.thoughtService.update(this.form.value).subscribe(() => {
        this.router.navigate(['/list-thoughts']);
      });
    }
  }

  cancelEdition() {
    this.router.navigate(['/list-thoughts']);
  }
}
