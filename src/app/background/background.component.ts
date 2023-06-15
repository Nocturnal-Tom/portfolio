import { Component, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { Vector2 } from 'src/util/2d/vector';
import { GridFloatingCells } from 'src/util/2d/grid-floating-cells';
import { DrawingContext } from 'src/util/2d/draw';


@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements AfterViewInit {
  public shouldDraw = true;
  public shouldDrawCircles = false;
  private lastTime = 0;
  private distanceThresh = 190;
  private cellMaxSpeed = 0.5;
  private minDist = 100;
  private backgroundWorker: Worker | null = null;

  // These properties are set in ngAfterViewInit(), so they are guarenteed to exist (as long as I'm not missing anything?)
  private canvasElement!: HTMLCanvasElement;
  private grid!: GridFloatingCells;
  private drawingCtx!: DrawingContext;
  @ViewChild("backgroundCanvas", {read: ElementRef<HTMLCanvasElement>}) canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2){
    if (typeof Worker !== "undefined") {
      this.backgroundWorker = new Worker(new URL("./background-processing.worker", import.meta.url), {credentials: 'same-origin'})
    }
    else {
      console.log("Can't use worker");
    }
  }

  ngAfterViewInit(){
    console.log("backgroundWorker: ", this.backgroundWorker);
    // We want to capture mouse movement to move cells away from mouse if it comes too close
    self.addEventListener("mousemove", (ev: MouseEvent) => this.onMouseMove(new Vector2(ev.clientX, ev.clientY)));
    self.addEventListener("touchmove", (ev: TouchEvent) => this.onMouseMove(new Vector2(ev.touches[0].clientX, ev.touches[0].clientY)));
    
    if (!this.canvasRef.nativeElement){
      throw new Error("Error: Cannot find canvas with ID background-canvas");  
    }
    this.canvasElement = this.canvasRef.nativeElement;

    // Required to ensure the canvas is the correct resolution every frame
    this.canvasElement.width = window.innerWidth;
    this.canvasElement.height = window.innerHeight;

    const smallestDim = Math.min(this.canvasElement.width, this.canvasElement.height);
    // We want the distance threshold to be relative to screen size (larger screens should have larger thresholds)
    this.distanceThresh = smallestDim / 4;
    this.cellMaxSpeed = smallestDim / 2000; //Math.log10(smallestDim) / 20;

    this.drawingCtx = new DrawingContext(this.canvasElement);

    this.grid = new GridFloatingCells(8, 8, "grid", this.canvasElement.width, this.canvasElement.height);
    
    // Move every cell randomly
    const cell_dim = this.grid.getCellDimensions();
    this.grid.getCells().forEach((v, i) => {
      const x = (Math.random() - 0.5) * cell_dim.width;
      const y = (Math.random() - 0.5) * cell_dim.height;
      const vec2 = new Vector2(x, y);
      this.grid?.setOffsetIndividual(i, vec2);
    });

    this.grid.setCellSpeed(this.cellMaxSpeed);

    requestAnimationFrame((time) => this.render(time));
  }
  
  private render(time: DOMHighResTimeStamp): void {
    // Required to ensure the canvas is the correct resolution every frame
    this.canvasElement.width = window.innerWidth;
    this.canvasElement.height = window.innerHeight;


    this.drawingCtx.clear();

    if (this.shouldDraw){
      const circleX = (Math.sin(Date.now() / 2000) + 1.0) / 2.0 * this.canvasElement.width;

      // The background gradient
      this.drawingCtx.drawRadialGradient(new Vector2(circleX, 0), 0, new Vector2(circleX, 0), this.canvasElement.height * 1.7);
      this.draw_grid_centers(time);
    }

    // Google says using arrow function is the same as "this.render.bind(this)"
    requestAnimationFrame((time: DOMHighResTimeStamp) => this.render(time));

    this.lastTime = time;
  }

  private draw_grid_centers(time: DOMHighResTimeStamp) {
    this.grid.updateCellPositions(time - this.lastTime);
    
    for (let i = 0; i < this.grid.getCellCount(); i++){
      let closestPoint = Infinity;
      const iCell = this.grid.getCell(i); 
      for (let j = i+1; j < this.grid.getCellCount(); j++){
        const jCell = this.grid.getCell(j);
        const dist = iCell.distanceTo(jCell);
        
        if (dist < this.distanceThresh){
          const dist_percentage = dist / this.distanceThresh;
          const color = `rgba(255, 255, 255, ${1.0-dist_percentage})`;
          this.drawingCtx.drawLine(iCell, jCell, color, 2.0);
          closestPoint = dist_percentage < closestPoint ? dist_percentage : closestPoint;
        }
      }
      
      if (this.shouldDrawCircles){
        const color = `rgba(255, 255, 255, ${Math.max(1.0-closestPoint, 0.5)})`;
        this.drawingCtx.drawCircle(iCell, 2, color, 1);
      }
    }
  }


  private onMouseMove(position: Vector2){
    for (let i = 0; i < this.grid.getCellCount(); i++){
      const dist = this.grid.getCell(i).distanceTo(position);
      if (dist < this.minDist){
        const closeness = 1.0-dist/this.minDist;
        this.grid.setCellVelocity(i, this.grid.getCell(i).directionTo(position).multiply(closeness * 100.0));
      }
    }
  }
}