const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems =document.getElementById("product-list");
    const product=document.getElementsByClassName(".product")
    const pname = storeitems.getElementByTagName("h5")
    console.log(pname);

    for(var i=0; i<pname.length; i++){
        let match=product[i].getElementByTagName('h5')[0];

        if(match){
        let textvalue= match.textContent || match.innerHTML
        if (textvalue.toUpperCase().indexof(searchbox)>-1){
            product[i].style.display="";
        }else{
            product[i].style.display="none";
        }
        }
    }
}