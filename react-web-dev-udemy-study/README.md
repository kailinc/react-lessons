# The Complete React Web Developer Course (with Redux)


## Section 3

-   put `<meta charset="utf-8">` in the header tag of index.html so that browser
    will know how to encode it (utf-8) is words
-   most broswers default it to utf-8, this is just to be safe

### Setting Up Babel

-   Babel is a compiler that takes new es6, es7 and makes it into es5
-   why? cuz browsers do not support the new es6/7 yet
-   we can write dope ass code and still run on broswers
-   Babel doesn't compile anything by default, so we have to add presets and stuff
-   will use react preset, includes preset-flow, syntax-jsx, transform-react-jsx, transform-react-display-name
-   will use env preset, includes es2015, es2016, es2017

-   Installation for getting babel-cli
```
yarn global add babel-cli
```
-   adding package for the project to be listed in package.json
```
yarn add <package>
```
-   yarn.lock is a file that descriptes each dependencies used in node_modules/
-   it gives the name, version, source of each dependencies
-   yarn.lock is auto generated
-   idea is to write all the code in src/ and then use babel to generate files in scripts/
-   index.html will use the compiled files in scripts to render
-   we never touch the files in scripts

```terminal
$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react
```

  - src/app.js is the file to compile
  - out-file is where to be the compiled file
  - presets is where you define what presets you want to use
  - if you put --watch, it will watch for changes in src/app.js and make changes to scripts/app.js if there is any changes


  ### Exploring JSX

  - React does not let you render the whole object
  - you have to specify parts of the object to use

  ### Conditional Rendering in JSX

  - use a function that will return a value based on condition
  ```js
  var user = {
    name: 'Andrew',
    age: 29,
    location: 'Boston, MA'
  };

  function getLocation (location) {
    return location ? location : 'Unknown';
  }

  var templateTwo = (
    <div>
      <h1>{ user.name }</h1>
      <p>Age: { user.age }</p>
      <p>Location: { getLocation(user.location) }</p>
    </div>
  )
  ```

  - you have write a jsx within {}
  ` {<h3> This is a H3</h3>}`
  - this lets you render if a value exists, if value doesn't exist you don't return
   something to return. So you return undefined

  ```js
  function getLocation (location) {
    return location ? <p>Location: { location }</p> : undefined;
  }

  var templateTwo = (
    <div>
      <h1>{ user.name }</h1>
      <p>Age: { user.age }</p>
      { getLocation(user.location) }
    </div>
  )
  ```

  - can use ternary statement in {}
  ```js
    <h1>{ user.name ? user.name : 'Anonymous' }</h1>
  ```

  - can use true or false to render it because JSX ignores null, false, and undefined

  ```js
  { user.age >= 18 && <p>Age: { user.age }</p> }
  ```
  - if user.age > 18 === true , it will render that
  - else it will return false and JSX will ignore it
  - very nifty

  - There are 3 ways to do conditional rendering in JSX. Essentially it gets the
    same results. However, some approach might be better than other approaches
    depending on your needs.

    1. using an outside function
    -   This may be for checking more complicated stuff
    example:
      ```js
      function getLocation (location) {
        return location ? <p>Location: { location }</p> : undefined;
      }

      { getLocation(user.location) }
      ```

    2. Using ternary statement
    -   You should use this if you are sure you are going to render something everything
    example:
    ```js
    <h1>{ user.name ? user.name : 'Anonymous' }</h1>
    ```

    3. Using AND operator
    -   You should use this if you are not going to render something sometimes.
    -   It is clever in using the fact that JSX will not render false, null, or undefined
    ```js
    { user.age >= 18 && <p>Age: { user.age }</p> }
    ```

  ### ES6 Aside: const and Let

  -    var's problem: you can reassign a variable, override variables
  -    these problems makes it hard to find bugs
  -    Can't redefine let, but can reaasign let variable to a new value
  -    const can't redefine, and reassign
  -    const and let will help you write better code and keep track of your code
  -    let and const are block scope, meaning they only exist in code block of an
       if statement, for, while loop

  ### ES6 Aside: Arrow Function I

  ```js
  // Regular Function
  const square = function (x) {
    return x * x
  };

  // Arrow Function
  const square = (x) => {
    return x * x
  }

  // Can be simplified into this one liner
  const square = (x) => x * x
  ```

  -    All arrow functions are anynmous, can't reference it by its name
  -


### ES6: Arrow Functions II

-   arguments object - no longer bound with arrow functions
-   this keyword  - no longer bound

### Event and Attributes

### Manual Data Binding

-   JSX does not have data binding

### Picking an Option

## Section 4 React Components

### Thinking in React

### ES6 Classes: Part 1

