interface Greeter {
    greet(): string;
}

class PersonGreeter implements Greeter {
    greet(): string {
        return "Typescript interface example";
    }
}

const greeter = new PersonGreeter();
console.log(greeter.greet());
