const SelectState =  document.getElementById("select-state")

const SaveValue = document.querySelector("#SaveState");
function SerachAndStore (arr){
	var FoundedStates =[]
	for(var i =0; i < arr.length; ++i){
		var state = arr[i].stateName
		if(notFound(FoundedStates,state)){
			FoundedStates.push(state)
		}
	}
	for(var j =0; j<FoundedStates.length; ++j){
		var optionState = document.createElement("option")
		optionState.text = FoundedStates[j]
		optionState.value = j
		SelectState.options.add(optionState,j+1)
		
	}
}
function notFound(Currentarr,Key){
	var Count = 0
	for(var i=0; i< Currentarr.length; ++i){
		if(Key == Currentarr[i] ){
			Count += 1
		}	
	}
	if(Count == 0){
		return true
	}
	else if(Count > 0){
		return false	
	}
}
function saveStateSync(state){
	
	chrome.storage.local.set({
		stateNameStores:state
		
	},function(){
		
		alert("Save and Change the State "+state)
		
		
	})
}


getData().then(data => SerachAndStore (data) );
SaveValue.addEventListener("click",()=>{
	var id =SelectState.selectedIndex
	var StateName = SelectState.options[id].text
	
	if(StateName != "Select One State"){
		saveStateSync(StateName,)
		// in Templates of Option html 
		chrome.storage.local.get(["stateNameStores"], function(data){
			var StateDisplay = document.getElementById("Display")
			StateDisplay.innerHTML = data.stateNameStores
			getData().then(databook=>DisplaySelectionDetails(databook,data.stateNameStores))
		})
	}
	
	
})
function DisplaySelectionDetails(book,state){
	var totalresult =0
	var totalDistrict = 0
	var totalpincode = 0
	var pincodelist =[]
	var Districtlist =[]
	for(var i=0; i<book.length; ++i){
		if( book[i].stateName == state){
			totalresult +=1
			if(notFound(pincodelist,book[i].pincode)){
				pincodelist.push(book[i].pincode)
				totalpincode += 1
			}
			if(notFound(Districtlist,book[i].districtName)){
				Districtlist.push(book[i].districtName)
				totalDistrict += 1
			}
		}
	}
	
	document.getElementById("ResultofState").innerHTML = totalresult
	document.getElementById("pincodeofState").innerHTML = totalpincode
	document.getElementById("DistirctofState").innerHTML = totalDistrict
	
}
chrome.storage.local.get(["stateNameStores"], function(data){
	var StateDisplay = document.getElementById("Display")
	StateDisplay.innerHTML = data.stateNameStores
	getData().then(databook=>DisplaySelectionDetails(databook,data.stateNameStores))
})