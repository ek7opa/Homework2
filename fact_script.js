const fact = function(a) {
	if(a<1)
		return 1;
	return a * fact(a-1);
	};
// to print console.log(fact(n)); 