১. Differences between interfaces and types in TypeScript

Interface: অবজেক্ট বা ক্লাসের কাঠামো নির্ধারণ করা, extends ও declaration merging সমর্থন থা অর্থাৎ একাধিকবার ডিক্লেয়ার করলে মিশে যায়।

Type: union, intersection, primitive alias তৈরি করতে ব্যবহার হয়, merge করা যায় না অর্থাৎ একাধিকবার ডিক্লেয়ার করা যায় না।

উদাহরণ:

interface Person { name: string; age: number }
type Vehicle = { make: string; model: string }

২. keyof কীওয়ার্ড

একটি টাইপের property নামগুলো বের করে ইউনিয়ন টাইপ হিসেবে।Type-safe ফাংশন তৈরি করতে সাহায্য করে।ভুল property ব্যবহার করলে error দেখায়।

উদাহরণ:
interface Person { name: string; age: number }
type PersonKeys = keyof Person; // "name" | "age"