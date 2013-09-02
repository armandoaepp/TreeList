this.treeliststyler = function(){
	var treelist = document.getElementById("treelist")
	if(treelist){

		this.listItem = function(li){
			if(li.getElementsByTagName("ul").length > 0){
				var ul = li.getElementsByTagName("ul")[0];
				ul.style.display = "none";
				var span = document.createElement("span");
				span.className = "collapsed";
				span.onclick = function(){
					ul.style.display = (ul.style.display == "none") ? "block" : "none";
					this.className = (ul.style.display == "none") ? "collapsed" : "expanded";
				};
				li.appendChild(span);
			};
		};

		var items = treelist.getElementsByTagName("li");
		for(var i=0;i<items.length;i++){
			listItem(items[i]);
		};

	};
};

window.onload = treeliststyler;
