import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})
export class ListThoughtsComponent implements OnInit {

  thoughtsList = [
  {
    conteudo: "There's some thought example",
    autoria: "Paulo.dev",
    modelo: "modelo1"
  },
  {
    conteudo: "There's a second thought example",
    autoria: "Paulo.dev",
    modelo: "modelo2"
  },
  {
    conteudo: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum explicabo asperiores sapiente nobis, voluptatibus illum obcaecati fugit perspiciatis eaque pariatur natus ab labore dicta cumque beatae hic neque modi fuga.Cumque facilis, debitis dolores iure velit quo fuga quibusdam amet minus asperiores veritatis eveniet ipsam possimus, earum ullam provident necessitatibus id non quae autem. Iste doloremque dignissimos deleniti hic! Reiciendis.",
    autoria: "Paulo.dev",
    modelo: "modelo1"
  },
];
  constructor() { }

  ngOnInit(): void {
  }

}
