function Nested_Function() {
	document.getElementById("Nested").innerHTML = Count();
	function Count() {
		var Starting_point = 9;
		function Plus_one() {Starting_point += 1;}
		Plus_one() ;
		return Starting_point;
	}
}

