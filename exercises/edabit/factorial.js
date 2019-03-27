
function factorial(int) {
    if (int < 0) 
          return -1;
    else if (int == 0) 
        return 1;
    else {
        return (int * factorial(int - 1));
    }
  }


console.log(factorial(3));
