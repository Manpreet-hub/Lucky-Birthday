const dateOfBirth=document.querySelector("#dateOfBirth");
const luckyNumber=document.querySelector("#luckyNumber");
const checkBtn=document.querySelector(".checknumber");

function checkBirthDateisLucky(){
    const dob=dateOfBirth.value;
    const sum=calculateSum(dob);
    if(dob && sum)
    compareValue(sum,luckyNumber.value);
    else
    output.innerText="Please Enter Birth Date and Lucky Number 🤔 "
}

function compareValue(sum,luckyNumber){
    if(sum%luckyNumber===0){
        output.innerText="Your birthday is lucky";
    }
    else{
        output.innerText="Your birthday is not lucky";
    }
}

function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let index=0;index<dob.length;index++){
        sum=sum+Number(dob.charAt(index));
    }
    return sum;
}

checkBtn.addEventListener("click", function getValues(){
    checkBirthDateisLucky();
})