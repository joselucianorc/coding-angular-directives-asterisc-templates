import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  itens: string[] = ["item 1","item 2","item 3"];
  item: string = "";

  aba: string = 'home';

  constructor() { }

  ngOnInit(): void {

  }

}
