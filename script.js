function formatIndianNumber(num){
return Number(num).toLocaleString('en-IN',{
minimumFractionDigits:2,
maximumFractionDigits:2
});
}

let allData={

drip:{

"1.2x0.6":{

0.2:36151,
0.3:50989,
0.4:65827,
0.5:79294,
0.6:92760,
0.7:106227,
0.8:119693,
0.9:133160,
1.0:146626,
1.1:159842,
1.2:173058,
1.3:186274,
1.4:199490,
1.5:212706,
1.6:225922,
1.7:239138,
1.8:252354,
1.9:265570,
2.0:278786,
2.1:293107,
2.2:307427,
2.3:321748,
2.4:336068,
2.5:350389,
2.6:364710,
2.7:379030,
2.8:393351,
2.9:407671,
3.0:421992,
3.1:436724,
3.2:451456,
3.3:466188,
3.4:480920,
3.5:495653,
3.6:510385,
3.7:525117,
3.8:539849,
3.9:554581,
4.0:569313,
4.1:583604,
4.2:597895,
4.3:612186,
4.4:626477,
4.5:640769,
4.6:655060,
4.7:669351,
4.8:683642,
4.9:697933,
5.0:712224

},

"1.5x0.6":{

0.2:32203,
0.3:44919,
0.4:57634,
0.5:69022,
0.6:80409,
0.7:91797,
0.8:103185,
0.9:114572,
1.0:125960,
1.1:137268,
1.2:148576,
1.3:159884,
1.4:171192,
1.5:182500,
1.6:193807,
1.7:205115,
1.8:216423,
1.9:227731,
2.0:239039,
2.1:251235,
2.2:263430,
2.3:275626,
2.4:287821,
2.5:300017,
2.6:312213,
2.7:324408,
2.8:336604,
2.9:348799,
3.0:360995,
3.1:373792,
3.2:386589,
3.3:399387,
3.4:412184,
3.5:424981,
3.6:437778,
3.7:450575,
3.8:463373,
3.9:476170,
4.0:488967,
4.1:501124,
4.2:513282,
4.3:525439,
4.4:537597,
4.5:549754,
4.6:561911,
4.7:574069,
4.8:586226,
4.9:598384,
5.0:610541

},"1.8x0.6":{

0.2:28255,
0.3:38848,
0.4:49441,
0.5:58750,
0.6:68059,
0.7:77368,
0.8:86677,
0.9:95986,
1.0:105295,
1.1:114695,
1.2:124095,
1.3:133494,
1.4:142894,
1.5:152294,
1.6:161694,
1.7:171094,
1.8:180493,
1.9:189893,
2.0:199293,
2.1:209364,
2.2:219434,
2.3:229505,
2.4:239575,
2.5:249646,
2.6:259716,
2.7:269787,
2.8:279857,
2.9:289928,
3.0:299998,
3.1:310860,
3.2:321723,
3.3:332585,
3.4:343447,
3.5:354310,
3.6:365172,
3.7:376034,
3.8:386896,
3.9:397759,
4.0:408621,
4.1:418645,
4.2:428668,
4.3:438692,
4.4:448715,
4.5:458739,
4.6:468763,
4.7:478786,
4.8:488810,
4.9:498833,
5.0:508857

},

"2.5x0.6":{

0.2:23231,
0.3:31741,
0.4:40250,
0.5:47291,
0.6:54331,
0.7:61372,
0.8:68412,
0.9:75453,
1.0:82493,
1.1:89403,
1.2:96314,
1.3:103224,
1.4:110135,
1.5:117045,
1.6:123955,
1.7:130866,
1.8:137776,
1.9:144687,
2.0:151597,
2.1:159606,
2.2:167614,
2.3:175623,
2.4:183632,
2.5:191641,
2.6:199649,
2.7:207658,
2.8:215667,
2.9:223675,
3.0:231684,
3.1:240689,
3.2:249694,
3.3:258699,
3.4:267704,
3.5:276710,
3.6:285715,
3.7:294720,
3.8:303725,
3.9:312730,
4.0:321735,
4.1:329056,
4.2:336378,
4.3:343699,
4.4:351020,
4.5:358342,
4.6:365663,
4.7:372984,
4.8:380305,
4.9:387627,
5.0:394948

},

"1.5x1.5":{

0.2:32322,
0.3:43183,
0.4:54044,
0.5:63675,
0.6:73307,
0.7:82938,
0.8:92569,
0.9:102201,
1.0:111832,
1.1:121961,
1.2:132090,
1.3:142219,
1.4:152348,
1.5:162477,
1.6:172606,
1.7:182735,
1.8:192864,
1.9:202993,
2.0:213122,
2.1:223638,
2.2:234154,
2.3:244670,
2.4:255186,
2.5:265702,
2.6:276218,
2.7:286734,
2.8:297250,
2.9:307766,
3.0:318282,
3.1:330412,
3.2:342542,
3.3:354672,
3.4:366802,
3.5:378933,
3.6:391063,
3.7:403193,
3.8:415323,
3.9:427453,
4.0:439583,
4.1:449710,
4.2:459837,
4.3:469964,
4.4:480091,
4.5:490218,
4.6:500344,
4.7:510471,
4.8:520598,
4.9:530725,
5.0:540852

}

},

mini:{"10x10":{

0.4:52548,
0.5:61832,
0.6:71117,
0.7:80401,
0.8:89685,
0.9:98970,
1.0:108254,
1.1:117757,
1.2:127259,
1.3:136762,
1.4:146265,
1.5:155768,
1.6:165270,
1.7:174773,
1.8:184276,
1.9:193778,
2.0:203281,
2.1:213821,
2.2:224362,
2.3:234902,
2.4:245443,
2.5:255983,
2.6:266523,
2.7:277064,
2.8:287604,
2.9:298145,
3.0:308685,
3.1:317549,
3.2:326412,
3.3:335276,
3.4:344140,
3.5:353004,
3.6:361867,
3.7:370731,
3.8:379595,
3.9:388458,
4.0:397322,
4.1:406262,
4.2:415202,
4.3:424142,
4.4:433082,
4.5:442022,
4.6:450961,
4.7:459901,
4.8:468841,
4.9:477781,
5.0:486721

},

"8x8":{

0.4:54657,
0.5:65457,
0.6:76256,
0.7:87056,
0.8:97855,
0.9:108655,
1.0:119454,
1.1:129120,
1.2:138787,
1.3:148453,
1.4:158120,
1.5:167786,
1.6:177452,
1.7:187119,
1.8:196785,
1.9:206452,
2.0:216118,
2.1:227964,
2.2:239809,
2.3:251655,
2.4:263501,
2.5:275347,
2.6:287192,
2.7:299038,
2.8:310884,
2.9:322729,
3.0:334575,
3.1:344821,
3.2:355067,
3.3:365313,
3.4:375559,
3.5:385806,
3.6:396052,
3.7:406298,
3.8:416544,
3.9:426790,
4.0:437036,
4.1:447370,
4.2:457704,
4.3:468037,
4.4:478371,
4.5:488705,
4.6:499039,
4.7:509373,
4.8:519706,
4.9:530040,
5.0:540374

}

}

};

