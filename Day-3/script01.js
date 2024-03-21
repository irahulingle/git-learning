var request= new XMLHttpRequest();

request.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response)
    console.log(res);

    

    for(let i=0;i<res.length;i++){
        console.log(res[i].id)
    }
    for(let i=0;i<res.length;i++){
        console.log(res[i].name)
    }

    for(let i=0;i<res.length;i++){
        console.log(res[i].email)
    }


}
