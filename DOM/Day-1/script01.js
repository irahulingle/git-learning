let parent = document.createElement("div")
parent.setAttribute("class","main")


let child= document.createElement("div")
child.innerHTML="This is Child"
child.setAttribute("class","main1")

parent.append(child)

document.body.append(parent)