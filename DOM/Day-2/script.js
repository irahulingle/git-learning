let label=document.createElement("label")
label.setAttribute("for","email")
label.innerHTML="Email"

let label_break=document.createElement("br")

let input_email=document.createElement("input")
input_email.setAttribute("type","email")
input_email.innerHTML="Email"

let input_br=document.createElement("br")

document.body.append(label,label_break,input_email,input_br)