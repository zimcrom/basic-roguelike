import React, { useRef, useEffect, useState } from "react";
import InputManager from "./InputManager";
import Player from "./Player";
import World from "./World";

const ReactRogue = ({ width, height, tilesize }) => {
  const canvasRef = useRef();
  //const [player, setPlayer] = useState(new Player(1, 2, tilesize));
  const [world, setWorld] = useState(new World(width, height, tilesize));
  let inputManager = new InputManager();
  const handleInput = (action, data) => {
    console.log(`handle input: ${action}:${JSON.stringify(data)}`);
    let newWorld = new World();
    Object.assign(newWorld, world);
    newPlayer.move(data.x, data.y);
    setPlayer(newPlayer);
  };

  useEffect(() => {
    console.log("Bind input");
    inputManager.bindKeys();
    inputManager.subscribe(handleInput);
    return () => {
      inputManager.unbindKeys();
      inputManager.unsubscribe(handleInput);
    };
  });

  useEffect(() => {
    console.log("Draw to canvas");
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, width * tilesize, height * tilesize);
    world.draw(ctx);
    player.draw(ctx);
  });
  return (
    <canvas
      ref={canvasRef}
      width={width * tilesize}
      height={height * tilesize}
      style={{ border: "1px solid black" }}
    ></canvas>
  );
};

// Without destructuring
// const ReactRogue = {props} => (
//     <canvas
//       width={props.width * props.tilesize}
//       height={props.height * props.tilesize}
//       style={{ border: "1px solid black" }}
//     ></canvas>
//   )

export default ReactRogue;
