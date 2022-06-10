import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-over-screen',
  templateUrl: './game-over-screen.component.html',
  styleUrls: ['./game-over-screen.component.css']
})
export class GameOverScreenComponent implements OnInit {

  @Input() gameOver = true
  @Input() pickedDifficulty = true
  @Input() victory = false

  @Output() restartEvent = new EventEmitter<boolean[]>()

  constructor() { }

  ngOnInit(): void {
  }

  restart() {
    this.restartEvent.emit([true, false])
  }

}
