import Loot from "./Loot";
import Monster from "./Monster";
import Stairs from "./Stairs";

const lootTable = [
  { name: "Long Sword", color: "darkgrey", ascii: "/", offset: { x: 6, y: 3 } },
  { name: "Health Potion", color: "red", ascii: "!", offset: { x: 6, y: 3 } },
  { name: "Gold Coin", color: "yellow", ascii: "$", offset: { x: 3, y: 3 } },
  {
    name: "Light Armor",
    color: "lightgrey",
    ascii: "#",
    offset: { x: 4, y: 3 },
  },
];

const monsterTable = [
  {
    name: "Slime",
    color: "greenyellow",
    ascii: "S",
    offset: { x: 2, y: 3 },
    health: 1,
  },
  {
    name: "Dragon",
    color: "darkred",
    ascii: "D",
    offset: { x: 4, y: 3 },
    health: 10,
  },
  {
    name: "Orc",
    color: "green",
    ascii: "O",
    offset: { x: 3, y: 2 },
    health: 2,
  },
  {
    name: "Mimic",
    color: "brown",
    ascii: "M",
    offset: { x: 2, y: 3 },
    health: 5,
  },
];

class Spawner {
  constructor(world) {
    this.world = world;
  }
  spawn(spawnCount, createEntity) {
    for (let count = 0; count < spawnCount; count++) {
      let entity = createEntity();
      this.world.add(entity);
      this.world.moveToSpace(entity);
    }
  }
  spawnLoot(spawnCount) {
    this.spawn(spawnCount, () => {
      return new Loot(
        getRandomInt(this.world.width - 1),
        getRandomInt(this.world.height - 1),
        this.world.tilesize,
        lootTable[getRandomInt(lootTable.length)]
      );
    });
  }

  spawnMonsters(spawnCount) {
    this.spawn(spawnCount, () => {
      return new Monster(
        getRandomInt(this.world.width - 1),
        getRandomInt(this.world.height - 1),
        this.world.tilesize,
        monsterTable[getRandomInt(lootTable.length)]
      );
    });
  }

  spawnStairs() {
    let stairs = new Stairs(
      this.world.width - 10,
      this.world.height - 10,
      this.world.tilesize
    );
    this.world.add(stairs);
    this.world.moveToSpace(stairs);
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default Spawner;
