const car = (props) =>{
    return React.createElement('div',{},[React.createElement('h1',{},props.name),
    React.createElement('h1',{},props.brand),
    React.createElement('h1',{},props.price),
])
}


const App =() =>{
    return React.createElement('div',{},[React.createElement('h1',{},'Buy me'),
    React.createElement(car, {
        name: 'BMW M5',
        brand: 'BMW',
        price: '1000000'
    }),
    React.createElement(car, {
        name: 'BMW M3',
        brand: 'BMW',
        price: '10000'
    }),
    React.createElement(car, {
        name: 'BMW M4',
        brand: 'BMW',
        price: '100000'
    })
])
}
ReactDOM.render(React.createElement(App),document.getElementById('root'));