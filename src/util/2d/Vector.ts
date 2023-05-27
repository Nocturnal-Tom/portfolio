

export class Vector2 {
    public x: number;
    public y: number;
    
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    static random(x = 1.0, y = 1.0): Vector2 {
        const newX = (Math.random() - 0.5) * 2 * x;
        const newY = (Math.random() - 0.5) * 2 * y;
        return new Vector2(newX, newY);
    }

    static zero(): Vector2 {
        return new Vector2(0, 0);
    }

    static one(): Vector2 {
        return new Vector2(1, 1);
    }

    static up(): Vector2 {
        return new Vector2(0, 1);
    }

    static down(): Vector2 {
        return new Vector2(0, -1);
    }

    static left(): Vector2 {
        return new Vector2(-1, 0);
    }

    static right(): Vector2 {
        return new Vector2(1, 0);
    }

    static inf(): Vector2{
        return new Vector2(Infinity, Infinity);
    }

    translate(to: Vector2): void {
        this.x += to.x;
        this.y += to.y;
    }

    translated(to: Vector2): Vector2 {
        return new Vector2(
            this.x + to.x,
            this.y + to.y
        )
    }


    normalized(): Vector2 {
        const vec: Vector2 = this.copy();
        const mag: number = vec.magnitude();
        return vec.divide(mag);
    }

    divide(by: Vector2 | number): Vector2 {
        const vec: Vector2 = this.copy();
        if (typeof(by) == "number"){
            vec.x /= by;
            vec.y /= by;
        }
        else{
            vec.x /= by.x;
            vec.y /= by.y;
        }
        return vec
    }

    multiply(by: Vector2 | number): Vector2 {
        const vec: Vector2 = this.copy();
        if (typeof(by) == "number"){
            vec.x *= by;
            vec.y *= by;
        }
        else{
            vec.x *= by.x;
            vec.y *= by.y;
        }
        return vec
    }

    magnitude(): number {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }

    inverted(): Vector2 {
        return new Vector2(-this.x, -this.y);
    }

    distanceTo(to: Vector2): number {
        return Math.abs(this.translated(to.inverted()).magnitude())
    }

    directionTo(to: Vector2): Vector2 {
        return this.translated(to.inverted()).normalized();
    }

    
    clamped(maxMag: number): Vector2 {
        const vec = this.copy();
        if (vec.magnitude() < maxMag){
            return vec;
        }
        return this.copy().normalized().multiply(maxMag);
    }
    
    rotated(rads: number): Vector2 {
        const vec = this.copy();
        vec.x = Math.cos(vec.x) - Math.sin(vec.y);
        vec.y = Math.sin(vec.x) + Math.cos(vec.y);
        return vec;
    }
    
    copy(): Vector2 {
        return new Vector2(this.x, this.y);
    }

    static copyVector2Array(vecs: Array<Vector2>): Array<Vector2> {
        return vecs.map((vec) => {
            return vec.copy();
        })
    }

}