const button = document.querySelector('#btn')
const paras = document.querySelectorAll('.para')
console.log(paras)

function change ()
{
    const arr=["red","blue","violet","aqua","tomato","green","yellow","purple","brown","black"]
   document.body.style.backgroundColor=arr[Math.ceil(Math.random()*10)]
}
