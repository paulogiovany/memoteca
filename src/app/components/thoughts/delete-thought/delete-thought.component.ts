import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-thought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css'],
})
export class DeleteThoughtComponent implements OnInit {
  thought: Thought = {
    id: 0,
    content: '',
    authorship: '',
    template: 'modelo1',
    favorite: false
  };

  constructor(
    private thoughtService: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("trying to get: ", id)
    this.thoughtService.getById(parseInt(id!)).subscribe((thought) => {
      this.thought = this.thought;
    });
  }

  deleteThought(): void {
    if (!this.thought.id) return;

    this.thoughtService.delete(this.thought.id).subscribe(() => {
      this.router.navigate(['/list-thoughts']);
    });
  }

  cancel(): void {
    this.router.navigate(['/list-thoughts']);
  }
}
