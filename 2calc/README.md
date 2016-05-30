#Звіт про виконання программи " інженерний калькулятор"


##Зміст
1. Постановка задачі
2. Засоби реалізації
3. Наочне представлення
4. Використані бібліотеки
5.Лістінг

___


##1.Постановка задачі
Завдання :
створити інженерний калькулятор із заданим функціоналом 
1. рахувати  складні вирази  (1+2+3...)
2. обчислювати математичні функції sin , cos, e ,tan ...
3. обчислювати складні вирази з математичними функціями (sin(cos(sqrt(5))))


___
##2.Вибір інструменту для реалізації 

Для створення программи було використано мову программування
 javascript та html5
 
 
 ___
##3.Наочне представлення
 
 ![](http://i.imgur.com/Nt28owL.png)
 ![](http://i.imgur.com/ZL4ivNq.png)
 
 ___
 ##4.Використані бібліотеки 
Можливостей  javascript та html5 було достатньо для створення данної программи
можливості javascript використовувались для створення model i controller, 
а можливості html для створення представлення .


##Лістінг
```
<html>
    
    <style>
       body{
       display: flex;
      justify-content:center;
        
       }
       input{
           padding :5 20 5 20;
       }
       
       table{
           background-color: grey;
       }
       
    </style>
    <head>
        <SCRIPT LANGUAGE="JavaScript">
function addChar(input, character) {
if(input.value == null || input.value == "0")
input.value = character
else
input.value += character
}

function cos(form) {
form.display.value = Math.cos(form.display.value);
}

function sin(form) {
form.display.value = Math.sin(form.display.value);
}

function tan(form) {
form.display.value = Math.tan(form.display.value);
}

function sqrt(form) {
form.display.value = Math.sqrt(form.display.value);
}

function ln(form) {
form.display.value = Math.log(form.display.value);
}

function exp(form) {
form.display.value = Math.exp(form.display.value);
}

function deleteChar(input) {
input.value = input.value.substring(0, input.value.length - 1)
}

function changeSign(input) {
if(input.value.substring(0, 1) == "-")
input.value = input.value.substring(1, input.value.length)
else
input.value = "-" + input.value
}

function compute(form) {
form.display.value = eval(form.display.value)
}

function square(form) {
form.display.value = eval(form.display.value) * eval(form.display.value)
}

function checkNum(str) {
for (var i = 0; i < str.length; i++) {
var ch = str.substring(i, i+1)
if (ch < "0" || ch > "9") {
if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
&& ch != "(" && ch!= ")") {
alert("invalid entry!")
return false
}
}
}
return true
}
</SCRIPT>

<title>Calculator</title>
 <meta charset="utf-8">
    </head>
    <body>
        
        <h1>Сделано Ищенко Никитой</h1>
        <FORM NAME="sci-calc">
<TABLE CELLSPACING="0" CELLPADDING="1" border="1">
<TR>
<TD COLSPAN="5" ALIGN="center"><INPUT NAME="display" VALUE="0" SIZE="28" MAXLENGTH="25"></TD>
</TR>
<TR>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" exp " ONCLICK="if (checkNum(this.form.display.value)) { exp(this.form) }"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" 7 " ONCLICK="addChar(this.form.display, '7')"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" 8 " ONCLICK="addChar(this.form.display, '8')"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" 9 " ONCLICK="addChar(this.form.display, '9')"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" / " ONCLICK="addChar(this.form.display, '/')"></TD>
</TR>
<TR>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" ln " ONCLICK="if (checkNum(this.form.display.value)) { ln(this.form) }"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" 4 " ONCLICK="addChar(this.form.display, '4')"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" 5 " ONCLICK="addChar(this.form.display, '5')"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" 6 " ONCLICK="addChar(this.form.display, '6')"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" * " ONCLICK="addChar(this.form.display, '*')"></TD>
</TR>
<TR>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" sqrt " ONCLICK="if (checkNum(this.form.display.value)) { sqrt(this.form) }"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" 1 " ONCLICK="addChar(this.form.display, '1')"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" 2 " ONCLICK="addChar(this.form.display, '2')"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" 3 " ONCLICK="addChar(this.form.display, '3')"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" - " ONCLICK="addChar(this.form.display, '-')"></TD>
</TR>
<TR>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" sq " ONCLICK="if (checkNum(this.form.display.value)) { square(this.form) }"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" 0 " ONCLICK="addChar(this.form.display, '0')"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" . " ONCLICK="addChar(this.form.display, '.')"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" +/- " ONCLICK="changeSign(this.form.display)"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" + " ONCLICK="addChar(this.form.display, '+')"></TD>
</TR>
<TR>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" ( " ONCLICK="addChar(this.form.display, '(')"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE="cos" ONCLICK="if (checkNum(this.form.display.value)) { cos(this.form) }"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" sin" ONCLICK="if (checkNum(this.form.display.value)) { sin(this.form) }"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" tan" ONCLICK="if (checkNum(this.form.display.value)) { tan(this.form) }"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE=" ) " ONCLICK="addChar(this.form.display, ')')"></TD>
</TR>
<TR>
<TD ALIGN="center"><INPUT TYPE="button" VALUE="clear" ONCLICK="this.form.display.value = 0 "></TD>
<TD ALIGN="center" COLSPAN="3"><INPUT TYPE="button" VALUE="backspace" ONCLICK="deleteChar(this.form.display)"></TD>
<TD ALIGN="center"><INPUT TYPE="button" VALUE="enter" NAME="enter" ONCLICK="if (checkNum(this.form.display.value)) { compute(this.form) }"></TD>
</TR>
</TABLE>
</FORM> 




        
        
    </body>
    
</html>
```
