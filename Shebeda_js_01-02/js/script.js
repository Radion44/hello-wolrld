function pow(a, n) {

	n = Math.round(n); 
		
		if (n == 0) {
			if (a == 0) {
				alert('Ноль в нулевой степени');
				return 'error';
			}
			return 1;
			}
			
			
		if (n > 0) {
			var result = 1;
	        for (var i = 1; i < n; i++)
		    result *= a;
		    return result;

        }
		
		if (n < 0) {
			if (a == 0) {
				alert('Ноль не возвести в отрицательную степень');
				return 'ERROR';
			}
			var result=1;
			for (var i=1; i<=(-n); i++) result=result/a;
			return result;
			}
	     
} 

    



    var a = prompt('Ведите число для возведения в степень');
    console.log('a=', a);
    var i = 0;
  while (i<1) {
	if (isNaN(a)) {a = prompt('Вы ввели не число, введите еще раз'); }
	else {i++;}
}
    var n = prompt('Введите степень');
    console.log('n=', n);
    var i = 0;

while (i<1) {
	if (isNaN(n)) {n = prompt('Вы ввели не число, введите еще раз'); }
	else {i++;}
}
	
	

var result = pow (a, n);

console.log('result=', result);