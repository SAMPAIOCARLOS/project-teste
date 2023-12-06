function calculatetip(event) {
     event.preventDefault();
     let bill = document.getElementById('bill').value;
     let serviceQual = document.getElementById('serviceQual').value;
     let numOfpeople = document.getElementById('numOfpeople').value;

     if(bill == '' | serviceQual == 0){
          alert("por favor, preencha os valores")
          return;
     }

     if(numOfpeople == "" | numOfpeople <= 1){
          numOfpeople = 1;
          document.getElementById('each').style.display = "none"  
     }else{
          document.getElementById('each').style.display = "block"
     }

     let total = (bill * serviceQual) / numOfpeople;
     total = total.toFixed(2);
     document.getElementById('tip').innerHTML = total;
     document.getElementById('totalTips').style.display = "block"
}

document.getElementById("totalTips").style.display = "none"
document.getElementById("each").style.display = "none"

document.getElementById("tipsForm").addEventListener('submit', calculatetip);