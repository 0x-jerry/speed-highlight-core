export default[{match:/[^\[\->+.<\]\s].*/g,sub:"todo"},{match:/\.+/g,type:"func"},{match:/[<>]+/g,type:"kwd"},{match:/[+-]+/g,type:"oper"}];