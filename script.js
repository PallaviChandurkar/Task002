//XMLHttpRequest(XHR) - used to interact with server via API
//1.creating an XHR object
//new keyword
var request = new XMLHttpRequest();
//2.opening a connection(specify the url)
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.sending a connection
request.send();
//4. Once the server responded successfully then we have to process the data
request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);
    for(i=0;i<250;i++) {
        console.log(data[i].name+" "+data[i].capital+" "+data[i].flag);
    }
}
