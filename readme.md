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
