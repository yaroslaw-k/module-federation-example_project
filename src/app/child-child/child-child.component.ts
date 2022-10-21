import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.scss']
})
export class ChildChildComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
  }

}
