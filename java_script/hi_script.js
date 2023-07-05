function sayHi()
{
  let input_name=document.getElementById("name");
  alert("hi "+ input_name.value);
  input_name.value="";
  input_name.style.background='green';
}
