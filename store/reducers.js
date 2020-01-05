import { SKILL_EDIT } from './actions'

const initialSkillState = {
    perception: '2',
    tracking: '2',
    education: '2',
    localExpert: '2',
    interface: '2',
    marksmanship: '2',
    driving: '2',
    evasion: '2',
    athletics: '2',
    stealth: '2',
    brawling: '2',
    meleeWeapon: '2',
    basicTech: '2',
    cyberTech: '2',
    firstAid: '2',
    bribery: '2',
    interrogation: '2',
    persuasion: '2',
    concetration: '2',
    conversation: '2',
    humanPerception: '2',
    playInstrument: '2'
}

export function skillsReducer (previousState = initialSkillState, action) {
    switch (action.type) {
        case SKILL_EDIT:
          return {
              ...previousState,
              [action.payload.skill]: action.payload.value 
          }
        default:
          return previousState;
      }
}