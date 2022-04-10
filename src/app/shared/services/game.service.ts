import {Game} from "../models/game.model";
import {Category} from "../enums/category-enum.model";
import {Device} from "../enums/device-enum.model";
import {DRM} from "../enums/drm-enum.model";
import {EventEmitter} from "@angular/core";

export class GameService {

  gamesChanged = new EventEmitter<Game[]>();
  gameSelected = new EventEmitter<Game>();
  itemsSelected = new EventEmitter<{category: string, device: string, drm: string, pricef: number, pricet: number}>();

  private games: Game[] = [

    new Game(
      1,
      "GhostWire: Tokyo",
      [
        Category.Action,
        Category.Adventure
      ],
      Device.PC,
      DRM.Steam,
      'Mieszkańcy Tokio zniknęli, a miasto nawiedziły mordercze istoty nadprzyrodzone sprowadzone przez niebezpiecznego okultystę. Sprzymierz się z potężną widmową istotą szukającą zemsty i opanuj szereg niewiarygodnych zdolności, aby poznać tajemnicę zniknięć. STAW CZOŁA NIEZNANEMU w grze Ghostwire: Tokyo.',
      50,
      'https://sm.ign.com/t/ign_pl/screenshot/default/ghostwire_8gh5.1280.jpg'
    ),

    new Game(
      2,
      "Grand Theft Auto V: Premium Online",
      [
        Category.Action,
        Category.RPG,
        Category.FPS,
        Category.SandBox
      ],
      Device.PS5,
      DRM.Other,
      'Gdy młody opryszek, emerytowany rabuś oraz przerażający psychol wplątują się w gangsterskie porachunki i interesy świata zbrodni, rządu USA i przemysłu rozrywkowego, muszą wykonać serię niebezpiecznych napadów, aby przetrwać w bezlitosnym świecie, w którym zdrada czyha na każdym kroku',
      20,
      'https://media.rockstargames.com/rockstargames-newsite/uploads/e4e67668228df3eb050e64232a664f454ab7b030.jpg'
    ),

    new Game(
      3,
      "Tiny Tina's Wonderlands",
      [
        Category.Action,
        Category.FPS,
        Category.RPG,
        Category.Adventure
      ],
      Device.PC,
      DRM.Steam,
      'Ruszaj na epicką przygodę, pełną fantazji, cudów i potężnego uzbrojenia! Pociski, magia i potężne miecze występują obok siebie w tym chaotycznym świecie fantasy i zostają ożywione przez nieprzewidywalną Tiny Tinę.\n' +
      'Stwórz własną wieloklasową postać i zbieraj łupy, strzelaj, tnij oraz rzucaj zaklęcia na potwory nie z tego świata. Przemierzaj pełne skarbów lochy i postaraj się powstrzymać tyrana – Dragon Lorda. Tu wszyscy są mile widzialni, a więc dołącz do imprezy, załóż buty łowcy przygód i stań się bohaterem lub bohaterką chaosu!',
      60,
      'https://i0.wp.com/konsolowe.info/wp-content/uploads/2021/06/tiny-tina-wonderland-feature.jpg?fit=1400%2C700&ssl=1'
    ),

    new Game(
      4,
      "Dead by Daylight",
      [
        Category.Action,
        Category.Horror,
        Category.Survival,
        Category.MultiPlayer
      ],
      Device.PS4,
      DRM.Other,
      'Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught, tortured and killed.',
      10,
      'https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S1_2560x1440-a32581cf9948a9a2e24b2ff15c1577c7'
    ),

    new Game(
      5,
      "Assetto Corsa | Ultimate Edition",
      [
        Category.Simulation,
        Category.Racing,
        Category.Adventure
      ],
      Device.PS5,
      DRM.Other,
      'Assetto Corsa includes a career mode, a list of special and unique events and challenges, as well as a fully customizable, single player and multiplayer modes featuring quick races, custom championships, race weekends including free practice session, qualifying session and race. Drag races, drift challenges and much more! Four driving assist profiles (gamer, racer, pro, plus a fully-customizable profile) allow any kind of player to enjoy the simulation at their desired level.',
      30,
      'https://image.api.playstation.com/cdn/EP4040/CUSA11487_00/iRqD2BxH4DihRaCQYSK3Q5JUzaNtBU19.png'
    ),

    new Game(
      6,
      'Batman: Arkham Collection',
      [
        Category.Action,
        Category.RPG,
      ],
      Device.PC,
      DRM.Steam,
      'Batman: Arkham Collection is a bundle of the three main games in the Arkham series, featuring the character of DC’s Dark Knight: Arkham Asylum, Arkham City, and Arkham Knight, as well as the Season Pass for the latter one. All three games feature open-world environments of Arkham Asylum, and later on the entire Gotham City, which the player can explore while carrying out the story missions, side-quests and finding various collectibles. Throughout the series, Batman will face many of his most notable adversaries, including Two-Face, the Penguin, Riddler, and the Joker, his greatest foe. All of the games in the Arkham series have received critical acclaim and are considered to be one of the best titles featuring Gotham’s Dark Knight.',
      11,
      'https://image.api.playstation.com/cdn/EP1018/CUSA00135_00/HvOTD8bpFugqeQ2hMsSIXoG8gCJ6kVZJ.png'
    )
  ];

