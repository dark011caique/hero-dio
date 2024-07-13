class hero{
    constructor(name, idade , tipo){
        this.name = name,
        this.idade = idade,
        this.tipo = tipo
    }

    shoot(){
        let attack

        switch(this.tipo){
            case "mago":
                attack = "magia"
            break;

            case "guerreiro":
                attack = "espada"
            break;

            case "monge":
                attack = "artes marciais"
            break;

            case "ninja":
                attack = "shuriken"
            break;

            default:
                ataque = 'realizou um ataque';
        }

        console.log(`o ${this.tipo} atacou usando ${attack}`)
    }
}

let heroi1 = new hero("Deku" , 14 , "mago")
let heroi2 = new hero("naruto" , 14 , "ninja")
let heroi3 = new hero("kakashi" , 14 , "guerreiro")
let heroi4 = new hero("pain" , 14 , "monge")

heroi1.shoot()
heroi2.shoot()
heroi3.shoot()
heroi4.shoot()