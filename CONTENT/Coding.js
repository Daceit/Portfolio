
let count = 0;
function FunnySwitch() {
    count++;
    // Front
    if (count === 0){
      
      let B = document.getElementById(`ProjectImg`);
      let C = document.getElementById(`PCalc`)
      let A = document.getElementById(`PCert`)
      B.classList = ""
      console.log(count)
      B.classList.toggle(`ProjectImgCalc`);
      B.classList.toggle(`ProjectImg`);
      C.classList = ``
      A.classList = `NONE`
    } 
    // back
    else if (count === 1){
      
      let B = document.getElementById(`ProjectImg2`);
      let C = document.getElementById(`PDino`)
      let A = document.getElementById(`PRock`)
      B.classList = ""
      console.log(count)
      B.classList.toggle(`ProjectImgDino`);
      B.classList.toggle(`ProjectImg`);
      C.classList = ``
      A.classList = `NONE`
    } 
    else if (count === 2){
      
      let B = document.getElementById(`ProjectImg`);
      let C = document.getElementById(`PCalc`)
      let A = document.getElementById(`PCert`)
      B.classList = ""
      console.log(count)
      B.classList.toggle(`ProjectImgCert`);
      B.classList.toggle(`ProjectImg`);
      C.classList = `NONE`
      A.classList = ``
    } 
    else if (count === 3){
      
      let B = document.getElementById(`ProjectImg2`);
      let C = document.getElementById(`PDino`)
      let A = document.getElementById(`PRock`)
      B.classList = ""
      console.log(count)
      B.classList.toggle(`ProjectImgRock`);
      B.classList.toggle(`ProjectImg`);
      C.classList = `NONE`
      A.classList = ``
      count = -1;
    } 


    // Front
    let A = document.getElementById("Sign");
    // let B = document.getElementById(`ProjectImg2`);
    let C = document.getElementById(`Sign2`);
    A.classList.toggle("Flip");
    // B.classList.toggle(`ProjectImgDino`)
    C.classList.toggle(`Flip`);

}
