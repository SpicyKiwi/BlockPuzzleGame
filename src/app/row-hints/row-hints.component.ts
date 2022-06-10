import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-hints',
  templateUrl: './row-hints.component.html',
  styleUrls: ['./row-hints.component.css']
})
export class RowHintsComponent implements OnInit {

  @Input() rowHints: number[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
