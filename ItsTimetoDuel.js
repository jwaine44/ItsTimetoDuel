class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target){
        target.res -= this.power;
    }
    play(target){
        if(target instanceof Unit){
            attack(target);
            } else {
                throw new Error ("Target must be a unit!");
            }
        }
    }

class Effect extends Card {
    constructor(name, cost, stat, text, magnitude){
        super(name, cost);
        this.stat = stat;
        this.text = text;
        this.magnitude = magnitude;
    }
    change(target, stat){
        if(this.stat == "power"){
            target.power += this.magnitude;
        } else {
            target.res += this.magnitude;
        }
    }

    play(target){
        if(target instanceof Unit) {
            this.change(target);
        } else {
            throw new Error ("Target must be a unit!");
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "resilience", "increase target's resilience by 3", 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "resilience", "reduce target's resilience by 2", -2);
const pairProgramming = new Effect("Pair Programming", 3, "power", "increase target's power by 2", 2);

hardAlgorithm.play(redBeltNinja);
console.log(redBeltNinja);

unhandledPromiseRejection.play(redBeltNinja);
console.log(redBeltNinja);

pairProgramming.play(redBeltNinja);
console.log(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);
console.log(blackBeltNinja);