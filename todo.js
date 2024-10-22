let btn1=document.querySelector('button');
let input=document.querySelector('input');
let ul=document.querySelector('ul');

///use  to repalce specal charecters ;

input.addEventListener('input',function(){
       input.value=  input.value.replace(/[^a-zA-Z]/g," ");
       console.log(input.value);
});


btn1.addEventListener('click', function(){
      
       if(input.value==''){
              alert("Input empty");
              return;
       }
       
       else{
    //insert the deteils;
       let li=document.createElement('li');
       li.innerText=input.value;
       ul.appendChild(li);
       console.log('press');
       input.value="";

       ///delete the li ;
       let clearBtn=document.createElement('button')
       clearBtn.innerText="delete";
       li.appendChild(clearBtn);
      clearBtn.classList.add('button');
//       console.dir(clearBtn);
       
      
       }
      
});


ul.addEventListener('click', function(event){
       if(event.target.nodeName=="BUTTON"){
              // console.log("button clicked");
              let list=event.target.parentElement;
              list.remove();
            
       }

});



