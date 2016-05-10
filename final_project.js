var xmlHttp;
var xmlDoc;



var xmlHttp2;
var xmlDoc2;

xmlHttp2=GetXmlHttpObject()
if (xmlHttp2==null)
  {
  alert ("Your browser does not support AJAX!");
  } 

xmlHttp2.open("GET","final_projectB.xml",false);
xmlHttp2.send(null);
xmlDoc2=xmlHttp2.responseXML;

var x=xmlDoc2.getElementsByTagName("booktable");




function getbook(str)
{  
if (str.length==0)
  { 
  document.getElementById("book_id").value="";
  return;
  }
xmlHttp=GetXmlHttpObject()
if (xmlHttp==null)
  {
  alert ("Your browser does not support AJAX!");
  return;
  } 

var url="final_project.xml";
xmlHttp.open("GET",url,false);
xmlHttp.send(null);  
xmlDoc=xmlHttp.responseXML;

document.getElementById("id").innerHTML=xmlDoc.getElementsByTagName("id")[0].childNodes[0].nodeValue;
document.getElementById("name").innerHTML=xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
document.getElementById("author").innerHTML=xmlDoc.getElementsByTagName("author")[0].childNodes[0].nodeValue;
} 

function GetXmlHttpObject()
{
var xmlHttp=null;
try
  {
  // Firefox, Opera 8.0+, Safari
  xmlHttp=new XMLHttpRequest();
  }
catch (e)
  {
  // Internet Explorer
  try
    {
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    }
  catch (e)
    {
    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
return xmlHttp;
}