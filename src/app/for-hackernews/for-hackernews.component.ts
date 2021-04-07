import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-for-hackernews',
  templateUrl: './for-hackernews.component.html',
  styleUrls: ['./for-hackernews.component.css']
})
export class ForHackernewsComponent implements OnInit {
  time = 5;
  idInterval: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  start(): void {
    this.idInterval = setInterval(() => {
      this.time -= 1;
      if (this.time === 0) {
        this.stop();
      }
    }, 1000);
  }

  stop(): void {
    clearInterval(this.idInterval);
  }
}
