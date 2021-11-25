const card=document.getElementsByClassName("card-one")
const addbtn=document.getElementsByClassName("add-btn")
const btnmenu=document.querySelector(".btn-menu")
const shoppinglist=document.querySelector(".shopping-card-list")
const shoppingcard = document.querySelector(".shopping-card")

class Shopping{
constructor(img,title,price){
this.img=img
this.title=title
this.price=price

}
}

class Send{
addcard(shopping){
const newitem=document.createElement("div")

newitem.classList="new-item"

newitem.innerHTML=`

<div class="shopping-card">
<img src="${shopping.img}" alt="">
 <p>${shopping.title}</p>
 <p>${shopping.price}</p>
<p class="card-del">X</p>
</div>
`
shoppinglist.appendChild(newitem)
}
itemremove(){
    let deletebtn=document.getElementsByClassName("card-del")
    let y=this
    for(let i=0;i<deletebtn.length;i++){
      deletebtn[i].addEventListener("click",function(){
        this.parentElement.parentElement.remove();
        y.itemcount();
      })
     
    }
}

itemcount(){
    let liste=shoppinglist.getElementsByClassName("new-item");
    let badgecount=document.getElementById("badge")
    badgecount.innerHTML=liste.length
}
  
}


for(let i=0;i<card.length;i++){
addbtn[i].addEventListener("click", function (e) {
let img = card[i].getElementsByClassName("card-img")[0].src;
let title = card[i].getElementsByClassName("card-name")[0].textContent;
let price = card[i].getElementsByClassName("card-price")[0].textContent;

let shopping=new Shopping(img,title,price)
let send=new Send()


send.addcard(shopping)
send.itemcount()
send.itemremove()
})
}


function togglebtn(){
    btnmenu.addEventListener("click",()=>{
        shoppinglist.classList.toggle("active");
})

}
togglebtn()

