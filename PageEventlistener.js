console.log("BackGround")
async function getData() {
    try {
        const response = await fetch('indiapincodes.json');
        const resJson = await response.json();

        return resJson;
    } catch (error) {
    	
		console.log(error)
    }

    return null;
}


chrome.runtime.onInstalled.addListener(function(){
	chrome.contextMenus.create({
		id: "IndianPincodeFinder",
		title: "Indian Pincode Search",
		contexts: ["selection"]
	
	})
})

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "IndianPincodeFinder") { // here's where you'll need the ID
        // do something
		console.log(info.selectionText)
		let numExp = /\d/g
		let AlExp =/\D/
		let key = info.selectionText

		if(  numExp.test(key) && key.length == 6){
			getData().then(data => Pincodefinder(data,info.selectionText) );
		}
		if( AlExp.test(key) ){
			getData().then(data => Areafinder(data,info.selectionText) );	
		}
	}
});


function Pincodefinder(book,key){
	numkey = Number(key)
	var id;
	var listreslutId = []
	var listofContent = []
	for(id=0; id < book.length; id++){		
		var bookpin = book[id].pincode
		if (bookpin == numkey){
			listreslutId.push(id)
			continue;
		}
		else{
			continue;
		}
	}
	
	if(listreslutId.length >= 5){
		for(var i = 0; i < 5; ++i){		 
			let state = book[listreslutId[i]].stateName
			let district =book[listreslutId[i]].districtName
			let arean = book[listreslutId[i]].officeName
			item = { title: "Dist: "+district, message: "Area: "+ arean+", "+state }
			listofContent.push(item)
		} 
	}
	if(listreslutId.length < 5  ){
		for(var i = 0; i < listreslutId.length; ++i){	 
			let state = book[listreslutId[i]].stateName
			let district =book[listreslutId[i]].districtName
			let arean = book[listreslutId[i]].officeName
			item = { title: "Dist: "+district, message: "Area: "+ arean+", "+state }
			listofContent.push(item)
		}
		
	}
	if(listreslutId.length == 0){
		listofContent.push({title: "Not Found ", message: "Invalid Query "+key})	
	}
	Display(listofContent,key)
	
}
function Areafinder(book,key){
	let listofContent=[]

	let finderkey = key.toLowerCase()
	let resultlist=[]
	for( var intial=0; intial < book.length; intial++){
		let predifineword =book[intial].officeName
		let area = predifineword.toLowerCase()
		if (area.indexOf(finderkey)!= -1){
			resultlist.push(intial)		
		}
	}
	if(resultlist.length >= 5){
		for(var i = 0; i < 5; ++i){
			
			let pincode = book[resultlist[i]].pincode
			let state = book[resultlist[i]].stateName
			let district =book[resultlist[i]].districtName
			let arean = book[resultlist[i]].officeName
			item = { title: "Dist: "+district+" Pincode: "+pincode, message: "Area: "+ arean+", "+state }
			listofContent.push(item)
		} 
	}
	if(resultlist.length < 5  ){
		for(var i = 0; i < resultlist.length; ++i){
			let pincode = book[resultlist[i]].pincode
			let state = book[resultlist[i]].stateName
			let district =book[resultlist[i]].districtName
			let arean = book[resultlist[i]].officeName
			item = { title: "Dist: "+district +" Pincode: "+pincode, message: "Area: "+ arean+", "+state }
			listofContent.push(item)
		}
		
	}
	if(resultlist.length == 0){
		listofContent.push({title: "Not Found ", message: "Invalid Query "+key})	
	}
	Display(listofContent,key)
}

function Display(arr,key){
	if(arr.length > 1){
		let options={
			title: 'Search of '+ key,
			message: "List Of Query",
			iconUrl: 'images/logo.png',
			items: arr,
			type: 'list'
		}
		chrome.notifications.create("ResultFindedpincode_list",options)		
	}
	if(arr.length == 1){
		let optionsing={
			title: arr[0].title,
			message: arr[0].message,
			iconUrl: 'images/logo.png',  
			type: 'basic'
		}
		chrome.notifications.create("ResultPindedpincode_Single",optionsing)		
	}
	
}
