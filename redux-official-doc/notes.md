## Redux

Whole state of app is stored in an object tree inside a single store
The only way to change the state tree is to emit an action, obj describing what happened

```js
import { createStore } from 'redux'

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() =>
  console.log(store.getState())
)

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1
```

It is possible to trace every mutation to the action that caused it
can record user sessions and reproduce them just by replaying every action
## Introduction

### Motivation

Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen

## Core Concepts

To change something in the state, you need to dispatch an action
Action is a pojo that describes what happened

Example of a State
```js
{
  todos: [{
    text: 'Eat food',
    completed: true
  }, {
    text: 'Exercise',
    completed: false
  }],
  visibilityFilter: 'SHOW_COMPLETED'
}
```

Example of an action
```js
{ type: 'ADD_TODO', text: 'Go to swimming pool'}
{ type: 'TOGGLE_TODO', index: 1}
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL'}
```

To tie state and actions together, write a reducer
reducer is a function that takes state and action as arguments and returns next state of the app

Example of a reducer
```js
function visibilityFilter(state = 'SHOW ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false}])
    case 'TOGGLE_TODO':
      return state.map(
        (todo, index) =>
          action.index === index
          ? { text: todo.text, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}
```

write another reducer that manages the complete state of app by calling those two reducers
for corresponding state keys

```js
function todoApp(state = {}, action) {
  return{
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}
```

### Three Principles

1. Single Source of Truth
    State of whole application is stored in an object tree within a single store
    Single state tree makes it easier to debug or inspect an application

2. State is read-only
    The only way to change the state isg to emit an action, objc that describes what happens
    all changes happen one by one in a strict other
    actions are just plain objects that can be logged, serializer, stored, replayed


3. Changes are made with pure functions
     To specify how the state tree is transformed by actions, you write pure reducers
     Reducers are just pure functions that take previous state and an action, and returns the next state
     Start with a single reducer
     As app grows, split it off to smaller reducers that manage diff parts of state tree
     can controler order in which reducers are called, pass additional data, or make reusable reducers for common tasks like pagination

## Basics

### Actions

-   Actions are payloads of info that send data from app to store
-   It is the only source of information for the store
-   send action to store by store.dispatch()
```js
const ADD_TODO = 'ADD_TODO'

{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```
-   Actions have a type property that indicates the type of action being performed
-   Types should be defined as string constants
-   If app is large, may want to move them into a seperate module

```js
import { ADD_TODO, REMOVE_TODO } from '../actionTypes'
```

-   another action type is index
-   Index is essentially ID
-   recommended to generate a new id each time, but it is fine to increment it by 1
-   It is a good idea to pass fewer info as possible, maybe just pass in index (idk why)

Action creators are functions that create actions

```js
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
```
-   to initiate a dispatch pass the result into a dispath()

```js
dispatch(addTodo(text))
```

-   can create bound action creater
```js
const boundAddTodo = text => dispatch(addTodo(text))
const boundCompleteTodo = index => dispatch(completeTodo(index))


boundAddTodo(text)
boundCompleteTodo(index)
```
-   looks like a function that uses es2016 syntax that when invoked will call dispath onto the action creator
-   can use boundActionCreators to bound many action creators


Exporting functions
```js
/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
```