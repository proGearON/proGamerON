var password = "proHaudesh";
     function passcheck() {
          if(document.getElementById('prohaudesh').value != password) {
               alert('Wrong password, Dialing proGearON Phone number......');
               return false;
          }
     
          if(document.getElementById('prohaudesh').value == password) {
               alert('Hi Aryan, For Enter to privacy section Click on OK.');
          }
          
          }