import { SKILL_EDIT, CHAR_EDIT, CHAR_CREATE, PLAYER_EDIT } from "./actions";

const initialCharState = {
  name: "",
  class: "",
  int: "1",
  ref: "1",
  dex: "1",
  tech: "1",
  cool: "1",
  will: "1",
  luck: "1",
  move: "1",
  body: "1",
  emp: "1"
};

const initialSkillState = {
  perception: "0",
  tracking: "0",
  education: "0",
  localExpert: "0",
  interface: "0",
  marksmanship: "0",
  driving: "0",
  evasion: "0",
  athletics: "0",
  stealth: "0",
  brawling: "0",
  meleeWeapon: "0",
  basicTech: "0",
  cyberTech: "0",
  firstAid: "0",
  bribery: "0",
  interrogation: "0",
  persuasion: "0",
  concetration: "0",
  conversation: "0",
  humanPerception: "0",
  playInstrument: "0"
};

const initialPlayerState = {
  startingHP: "0",
  woundedHP: "0",
  deathSave: "0"
}

export function charReducer(previousState = initialCharState, action) {
  switch (action.type) {
    case CHAR_CREATE:
      return action.payload;
    case CHAR_EDIT:
      return action.payload;
      default:
        return previousState;
  }
}

export function skillsReducer(previousState = initialSkillState, action) {
  switch (action.type) {
    case SKILL_EDIT:
      return {
        ...previousState,
        [action.payload.skill]: action.payload.value
      };
    default:
      return previousState;
  }
}

export function playerReducer(previousState = initialPlayerState, action) {
  console.log(action);
  switch (action.type) {
    case PLAYER_EDIT:
      return {
        ...previousState,
        [action.payload.skill]: action.payload.value
      };
    default:
      return previousState;
  }
}