function calculate(){

let spacing=document.getElementById("spacing").value;

let area=parseFloat(document.getElementById("area").value);

if(isNaN(area)){
alert("Please enter area.");
return;
}

if(area<0.2 || area>5){
alert("Area should be between 0.2 and 5 hectare");
return;
}

let system=document.getElementById("system").value;

let data=allData[system][spacing];

let unitCost;

let area1=parseFloat(area.toFixed(1));

if(Math.abs(area*10-Math.round(area*10))<0.0001){

unitCost=data[area1];

}

else{

let lower=Math.floor(area*10)/10;
lower=parseFloat(lower.toFixed(1));

let upper=parseFloat((lower+0.1).toFixed(1));

let difference=data[upper]-data[lower];

let oneStep=difference/10;

let decimalPart=Math.round((area-lower)*100);

let increment=oneStep*decimalPart;

unitCost=data[lower]+increment;

}

let subsidy90=unitCost*0.90;
let share10=unitCost-subsidy90;

let subsidy80=unitCost*0.80;
let share20=unitCost-subsidy80;

document.getElementById("unitCost").innerHTML=
"Unit Cost : ₹"+formatIndianNumber(unitCost);

document.getElementById("subsidy90").innerHTML=
"90% Subsidy : ₹"+formatIndianNumber(subsidy90);

document.getElementById("share10").innerHTML=
"Farmer Share (10%) : ₹"+formatIndianNumber(share10);

document.getElementById("subsidy80").innerHTML=
"80% Subsidy : ₹"+formatIndianNumber(subsidy80);

document.getElementById("share20").innerHTML=
"Farmer Share (20%) : ₹"+formatIndianNumber(share20);

window.resultText=
"UPMIP Subsidy Calculator\n\n"+
"Spacing : "+spacing+"\n"+
"Area : "+area+" Hectare\n\n"+
"Unit Cost : ₹"+formatIndianNumber(unitCost)+"\n\n"+
"90% Subsidy : ₹"+formatIndianNumber(subsidy90)+"\n"+
"Farmer Share (10%) : ₹"+formatIndianNumber(share10)+"\n\n"+
"80% Subsidy : ₹"+formatIndianNumber(subsidy80)+"\n"+
"Farmer Share (20%) : ₹"+formatIndianNumber(share20);

}

function copyResult(){

if(window.resultText){

navigator.clipboard.writeText(window.resultText);

alert("Result copied successfully.");

}
else{

alert("Please calculate first.");

}

}

function shareWhatsApp(){

if(window.resultText){

window.open(
"https://wa.me/?text="+
encodeURIComponent(window.resultText)
);

}
else{

alert("Please calculate first.");

}

}
function changeSpacing(){

let system =
document.getElementById("system").value;

let spacing =
document.getElementById("spacing");

if(system=="drip"){

spacing.innerHTML=`

<option value="1.2x0.6">

1.2 × 0.6

</option>

<option value="1.5x0.6">

1.5 × 0.6

</option>

<option value="1.8x0.6">

1.8 × 0.6

</option>

<option value="2.5x0.6">

2.5 × 0.6

</option>

<option value="1.5x1.5">

1.5 × 1.5

</option>

`;

}

else{

spacing.innerHTML=`

<option value="10x10">

10 × 10 Meter

</option>

<option value="8x8">

8 × 8 Meter

</option>

`;

}

}
function toggleDarkMode() {

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

document.getElementById("darkModeBtn").innerHTML="☀️ Light Mode";

}

else{

localStorage.setItem("theme","light");

document.getElementById("darkModeBtn").innerHTML="🌙 Dark Mode";

}

}

window.onload=function(){

if(localStorage.getItem("theme")=="dark"){

document.body.classList.add("dark-mode");

document.getElementById("darkModeBtn").innerHTML="☀️ Light Mode";

}

}
