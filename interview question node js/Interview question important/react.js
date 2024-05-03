/*

How to change the port?
"start": "set PORT=3006 && react-scripts start",

Component name in PascalCase
Type and Interface in PascalCase

Hooks
useRef()
The useRef Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.

To handle the error
componentDidCatch() life cycle is use to catch the error we can't use this in hook 

In a controlled component react, state handles all the form data, whereas, 
In an uncontrolled component, the HTML form element data is managed by only the DOM,  So in order to access any value that has been entered we take the help of refs.

Controlled components are predictable since the component manages the state of the form elements.
Because the form elements may change or be impacted by external sources over the lifespan of a component, uncontrolled components are not predictable.

Pure components improve the performance and speed in React by avoiding unnecessary re-renders

React Portals provide a way to render elements outside the DOM hierarchy of their parent components. In simpler terms, they allow you to insert a React component's subtree into a different part of the DOM, even if it's not a direct child of that component. 
Ref:- https://supermarket.chef.io/tools/react-portals-in-functional-components-a-comprehensive-guide#:~:text=What%20are%20React%20Portals%3F,direct%20child%20of%20that%20component.

Examples modals, tooltips, and context menus , popovers,  overlays or dropdowns 
import ReactDOM from 'react-dom';
ReactDOM.createPortal
*/

