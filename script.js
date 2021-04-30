const firstElement = React.createElement(
    'h1',
    {},
    ['Hello React', 'Hello React 2']
)

ReactDOM.render(
    firstElement,
    document.getElementById('root-react')
)

const firstElementDom = document.createElement('h1')
const textDom = document.createTextNode('Hello React')
const textDom2 = document.createTextNode('Hello React 2')
firstElementDom.appendChild(textDom)
firstElementDom.appendChild(textDom2)

document.getElementById('root-dom').appendChild(firstElementDom)
