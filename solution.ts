function formatValue(inputValue: string | number | boolean): string | number | boolean {
  if (typeof inputValue === "string") {
    return inputValue.toUpperCase(); 
  }

  if (typeof inputValue === "number") {
    return inputValue * 10; 
  }

  if (typeof inputValue === "boolean") {
    return !inputValue; 
  }

  return inputValue;
}




function getLength(inputValue: string | any[]): number {
  if (typeof inputValue === "string") {
    return inputValue.length; 
  }

  if (Array.isArray(inputValue)) {
    return inputValue.length;
  }

  return 0; 
}



class Person {
  name: string;
  age: number;

  constructor(personName: string, personAge: number) {
    this.name = personName;
    this.age = personAge;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}



interface RatedItem {
  title: string;
  rating: number;
}

function filterByRating(items: RatedItem[]): RatedItem[] {
  return items.filter((item) => item.rating >= 4);
}




interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  const availabilityText = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availabilityText}`;
}




function getUniqueValues<T extends string | number>(array1: T[], array2: T[]): T[] {
  const uniqueValues: T[] = [];

  
  for (let i = 0; i < array1.length; i++) {
    let exists = false;
    for (let j = 0; j < uniqueValues.length; j++) {
      if (array1[i] === uniqueValues[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      uniqueValues.push(array1[i]);
    }
  }

  
  for (let i = 0; i < array2.length; i++) {
    let exists = false;
    for (let j = 0; j < uniqueValues.length; j++) {
      if (array2[i] === uniqueValues[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      uniqueValues.push(array2[i]);
    }
  }

  return uniqueValues;
}




interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  return products
    .map(product => {
      const totalPrice = product.price * product.quantity;
      if (product.discount) {
        return totalPrice * (1 - product.discount / 100);
      }
      return totalPrice;
    })
    .reduce((acc, curr) => acc + curr, 0);
}






