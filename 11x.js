            const listitems=[
            {name: 'sit',
            duedate:'12-12-2005'},
             {name:'chil',
            duedate: '13-10-2024'    
             }];
        renderlistitem();
        function renderlistitem(){
               let listitemsHTML ='';

        for(let i=0; i<listitems.length; i++){
            const eachitemobject=listitems[i];
            const name = eachitemobject.name;
            const duedate = eachitemobject.duedate;

            const htmlcode = `<p> 
                    ${name} - ${duedate}
                    <button onclick="
                    listitems.splice(${i}, 1);
                    renderlistitem();
                    
                    "> Delete </button>
                </p>`;
            listitemsHTML = listitemsHTML + htmlcode;

        }
        document.querySelector('.add-paragraph').innerHTML=listitemsHTML;

        }

     

        function additem(){
            const dateinput =document.querySelector('.dateinput');
            const duedate=dateinput.value;


            const inputelement = document.querySelector('.input');
           
            const mylist = inputelement.value;
            listitems.push({name: mylist,
                duedate: duedate}
            );

            inputelement.value='';

            console.log(listitems);



 renderlistitem();
  
        }
     