const TEXTS = ['Declarative', 'Component-Based', 'Learn Once, Write Anywhere']

const firstElement = React.createElement(
    'div',
    {},
    [
        React.createElement(
            'h1',
            {},
            'Hello React'
        ),
        React.createElement(
            'ul',
            {},
            [
                React.createElement(
                    'li',
                    {},
                    TEXTS[0]
                ),
                React.createElement(
                    'li',
                    {},
                    TEXTS[1]
                ),
                React.createElement(
                    'li',
                    {},
                    TEXTS[2]    
                )
            ]
        ),
    ]
)

ReactDOM.render(
    firstElement,
    document.getElementById('root-react')
)

const containerDom = document.createElement('div')
const firstElementDom = document.createElement('h1')
const textDom = document.createTextNode('Hello React')
firstElementDom.appendChild(textDom)

const listElementDom = document.createElement('ul')
TEXTS.forEach((text) => {
    const listItemElementDom = document.createElement('li')
    listItemElementDom.innerText = text
    listElementDom.appendChild(listItemElementDom)
})

containerDom.appendChild(firstElementDom)
containerDom.appendChild(listElementDom)

document.getElementById('root-dom').appendChild(containerDom)
