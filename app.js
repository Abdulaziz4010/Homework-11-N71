// function transformString(s) {
//     return s.split('').map((char, index) => char.repeat(index + 1)).join('-');
//   }
  
//   console.log(transformString("abcd")); 
  


// function isPalindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
//   }
  
//   console.log(isPalindrome("madam")); 
//   console.log(isPalindrome("hello"));  
  

// function hello(str) {
//     const chase = new Set(str);
//     return chase.size === str.length;
//   }
  
//   console.log(hello("hello"));
//   console.log(hello("world"));  


// function numbers(arr) {
//     const sum = arr.reduce((acc, num) => acc + num, 0);
//     return sum % 2 === 0 ? 'even' : 'odd';
//   }
  
//   console.log(numbers([1, 2, 3]));  
//   console.log(numbers([1, 2, 4])); 



// function numbers(num) {
//     let nums = [];
//     for (let i = 1; i <= num; i++) {
//       if (num % i === 0) {
//      nums.push(i);
//       }
//     }
//     return nums.length === 2 ? 'prime' : nums;
//   }
  
//   console.log(numbers(7));  
//   console.log(numbers(12)); 
  