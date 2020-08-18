



var fname=document.getElementById("firstname");
var lname=document.getElementById("lastname");
var classname=document.getElementById("Class");
var yearpass=document.getElementById("passing");
var per=document.getElementById("Percentage");
var activesubmit = document.getElementById("submit").classList


   function fnametext(){
    var val=isNaN(fname.value)
//    var inputvalue=fname.value
//    var length=inputvalue.length
    if(val!=true){
        document.getElementById("errormsg").classList.remove("d-none")
        activesubmit.add("d-none")
        // length=length-1
    }else{
        document.getElementById("errormsg").classList.add("d-none")
        activesubmit.remove("d-none")
    }
}
function lnametext(){
    var lnametype=isNaN(lname.value)
    console.log(lnametype)
    if(lnametype != true){
        document.getElementById("seconderrormsg").classList.remove("d-none")
        activesubmit.add("d-none")
    }else{
        document.getElementById("seconderrormsg").classList.add("d-none")
        activesubmit.remove("d-none")
    }
}

function yearofpass(){
    var yearofpassval=yearpass.value
    
    if(yearofpassval >= 2018){
        document.getElementById("yearerrormsg").classList.remove("d-none")
        activesubmit.add("d-none")
    }else{
        document.getElementById("yearerrormsg").classList.add("d-none")
        activesubmit.remove("d-none")
    }
}

function getsubmit(){
    var valfname= fname.value
    var vallname = lname.value
    var valclassname = classname.value
    var valyearpass = yearpass.value
    var valper =  per.value
    if(valfname == "" || vallname == "" || valclassname == "" || valyearpass == "" || valper == "" ){
        // activesubmit.add("d-none")
        document.getElementById("finalerror").classList.remove("d-none")
    }else{
        // activesubmit.remove("d-none")
        document.getElementById("finalerror").classList.add("d-none")
    }
    
}

function getclear(){
    fname.value = ""
     lname.value = ""
     classname.value = ""
   yearpass.value = ""
     per.value = ""
}
