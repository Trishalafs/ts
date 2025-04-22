interface PersonDetails{
    firstName:string;
    lastName:string;
    getFullName():string;
}

class Role{
    roleName:string;

    constructor(roleName:string){
        this.roleName=roleName;
    }
    getRole():any{
        return `The role is ${this.roleName}`;
    }
}

class User extends Role implements PersonDetails{
    firstName: string;
    lastName: string;

    constructor(firstName:string,lastName:string,roleName:string){
        super(roleName);
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getFullName(): string {
        return `FullName: ${this.firstName} ${this.lastName}`;
    }
}



const role=new Role("Client Account Manager");
const user=new User("Jayashre","Gnanavel","Junior CAM");

console.log(role.getRole());
console.log(user.getFullName());
console.log(user.getRole());