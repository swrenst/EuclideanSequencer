function randList(listSize) {
	
	
	
	for (var i = 1; i <= listSize; i++) {
		
		var num = Math.floor(Math.random() * (listSize + 1))
		
		outlet(0, num);
	}
	
	
}

