১. Differences between interfaces and types in TypeScript

Interface:
মূলত অবজেক্ট বা ক্লাসের কাঠামো ঠিক করার জন্য।
extends ব্যবহার করে অন্য Interface থেকে extend করা যায়।
একাধিকবার ডিক্লেয়ার করলে মিশে যায়, অর্থাৎ declaration merging হয়।
Object-এর structure define করতে পারে

উদাহরণ:

# Functions-এর structure define করতে পারে
interface Login {
  (username: string, password: string): boolean;
}

# Array-এর structure define করতে পারে
interface NameList {
  [index: number]: string;
}

# Class-এ implement করা যায়
interface Animal {
  sound: string;
  makeSound(): void;
}

class Dog implements Animal {
  sound = "Bark";
  makeSound() {
    console.log(this.sound);
  }
}

# Extend করা যায় (Inheritance)
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

Type:
প্রিমিটিভ, অবজেক্ট, union বা intersection টাইপের জন্য ব্যবহার হয়। একাধিকবার ডিক্লেয়ার করা যায় না, অর্থাৎ merge করা যায় না। TypeScript-এর type হলো এক ধরনের নাম দেওয়ার সিস্টেম।

এটা interface-এর চেয়ে অনেক বেশি flexible।


উদাহরণ:


# Primitive alias
type ID = string | number;

# Union type
type Status = "success" | "error" | "pending";

# Intersection type
type Position = { x: number } & { y: number };

# Function type
type Multiply = (a: number, b: number) => number;

# Tuple type
type RGB = [number, number, number];

# Generics সহ ব্যবহার
type ApiResponse<T> = {
  data: T;
  status: number;
};

⭐ Type-এর সীমাবদ্ধতা:
❌ merge হয় না
type A = { x: number };
type A = { y: number }; // ❌ Error

❌ extend করা যায় না (extends keyword দিয়ে)

তবে intersection (&) ব্যবহার করে বাড়ানো যায়:

type Animal = { name: string };
type Dog = Animal & { breed: string };

২. keyof কীওয়ার্ড

keyof ব্যবহার করে আমরা একটি টাইপের সব property এর নাম বের করতে পারি ইউনিয়ন টাইপ হিসেবে। এটা Type-safe ফাংশন বানাতে সাহায্য করে। ভুল প্রপার্টি ব্যবহার করলে TypeScript ইরর দেখায়।
এর প্রধান ব্যবহার হলো, কম্পাইল-টাইমে (compile-time) টাইপ নিরাপত্তা নিশ্চিত করা। যখন আমরা একটি ফাংশনে কোনো অবজেক্ট এবং তার একটি প্রোপার্টির নাম আর্গুমেন্ট হিসেবে পাস করতে চাই, তখন keyof ব্যবহার করে নিশ্চিত করা যায় যে পাস করা নামটি আসলে ওই অবজেক্টের একটি বৈধ প্রোপার্টি।

keyof দিলে কোনো টাইপ বা interface-এর সব প্রোপার্টির নাম বের হয়ে Union টাইপ বানায়।

উদাহরণ:
interface User {
  name: string;
  age: number;
  email: string;
}

type UserKeys = keyof User;


এখন UserKeys হলো:

"name" | "age" | "email"
