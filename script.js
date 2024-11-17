let add=()=>{
  let num1= +document.getElementById("n1").value
  let num2= +document.getElementById("n2").value

   let sum= num1+num2
   let resultsum= document.getElementById("result")
   resultsum.textContent=sum;
}

