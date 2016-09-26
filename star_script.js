 const space = function(a) {
	if(a < 1)
	return '';
	return space(a-1) + " ";
};
const star = function(b) {
	if(b < 2)
	return '*';
	return '*' + '*' + star(b-1);
 
};

const comb = function(n, m=1) {
  	if(n<=0)
	return "";
	return space(n-1)+star(m)+'\n' + comb(n-1,m+1);
};
  console.log(comb(5));