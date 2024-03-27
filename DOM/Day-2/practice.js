function create_label(tag,attr1,attrval1,content){
var label_ele=document.createElement(tag)
label_ele.setAttribute(attr1,attrval1)
label_ele.innerHTML=content
return label_ele;
}

function create_break(){
    var break_ele=document.createElement("br")
    return break_ele;
}

function create_input(tagname,attr2,attrval2,content1){
    var input_ele=document.createElement(tagname)
    input_ele.setAttribute(attr2,attrval2)
    input_ele.innerHTML=content1
    return input_ele;
}

let label_name= create_label("label","for","name","Name")
let break_name = create_break()
let input_name=create_input("input","type","text","Name")
let name_break = create_break()

let last_name= create_label("label","for","name_last","Last Name")
let break_last = create_break()
let input_last=create_input("input","type","text","Last Name")
let last_break = create_break()

let label_email= create_label("label","for","email","Email")
let break_tag = create_break()
let input_email=create_input("input","type","email","Email")
let tag_break = create_break()

let label_pass= create_label("label","for","pass","Password")
let break_pass = create_break()
let input_pass=create_input("input","type","password","Password")
let pass_break = create_break()

let label_add= create_label("label","for","add","Address")
let break_add = create_break()
let input_add =create_input("input","type","text","Address")
let add_break = create_break()

document.body.append(label_name,break_name,input_name,name_break,last_name,break_last,input_last,last_break,label_email,break_tag,input_email,tag_break,label_pass,break_pass,input_pass,pass_break,label_add,break_add,input_add,add_break)