  getGames() {
    return this.games.slice();
  }

  getGame(id: number) {
    const game = this.games.find(
      (s) => {
        return s.id === id;
      }
    );
    return game;
  }

  addNewProduct(game: Game) {
    this.games.push(game);
    this.gamesChanged.emit(this.games.slice());
  }

  addBunchOfNewProducts(product: Game[]) {
    this.games.push(...product);
    this.gamesChanged.emit(this.games.slice());
  }

  removeGame(game: Game) {
    for (let gameFor of this.games) {
      if (gameFor === game) {
        this.games.filter(function(el) {
          return el != gameFor;
        });
        this.gamesChanged.emit(this.games);
      }
    }
  }

  editGame(game: Game) {
    let gamesToSearch = this.games.slice();
    for (let gameFor of gamesToSearch) {
      if (gameFor.id === game.id) {
        gameFor = game;
        this.gamesChanged.emit(gamesToSearch);
      }
    }
  }


  getGameByCategory(categoryToFind: string, games: Game[]) {
    let gamesToSort = games;
    let tableToReturn: Game[] = [];

    for (let game of gamesToSort){
      if (game.category.find(cat => cat === categoryToFind))
        tableToReturn.push(game);
    }

    return tableToReturn;
  }

  private getGameByDevice(deviceToFind: string, games: Game[]) {
    let gamesToSort = games;
    let tableToReturn: Game[] = [];

    gamesToSort.find((game) => {
      if(game.device === deviceToFind)
          tableToReturn.push(game);
    });

    return tableToReturn;
  }

  private getGameByDRM(drmToFind: string, games: Game[]) {
    let gamesToSort = games;
    let tableToReturn: Game[] = [];

    gamesToSort.find((game) => {
      if(game.DRM === drmToFind)
        tableToReturn.push(game);
    });

    return tableToReturn;
  }

  private getGameByPrice(min: number, max: number, games: Game[]) {
    let gamesToSort = games;
    let tableToReturn: Game[] = [];

    gamesToSort.find((game) => {
      if(!min && game.price <= max)
        tableToReturn.push(game);
      else if (!max && game.price >= min)
        tableToReturn.push(game);
      else if (game.price >= min && game.price <= max)
        tableToReturn.push(game);
    });
    return tableToReturn;
  }

  getGameByFilters(categoryToFind: string, deviceToFind: string, drmToFind: string, min: any, max: any) {
    let tableToReturn = this.games.slice();

    if (categoryToFind.length > 1)
      tableToReturn = this.getGameByCategory(categoryToFind, tableToReturn);

    if(deviceToFind.length > 1)
      tableToReturn = this.getGameByDevice(deviceToFind, tableToReturn);

    if(drmToFind.length > 1)
      tableToReturn = this.getGameByDRM(drmToFind, tableToReturn);


    tableToReturn = this.getGameByPrice(min, max, tableToReturn);


    return tableToReturn;
  }

}
