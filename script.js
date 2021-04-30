const TEXTS = ['Declarative', 'Component-Based', 'Learn Once, Write Anywhere']

const firstElement = (
    <div>
        <h1>Hello React</h1>
        <ul>
            <li>{TEXTS[0]}</li>
            <li>{TEXTS[1]}</li>
            <li>{TEXTS[2]}</li>
        </ul>
    </div>
)

// React.createElement(
//     'div',
//     {},
//     [
//         React.createElement(
//             'h1',
//             {},
//             'Hello React'
//         ),
//         React.createElement(
//             'ul',
//             {},
//             TEXTS.map((text) => {
//                 return React.createElement(
//                     'li',
//                     {},
//                     text
//                 )
//             })
//         ),
//     ]
// )

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
