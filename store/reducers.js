import { SKILL_EDIT, CHAR_EDIT } from "./actions";

const initialCharState = {
  name: "Type a kewl name!!",
  class: "Pick your class",
  int: "3",
  ref: "3",
  dex: "3",
  tech: "3",
  cool: "3",
  will: "3",
  luck: "3",
  move: "3",
  body: "3",
  emp: "3"
};

const initialSkillState = {
  perception: "2",
  tracking: "2",
  education: "2",
  localExpert: "2",
  interface: "2",
  marksmanship: "2",
  driving: "2",
  evasion: "2",
  athletics: "2",
  stealth: "2",
  brawling: "2",
  meleeWeapon: "2",
  basicTech: "2",
  cyberTech: "2",
  firstAid: "2",
  bribery: "2",
  interrogation: "2",
  persuasion: "2",
  concetration: "2",
  conversation: "2",
  humanPerception: "2",
  playInstrument: "2"
};

export function charReducer(previousState = initialCharState, action) {
  switch (action.type) {
    case CHAR_EDIT:
      return {
        ...previousState,
        [action.payload.char]: action.payload.value
      };
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
