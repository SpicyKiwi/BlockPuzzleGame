import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generate-gameboard',
  templateUrl: './generate-gameboard.component.html',
  styleUrls: ['./generate-gameboard.component.css']
})

export class GenerateGameboardComponent implements OnInit {

  @Input() difficulty : number = 0
  @Input() gameOver: boolean = false

  @Output() gameEnd = new EventEmitter<boolean>()
  @Output() victoryEvent = new EventEmitter<boolean>()

  size = 4
  gameBoard: number[][] = []
  lives = 3
  boardGenerated = false
  rowHints: number[][] = []
  columnHints: number[][] = []

  score = 0
  scoreToWin = 0

  victory = false

  constructor() { }

  ngOnInit(): void {
    this.generateBoard()
    this.generateAllColumnHints()
    this.generateAllRowHints()
  }

  generateBoard() {

    //set row and column size for grid
    if(this.difficulty === 1) {
      //easy 4x4
      this.size = 4
    } else if (this.difficulty === 2) {
      //normal 7x7
      this.size = 7
    } else if (this.difficulty === 3) {
      //hard 10x10
      this.size = 10
    }

    for (let i = 0; i < this.size; i++) {
      this.gameBoard.push([])
      for (let j = 0; j < this.size; j++) {

        const randomNum = Math.floor(Math.random() * 2)
        this.scoreToWin += randomNum
        this.gameBoard[i].push(randomNum)

      }
    }
    
  }

  updateScore(value: number) {
    if (value === this.scoreToWin) {
      this.gameOver = true
      this.gameEnd.emit(this.gameOver)
      this.victory = true
      this.victoryEvent.emit(this.victory)
    } else {
      this.score = value
    }
  }
  
  updateLives(value: number) {
    if (value <= 0) {
      this.lives = 3
      this.gameOver = true
      this.gameEnd.emit(this.gameOver)
      this.victory = false
      this.victoryEvent.emit(this.victory)
    } else {
      this.lives = value
    }

  }

  generateHintsFromArray(array: number[]) {
    //modify to add up numbers that are next to eachother
    let returnArray: number[] = []
    let count = 0
    for (let i = 0; i < array.length; i++) {

      if (array[i] === 1 && i === array.length - 1) {
        count += 1
        returnArray.push(count)
      } else if (array[i] === 1) {
        count += 1
      } else if (array[i] === 0 && count !== 0) {
        returnArray.push(count)
        count = 0
      }

    }
    return returnArray
  }

  generateAllRowHints() {
    for (let i = 0; i < this.size; i++) {
      this.rowHints.push(this.generateHintsFromArray(this.gameBoard[i]))
    }
  }

  generateAllColumnHints() {//row
    for (let column = 0; column < this.gameBoard[0].length; column++) {
      let col = []
      for (let row = 0; row < this.gameBoard.length; row++) {
        col.push(this.gameBoard[row][column])
      }
      this.columnHints.push(this.generateHintsFromArray(col))
    }
  }


}
