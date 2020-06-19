Number.isNaN("haha"); // no type coercion, so => false.
isNaN("abc");  // type coercion: "abc" will coercion to number which will be NaN, so => true.