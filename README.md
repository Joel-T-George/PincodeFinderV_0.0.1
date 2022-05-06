# PincodeFinderV_0.0.1
It was Cross-orgin extension or most Function was Chrome Extensions it was find the indian pincode giving the query of PinCode or Area


### popup.js
This file make major action in project it carries max 150 lines detail Explain in coming Sections .I think Code is Base of linear Search I think .It was Chrome Extension  Extension .I tested in Edge,Chrome  Gettting Good Results 
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
This code is `popup.js` .it is the async Function Get Compete Data From The extenal file `indiapincodes.json` .I get Data from the Github User=> [indiapincode.json](https://github.com/mithunsasidharan/India-Pincode-Lookup/blob/master/pincodes.json) 



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
### Notification and ContextMenus Action In Extension:
This Action Happen When Selection of text in Web page And RightClick get the This Option in List and Click That You Get pretty Information in Notification to Get Relavant answer Please Serach 50% Coorect Spelling.. and Option Page get Explains
![](https://snipboard.io/e78yJA.jpg)
### Notifications of Query
it was with Query of pincode Get relavant Answer There producing data in two type single message and list of message in that 5 result was get in notification for more serach in title bar icon click(popup)
![](https://snipboard.io/qAu46e.jpg)
#### Error Qccur in notification message
When User Select invald or not found Data show this this like only
![](https://snipboard.io/XoRE7V.jpg)


Download Add Your Code and feel happy ..



