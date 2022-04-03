import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { GameItemComponent } from './game-list/game-item/game-item.component';
import {CustomslicePipe} from "./shared/usefulTools/customslice.pipe";
import {GameService} from "./shared/services/game.service";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'game/:id', component: GameDetailsComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        GameListComponent,
        GameDetailsComponent,
        GameItemComponent,
        CustomslicePipe,
        HomeComponent
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
