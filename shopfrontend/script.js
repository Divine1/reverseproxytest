console.log("in script.js file")

//var apibasepath = "http://localhost:4500"
//var apibasepath = "http://localhost:8500"
var callback = (response)=>{
    console.log("callback response ",JSON.stringify(response))

    var data = response.data 
    document.getElementById("responseheaders").innerHTML=JSON.stringify(response.headers ,2)
    document.getElementById("responsedata").innerHTML=JSON.stringify(data,2)
}
var postRequest = (uri, data, headers) => {
    console.log("in postRequest")
    console.log("uri ", uri, " -data- ", data, " -headers- ", headers)
    const url = apibasepath+uri

    axios.post(url, data,
        {
            headers: headers
        })
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            console.log(error);
        });
}
var getRequest = (uri, headers) => {
    console.log("in getRequest")
    console.log("uri ", uri, " -headers- ", headers)
    const url = apibasepath+uri

    // Make a request for a user with a given ID
    axios.get(url,
        {
            headers : headers
        })
        .then(function (response) {
            // handle success
            callback(response)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}
var deleteRequest = (uri, headers) => {
    console.log("in deleteRequest")
    console.log("uri ", uri, " -headers- ", headers)
    const url = apibasepath+uri
    axios.delete(url, {
        headers:headers
    })
        .then(function (response) {
            callback(response)
        })
        .catch(function (error) {
            console.log(error);
        });
}
var authenticate=()=>{
    console.log("in auth:authenticate")
    postRequest(
        "/auth/authenticate",
        {"username" : "divine","password" : "123"},
        {"token":"abcde"}
    )
}
var getItems=()=>{
    console.log("in cart:getItems")
    getRequest("/api/cart/items",{"token":"abcde"})
}
var deleteItem=()=>{
    console.log("in cart:deleteItem")
    deleteRequest("/api/cart/item/356",{"token":"abcde"})
}
var listProducts=()=>{
    console.log("in products:listProducts")
    getRequest("/api/products/items",{"token":"abcde"})

}
var deleteProducts=()=>{
    console.log("in products:deleteProducts")
    deleteRequest("/api/products/item/3478",{"token":"abcde"})

}

var checkoutProducts=()=>{
    console.log("in checkout:checkoutProducts")
    getRequest("/api/checkout/items",{"token":"abcde"})
}