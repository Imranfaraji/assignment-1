const formatValue=(value:string|number|boolean):string|number|boolean=>{
   if(typeof value === 'number'){
    return value*10
   }else if(typeof value ==="string"){
    return value.toUpperCase()
   }else{
    return !value
   }
}




const getLength=(value:string|any[]):number=>{
    if(typeof value === 'string'){
        return value.length
    }

    if(Array.isArray(value)){
        return value.length
    }
    return 0
}

class Person{
    name:string;
    age:number
    constructor (name:string,age:number){
        this.name=name;
        this.age=age
    }

    getDetails(){
        return (`'Name: ${this.name}, Age: ${this.age}'`)
    }
}







interface Item{
    title:string;
    rating:number
}


const filterByRating=(items:Item[]):Item[]=>{
    const newArr:Item[]=[]
    
    items.map((item)=>{
        if(item.rating >= 4){
            newArr.push(item)
        }
    })

    return newArr

}





interface User{
    id:number;
    name:string;
    email:string;
    isActive:boolean
}


const filterActiveUsers =(users:User[]):User[]=>{
    return users.filter((user)=>user.isActive===true)
}








interface Book{
    title:string;
author:string;
publishedYear:number;

isAvailable:boolean
}


const printBookDetails=(book:Book)=>{
    const availability=book.isAvailable?"Yes":"No";
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`)
}


const getUniqueValues =(arr1:(number|string)[],arr2:(number|string)[]):(number|string)[]=>{
      let result:(number|string)[]=[];
      for(let x of arr1 ){
        if(result.indexOf(x)===-1){
            result.push(x)
        }
      }
      for(let x of arr2 ){
        if(result.indexOf(x)===-1){
            result.push(x)
        }
      }

      return result;
}


interface Product{
    name:string;
    price:number;
    quantity:number;
    discount?: number
}


const calculateTotalPrice=(products:Product[]):number=>{

    if(products.length===0) return 0

    return products
    .map((product)=>{
        const total=product.price*product.quantity
        if(product.discount){
            return total-(total*product.discount)/100;
        }
        return total
    })
    
    .reduce((sum,value)=>sum+value,0)
}






