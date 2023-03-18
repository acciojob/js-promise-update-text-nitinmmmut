//your JS code here. If required.
function Hello(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Hello, world!");
		},1000);
	});
}
Hello().then(data=>{
	document.getElementById("output").textContent=data;
});
