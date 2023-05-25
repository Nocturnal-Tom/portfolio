import { Vector2 } from "./vector";
import { Grid, DimensionType } from "./grid";


type ConstrainedType = "none" | "cells" | "grid";

export class GridFloatingCells extends Grid {
    private cellDirection: Array<Vector2>;
    private cellStartPosition: Array<Vector2>;
    private cellSpeed: number = 0.5;
    private cellVelocities: Array<Vector2> = [];
    private readonly timerStartVal = 2000;
    private timer = -1;
    private constrainedDistance = 100;
    // Ignored for now until implemented
    private constrainedType: ConstrainedType;

    constructor(columns: number, rows: number, dimensionType: DimensionType, width: number, height: number, hSpacing: number = 0, vSpacing: number = 0, constrainedType: ConstrainedType = "grid"){
        super(columns, rows, dimensionType, width, height, hSpacing, vSpacing);
        this.cellDirection = Array<Vector2>(this.getCellCount());
        this.cellStartPosition = Vector2.copyVector2Array([...this.getCells()]);
        this.constrainedType = constrainedType;
        this.cellVelocities.length = this.getCellCount();
        


        this.getCells().forEach((vec, idx) => {
            this.cellDirection[idx] = Vector2.random(this.cellSpeed, this.cellSpeed);
            this.cellVelocities[idx] = this.cellDirection[idx];
        });
    }

    updateCellPositions(time: number) {
        this.timer -= time;
        const timeout: boolean = this.timer <= 0; 
        if (timeout){
            this.timer = this.timerStartVal;
        }
        this.getCells().forEach((vec, idx) => {
            // If too far from cell center
            if (vec.distanceTo(this.cellStartPosition[idx]) > this.constrainedDistance){
                this.cellDirection[idx] = this.cellStartPosition[idx].directionTo(vec).multiply(this.cellSpeed);
            }
            else if (Math.random() > 0.975) {
                this.cellDirection[idx] = Vector2.random(this.cellSpeed, this.cellSpeed).normalized().multiply(this.cellSpeed);
            }
            this.cellVelocities[idx].translate(this.cellDirection[idx].multiply(time / 1000));
            this.cellVelocities[idx] = this.cellVelocities[idx].clamped(this.cellSpeed);
            vec.translate(this.cellVelocities[idx]);
        })
    }

    setCellSpeed(newSpeed: number){
        this.cellSpeed = newSpeed;
    }

    setCellVelocity(idx: number, vec: Vector2) {
        this.cellVelocities[idx] = vec;
    }

    addToCellVelocity(idx: number, vec: Vector2) {
        this.cellVelocities[idx].translate(vec);
    }
}