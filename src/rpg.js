//warrior
//archer
//commander
//scientist
//assassin

const storeState = (initialState) => {
  let currentState =initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const warriorInitialValues = {strength: 50, health: 100, resistance: 100, speed: 20, intelligence: 20, agility: 20, charisma: 40}
const archerInitialValues = {strength: 20, health: 100, resistance: 80, speed: 40, intelligence: 30, agility: 60, charisma: 0}
const commanderInitialValues = {strength: 30, health: 100, resistance: 100, speed: 20, intelligence: 20, agility: 20, charisma: 100} //
const scientistInitialValues = {strength: 10, health: 80, resistance: 80, speed: 10, intelligence: 80, agility: 10, charisma: 0}
const assassinInitialValues = {strength: 50, health: 100, resistance: 80, speed: 50, intelligence: 30, agility: 80, charisma: 0}

const enemyInitialValues = {strength: 50, health: 100}

const warrior = storeState(warriorInitialValues);
const archer = storeState(archerInitialValues);
const commander = storeState(commanderInitialValues);
const scientist = storeState(scientistInitialValues);
const assassin = storeState(assassinInitialValues);

const enemy = storeState(enemyInitialValues);

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state.name[prop] || 0) + value,
    });
  };
};

const newCharactor = (name) => {
  let state = {
    name
  }

  return { ...state, ...changeState(state)};
};

const strengthLevel = changeState("strength")(50);
const healthLevel = changeState("health")(50);
const resistanceLevel = changeState("resistance")(20);
const speedLevel = changeState("speed")(30);
const intelligenceLevel = changeState("intelligence")(60);
const agilityLevel = changeState("agility")(40);
const charismaLevel = changeState("chrisma")(0);

// const hit = changeState("health")(`-${state.strength}`)

//state, enemy, property
// const battle = (state) => {
//   return (enemy) => {
//     return (prop) => {
//       if (state[prop]>enemy[prop]) {
//         return [state, enemy];
//       }else if (state[prop]<enemy[prop]) {
//         return [enemy, state];
//       }
//       return [{},{}];
//     };
//   };
// };

