
import { Injectable } from '@angular/core';

@Injectable()
export class CanvasAnimation {
  private  context: CanvasRenderingContext2D;

  constructor(context) {
    this.context = context;
    window.requestAnimationFrame(() => this.draw());
  }

  draw() {
    // do stuff
    window.requestAnimationFrame(() => this.draw());
  }
}

