import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() rowIdx = 4
  @Input() columnIdx = 4
  @Input() block = 2
  @Input() lives = 3
  @Input() score: number | null = null

  @Output() lifeEvent = new EventEmitter<number>()
  @Output() scoreEvent = new EventEmitter<number>()

  clicked = false

  constructor() { }

  ngOnInit(): void {
  }

  cellClicked() {

    if (this.block === 0) {
      this.lives -= 1
      this.lifeEvent.emit(this.lives)
      this.clicked = true

    } else if (this.block === 1) {

      if(this.score === null) {
        this.score = 1
        this.scoreEvent.emit(this.score)
        this.clicked = true
      } else if (!this.clicked) {
        this.score += 1
        this.scoreEvent.emit(this.score)
        this.clicked = true
      } else if (this.clicked) {
        return
      }
    }
  }

}
