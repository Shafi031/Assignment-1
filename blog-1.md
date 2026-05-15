#  How do four pillars of OOP—Inheritance, Polymorphism, Abstraction, and Encapsulation—help manage logic and reduce complexity in large-scale ?

### Inheritance : This like hierarchy system. For example i get some characterstics from my parent class easily .No need to create again.Code reusability increased.

### Example: Parent class handle main logic ,if there need to solve any issue just edit on parents.No need to edit every child class. 

```typescript
class Employee{
    constructor(public name:string,public id:number){}

    public login():void{
        console.log(`${this.name} (ID: ${this.id}) has logged in successfully.`)
    }
}

class Developer extends Employeee{
    //here i can use all property of parents
}

```

### Polymorphism: One thing but do different different work.

## Example: Like in our mobile phone one button can handle multilple role ,sometimes it play music,sometimes torch etc.Thats why flexibility increased .

```typescript
class Animal{
    public makeSound():void{
        console.log("Animal Sound");
    }
}

class Dog extends Animal{
    public makeSound(){
        console.log("Bark");
    }
}
```

### Abstraction: It just work as a blueprint.

## Example: it declare some method that child class must use for maintain dicipline,standardized while coding.

```typescript
    abstract class Engine{
        abstract start():void;
    }

    class Car extends Engine{
        start(){
            console.log("Start the car!!")
        }
    }
```

### Encapsulation : Help us to protect data from unauthorized access .

### Example: In Bank software, there need safty of their data .If there everyone has permission to access the data , banking system will crush.Because money management crushed.So there we can use this guard to reduce risk .

```typescript
class Bank{
     
     constructor(private balance:number){}

     public get balance():number {
        return this.balance;
     }

     public deposit(amount:number):void{
        if(amount>0){
            this.balance += amount;
        }
     }
}```

# Conclusion - 
The four pillars of oop help manage largescale software by organizing code into reusable,secure and flexible structures.Inheritence reduces dublicartions through cose reusability,polymorphism allows same method to perform different tasks based on context .Abstraction maintains discipline by exposing only essential feature and Encapsulation protects sensitive data from unauthorized access. Together all concepts reduce complexity ,improve maintability and make software easierr to scale and manage.