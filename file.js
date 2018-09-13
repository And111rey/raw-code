alert("Hello");
/*

var obj = {
  className: 'open menu';
  
}
*/




var str = "my-short-string";

var slice1 = str.slice(0,2);
var slice2 = str.slice(4,8);
var slice3 = str.slice(10,15);

var word1, word2, word3;

	word1 = slice1;
	word2 = str.charAt(3).toUpperCase() + slice2;
	word3 = str.charAt(9).toUpperCase() + slice3;
	
	var neWstr = word1 + word2 + word3;
	
	alert(neWstr);