function greetUser(name: string, greeting: string = 'Hello'): string {
    return `${greeting}, ${name}!`;
}


console.log(greetUser('Anu'));          
console.log(greetUser('Carolyn', 'Good morning')); 
console.log (greetUser('keerthi','hi'));
