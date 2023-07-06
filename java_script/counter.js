// addeventListener will be used to execuated the statement after the body content has been loaded.
document.addEventListener('DOMContentLoaded',()=>{

  document.getElementById("count_btn").onclick=()=>
  {
    document.getElementById("output").innerHTML=`count : ${count} `;
    count++;
  }

})
var count=0;
