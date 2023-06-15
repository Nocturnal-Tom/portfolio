import { Vector2 } from "./vector";

export type DimensionType = "cell" | "grid";


export class Grid {
    private columns: number;
    private rows: number;
    private dimensionType: DimensionType;
    private width: number;
    private height: number;
    private cells: Vector2[] = [];
    private hSpacing: number;
    private vSpacing: number;
    private centered = true;

    constructor(columns: number, rows: number, dimensionType: DimensionType, width: number, height: number, hSpacing: number = 0, vSpacing: number = 0) {
        this.columns = columns;
        this.rows = rows;
        this.dimensionType = dimensionType;
        this.width = width;
        this.height = height;
        this.hSpacing = hSpacing;
        this.vSpacing = vSpacing;

        this.generateGrid();
    }

    public generateGrid(): void {
        this.cells.length = this.columns*this.rows;

        for (let i = 0; i < this.columns*this.rows; i++) {
            const row = Math.floor(i / this.columns);
            const column = i % this.columns;
            let x = 0;
            let y = 0;
            
            if (this.dimensionType === "cell"){
                x = column * (this.width + this.hSpacing);
                y = row * (this.height + this.vSpacing);
                if (this.centered) {
                    x += this.width / 2;
                    y += this.height / 2;
                }
            } else if (this.dimensionType === "grid") {
                x = (column / this.columns) * (this.width + this.hSpacing);
                y = (row / this.rows) * (this.height + this.vSpacing);
                if (this.centered) {
                    x += this.width/this.columns / 2;
                    y += this.height/this.columns / 2;
                }
            }

            if (row === Infinity) {
                y = 0;
            }
            if (column === Infinity) {
                x = 0;
            }

            this.cells[i] = new Vector2(x, y);
        }
    }

    public getCells(): ReadonlyArray<Readonly<Vector2>> {
        return this.cells;
    }

    public getDimnesions(){
        return {
            dimensionType: this.dimensionType,
            width: this.width,
            height: this.height
        }
    }

    public getCellDimensions() {
        return {
            width: this.dimensionType === "cell" ? this.width : this.width / (this.rows + this.hSpacing),
            height: this.dimensionType === "cell" ? this.height : this.height / (this.columns + this.vSpacing)
        }
    }

    public getCellCount(): number {
        return this.cells.length;
    }

    public getTotalDimensions() {
        return {
            width: this.dimensionType === "grid" ? this.width : this.width * this.columns,
            height: this.dimensionType === "grid" ? this.height : this.height * this.rows
        }
    }

    public getCell(idx: number | {column: number, row: number}) {
        if (typeof idx === "number"){
            return this.cells[idx];
        } else {
            return this.cells[idx.column + idx.row * this.columns];
        }
    }

    public setDimensions(dimensionType: DimensionType, width: number, height: number): void {
        this.dimensionType = dimensionType;
        this.width = width;
        this.height = height;
        this.generateGrid();
    }

    public setOffset(by: Vector2){
        this.cells.forEach((vec) => {
            vec.translate(by);
        })
    }

    public setOffsetIndividual(idx: number, offset: Vector2): void {
        this.cells[idx].translate(offset);
    }

    protected setCells(newCells: Array<Vector2>){
        this.cells = newCells;
    }
}