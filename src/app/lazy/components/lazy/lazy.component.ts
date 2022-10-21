import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    window['lazyRoute'] = this.route;
  }

}
