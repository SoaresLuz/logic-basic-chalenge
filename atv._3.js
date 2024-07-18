class hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type
    }

    attack(){
        if(this.type === "spearman"){
            console.log(`The ${this.type} attacks with his spear`)
        }
        else if(this.type === "ninja"){
            console.log(`The ${this.type} throw his shurikens`)
        }
        else if(this.type === "fighter"){
            console.log(`The ${this.type} throw his punches`)
        }
        else if(this.type === "bard"){
            console.log(`The ${this.type} play his ukulele`)
        }
    }
}

let spearman = new hero("Lucas", 28, "spearman")

let ninja = new hero("Jiraya", 22, "ninja")

let fighter = new hero("Ippo", 19, "fighter")

let bard = new hero("Ton Jobin", 76, "bard")

spearman.attack()
ninja.attack()
fighter.attack()
bard.attack()