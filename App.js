const calcy = () =>{
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;
    let grades="";
    let total=parseFloat(wd)+parseFloat(maths)+parseFloat(comp)+parseFloat(phy)
  
    let perc=(total/400)*100;
    

    if(perc <=100 && perc>=80){
        grades='A';
    }
    else if(perc<=79 && perc>=65){
        grades='B';
    }
    else if(perc<=64 && perc>=40){
        grades='C'
    }
    else{
        grades='F'
    }
    
    if(perc>=40){
        document.getElementById('showData').innerHTML=`Out of 400 your total is ${total}
        and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass.`
    }
    else{
    document.getElementById('showData').innerHTML=`Out of 400 your total is ${total}
     and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail.`
    }

}