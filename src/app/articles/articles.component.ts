import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input() artis: any;
  nameNewArticle = 'name';
  urlNewArticle = 'url';
  @Output()
  newArticleEmitter = new EventEmitter<[string, string]>();

  constructor() {
  }

  ngOnInit(): void {
  }

  newArticle(): void {
    this.newArticleEmitter.emit([this.nameNewArticle, this.urlNewArticle]);
  }
}
