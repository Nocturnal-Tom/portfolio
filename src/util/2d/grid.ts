import { Vector2 } from "./Vector";

export type DimensionType = "cell" | "grid";
export class Grid {
    private columns: number;
    private rows: number;
    private dimension_type;
    private cells: Vector2[] = [];
    
    constructor(columns: number, rows: number, dimension_type: DimensionType, width: number, height: number) {
        this.columns = columns;
        this.rows = rows;
        this.dimension_type = dimension_type;

        this.generateGrid();
    }

    generateGrid(){
        this.cells = [new Vector2(1,1)];
    }
}