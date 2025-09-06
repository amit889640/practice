/*

Lifecyle method:-
Phase:  Mounting:-
                constructor(props)->getDerivedStateFromProps()->render()->componentDidMount()
        Updating:- 
                getDerivedStateFromProps()->shouldComponentUpdate() ->render()->getSnapshotBeforeUpdate(prevProps,prevState)->render()->componentDidMount()
        Unmount:- componentWillUnmount()

How to change the port?
"start": "set PORT=3006 && react-scripts start",

Component name in PascalCase
Type and Interface in PascalCase

To handle the error
Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

A class component becomes an error boundary if it defines either (or both) of the lifecycle methods static getDerivedStateFromError() or componentDidCatch(). Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown. Use componentDidCatch() to log error information.

componentDidCatch() life cycle is use to catch the error we can't use this in hook 
Note that error boundaries only catch errors in the components below them in the tree.

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>

In a controlled component react, state handles all the form data, whereas, 
In an uncontrolled component, the HTML form element data is managed by only the DOM,  So in order to access any value that has been entered we take the help of refs.

Controlled components are predictable since the component manages the state of the form elements.
Because the form elements may change or be impacted by external sources over the lifespan of a component, uncontrolled components are not predictable.

Pure components improve the performance and speed in React by avoiding unnecessary re-renders

React Portals provide a way to render elements outside the DOM hierarchy of their parent components. In simpler terms, they allow you to insert a React component's subtree into a different part of the DOM, even if it's not a direct child of that component. 
Ref:- https://supermarket.chef.io/tools/react-portals-in-functional-components-a-comprehensive-guide#:~:text=What%20are%20React%20Portals%3F,direct%20child%20of%20that%20component.

Examples modals, tooltips, and context menus , popovers,  overlays or dropdowns 
import ReactDOM from 'react-dom';
ReactDOM.

What is jsx
JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.

Events -> React event are like html event only like onclick->onClick, onchange->onChange

Conditions->  { isGoal ? <MadeGoal/> : <MissedGoal/> } 

Hooks are functions that let you "hook into" React state and lifecycle features from functional components.

There are 3 rules for hooks:
Hooks can only be called inside React function components.
Hooks can only be called at the top level of a component.
Hooks cannot be conditional

memo:- Using memo will cause React to skip rendering a component if its props have not changed.
useState:-  Hook allows us to track state in a function component.

useEffect:-  Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.

useContext:- is a way to manage state globally and get rid of prop-drilling problem

useRef:-
The useRef Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.
count.current = count.current + 1;

useReducer:- The useReducer Hook is similar to the useState Hook.
It allows for custom state logic.

const [todos, dispatch] = useReducer(reducer, initialTodos);
const reducer = (state, action) => {}
dispatch({ type: "COMPLETE", id: todo.id });

useCallback:- returns a memoized callback function, only runs when one of its dependencies update.
Because of "referential equality"
Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.

useMemo:- Hook returns a memoized value.
The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
const calculation = expensiveCalculation(count);  
const calculation = useMemo(() => expensiveCalculation(count), [count]);


Redux-middleware:-  middleware functions run between dispatching an action and the moment it reaches the reducer. Redux middlewares can be used for logging, routing, asynchronous actions, etc.
Middleware helps you with logging, error reporting, making asynchronous requests, and a whole lot more.

Context api 
React v16.3.0,
Pros
The built-in React tool has not influenced the final bundle size and is integrated by design with every npm package
Easier to understand and handle for beginners compared to the Redux data flow
Excellent for more static data
Only a little setup is required 
Cons
Context API is not designed for frequently refreshed or changed data
Reusing components is more challenging because some data comes from the context, not always from props

Redux 
Pros
large community
Designed for frequently updated
Improved debugging 
Code organization

cons
Not built-in to React (increases the final bundle size)
May be misleading for beginners
Requires more setup than Context API (and involves more terms to understand

higher-order component: is a function that takes a component as an argument and returns a new component that wraps the original component.
They allow you to reuse component logic across multiple components.
https://www.youtube.com/watch?v=tsCoBd7xSK8
https://github.com/dmalvia/React_Higher_Order_Component_Example/blob/master/src/TodoList.js

The Profiler:-  measures how often a React application renders and what the “cost” of rendering is. Its purpose is to help identify parts of an application that are slow and may benefit from optimizations such as memoization.
Profiling adds some additional overhead, so it is disabled in the production build.

When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements.

lazy loading - code splitting - chunking - suspense all are same

What is Suspense?
Suspense is a React feature that lets your components display an alternative HTML while waiting for code or data to load.

     <Suspense fallback={<div>Loading...</div>}>
        <Fruits />
      </Suspense>
      
CSS Modules allow you to combine classes using the composes keyword:
.mybutton {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.primary {
  composes: mybutton;
  background-color: #007bff;
  color: white;
}

For the global css
:global(.myheader) {
  padding: 10px 20px;
  font-size: 50px;
  color: white;
  background-color: dodgerblue;
}


What is useTransition?
It is use for non urgent update
The useTransition hook helps you keep your React app responsive during heavy updates.
It lets you mark some state updates as "non-urgent", allowing other, more urgent updates to happen first.

When to use:
A slow operation that might freeze the UI
Updates that aren't immediately critical
Search results that take time to display

const [isPending, startTransition] = useTransition();

forwardRef lets your component pass a reference to one of its children. It's like giving a direct reference to a DOM element inside your component.

Common uses for forwardRef:

Focusing input elements
Triggering animations
Measuring DOM elements
Integrating with third-party libraries



SSR is technique for rendering client side app on server and sending fully rendered page to client 
in csr only root will be there and nothing else
in ssr you will find all the required element in the div not only root but all
cons:-  seo , performance


A fragment looks like an empty HTML tag: <></>  This will prevent unnecessarily adding extra nodes to the DOM.

Code Preparation
custom hook
todo app
redux

What is Sass
Sass is a CSS pre-processor.
Sass files are executed on the server and sends CSS to the browser.


*/
