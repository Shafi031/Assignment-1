# How generics help Build reusable and strictly type code

- Generics are the most powerful features in ts.It allows us to create reusable function,class etc that can work with different data types while still maintaining strict type safety.

## without generics we repeat same function with different type.Like,
```typescript
    function getString (v:string):string{
        return v;
    }

    function getNumber (v:number):number{
        return v;
    }
```

 but using generics this is too easy,
```typescript
    function getValue<T>(v:T):T{
        return v;
    }
    console.log(getValue<string>("Hello"));
    console.log(getValue<number>(12));
```

# Conclusion: Generics mainly help us to build flexible ,rusable and strictly typed applications.Reduce code duplicate,improve maintainabillity and type safety.Lastly it make code cleaner ,safer and easier to scale.