১. Differences between interfaces and types in TypeScript

Interface:
মূলত অবজেক্ট বা ক্লাসের কাঠামো ঠিক করার জন্য।
extends ব্যবহার করে অন্য Interface থেকে extend করা যায়।
একাধিকবার ডিক্লেয়ার করলে মিশে যায়, অর্থাৎ declaration merging হয়।

Type:
প্রিমিটিভ, অবজেক্ট, union বা intersection টাইপের জন্য ব্যবহার হয়।
একাধিকবার ডিক্লেয়ার করা যায় না, অর্থাৎ merge করা যায় না।

উদাহরণ:
interface Person {
  name: string;
  age: number;
}

type Vehicle = {
  make: string;
  model: string;
};

এখানে Person হল একটি Interface, আর Vehicle হল Type।

২. keyof কীওয়ার্ড

keyof ব্যবহার করে আমরা একটি টাইপের সব property এর নাম বের করতে পারি ইউনিয়ন টাইপ হিসেবে। এটা Type-safe ফাংশন বানাতে সাহায্য করে। ভুল প্রপার্টি ব্যবহার করলে TypeScript ইরর দেখায়।
এর প্রধান ব্যবহার হলো, কম্পাইল-টাইমে (compile-time) টাইপ নিরাপত্তা নিশ্চিত করা। যখন আপনি একটি ফাংশনে কোনো অবজেক্ট এবং তার একটি প্রোপার্টির নাম আর্গুমেন্ট হিসেবে পাস করতে চান, তখন keyof ব্যবহার করে নিশ্চিত করা যায় যে পাস করা নামটি আসলে ওই অবজেক্টের একটি বৈধ প্রোপার্টি।

উদাহরণ:
interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person; // "name" | "age"

এখন PersonKeys শুধু "name" এবং "age" ধরতে পারবে।