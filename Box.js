class Box {

    constructor(x, y, w, h) {

        var option = {

            'restitution':0.8,
            'friction':1.0,
            'density':0.2

        }

        this.body = Bodies.rectangle(x, y, w, h, option);
        this.width = w;
        this.height = h;
        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;
        rectMode(CENTER);
        strokeWeight(10);
        stroke("yellow");
        fill("lightblue");
        rect(pos.x, pos.y, this.width, this.height);

    }

}