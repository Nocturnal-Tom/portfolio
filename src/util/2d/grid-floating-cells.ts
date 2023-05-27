import { Vector2 } from "./vector";
import { Grid, DimensionType } from "./grid";


export type ConstrainedType = "none" | "cells" | "grid";

export class GridFloatingCells extends Grid {
    private cellDirection: Array<Vector2>;
    private cellStartPosition: Array<Vector2>;
    private cellSpeed: number = 0.5;
    private cellVelocities: Array<Vector2> = [];
    private constrainedDistance = 100;
    private cellDirectionChangeTimer = -1;
    private cellDirectionChangeTimerStartVal = 50; // Miliseconds
    // Not yet implemented
    private constrainedType: ConstrainedType;

    constructor(columns: number, rows: number, dimensionType: DimensionType, width: number, height: number, hSpacing: number = 0, vSpacing: number = 0, constrainedType: ConstrainedType = "grid"){
        super(columns, rows, dimensionType, width, height, hSpacing, vSpacing);
        this.cellDirection = Array<Vector2>(this.getCellCount());
        this.cellStartPosition = Vector2.copyVector2Array([...this.getCells()]);
        this.constrainedType = constrainedType;
        this.cellVelocities.length = this.getCellCount();
        
        
        // Set initial directions and celocities
        this.getCells().forEach((vec, idx) => {
            this.cellDirection[idx] = Vector2.random(this.cellSpeed, this.cellSpeed);
            this.cellVelocities[idx] = this.cellDirection[idx];
        });
    }
    
    updateCellPositions(time: number) {
        this.cellDirectionChangeTimer -= time;
        const cellDirectionChangeTimeout = this.cellDirectionChangeTimer <= 0;
        let cellDirectionChangeidx = 0;
        if (cellDirectionChangeTimeout){
            this.cellDirectionChangeTimer = this.cellDirectionChangeTimerStartVal;
            cellDirectionChangeidx = Math.round(Math.random() * this.getCellCount());
            cellDirectionChangeidx %= this.getCellCount();
        }
        this.getCells().forEach((vec, idx) => {
            // If too far from cell center
            if (vec.distanceTo(this.cellStartPosition[idx]) > this.constrainedDistance){
                this.cellDirection[idx] = this.cellStartPosition[idx].directionTo(vec).multiply(1);
            }
            else if (cellDirectionChangeTimeout && idx === cellDirectionChangeidx) {
                this.cellDirection[idx] = Vector2.random().normalized().multiply(1);
            }
            
            // Move the velocities towards the direction it wants to go
            this.cellVelocities[idx].translate(this.cellDirection[idx].multiply(time / 1000 ));
            // Slow down the velocity over time
            this.cellVelocities[idx] = this.cellVelocities[idx].multiply(1.0- time/1000 - 0.05);
            
            // Apply velocity to the cell
            vec.translate(this.cellVelocities[idx].clamped(this.cellSpeed * 2));
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