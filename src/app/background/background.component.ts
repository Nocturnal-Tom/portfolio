import { Component } from '@angular/core';
import { throwError } from 'rxjs';
import { Grid } from 'src/util/2d/grid';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent {
  private canvasElement: HTMLCanvasElement | null = null;
  public ctx: CanvasRenderingContext2D | null = null;
  private shouldDraw = true;
  private grid: Grid | null = null; // I don't want to use null, so this is a placeholder



  ngAfterViewInit(){
    // I've seen people prefer to get elements "the angular way", but it seems weird and complicated, this way is simple, but later requires us to dance around typescript
    const canvas_temp = document.getElementById("background-canvas");

    console.log("canvas_temp: ", canvas_temp);
    if (!(canvas_temp instanceof HTMLCanvasElement)){
      // We should never reach here unless something very bad happened
      throw new Error("Error: Cannot find canvas with ID background-canvas");  
    }
    else {
      this.canvasElement = canvas_temp;
    }

    const ctx_temp = this.canvasElement.getContext("2d");
    if (!(ctx_temp instanceof CanvasRenderingContext2D)){
      // We should never reach here either
      throw new Error("Error: background-canvas has no 2D context");
    }
    else {
      this.ctx = ctx_temp;
    }

    this.grid = new Grid(1,1,"grid", 100, 100);
    
    // Phew, now we 100% have a canvas conxtext 2d...

    requestAnimationFrame(this.render.bind(this));
  }

  render(time: DOMHighResTimeStamp): void {
    if (!(this.ctx instanceof CanvasRenderingContext2D && this.canvasElement instanceof HTMLCanvasElement)){
      throw new Error("Canvas context is missing");
    }

    // Required to ensure the canvas is the correct resolution every frame
    this.canvasElement.width = window.innerWidth;
    this.canvasElement.height = window.innerHeight;
    // We must always make sure the canvas is cleared
    this.ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  
    // Simple gradient background
    this.draw_gradient_circle();

    requestAnimationFrame(this.render.bind(this));
  }

  draw_gradient_circle() {
    if (!this.canvasElement || !this.ctx) {
      throw new Error("Canvas context is missing");
    }

    const circleX = this.canvasElement.width / 2.0
    this.ctx.strokeStyle = this.ctx.createRadialGradient(
      circleX, 0, 0,
      circleX, 0, this.canvasElement.height * 1.7 // Fills gradient to corners. Number chosen from vague memory of circles at 45 deg being something like 0.707 or something
    );
    this.ctx.strokeStyle.addColorStop(0, "#1f1f1f");
    this.ctx.strokeStyle.addColorStop(1, "#000");

    this.ctx.fillStyle = this.ctx.strokeStyle;
    this.ctx.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);
  }
}