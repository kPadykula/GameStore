export enum Category {
  Action = 'Action',
  RPG = 'RPG',
  ARPG = 'ARPG',
  SandBox = 'SandBox',
  RTS = 'RTS',
  FPS = 'FPS',
  TPS = 'TPS',
  MOBA = "MOBA",
  Simulation = "Simulation",
  Sport = "Sport",
  Racing = "Racing",
  Platformer = "Platformer",
  Adventure = "Adventure",
  Survival = "Survival",
  Horror = "Horror",
  MultiPlayer = "MultiPlayer",
  COOP = "COOP",
  SinglePlayer = "SinglePlayer"
}

export function getEnum(data: string) {
  switch (data) {
    case 'Action':{
      return Category.Action;
      break;
    }
    case 'RPG': {
      return Category.RPG;
      break;
    }
    case 'ARPG': {
      return Category.ARPG;
      break;
    }
    case 'SandBox': {
      return Category.SandBox;
      break;
    }
    case 'RTS': {
      return Category.RTS;
      break;
    }
    case 'FPS': {
      return Category.FPS;
      break;
    }
    case 'TPS': {
      return Category.TPS;
      break;
    }
    case 'MOBA': {
      return Category.MOBA;
      break;
    }
    case 'Simulation': {
      return Category.Simulation;
      break;
    }
    case 'Sport': {
      return Category.Sport;
      break;
    }
    case 'Racing': {
      return Category.Racing;
      break;
    }
    case 'Platformer': {
      return Category.Platformer;
      break;
    }
    case 'Adventure': {
      return Category.Adventure;
      break;
    }
    case 'Survival': {
      return Category.Survival;
      break;
    }
    case 'Horror': {
      return Category.Horror;
      break;
    }
    case 'MultiPlayer': {
      return Category.MultiPlayer;
      break;
    }
    case 'COOP': {
      return Category.COOP;
      break;
    }
    case 'SinglePlayer': {
      return Category.SinglePlayer;
      break;
    }
    default: return Category.Action; break;
  }
}
