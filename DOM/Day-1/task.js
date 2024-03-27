let container=document.createElement("div")
container.setAttribute("class","container")

let row= document.createElement("div")
row.setAttribute("class","row")

let col= document.createElement("div")
col.setAttribute("class","col")
col.innerHTML="This is col"

container.append(row)
row.append(col)
document.body.append(container)