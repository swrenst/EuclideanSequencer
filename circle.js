var maxNodes = 32;
var numNodes = 0;

var nodeInset = 0.125;
var nodeRadius = 0.375;
var nodeSize = 30;

function create(n) {
	
	//resrict range
	if (n < 0) n = 0;
	if (n > maxNodes) n = maxNodes;
	
	numNodes = n;
	
	var xpos = 0;
	var ypos = 0;
	
	for (var i = 0; i < numNodes; i++) {
		
		xpos = nodeInset + nodeRadius; //middle of circle
		xpos += nodeRadius * Math.sin((i / numNodes) * Math.PI * 2);
		
		ypos = nodeInset + nodeRadius; //middle of circle
		ypos += nodeRadius * Math.sin((i / numNodes) * Math.PI * 2 - (Math.PI / 2));
		
		// Create node
		this.patcher.newobject("toggle", xpos, ypos, nodeSize, 0);
	}
	
}

function makeList(n) {
	
	//resrict range
	if (n < 0) n = 0;
	if (n > maxNodes) n = maxNodes;
	
	numNodes = n;
	
	var xpos = 0;
	var ypos = 0;
	
	var list = "";
	
	for (var i = 0; i < numNodes; i++) {
		
		xpos = nodeInset + nodeRadius; //middle of circle
		xpos += nodeRadius * Math.cos((i / numNodes) * Math.PI * 2  - (Math.PI / 2));
		
		ypos = nodeInset + nodeRadius; //middle of circle
		ypos += nodeRadius * Math.cos((i / numNodes) * Math.PI * 2);
		
		
		// Create node
		//this.patcher.newobject("toggle", xpos, ypos, nodeSize, 0);
		
		outlet(0, "setnode", i + 1, xpos, ypos, 0.015, 1);
	}
	
}