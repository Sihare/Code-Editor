import React, { useState } from "react";
import axios from 'axios'
import { baseUrl } from "../constants";
import { LANGUAGE_VERSIONS } from "../constants";

const Output = ({editorRef,language}) => {
    const [output, setOutput] = useState('')
    const [isLoading, setIsloading] = useState(false)
    const [isError, setIsError] = useState(false);

    const runCode = async() => {
        setOutput('')
        setIsloading(true)

        const codeToCompile = editorRef.current.getValue();

        try {
            const res = await axios.post(`${baseUrl}`,{
                "language": language,
                "version": LANGUAGE_VERSIONS[language],
                "files": [
                    {
                    "content": codeToCompile,
                    }
                ],
            })
            setOutput(res.data.run.output)
            res.data.run.stderr && setIsError(true) 

        } catch (error) {
            console.error(error)
            alert(error.message)
        } finally {
            setIsloading(false)
        }
    }
    return (
        <>
            <h2 className="text-lg text-gray-300 font-medium">Output:</h2>
            <button 
            onClick={runCode}
            className="px-3 py-1.5 border-2 border-lime-300 rounded-md mb-2 bg-transparent"
            >Run Code</button>
            <div className={`h-[80vh] p-2 border rounded-md ${isError ? "text-red-500 border-red-500" : "text-gray-300 border-[#333]"} bg-gray-950`}>
                {output ? output : (isLoading ? 'Running your code...' : `Click "Run Code" to see output here`)}
            </div>
        </>
    );
};

export default Output;
