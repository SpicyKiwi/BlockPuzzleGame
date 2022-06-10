import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'puzzleGame';
  pickedDifficulty = false
  gameOver = false
  difficulty = 1
  victory = false

  setDifficulty(value: number) {
    this.difficulty = value
    this.gameOver = false
    this.pickedDifficulty = true
  }

  endGame(value: boolean) {
    if (value) {
      this.gameOver = true
    }
  }

  updateVictory(value: boolean) {
    if (value) {
      this.victory = true
    } else {
      this.victory = false
    }
  }

  restartGame(value: boolean[]) {
    this.gameOver = value[0]
    this.pickedDifficulty = value[1]
  }
  
}
