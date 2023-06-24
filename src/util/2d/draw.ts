import { Vector2 } from "./vector";

export class DrawingContext {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    public color = "#FFFFFF";
    public lineWidth = 1.0;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const tmp_ctx = this.canvas.getContext("2d");
        if (!tmp_ctx) {
            throw new Error("Canvas does not have 2d rendering context!");
        }

        this.ctx = tmp_ctx;
    }

    drawPath(points: Array<Vector2>, color: string = this.color, lineWidth = this.lineWidth){
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = lineWidth;
        points.forEach((point) => {
            this.ctx.lineTo(point.x, point.y);
        })
        this.ctx.stroke();
    }

    drawLine(from: Vector2, to: Vector2, color: string = this.color, lineWidth = this.lineWidth){
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = this.ctx.strokeStyle;
        this.ctx.lineWidth = lineWidth;

        this.ctx.lineTo(from.x, from.y);
        this.ctx.lineTo(to.x, to.y);
        
        this.ctx.stroke();
    }

    drawCircle(at: Vector2, size: number, color: string = this.color, lineWidth = this.lineWidth) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = lineWidth
        this.ctx.arc(at.x, at.y, size, 0, 2*Math.PI);
        this.ctx.stroke();
    }

    drawRadialGradient(from: Vector2, fromSize: number, to: Vector2, toSize: number, colorStops?: any[]){
        this.ctx.fillStyle = this.ctx.createRadialGradient(from.x, from.y, fromSize, to.x, to.y, toSize);
        this.ctx.fillStyle.addColorStop(0, "#1f1f1f");
        this.ctx.fillStyle.addColorStop(1, "#000");
        this.ctx.strokeStyle = this.ctx.fillStyle;

        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}