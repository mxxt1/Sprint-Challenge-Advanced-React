- [ ] Why would you use class component over function components (removing hooks from the question)?

    Class-based components are more useful when there is a need to manipulate state, or to utilize component lifecycle methods like componendDidMount/Update/Unmount. With the current state of react, functional components can do most of this too using useState and useEffect hooks. Functional components would be preferable to class-based components if the component is simply using and rendering props that have been passed down.  

- [ ] Name three lifecycle methods and their purposes.
    
    Render() --> used during mounting and updating stages of lifecycle, it is the first method called during the mounting/birth stage. This returns the jsx output and renders it to the ui/dom. You can't set state in render or use side-effects with the render method. 

    componentDidMount --> this method runs after the first render of the component. This runs statements that require that the component has successfully rendered, such as making fetch requests and setting state. 

    componentDidUpdate --> this method runs in response to changes to state or props. It is similar in use to the useEffect hook, in that it 'watches' specified props or state, and runs everytime there is a change to props/state. 


- [ ] What is the purpose of a custom hook?

    Custom hooks are used to bundle logic that is used repeatedly across components. Custom hooks avoid the issue of code repetition/non-DRY code, by extracting the repeated logic into an accessible/reusable function. For example, lumping change-handler logic that would be repeated across a number of different inputs. A custom hook can construct local state for each input by using universal logic and input-specific parameters. 


- [ ] Why is it important to test our apps?

    Testing is important because it preempts potential bugs that may surface in production when the app is used with different edge-cases (or anticipated use cases). It also serves as a form of documentation for the code, aids in future refactoring, encourages code clarity and readability, and allows for a trusted code base.