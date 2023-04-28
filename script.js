window.addEventListener("load", function (){
    const maleBtn = document.getElementById("male-btn");
    const femaleBtn = document.getElementById("female-btn");

    function maleBtnChangeColor() {
        maleBtn.style.background = "#B19191";
        maleBtn.style.color = "#FFFFFF";
        femaleBtn.style.background = "#FFFFFF";
        femaleBtn.style.color = "#C8B4B4";
      }

    function femaleBtnChangeColor() {
        femaleBtn.style.background = "#B19191";
        femaleBtn.style.color = "#FFFFFF";
        maleBtn.style.background = "#FFFFFF";
        maleBtn.style.color = "#C8B4B4";
    }

    maleBtn.addEventListener("click",(event)=>{
        maleBtnChangeColor();
    })
    
    femaleBtn.addEventListener("click",(event)=>{
        femaleBtnChangeColor();
    })
    








})