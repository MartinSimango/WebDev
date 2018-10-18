var subButton= document.getElementsByName("submit")

subButton.onclick(()=>{
	var letters= new RegExp("^[A-Za-z]+$");
	if(!letters.match(subButton.value))
		event.preventDefault();
	
})