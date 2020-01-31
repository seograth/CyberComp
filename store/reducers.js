import { SKILL_EDIT, CHAR_EDIT } from "./actions";

const initialCharState = {
  Name: "Type a kewl name!!",
  INT: "3",
  REF: "3",
  DEX: "3",
  TECH: "3",
  COOL: "3",
  Class: "Pick your class",
  WILL: "3",
  LUCK: "3",
  MOVE: "3",
  BODY: "3",
  EMP: "3"
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
