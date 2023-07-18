document.addEventListener('DOMContentLoaded',()=>{

  // // event on red button click
  // document.getElementById("redbtn").onclick=()=>{
  //
  //   document.getElementById("output").style.color='red';
  //
  // }
  //
  // // event on red button click
  // document.getElementById("bluebtn").onclick=()=>{
  //
  //   document.getElementById("output").style.color='blue';
  //
  // }
  //
  // // event on red button click
  // document.getElementById("greenbtn").onclick=()=>{
  //
  //   document.getElementById("output").style.color='green';
  //
  // }


  // for (let element of document.getElementsByClassName("btn")) {
  //      element.onclick=()=>{
  //        document.getElementById("output").style.color=element.dataset.colorname;
  //      }
  // }

    document.getElementById("colorselect").onchange=()=>{
        //console.log(document.getElementById("colorselect").value);
         document.getElementById("output").style.color=document.getElementById("colorselect").value;
    }






})