-   You can set defaults for class
-   you define it in the arugments
-   Below, if you don't provide name, it will be 'Unknown' by default

```js
class Person {
  constructor(name = 'Unknown') {
    this.name = name
  }
}
```

### ES6 Classes: Part 1

-   You inherit a class by using extends
```js
class Student extends Person {
}
```
-   You use super to gain access to parent class
```js
// Parent Class
class Person {
  constructor(name = 'Anynomous', age = 0) {
    this.name = name
    this.age = age
  }
}

// Child Class
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major
  }
}
```

### Creating React Component

### Component Props

### Component State

### Adding State to Counter App Part 1

### Adding State to Counter App Part 2

### Adding State to Counter App Part 3

-   this.state() is async
-   there are two ways to do this.setState()
-   You can pass as a function or as an object
-   You should pass as obj if you don't require the prevState
-   You should pass a function if you require the prevState
-
```js
// You require prevState so you pass in function
handleMinusOne() {
  this.setState((prevState) => {
    return {
      counter: prevState.counter - 1
    }
  })
}

// Your change does not require prev State so you pass in obj
handleReset() {
  this.setState({
    counter: 0
  })
}
```

### Indecision App Part 1

-   can use JSX to pass down boolean
```js
<Action hasOptions={ this.state.options > 0 }/>
```

### State vs Props

-   props flow in one direction
-   props and state are objects
-   both can be used to render
-   changes to both cause rerender
-   can't change props by itself
-   state is defined in the component
-   props comes from above


### Stateless Functional Component


-   This is for componenets that only rendering
-   This component does not track state or has methods

```js
const User = (props) => {
  return (
    <div>
      <h1>Name: { props.name } </h1>
      <h1>Age: { props.age } </h1>
    </div>
  )
};

ReactDOM.render(
  <User name="Kailin" age={ 22 }/>,
  document.getElementById('app')
)
```

### Default Prop Values


-   You set default for props using Component.defaultProps
-   You set object with key

```js
const Header = (props) => {
  return(
    <div>
      <h1>{ props.title }</h1>
      <h2>{ props.subTitle }</h2>
    </div>
  )
}

Header.defaultProps = {
  title: 'Title of the App'
}
```

### React Dev Tool

### Removing Individual Options

### Lifecycle Methods

-   functional stateless component do not have lifecycle management
-   componentDidMount = specify what happens when it renders the first time
-   componentDidUpdate = specify what happens when component updated
-   can take in prevProps or prevState
-   componentWillUnmount = specify what happens when component will disappear
-   Lifecycle Methods:

### Saving and Loading Options Data

-   use localStorage to store data
-   localStorage stores data even after page refresh
-   localStorage.setItem('key', 'value')  ==> store { key: 'value'}
-   localStorage.getItem('key') => 'value'
-   localStorage.removeItem('key') => undefined
-   localStorage only works with string

### Saving and Loading the Count

## Section 6: Webpack

### What is Webpack?

-   allows you to org js
-   bundle.js contains the dependencies and our js code
-   this means there is only one script tag in your html
-   this will increase your web performance
-   we can break app into multiple files which can export/import from/to other files
-   can grab dependencies
-   webpack will run babel for us

### Avoid Global Modules

-   if collaborate with someone else, open source => other people don't know you
-   are using that

### Installing Webpack and Config

### ES6 Import/Export

-   set up by default in webpack

### Default Exports

-   there can only be 1 default export
```js
const square = (x) => x * x

const add = (x,y) => x + y

const subtract = (x,y) => x - y

export { square, add, subtract as default }
```

-   import the default by having it outside the {}
```js
import subtract, { square, add } from './file.js';
```
-   it is named as the name listed after import
-   default, naming is not important
-   can export with adding export infront of the file
```js
export const square = (x) => x * x;
```

```js
export default subtract;
```

-   can default export anynonmous functions
```js
export default (x,y) => x - y
```

### Import NPM Modules

-   depends on the docs
```js
// Syntax
import validator from 'validator';
```

### Source Maps with Webpack

### Webpack Dev Server

-   webpack-dev-server will run the server and webpack
-   does not need bundle.js
-   specify options for webpack in webpack.config.js

### ES6 Class Properties

-   using transform-class-properties from babel

```js
class OldSyntax {
  constructor(name) {
    this.name = name
    this.getGreeting = this.getGreeting.bind(this)
  }
  getGreeting() {
    return `Hi. My name is ${this.name}`
  }
}

class newSyntax {
  name = 'Jen'
  getGreeting = () => {
    return `Hi. My Name is ${this.name}`
  }
}
```

## Section 7: Using a Third Party Component

### Passing Children to Component

-   Can pass in html in a Component
-   you access it with props.children

