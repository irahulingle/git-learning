var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
    var res=JSON.parse(request.response)
    console.log(res);

    console.log(res[0].population)

    console.log(res[0].name)

    for(let i=0;i<res.length;i++){
        console.log(res[i].name.common)
    }
    for(let i=0;i<res.length;i++){
        console.log(res[i].region)
    }

    for(let i=0;i<res.length;i++){
        console.log(res[i].subregion)
    }

    for(let i=0;i<res.length;i++){
        console.log(res[i].population)
    }

    for(let i=0;i<res.length;i++){
        console.log(res[i].flag)
    }
}