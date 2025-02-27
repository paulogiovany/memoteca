import { Component, OnInit } from '@angular/core';
import { Thought } from '../thought/thought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  thoughtsList: Thought[] = [];
  constructor(private thoughtSevice: ThoughtService) { }

  ngOnInit(): void {
    this.thoughtSevice.list().subscribe((thoughtsList) => {
      this.thoughtsList = thoughtsList
    })
  }
}
