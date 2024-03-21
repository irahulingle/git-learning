var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var res=JSON.parse(request.response)
    console.log(res);


    // let population= res.map((res)=>res.population)
    // console.log(population);

    let sum = res.reduce((acc, cv) => acc + cv.population, 0);
    console.log(sum);


















    // let country_name= res.map((res)=>res.name.common)
    // console.log(country_name)


    // for(let i=0;i<res.length;i++){
    //     if(res.continents=="Asia"){
    //         console.log(res.name.common)
    //     }
    // }

    // let asian_country= res.filter((res)=>res.region === "Asia")
    // console.log(asian_country);

    // let aisa_count=asian_country.map((res)=>res.name.common)
    // console.log(aisa_count)

    // let area_country= res.filter((res)=>res.area > 100000)
    // console.log(area_country);

    // let count_area=area_country.map((res)=>res.name.common)
    // console.log(count_area)
    
}