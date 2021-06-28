
async function getData() {
    try {
        const response = await fetch('indiapincodes.json');
        const resJson = await response.json();

        return resJson;
    } catch (error) {
    	let contexterr = `<div class="alert alert-danger mt-3" role="alert">
  							Something went wrong data not recived.....
						  </div>`
		$("#contentdiv").html(contexterr);
        console.warn('getData error', error);
    }

    return null;
}
function Areafinder(book,state,key,Displaycontent){
	let givenstate = state;
	let finderkey = key.toLowerCase()
	let statelist = []
	let resultlist=[]
	let id;
	for(id=0; id < book.length; id++){
		if (book[id].stateName == givenstate){
			statelist.push(id);
			continue;
		}else{
			continue;
		}
	}
	if (statelist.length > 0){
		let intial;
		for(intial=0; intial < statelist.length; intial++){
			let predifineword = book[statelist[intial]].officeName
			let area = predifineword.toLowerCase()
			if (area.indexOf(finderkey)!= -1){
				resultlist.push(statelist[[intial]])
				
			}
		}
	}
	if (resultlist.length > 0){
		contentDisplay(book,resultlist,Displaycontent)
	}else{
		let errov = "Hint Is Invalid"
		dispalyerror(errov,key,Displaycontent)
		
	}
}
function contentDisplay(book,idarr,Displaycontent){
	var contcontainer =" "
	var i;
	for (i=0; i< idarr.length; i++){
		
		let Zipcode = book[idarr[i]].pincode 
		let state = book[idarr[i]].stateName
		let district =book[idarr[i]].districtName
		let area = book[idarr[i]].officeName
		let taluk = book[idarr[i]].taluk
		let contenttohtml =  `<div class="card text-dark bg-light mb-3 mt-2" style="max-width: 18rem;">
							  	<div class="card-header"><span>${i+1}</span>  Pincode of ${Zipcode} </div>
							  	<div class="card-body">
							    	<h5 class="card-title">State of ${state}</h5>
							    	<p class="card-text">
							    		<strong>District :</strong> ${district} <br>
							    		<strong>Taluk :</strong> ${taluk} <br>
							    		<strong>Area :</strong> ${area} <br>
							    	</p>
							 	</div>
							  </div>`;
		contcontainer += contenttohtml

	}
	
	$(Displaycontent).html(contcontainer);
}

//getData().then(data => console.log(data));
function Pincodefinder(book,key,displaycontent){
	numkey = Number(key)
	var id;
	var listreslut = []
	for(id=0; id < book.length; id++){		
		var bookpin = book[id].pincode
		if (bookpin == numkey){
			listreslut.push(id)
			
			
			continue;
		}
		else{
			continue;
		}
	}
	if(listreslut.length > 0){
		contentDisplay(book,listreslut,displaycontent)


	}else{
		let errv = "Not Get Infomation"
		dispalyerror(errv,key,displaycontent)
		
	}

}
function dispalyerror(errorop,key,Displaycontent){

	let contexterr = `<div class="alert alert-danger mt-3" role="alert">
  							 ${errorop}.. { ${key} }
						  </div>`
	$(Displaycontent).html(contexterr);
}
$(document).ready(function(){
			$("#toarea").click(function(){ 
				$("#areaform").removeClass('not-visiblity');	
				$('#pinform').addClass('not-visiblity');
				$('#topincode').removeClass('not-visiblity');
				$("#toarea").addClass("not-visiblity");		
			});
			$("#topincode").click(function(){ 
				$("#pinform").removeClass('not-visiblity');	
				$('#areaform').addClass('not-visiblity');
				$('#toarea').removeClass('not-visiblity');
				$("#topincode").addClass("not-visiblity");			
			});
	});
	
			



	$("#pinserach").click(function() {
		let pincode = document.getElementById("Pincode").value
		getData().then(data => Pincodefinder(data,pincode,"#contentdiv"));
			

	});
	$("#areaserach").click(function() {
		let areastring = document.getElementById("area").value
		getData().then(data => Areafinder(data,"TAMIL NADU",areastring,"#contentdiv"));
			

	});












