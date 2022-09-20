class InputManager {
    observers = [];
  
    subscribe(fn) {
      this.observers.push(fn);
    }
  
    unsubscribe(fn) {
      this.observers = this.observers.filter(subscriber => subscriber !== fn);
    }
  
    broadcast(action, data) {
      this.observers.forEach(subscriber => subscriber(action, data));
    }
  
    handleKeys = (e) => {
      e.preventDefault();
      switch (e.keyCode) {
        // left
        case 37:
          this.broadcast("move", { x: -1, y: 0 });
          break;
        // up
        case 38:
          this.broadcast("move", { x: 0, y: -1 });
          break;
        // right
        case 39:
          this.broadcast("move", { x: 1, y: 0 });
          break;
        // down
        case 40:
          this.broadcast("move", { x: 0, y: 1 });
          break;
        default:
          break;
      }
    };
  
    bindKeys() {
      document.addEventListener("keydown", this.handleKeys);
    }
  
    unbindKeys() {
      document.removeEventListener("keydown", this.handleKeys);
    }
  }

  export default InputManager;