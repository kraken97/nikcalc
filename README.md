#Звіт про виконання программи "Графік функції"


##Зміст
1. Постановка задачі
2. Засоби реалізації
3. Наочне представлення
4. Використані бібліотеки
5. Лістінг

___


##1.Постановка задачі
Завдання :
Створити программу, яка дозволяє будувати графік кола та змінювати вхідні данні (радіус кола)



##2.Вибір інструменту для реалізації 

Для створення программи було використано мову программування
 javascript та html5
 а також бібліотеку React js
 

 
 
 ##3.Наочне представлення
 
 ![](http://i.imgur.com/EkSLLdV.png)
 ![](http://i.imgur.com/ZL4ivNq.png)
 
 
 ##4.Використані бібліотеки 
 
Також використовувалась  бібліотека React яка допомагає  змінювати view при зміні данних 
в Model

##Структура проекта
Данний проект використовуює компонентну структу в якій компоненти взаємодіють між собою способом зміни данних 
і при зміні данних змінюється відображення компоненту.
Тобто побудова программи має на меті так побудувати архітектуру при якій компоненти відштовхуються від данних .
Створенні компоненти :
1. Канвас на якому відображається графік.
2. Та контролери , слайдери , які  змінюють  данні і графік змінює свій стан та перемальовується.
3. Заголовок.


##Лістінг

```
import * as React from 'react';
import * as ReactDom from 'react-dom';
let $ = require("jquery")


class Canvas extends React.Component<any, any>{
  componentDidUpdate() {
    let ctx: CanvasRenderingContext2D = (document.getElementById("canvas") as HTMLCanvasElement).getContext("2d")
    ctx.clearRect(0, 0, 1000, 600)
    ctx.drawImage(document.getElementById("img") as HTMLImageElement, 0, 0)
    ctx.beginPath();
    ctx.arc(534, 325, this.props.radius, 0, 2 * Math.PI, false);
    ctx.stroke();
    console.log(this.props.radius)
  }
  componentDidMount() {
     let ctx: CanvasRenderingContext2D = (document.getElementById("canvas") as HTMLCanvasElement).getContext("2d")
    ctx.clearRect(0, 0, 1000, 600)
    ctx.drawImage(document.getElementById("img") as HTMLImageElement, 0, 0)
  }
  render() {
    return (<div>
      <img src="http://www.hunter9999999.narod.ru/images2/dek_koord0.gif" id="img" style={{ display: 'none' }}/>
      <canvas id="canvas" width="1000px" height="600px"/>
    </div>);
  }
}


class App extends React.Component<any, any>{
  constructor(props) {
    super(props);
    this.state = { radius: 0 }
  }

  onRadiusChanhe() {
    console.log();
  }
  componentDidMount() {
    this.setState({ radius: 30 })
  }
  render() {
    return (<div>
      <div className="header">
        <h1>Графік функції R^2=y^2+x^2</h1>
        <h1>Робота виконана Микитою Іщенко</h1>
      </div>
      <Canvas radius={this.state.radius} />
      <div className="input" style={{ display: 'flex' }}>
        <input type="range"  id="range" placeholder="radius"   max={25} onChange={() => this.setState({ radius: $("#range").val() * 10 }) } className="inputFiled" />
        <h1> {Math.ceil(this.state.radius / 6) / 10 }</h1>
      </div>
    </div>
    );
  }
}


ReactDom.render(<App/>, document.getElementById("app"))

```
