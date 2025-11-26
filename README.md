Blog 1: What are some differences between interfaces and types in TypeScript?


TypeScript এ interface এবং type - দুটোই object structure define করতে ব্যবহৃত হয়।
কিন্তু কিছু গুরুত্বপূর্ণ পার্থক্য আছে ।
১. Extension / Inheritance
** interface- extends ব্যবহার করে extend করা যায়।
** type - intersection (&) ব্যবহার করে extend করা যায়।

২. Declaration Merging
** interface - merge হয়
** type - merge হয় না




Blog 2: What is the use of the keyof keyword in TypeScript?

1. any
any মানে__ typeScript এ value মেটার করে না ।
এটা type safety নষ্ট করে।

যেমন:-

let a:any=10;
a='hello';
a=true;


2. unknown

unknown হলো নিরাপদ version of any।
চাইলে যে কোনো value assign করতে পারবে,
কিন্তু use করার আগে type check করতে হবে।

যেমন:-

let data: unknown;
data='Hello';
if(typeof data ==='string'){
    console.log(data.toUpperCade())
}


3. never

never মানে হলো এই function কখনো value return করবে না।

যেমন:- 
** Error throw করে
** Infinite loop


function error(msg: string):never {
    throw ne Error(msg)
}
