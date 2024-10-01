## How to install react in Windows?

### For Normal React

    npm i -g create-react-app
    npx create-react-app [Your_App_Name]
    cd [Your_App_Name]
    npm start

### For Vite Tool React

    npm create vite@latest
    cd [Your_App_Name]
    npm i
    npm run dev

### Install Tailwind CSS with Vite

-   Link : [Tailwindcss](https://tailwindcss.com/docs/guides/vite)

### Password Genrator Design

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
                type="text"
                className="outline-none w-full py-1 px-3"
                placeholder="Password"
                readOnly
            />
            <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
                copy
            </button>
        </div>
        <div className="flex text-sm gap-x-2">
            <div className="flex items-center gap-x-1">
                <input
                    type="range"
                    min={6}
                    max={100}
                    className="cursor-pointer"
                />
                <label>Length: {}</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input
                    type="checkbox"
                    id="numberInput"
                />
                <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input
                    type="checkbox"
                    id="characterInput"
                />
                <label htmlFor="characterInput">Characters</label>
            </div>
        </div>
    </div>

## React Hooks Project Ideas
#### Only by using this hooks ( useState, useRef, useEffect, useCallback, useContext, useMemo, useLayoutEffect, useReducer )

Here are three projects based on the React hooks you've learned:

### 1. **Task Manager App**
   - **What you need**: 
     - Display a list of tasks with functionality to add, edit, and delete tasks.
     - Implement a filter (e.g., show completed/uncompleted tasks).
     - Handle local state for individual task updates and use context to share the task list state across components.
   - **Hooks involved**: 
     - `useState`, `useContext`, `useReducer`, `useCallback`, `useMemo`
   - **Hint steps**:
     1. Create a global state using `useReducer` for managing tasks (add, update, delete).
     2. Use `useContext` to provide the task state across components (task list, task filter, etc.).
     3. Use `useMemo` to optimize filtering tasks.
     4. Use `useCallback` for memoizing add/edit/delete functions.

### 2. **Live Chat Room**
   - **What you need**: 
     - Create a chat room where users can send and view messages in real-time.
     - Automatically scroll to the latest message.
     - Display the number of online users.
   - **Hooks involved**:
     - `useState`, `useEffect`, `useRef`, `useLayoutEffect`, `useCallback`
   - **Hint steps**:
     1. Store messages in state using `useState` and handle new messages with `useCallback`.
     2. Use `useRef` to keep track of the last message and scroll to it when a new message arrives (`useLayoutEffect` to control the scroll).
     3. Update online users count with `useEffect` on component mount and unmount.

### 3. **E-Commerce Product Listing**
   - **What you need**: 
     - Fetch product data from an API.
     - Display products with sorting (e.g., price, popularity) and filtering (e.g., category).
     - Implement a loading state and error handling for API requests.
   - **Hooks involved**:
     - `useState`, `useEffect`, `useMemo`, `useCallback`
   - **Hint steps**:
     1. Use `useEffect` to fetch products and handle API errors.
     2. Use `useState` to manage loading, error, and product data.
     3. Use `useMemo` to optimize product sorting and filtering.
     4. Use `useCallback` for handling filter and sort operations efficiently.

