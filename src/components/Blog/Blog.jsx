import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='relative bg-slate-100'>
                <img className='w-full h-64 ' src="https://img.freepik.com/free-vector/pastel-watercolor-with-golden-frame_23-2148796557.jpg?size=626&ext=jpg&ga=GA1.1.1626292175.1681061547&semt=ais" alt="" />
                <div className='flex  justify-around'>
                    <h1 className=' text-4xl my-auto text-center -mt-40 font-medium absolute'>My Blog Page</h1>
                </div>
            </div>
            <div className='bg-sky-200 p-2 md:p-6 rounded-sm'>
                <div className='bg-slate-300 p-4'>
                    <h3 className='font-semibold text-xl my-2'>1.When should you use context API?</h3>
                    <div>
                        <p>   React's Context API is a popular choice for global state (my definition: state that is shared amongst components). It is easy to use and we are used to it because a lot of libraries leverage them. There are characteristics of React Context that you should be aware of. They make context not always the best choice for global state. Here are some situations where you might consider using the Context API:</p>
                        <>
                            <li>When you have data that needs to be shared across multiple components: Context can be useful in situations where you have data that needs to be accessed by multiple components in your application.</li>
                            <li>When you have deeply nested components that require access to data: Passing props down multiple levels of the component tree can become tedious and lead to prop drilling. Context can simplify this process by allowing data to be accessed from any component in the tree without the need to pass props down manually.
                            </li>
                            <li>When you want to avoid unnecessary re-rendering of components: Using Context can be a way to avoid unnecessary re-rendering of components that are not affected by the change in data.
                            </li>
                            <li>When you need a global state management solution: Context can be used to create a global state management solution, allowing you to easily manage and update data across your entire application.
                            </li>
                        </>
                    </div>
                </div>
                <div className='bg-slate-300 p-4'>
                    <h3 className='font-semibold text-xl my-2'>2.What is a custom hook?</h3>
                    <div>
                        <p>Hooks are reusable functions.
                            When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
                            Custom Hooks start with "use".</p>
                        <>
                            <li>Custom hooks are just functions: As mentioned earlier, a custom hook is just a function that starts with the word "use". You can define any logic inside this function, and it can use other React hooks or custom hooks as needed.</li>
                            <li>
                                Custom hooks can be used across multiple components: Because custom hooks are just functions, they can be imported and used in any component that needs their functionality. This makes it easy to reuse code and abstract away complex logic.
                            </li>
                            <li>Custom hooks can use other hooks: Custom hooks can use other built-in React hooks or other custom hooks as needed. This allows you to build complex functionality by composing smaller hooks together.
                            </li>
                        </>                        
                    </div>
                </div>
                <div className='bg-slate-300 p-4'>
                    <h3 className='font-semibold text-xl my-2'>3.What is useMemo?</h3>
                    <div>
                        <p>useMemo is a built-in hook in React that allows you to memoize the result of a function, so that it is only recomputed when one of its dependencies changes. This can improve performance by avoiding unnecessary re-renders of a component.Here are some other use cases for useMemo:</p>
                        <>
                            <li>To memoize a computationally expensive function, such as a filtering or sorting function.</li>
                            <li>To memoize the result of an API call, so that it is not recomputed unnecessarily.</li>
                            <li>To prevent unnecessary re-renders of child components that receive props from the parent component.</li>
                        </>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Blog;