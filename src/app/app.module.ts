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
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { SearchDirectComponent } from './search/search-direct/search-direct.component';
import {FormsModule} from "@angular/forms";
import { SearchPanelComponent } from './search/search-direct/search-panel/search-panel.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from "./shared/services/login.service";
import { EditGameComponent } from './game-details/edit-game/edit-game.component';
import { RemoveGameComponent } from './game-details/remove-game/remove-game.component';
import { AddGameComponent } from './game-details/add-game/add-game.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'game/:id', component: GameDetailsComponent},
  {path: 'search', component: SearchDirectComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add', component: AddGameComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        GameListComponent,
        GameDetailsComponent,
        GameItemComponent,
        CustomslicePipe,
        HomeComponent,
        FooterComponent,
        SearchComponent,
        SearchDirectComponent,
        SearchPanelComponent,
        LoginComponent,
        EditGameComponent,
        RemoveGameComponent,
        AddGameComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
  providers: [
    GameService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
