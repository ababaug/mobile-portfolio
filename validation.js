function validate() {

    var x=document.getElementById("name");
    if (x==null || x=="")
     {
      alert("Name must be filled out");
      return false;
     }
    
    var y=document.getElementById("email");
    if (y==null || y=="") {
      alert("email must be filled out");
      return false;
    }

    var z=document.getElementById("msgl");
    if (z==null || z=="") {
      alert("message must be filled out");
      return false;
    }
}