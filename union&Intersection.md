Union & Intersection :
Union: ইউনিয়ন সাধারণত কোন উপাদানে যদি সেট থাকে সেটি একবারই দিবে। এই ইউনিয়নের সাহায্যে টাইপ ক্রিয়েট করতে পারি সাধারণত ওর এর মত।
উদাহরণ:

type Identity = string | number

const id : Identity = 70000

console.log(id);


Intersection: ইন্টারসেকশন হলো দুইটা টাইপের সব প্রপার্টি একসাথে থাকবে। এটি সাধারণত আমরা লজিক এ ব্যবহার করে থাকি। এটি আমরা এন্ড হিসেবে ব্যবহার করি

উদাহরণ:
type HasName = { name: string };
type HasAge = { age: number };

type Person = HasName & HasAge;

const p: Person = {
  name: "Karim",
  age: 25
};