{
  /** */

  //oop - class
  //   class Animal {
  //     name: string; // by default all property is public
  //     species: string;
  //     sound: string;

  //     constructor(name: string, species: string, sound: string) {
  //       this.name = name;
  //       this.species = species;
  //       this.sound = sound;
  //     }

  //     makeSound() {
  //       console.log(`The ${this.name} sounds ${this.sound}`);
  //     }
  //   }

  //parameter properties for clean code and avoid code repeat
  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} sounds ${this.sound}`);
    }
  }

  const deshiKutta = new Animal("neri kutta", "dog", "ghew ghew");
  console.log(deshiKutta.name);
  deshiKutta.makeSound()

  const bilai = new Animal("deshi bilai", "cat", "mew mew mew mew");
  bilai.makeSound();

  /** */
}
