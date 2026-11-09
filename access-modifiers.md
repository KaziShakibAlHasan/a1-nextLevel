টাইপস্ক্রিপ্ট এ OOP এর জন্য ব্যবহার করে ক্লাস এর method ও property নিয়ন্ত্রণ করা হয় । চারটি modifier আছে:
১.public: এটি সব জায়গা থাকে দেখা যাবে ক্লাস এর ভিতরে এবং বাইরে কিংবা সাবক্লাস এও। এটি স্পষ্ট ভাবে লিখে দেয়া লাগে নাহ ।যদি কোনো 
modifier নাহ দিলে টাইপেস্ক্রিপ্ট ধরে নেয় এটি public।
উদাহরণ:
class Student {
    public name: string;
    public roll : number;
    constructor(name: string, roll: number){
        this.name = name,
        this.roll = roll;
    }
}

2.private: এটি কোনো ভাবেই ক্লাস এর বাহিরে থাকে এক্সেস করা যাবে নাহ। এটি অবশ্যই ডিক্লার করে দিতে হবে প্রাইভেট ।
উদাহরণ:
class Bank {
  private balance = 1000;

  show() {
    console.log(this.balance) 
  }
}

const b = new Bank();


3.Protected:এটি ক্লাস এর বাহিরে এক্সেস করা যাবে না কিন্তু এই ক্লাস যদি অন্য ক্লাস ইনহেরিট করে সেই ক্লাস ব্যবহার করা যাবে 
উদাহরণ:
class Animal {
  protected sound = "Some sound";
}

class Dog extends Animal {
  bark() {
    console.log(this.sound)
  }
}

const d = new Dog()

4.Readonly: এই এক্সেস মডিফায়ার টি  দেখা যায় কিন্তু এক্সেস করা যায়না। সাধারণত readonly এর আগে public দেয়া হয়।
উদাহরণ:
class User {
 public readonly id = 101;
}

const u = new User()

