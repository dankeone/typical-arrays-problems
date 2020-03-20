
exports.min = function min (array) {
 	let mn = Infinity;
 	if (arguments.length == 0) return(0);
	for(let i = 0;i < array.length; i++) 
	if(mn > array[i]) mn = array[i]; 	
	if (mn == Infinity) return(0); else return(mn);
}

exports.max = function max (array) {
	if (arguments.length == 0) return(0);
   	let mx = -Infinity;
	for(let i = 0;i < array.length; i++) 
	if(mx < array[i]) mx = array[i]; 	
	if (mx == -Infinity) return(0); else return(mx);
} 

exports.avg = function avg (array) {
	if (arguments.length == 0) return(0);
  	let res = 0;
	for(let i = 0;i < array.length; i++) res += array[i];	
	if (res == 0) return(0); else return(res / array.length);
}

