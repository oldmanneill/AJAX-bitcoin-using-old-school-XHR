var btn = document.querySelector("#btn");

//listen for clicks
btn.addEventListener("click", makeRequest());

function makeRequest(){
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200) {
            var usPrice = JSON.parse(XHR.responseText).bpi.USD.rate_float;
            usPrice = (Math.round(usPrice*100))/100
            document.getElementById('price').innerHTML = '$'+usPrice +" per bitcoin";
        }
    }

    XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
}
