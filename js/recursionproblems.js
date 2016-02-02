//RecursionProblems.js

        //reload page on title click
        $('#name').click(function (e) {
            e.preventDefault();
            location.reload();
        });

    	//commas every 3 numbers
	    function commaSeparateNumber(val){
	       while (/(\d+)(\d{3})/.test(val.toString())){
	         val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
	       }
	       return val;
	    };

    	//No. 1 - Write a JavaScript program to calculate the factorial of a number.
    	var factorial = (num) => {
            var myNum = parseInt(num);

            if (myNum < 0 || isNaN(myNum)) {
                return undefined;
            } else if (myNum === 0) {
                return 1;
            } else {
                return myNum * factorial(myNum - 1);
            }
        };

        $('#fact-result').hide();

    	$('#fact-button').click(function (e) {
    		e.preventDefault();
    		var myVal = $('#factorial-field').val();
            console.log('myVal ' , myVal);
            var result = factorial(myVal);
            if (result >= 1000) {
                result = commaSeparateNumber(result);
            } else if (result === undefined ) {
                result = 'undefined';
            }
            console.log('result ' , result);
    		var ans = $('#fact-result').append(result).hide();
    		ans.slideDown();
    	});

    	$('#fact-clear').click(function (event) {
    		event.preventDefault();
    		location.reload(); //clear both fields    		
    	});

    	//No. 2 - Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
    	var gcd = (num1, num2) => {
            var result = null;

            return (num2 === 0) ? result = num1 : (result = gcd(num2, num1 % num2));
    	};

        console.log(gcd(108,30));

        $('#gcd-result').hide();

        $('#gcd-button').click(function (e) {
            e.preventDefault();
            var num1 = $('#gcd-field-one').val();
            var num2 = $('#gcd-field-two').val();
            var result = commaSeparateNumber(gcd(num1, num2));
            console.log('result ' , result);
            var ans = $('#gcd-result').append(result).hide();
            ans.slideDown();
        });

        $('#gcd-clear').click(function (event) {
            event.preventDefault();
            location.reload(); //clear both fields          
        });

        //No. 3 - Write a JavaScript program to get the integers in range (x, y)
        var finArr = []; //initialize outside
        var range = (min, max) => {
          var result = null;

          if ((max - min) === 2) {
              return [max - 1];
          } else {                      
            finArr = range(min, max - 1);            
            finArr.push(max - 1);
            return finArr;
          }
        };

        console.log(range(2,9));

        $('#range-result').hide();

        $('#range-button').click(function (e) {
            e.preventDefault();
            var num1 = $('#range-field-one').val();
            var num2 = $('#range-field-two').val();
            var result = range(num1, num2);
            console.log('result ' , result);
            var ans = $('#range-result').append('[' + result + ']').hide();
            ans.slideDown();
        });

        $('#range-clear').click(function (event) {
            event.preventDefault();
            location.reload(); //clear both fields          
        });

        //No. 4 - Write a JavaScript program to compute the sum of an array of integers.
        var arraySum = (array) => {
          var result = null;          

          if (array.length === 1) {
            result = array[0];
          } else {            
            result = array.pop() + arraySum(array);
          }
          return result;
        };

        console.log(arraySum([1,2,3,4,5]));        

        $('#sum-result').hide();

        $('#sum-button').click(function (e) {
            e.preventDefault();
            
            var elem = $('#sum-field').val();
            console.log('elem ' , elem, 'typeof(elem)' , typeof(elem));

            //create array of values
            var numbers = [];
            if (_.contains(elem.split(''), ',')) {
                numbers = elem.split(',');
            } else if (_.contains(elem.split(''), ' ')) {
                numbers = elem.split(' ');
            } else {
                numbers = elem.split('');
            }

            _.each(numbers, (el, ind) => {
                numbers[ind] = +numbers[ind]; //convert to integers
            });

            console.log('numbers ' , numbers, '\nArray.isArray(numbers)' , Array.isArray(numbers));

            var result = arraySum(numbers);
            console.log('result ' , result);
            var ans = $('#sum-result').append(result).hide();
            ans.slideDown();
        });

        $('#sum-clear').click(function (event) {
            event.preventDefault();
            location.reload(); //clear both fields          
        });

        //No. 5 - Write a JavaScript program to compute the exponent of a number.
        var exponent = (base, exp) => {
            var result = null;

            if (exp === 1) {
                result = Math.pow(base, exp);
            } else {
                result = base * exponent(base, exp - 1);
            }
            return result;
        };

        console.log(exponent(4, 3));

        $('#exp-result').hide();

        $('#exp-button').click(function (e) {
            e.preventDefault();
            var base = $('#exp-field-base').val();            
            var exp = $('#exp-field-exp').val();            
            var result = commaSeparateNumber(exponent(base, exp));
            console.log('result ' , result);
            var ans = $('#exp-result').append(result).hide();
            ans.slideDown();
        });

        $('#exp-clear').click(function (event) {
            event.preventDefault();
            location.reload(); //clear both fields          
        });

        //No. 6 - Write a JavaScript program to get the first n Fibonacci numbers.
        var fibonacci = (num) => {
            var result = null
            var resultArr = [];
            var ind = 0;

            //calculate fibonacci number at 'n'
            var fibo = (n) => (n < 1) ? 0 : (n < 2) ? 1 : fibo(n - 2) + fibo(n - 1);
            

            while (ind <= num) {
                resultArr.push(fibo(ind));
                ind++;                
            }            
            result = resultArr.join(', ');            
            return result;            
        };            

        console.log(fibonacci(13));

        $('#fibo-result').hide();

        $('#fibo-button').click(function (e) {
            e.preventDefault();
            var num = $('#fibo-field').val();                        
            var result = commaSeparateNumber(fibonacci(num));
            console.log('result ' , result);
            var ans = $('#fibo-result').append(result).hide();
            ans.slideDown();
        });

        $('#fibo-clear').click(function (event) {
            event.preventDefault();
            location.reload(); //clear both fields          
        });

        //No. 7 - Write a JavaScript program to check whether a number is even or not.
        var evenOrNot = (num) => {            
            var result = null;
            var lastDigit = parseInt(num.toString().split('').pop());
            console.log('lastDigit ' , lastDigit);;

            if (lastDigit === 2) {
                result = 'even';
            } else if (lastDigit === 3) {
                result = 'odd';
            } else {                
                lastDigit -= 2;
                result = evenOrNot(lastDigit);
            }
            return result;
        };

        console.log(evenOrNot(13));
        console.log(evenOrNot(18));

        $('#even-result').hide();

        $('#even-button').click(function (e) {
            e.preventDefault();
            var num = $('#even-field').val();                        
            var result = evenOrNot(num);
            console.log('result ' , result);
            var ans = $('#even-result').append(result).hide();
            ans.slideDown();
        });

        $('#even-clear').click(function (event) {
            event.preventDefault();
            location.reload(); //clear both fields          
        });

        //No. 8 - Write a JavaScript program for binary search.        
        var binarySearch = (array, target) => {            
            var result = null;
            var lo = 0;
            console.log('lo ' , lo);
            var hi = array.length - 1;
            console.log('hi ' , hi);

            //sort
            array.sort((a,b) => a - b);
            console.log('array ' , array);

            var _binarySearch = (modArray, hi, lo, target) => {                
                //median
                var median = lo + Math.round((hi - lo) / 2);
                console.log('median (OUTSIDE)' , median);

                console.log('modArray[median] ' , modArray[median], '\nmedian ' , median, '\ntarget ' , target);

                if ((modArray[median] - target) === 0) {                                        
                    result = median;                                    
                    console.log('result ' , result);
                } else {                    
                    if (modArray[median] < target) {                        
                        lo = median;                        
                        result = _binarySearch(modArray, hi, lo, target);                                                
                    } else if (modArray[median] > target) {
                        hi = median;
                        result = _binarySearch(modArray, hi, lo, target);
                    }
                }
                return result;                
            };
            _binarySearch(array, hi, lo, target);
            return result;            
        };

        //console.log(binarySearch([0,19,68,13,5,22,41,55,81,72,98], 55));

        $('#binary-result').hide();

        $('#binary-button').click(function (e) {
            e.preventDefault();

            var elem = $('#binary-field').val();
            console.log('elem ' , elem, 'typeof(elem)' , typeof(elem));

            //create array of values
            var numArr = [];
            if (_.contains(elem.split(''), ',')) {
                numArr = elem.split(',');
            } else if (_.contains(elem.split(''), ' ')) {
                numArr = elem.split(' ');
            } else {
                numArr = elem.split('');
            }

            _.each(numArr, (el, ind) => {
                numArr[ind] = +numArr[ind]; //convert to integers                
            });

            console.log('numArr ' , numArr);

            var target = $('#binary-field-target').val();
            console.log('target ' , target);            
            var result = binarySearch(numArr, target);
            console.log('result ' , result);
            var ans = $('#binary-result').append(result).hide();
            ans.slideDown();
        });

        $('#binary-clear').click(function (event) {
            event.preventDefault();
            location.reload(); //clear both fields          
        });

        //Flatten
        var flatten = (nestedArray, result) => {
          var result = [];
            var _flatten = (array) => {
                _.each(array, (el) => {
                    if (Array.isArray(el)) {
                        _flatten(el);
                    } else {
                        result.push(el);
                    }            
                });          
            };
        _flatten(nestedArray);
        return result;
        };        

        console.log(flatten([1, [2], [3, [[4]]]]));

        //Factorial Array
        var factorialArray = function(n) {
            //Your code here
            var factArr = [];
            var result = null;
            var i = 0;

            function _factorialArray (num) {
                if (num < 0 || isNaN(num)) {
                    result = undefined;
                } else if (num === 0) {
                    result = 1;
                } else {
                    result = num * _factorialArray(num - 1);
                }
                return result;
            };

            if (n >= 0) {
                while (i <= n) {        
                    _factorialArray(i);
                    factArr.push(result);
                    i++;
                }
            } else {
                factArr = undefined;
            }
            

            return factArr;
        };

        console.log(factorialArray(12));

        $('#factorial-array-result').hide();

        $('#factorial-array-button').click(function (e) {
            e.preventDefault();
            var myVal = $('#factorial-array-field').val();
            var result = factorialArray(myVal);
            console.log('result ' , result);
            var ans = $('#factorial-array-result').append('[ ' + result + ' ]').hide();
            ans.slideDown();
        });

        $('#factorial-array-clear').click(function (event) {
            event.preventDefault();
            location.reload(); //clear both fields          
        });

        //Reverse
        var rev = (array) => {
          var finalArr = [];
          var result = null;
          
          var _rev = (arr) => {
          console.log('arr ' , arr);
            if (arr.length === 0) {
                result = finalArr;
            } else {
                finalArr.push(arr.pop());
                result = _rev(arr);
            }            
          };  
          _rev(array);
          return finalArr;
        };

        console.log(rev([1,2,3,4,5]));

        $('#array-revrs-result').hide();

        $('#array-revrs-button').click(function (e) {
            e.preventDefault();

            var elem = $('#array-revrs-field').val();

            //create array of values
            var tempArr = [];
            if (_.contains(elem.split(''), ',')) {
                tempArr = elem.split(',');
            } else if (_.contains(elem.split(''), ' ')) {
                tempArr = elem.split(' ');
            } else {
                tempArr = elem.split('');
            }

            _.each(tempArr, (el, ind) => {
                tempArr[ind] = +tempArr[ind]; //convert to integers                
            });

            console.log('tempArr ' , tempArr);
            
            var result = rev(tempArr);
            console.log('result ' , result);
            var ans = $('#array-revrs-result').append('[ ' + result + ' ]').hide();
            ans.slideDown();
        });

        $('#array-revrs-clear').click(function (event) {
            event.preventDefault();
            location.reload(); //clear both fields          
        });

        //Recursive Average
        var recAvg = (array) => {
          var result = null;
          var divisor = array.length;
          var tempArr = [];
          
          var _recAvg = (arr) => {            
            var ans = null;           

            if (arr.length === 1) {
                ans = arr[0];                
            } else {
                ans = arr.pop() + _recAvg(arr);                                
            }                    
            return ans;            
          };            

          _.each(array, (el) => {
            if (Array.isArray(el)) {
                var divTwo = el.length;
                tempArr.push(parseInt(_recAvg(el) / divTwo));
            } else {
                tempArr.push(el);               
            }
          });

          console.log('tempArr ' , tempArr);

          result = parseFloat(_recAvg(tempArr) / divisor).toFixed(2);                    
          return result;
        };

        console.log(recAvg([1,2,3]));
        console.log(recAvg([1,2,[2,4]]));

        $('#array-avg-result').hide();

        $('#array-avg-button').click(function (e) {
            e.preventDefault();

            var elem = $('#array-avg-field').val();
            console.log('elem ' , elem, Array.isArray(elem));

            //create array of values
            var tempArr = [];
            var elemArr = elem.split('');
            console.log('elemArr ' , elemArr);
            elemArr.shift();
            elemArr.pop();
            console.log('elemArr ' , elemArr);
            if (_.contains(elem.split(''), ',')) {
                tempArr = elem.split(',');
            } else if (_.contains(elem.split(''), ' ')) {
                tempArr = elem.split(' ');
            } else {
                tempArr = elem.split('');
            }

            _.each(tempArr, (el, ind) => {
                tempArr[ind] = +tempArr[ind]; //convert to integers                
            });

            console.log('tempArr ' , tempArr);
            
            var result = recAvg(tempArr);
            console.log('result ' , result);
            var ans = $('#array-avg-result').append(result).hide();
            ans.slideDown();
        });