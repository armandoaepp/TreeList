
this.treelist_styler = function(treelistid , desplegado ){
	var treelist = document.getElementById(treelistid)
	if(treelist){

		this.listItem = function(li){
			if(li.getElementsByTagName("ul").length > 0){
				var ul = li.getElementsByTagName("ul")[0];
				// START codigo add desplegado= true or false indica si la lista se muestra desplegada o no
				var span = document.createElement("span");
				if(desplegado){
					ul.style.display = "block";
					span.className = "expanded";
				}else{
					ul.style.display = "none";
				}
			// END codigo agregado
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
	console.log(treelistid+ items.length)
};

 // window.onload = treelist_styler('treelist');
