// document.querySelector("button").addEventListener("click",function handleClick(){
//     alert("I got clicked!")
// });

for(let i=0;i<7;i++){
    document.getElementsByTagName("button")[i].addEventListener("click",function handleClick(){
        alert("I got clicked!")
    });
}


