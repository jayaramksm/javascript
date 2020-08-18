var array=[
{
    no:1,
    name:'jayaram',
    marks:{
        maths:47,
        english:48,
        science:43,
    },
    rollnumber:'156p1A0328'
},
{
    no:2,
    name:'ram',
    marks:{
        maths:38,
        english:21,
        science:43,
    },
    rollnumber:'156p1A0321'
}
,
{
    no:3,
    name:'agnesh',
    marks:{
        maths:18,
        english:21,
        science:43,
    },
    rollnumber:'156p1A0319'
}
,
{
    no:4,
    name:'rajesh',
    marks:{
        maths:24,
        english:21,
        science:43,
    },
    rollnumber:'156p1A0306'
}
,
{
    no:5,
    name:'raju',
    marks:{
        maths:46,
        english:19,
        science:43,
    },
    rollnumber:'156p1A0335'
}   ,
{
    no:6,
    name:'manju',
    marks:{
        maths:33,
        english:21,
        science:43,
    },
    rollnumber:'156p1A0317'
}
,
{
    no:7,
    name:'adhi',
    marks:{
        maths:43,
        english:21,
        science:32,
    },
    rollnumber:'156p1A0566'
}
,
{
    no:8,
    name:'premakumari',
    marks:{
        maths:38,
        english:39,
        science:43,
    },
    rollnumber:'156p1A0335'
}
,
{
    no:9,
    name:'lakshmi',
    marks:{
        maths:48,
        english:49,
        science:43,
    },
    rollnumber:'156p1A0567'
}
,
{
    no:10,
    name:'sai',
    marks:{
        maths:45,
        english:46,
        science:48,
    },
    rollnumber:'156p1A0317'
}
,
{
    no:11,
    name:'suresh',
    marks:{
        maths:21,
        english:19,
        science:10,
    },
    rollnumber:'156p1A0304'
}
,
{
    no:12,
    name:'manikanta',
    marks:{
        maths:46,
        english:15,
        science:43,
    },
    rollnumber:'156p1A0301'
}
,
{
    no:13,
    name:'rajkumar',
    marks:{
        maths:23,
        english:31,
        science:38,
    },
    rollnumber:'156p1A0326'
}
,
{
    no:14,
    name:'surya',
    marks:{
        maths:36,
        english:31,
        science:44,
    },
    rollnumber:'156p1A0338'
}
,
{
    no:15,
    name:'sasi',
    marks:{
        maths:16,
        english:31,
        science:23,
    },
    rollnumber:'156p1A0354'
},
{
    no:16,
    name:'pravin',
    marks:{
        maths:19,
        english:49,
        science:48,
    },
    rollnumber:'156p1A0361'
}
]


array.sort(function(a, b) { 
var nameA = a.name.toUpperCase(); // ignore upper and lowercase
var nameB = b.name.toUpperCase(); // ignore upper and lowercase

if (nameA < nameB) {

return -1;
}
if (nameA > nameB) {
return 1;
}

// names must be equal
return 0;

});
var json =array


var innerhtml="";
var toper="";

json.forEach(function(val,ind){

marks=val.marks.maths+val.marks.english+val.marks.science
var status
if(marks>=110&&val.marks.maths>20&&val.marks.english>20&&val.marks.science>20){

toper="<tr class='topper'>"
status="Topper"

}
if(val.marks.maths>20&&val.marks.english>20&&val.marks.science>20&&marks<110){

toper="<tr class='good'>"
status="Pass"
}
if(val.marks.maths<20 || val.marks.english<20 || val.marks.science<20){

toper="<tr class='fail'>"
status="Fail"

}
let name=val.name.charAt(0).toUpperCase()+val.name.slice(1)

innerhtml+=toper+"<td>"+(ind+1)+"</td><td>"+name+"</td><td>"+val.rollnumber+"</td><td>"+marks+"</td><td>"+status+"</td></tr>"



})
document.getElementById("tbody").innerHTML=innerhtml
