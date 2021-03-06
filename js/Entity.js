
const Sides = {
    TOP: Symbol('top'),
    BOTTOM: Symbol('bottom'),
    RIGHT: Symbol('left'),
    LEFT: Symbol('right'),
};

class Trait {
    constructor(name){
        this.NAME = name;
    }

    obstruct(){

    }

    update(){

    }
}

class Entity{
    constructor(){
        this.pos = new Vec2(0, 0);
        this.vel = new Vec2(0, 0);
        this.size = new Vec2(0, 0);
        this.offset = new Vec2(0, 0);
        this.bounds = new BoundingBox(this.pos, this.size, this.offset);
        this.lifetime = 0;

        this.traits = [];
    }
    addtrait(trait){
        this.traits.push(trait);
        this[trait.NAME] =trait;
    }

    obstruct(side){
        this.traits.forEach(trait =>{
            trait.obstruct(this, side);
        });
    }

    update(deltaTime){
        this.traits.forEach(trait =>{
            trait.update(this, deltaTime);
        });

        this.lifetime += deltaTime;
    }

}

