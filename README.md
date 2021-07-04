# PincodeFinderV_0.0.1
It was Cross-orgin extension or most Function was Chrome Extensions it was find the indian pincode giving the query of PinCode or Area
### First Error - Not Get Data
Error That was `indiapincode.json` was not Have Data set of pincode in json file to solve Download json file from [GitHub_User](https://github.com/mithunsasidharan/India-Pincode-Lookup/blob/master/pincodes.json) and places the file in directory in same name *indiapincode*
![](https://snipboard.io/8K6mrt.jpg) 
This process Solved the Issue in Extension And Conutinue Use This extension in pc or others

### popup.js
This file make major action in project it carries max 150 lines detail Explain in coming Sections .I think Code is Base of Binary Search I think .It was Chrome Extension  Extension .I tested in Edge,Chrome  Gettting Good Results 
##### Working and functions
In the popup.js Five functions Have first for get Data from Json file it in Same Directory `indiapincodes.json` it have more pincode infomation 
Second Function For Our Search engine for Areafinder it Care to parameters main json file data,Serach Query of State but Default `TAMIL NADU` Change For Your Wish for filter in purposes,Searching Key ,template display Variable

- Data
- State Selection
- Searching Key
- Display variable

Third Function `contentDisplay` Detail Explain in Further Sessions it help to Display The search Word Result in template in popup.html
Fourth Function `PincodeFinder`It is Search of pincode for get Give input Correctly for Get best Results
Five Function is Error Display it Some error in template to display

### Code
```javascript
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
```
This code is `popup.js` .it is the async Function Get Compete Data From The extenal file `indiapincodes.json` default data is just a Get information in the link [indiapincode.json](https://github.com/mithunsasidharan/India-Pincode-Lookup/blob/master/pincodes.json) Downlod and keep in Same Directory Name as *indiapincodes* Some Time not Get data let Execute Template is Catch error

```javascript
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
```
This Code is `popup.js` define Function happen in template let Function of four Parameter book consider as Data get from the `indianpincodes.json` State Default *TAMIL NADU* Change when Call Are Add Selection Function in template call the value later Add the Code in `PincodeFinderV_0.0.1` it Function in array seraching by id or index number
### Display Area Results in Template:
this was Same Format Display the Content in Areafinder Query fields Work with the pretty cool Extension  and Make Your Work Easy use and get develops Your work...
![](https://snipboard.io/1NKwPV.jpg)
```javascript
    let givenstate = state;
	let finderkey = key.toLowerCase()
	let statelist = []
	let resultlist=[]
	let id; 

```
- Starting the variables givenstate typeof String 
- Finderkey in input box From Template
- Empty two Arry to Collect the value of index of data
- Id is looping id creating
```javascript
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
}
``` 
There is two loop to Get  data favouable to the user query frist collect data id favourable of state givenand Second Loop is State Collected Id Check with Finderkey and Add to the resultlist array and Last process is..
```javascript
if (resultlist.length > 0){
    contentDisplay(book,resultlist,Displaycontent)
}else{
    let errov = "Hint Is Invalid"
    dispalyerror(errov,key,Displaycontent)
    
}
```
This Code is Display in html Page `popup.html` this was the major function code in `Pincodefinder` in that One Loop Requried For Collect the data to particular String
### Display Pincode Results in Template:
format of Display Content in Card in Boostrap 5 title postion count of get Results of indiuvals results pincode that you are serached *manidorty to give Full Pincode number in query input* You Entered Invalid input Occur Error Message See the Example Photo 
![](https://snipboard.io/vN1gAQ.jpg)
##### Errors message:
When givinig Wrong input Display this Message in Extension 
![](https://snipboard.io/yhODfM.jpg)

Download Add Your Code and feel happy ..



