import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const [inputsDisabled, setInputsDisabled] = useState(false);

    const passwordRef = useRef(null);

    // Password generation logic
    const passwordGenerator = useCallback(() => {
        console.log("PassGenCalled..");
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);
    }, [length, numberAllowed, charAllowed]);

    // Copy password to clipboard and disable inputs
    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 999);
        window.navigator.clipboard.writeText(password);
        setInputsDisabled(true); // Disable inputs after copying
    }, [password]);

    // Reset inputs and re-enable controls
    const handleReset = () => {
        setLength(8);
        setNumberAllowed(false);
        setCharAllowed(false);
        setInputsDisabled(false); // Enable inputs on reset
        passwordGenerator(); // Generate a new password
    };

    // Handle page reload warning
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (inputsDisabled) {
                event.preventDefault();
                event.returnValue = ""; // Show confirmation dialog
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [inputsDisabled]);

    // Generate a new password on changes to length, numberAllowed, charAllowed
    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, charAllowed, passwordGenerator]);

    return (
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
            <h1 className="text-white text-center my-3">Password Generator</h1>

            {/* Password display and copy button */}
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input
                    type="text"
                    className="outline-none w-full py-1 px-3"
                    value={password}
                    ref={passwordRef}
                    placeholder="Password"
                    readOnly
                />
                <button
                    onClick={copyPasswordToClipboard}
                    className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
                >
                    Copy
                </button>
            </div>

            {/* Input controls */}
            <div className="flex text-sm gap-x-2">
                <div className="flex items-center gap-x-1">
                    <input
                        type="range"
                        min={6}
                        max={100}
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="cursor-pointer"
                        disabled={inputsDisabled} // Disable if inputsDisabled is true
                    />
                    <label>Length: {length}</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        checked={numberAllowed}
                        onChange={() => setNumberAllowed((prev) => !prev)}
                        id="numberInput"
                        disabled={inputsDisabled} // Disable if inputsDisabled is true
                    />
                    <label htmlFor="numberInput">Numbers</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        checked={charAllowed}
                        onChange={() => setCharAllowed((prev) => !prev)}
                        id="characterInput"
                        disabled={inputsDisabled} // Disable if inputsDisabled is true
                    />
                    <label htmlFor="characterInput">Characters</label>
                </div>
            </div>

            {/* Reset button */}
            {inputsDisabled && (
                <button
                    onClick={handleReset}
                    className="mt-4 w-full bg-red-600 text-white py-1 px-3 rounded-lg"
                >
                    Reset
                </button>
            )}
        </div>
    );
};

export default App;
