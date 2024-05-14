
let count = 0;
function FunnySwitch() {
    count++;
    // Front
    if ((count % 2) === 0){
      let B = document.getElementById(`ProjectImg`);
      console.log(count)
      B.classList.toggle(`ProjectImgCalc`);
    } 
    // back
    if ((count % 2) !== 0){
      let B = document.getElementById(`ProjectImg2`);
      console.log(count)
      B.classList.toggle(`ProjectImgDino`);
    } 
    if ((count % 2) !== 0){
      let B = document.getElementById(`ProjectImg`);
      console.log(count)
      B.classList.toggle(`ProjectImgCalc`);
    } 
    // Front
    let A = document.getElementById("Sign");
    // let B = document.getElementById(`ProjectImg2`);
    let C = document.getElementById(`Sign2`);
    A.classList.toggle("Flip");
    // B.classList.toggle(`ProjectImgDino`)
    C.classList.toggle(`Flip`);

}


// function ImgChange(){
//     let B = document.getElementById(`img`);
//     B.classList.toggle(`ProjectImgDino`)
// }
