

export class Vector2{
    x: number;
    y: number;
    
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    translate(to: Vector2): void {
        this.x += to.x;
        this.y += to.y;
    }

    normalized(): Vector2 {
        let vec: Vector2 = {...this};
        let mag: number = vec.magnitude();
        return vec.divide(mag);
    }

    divide(by: Vector2 | number): Vector2 {
        let vec: Vector2 = {...this};
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
        let vec: Vector2 = {...this};
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
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

}