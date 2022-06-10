import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-column-hints',
  templateUrl: './column-hints.component.html',
  styleUrls: ['./column-hints.component.css']
})
export class ColumnHintsComponent implements OnInit {

  @Input() columnHints: number[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
