### Condicionales en los componentes de React

Durante la clase hemos aprendido a utilizar condicionales en los componentes de React, para mostrar u ocultar elementos según una condición. Recordar que para ocultar un elemento, podemos retornar `null` en lugar de un elemento JSX.

Remarcar que para poder utilizar condicionales dentro de JSX, es necesario utilizar expresiones de JavaScript, por lo que debemos encerrarlas entre llaves `{}` y en utilizar el operador ternario para definir la condición.

```jsx
function App() {
  const user = {
    name: 'Juan',
    email: 'pepe@juan.com'
  }

  return (
    <div>
      {user ? (
        <h1>Hola, {user.name}</h1>
      ) : (
        <h1>Hola, extraño</h1>
      )}
    </div>
  )
}
```

### Estado avanzado useState

En la clase de hoy hemos aprendido a utilizar el hook `useState` para manejar el estado de un componente. Recordar que el estado es un objeto que contiene los datos que el componente necesita para funcionar y que al cambiar, provoca que el componente se vuelva a renderizar.
Destacar que hemos visto la forma de actualizar el estado con el método `setState` que nos devuelve `useState` y que podemos utilizar para cambiar el estado de un componente, y este lo ejecutamos pasando un callback o un valor.

- El valor sera un reemplazo del estado actual.
- El callback nos permite obtener el estado actual y devolver un nuevo estado.

```jsx
import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Has hecho click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Haz click
      </button>
    </div>
  )
}
```
o 
```jsx
import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Has hecho click {count} veces</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Haz click
      </button>
    </div>
  )
}
```