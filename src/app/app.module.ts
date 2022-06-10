import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateGameboardComponent } from './generate-gameboard/generate-gameboard.component';
import { CellComponent } from './cell/cell.component';
import { ScoreComponent } from './score/score.component';
import { GameOverScreenComponent } from './game-over-screen/game-over-screen.component';
import { RowHintsComponent } from './row-hints/row-hints.component';
import { ColumnHintsComponent } from './column-hints/column-hints.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateGameboardComponent,
    CellComponent,
    ScoreComponent,
    GameOverScreenComponent,
    RowHintsComponent,
    ColumnHintsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
