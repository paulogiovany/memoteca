import { ThoughtService } from './../thought.service';
import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css'],
})
export class EditThoughtComponent implements OnInit {
  thought: Thought = {
    id: 0,
    content: '',
    authorship: '',
    template: 'modelo1',
  };

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.thoughtService.getById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought;
    });
  }

  editThought() {
    this.thoughtService.update(this.thought).subscribe(() => {
      this.router.navigate(['/list-thoughts']);
    });
  }

  cancelEdition() {
    this.router.navigate(['/list-thoughts']);
  }
}
