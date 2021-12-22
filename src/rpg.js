//warrior
//archer
//commander
//scientist
//assassin

export const storeState = (initialState) => {
  let currentState =initialState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const warriorInitialValues = { strength: 50, health: 100, resistance: 100, speed: 20, intelligence: 20, agility: 20, charisma: 40};
export const archerInitialValues = { strength: 20, health: 100, resistance: 80, speed: 40, intelligence: 30, agility: 60, charisma: 0};
export const commanderInitialValues = { strength: 30, health: 100, resistance: 100, speed: 20, intelligence: 20, agility: 20, charisma: 100}; //
export const scientistInitialValues = { strength: 10, health: 80, resistance: 80, speed: 10, intelligence: 80, agility: 10, charisma: 0};
export const assassinInitialValues = { strength: 50, health: 100, resistance: 80, speed: 50, intelligence: 30, agility: 80, charisma: 0};

export const enemyInitialValues = {strength: 50, health: 100};

export const warrior = storeState(warriorInitialValues);
export const archer = storeState(archerInitialValues);
export const commander = storeState(commanderInitialValues);
export const scientist = storeState(scientistInitialValues);
export const assassin = storeState(assassinInitialValues);

export const enemy = storeState(enemyInitialValues);

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value,
    });
  };
};

export const strengthLevel = changeState("strength")(50);
export const healthLevel = changeState("health")(50);
export const resistanceLevel = changeState("resistance")(20);
export const speedLevel = changeState("speed")(30);
export const intelligenceLevel = changeState("intelligence")(60);
export const agilityLevel = changeState("agility")(40);
export const charismaLevel = changeState("charisma")(0);
//const comCharismaLevel = changeState("charisma")(50);

export const charName = (name) => {
  let state = {
    name
  };
  return state;
};

export const levelUp = (name) => {
  let state = {
    name
  };

  return { ...state, ...strengthLevel(state), ...healthLevel(state), ...resistanceLevel(state), ...speedLevel(state), ...intelligenceLevel(state), ...agilityLevel(state), ...charismaLevel(state)};
};


// const hit = changeState("health")(`-${state.strength}`)

//state, enemy, property
export const battle = (state) => {
  return (enemy) => {
    return (prop) => {
      if (state[prop]>enemy[prop]) {
        return state;
      }else if (state[prop]<enemy[prop]) {
        return enemy;
      }
      return `There is a tie`;
    };
  };
};


