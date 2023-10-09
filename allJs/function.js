


function allculation(productNameId, productPriceId) {
    const productName = document.getElementById(productNameId).innerText;
    const productPrice = document.getElementById(productPriceId).innerText.split(' ')[0];
    const productPriceValue = parseFloat(productPrice); 
    let prodectTotalPrise =parseInt(document.getElementById('totalWithoutDiscount').innerText)
    prodectTotalPrise +=productPriceValue; 
    document.getElementById('totalWithoutDiscount').innerText = prodectTotalPrise.toFixed(2);
    if(prodectTotalPrise >= 1){
        document.getElementById('butDis').removeAttribute('disabled')
    }
    console.log(productName, productPriceValue,prodectTotalPrise);


    if(prodectTotalPrise >= 200){
        document.getElementById('hhaaa').addEventListener('keyup',function(e){
            if(e.target.value === 'SELL200'){
                document.getElementById('haaa').removeAttribute('disabled')
            } else {
                document.getElementById('haaa').setAttribute('disabled', 'disabled');
            }
    
        })
    }
    document.getElementById('haaa').addEventListener('click',function(){
        
    const discountValue = parseFloat(document.getElementById('Discount').innerText);
    const totalWithDiscountValue = parseFloat(document.getElementById('total').innerText);
    const discount = prodectTotalPrise * .2;
    document.getElementById('Discount').innerText = discount.toFixed(2);
    const arBaloLagaNa =prodectTotalPrise - discount
    document.getElementById('total').innerText= arBaloLagaNa.toFixed(2) ;




    })
    const parent = document.getElementById('history');
    const parentElement = parent.childElementCount + 1;
    const p =document.createElement('p');
    p.innerHTML= `
        ${parentElement}. ${productName}
    `
    parent.appendChild(p)
}