```js
const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      { props.children }
      <p>footer</p>
    </div>
  )
}

ReactDOM.render(<Layout><p>This is inLine</p></Layout>, document.getElementById('app'));
```

### Using React Model

-   install by using `yarn add react-modal`

## Section 8: Styling React

### Setting up Weback with CSS

### Arch and Header Styles

### Reset that $#!T

## Section 9: React Router

### Server vs Client Routing

-   Using React Router, we set the configs for pages
-   for each url, we define what component to render

### React Router 101

-   there react-router can be used for iOS, Andriod, and webapp
-   react-router-dom, react-router-
-   import components from 'react-router-dom'
-   Route is where you define what component to render according to the path
-   you pass in path and component to Route

Example

```js
const ExpenseDashboardPage = () => (
  <div>
    DashBoard Component
  </div>
)

const routes = (
  <BrowserRouter>
    <Route path="/" component={ExpenseDashboardPage} />
  </BrowserRouter>
)
```

-   BroswerRouter can only have 1 child inside it, so you put a div that wraps around
    all the Route component
```js
const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} />
      <Route path="/contacts" component={Contacts} />
    </div>
  </BrowserRouter>
)
```
-   Have to go to webpack.config.js to set historyApiFallback to true
-   this will make index.html page to be served if there is a fail
-   Then react-router determines what page to serve up accoding to what you set in
-   routes

webpack.config.js
```js
devServer: {
  contentBase: path.join(__dirname, 'public'),
  historyApiFallback: true
}
```

-   have to set props exact to be true
-   this will only serve the component with that path

### Setting up a 404

-   Use Switch Component to set up a 404 page
-   Switch will check for each path, if none matches it will show the Route with no path defined

```js
const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/contacts" component={Contacts} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={ NotFoundPage }/>
    </Switch>
  </BrowserRouter>
)
```

### Linking between Routes

-   Use <Link to="path"></Link> to redirect user to the path defined
-   It is like an anchor tag to redirect user and change the url
-   It will not refresh the page, it just swaps out
-   <NavLink /> is the same as link but you should use it for navigation links because it supports it better
-    NavLink has the prop activeClassName, this will apply the className you provide when the user is on the page
-   This will apply the css of the className you provide


### Query Strings and URl Parameters

-   React Router actually passes down some props to router that we can use
```js
history
```

## Section 9: Redux

### Why do we need something like Redux?

-   createStore is from redux
-   this makes a store
-   store.getState() gets the state of the store
-   pass function in createStore, this function will run once

### Dispatching State

-   action - an obj that gets sent to the store

### Subscribe State

-   Use store.subscribe( callback) will callback the function if store changes

### ES6 Object Destructuring

```js
const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
}

const { name, age } = person;

console.log(`${name} is ${age}.`)
```

-   within `const { name, age } = person`
-   It creates 2 variables (name, age) and set it to the value of person.name and person.age
-   This is new feature of ES6
-   can do it with nested objects

```js
const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
}

const { city, temp } = person.location;

console.log(`${city} is ${temp}.`)

```

-   rename variables
```js
const { city: homeCity, temp } = person;
```

-   set defaults
```js
const { city = 'Chiang Mai', temp}
```

### Array Destructuring

```js
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [streetName, city, state, zipCode ] = address

console.log(`You are in ${address[1]} ${address[2]}`)
console.log(`You are in ${streetName} ${city}`)
```
-   matches it by the order in the array
-   skip the order by using ,

```js
const [,city,state,zipCode] = address;
```

-   can set defaults
```js
const [,, state = 'New York'] = address;
```

### Action Generator

### Reducer

-   reducers are pure function
-   output is determined by input
-   never change state or action

### Working with Multiple reducers

### ES6 Spread Operator

-   Syntax:
```js
const array = ['apple', 'banana', 'orange']
[...array, 'String', 'To', 'Add'] // ['apple', 'banana', 'orange', 'String', 'To', 'Add']
console.log(array) // ['apple', 'banana', 'orange']
```
-   This will not change the Array
-   It acts like array.prototype.concat(string)
-   where you put the 'string' will determine which direction it is added

### Spread Operator with Objects

-    same way to use but you need to install a plugin in babel
-    installation:
      1.`yarn add babel-plugin-transform-object-rest-spread`
      2. modify .babelrc
```js
{
  "presets": [
  "env",
  "react"
  ],
  "plugins": [
    "transform-class-properties",
    "transform-object-rest-spread"
  ]
}
```
-   can overide properties
-   use the same was as we used on array

## Section 10: Connecting React and Redux

### Organizing Redux

### Higher Order Components

-   definition: Component that renders another component

### Date Picker

-   Moment.js is library for dealing with dates and times
-   Airbnb react-dates is for letting you have a calender picker
-   react-addons-shallow-compare is to use with react-dates
