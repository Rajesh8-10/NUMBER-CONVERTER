        
        let Enumber = document.getElementById('text');
        let baseDLf = document.getElementById('from');
        let baseDLt = document.getElementById('to');
        let Convert = document.getElementById('btnConvert');
        let Swap = document.getElementById('btnSwap');
        let res = document.getElementById('txtRes');
         Convert.addEventListener('click',function(){
          let num = +Enumber.value;
          let basefrom = +baseDLf.value; 
          let baseto = +baseDLt.value;
          if(isNaN(num)){
          res.value='ITS NOT VALID NUMBER'
          res.style.color ='red';
          }
          else{
          let convertedvalue1=num.toString(basefrom);
          let convertedvalue2 = num.toString(baseto);
         res.value=convertedvalue2.toUpperCase();
         res.style.color ='red';
         }
        })
        Swap.addEventListener('click',function(){
        let basefrom = baseDLf.value; 
        let baseto = baseDLt.value ;
        baseDLf.value=baseto;
        baseDLt.value=basefrom;
    })
          
          