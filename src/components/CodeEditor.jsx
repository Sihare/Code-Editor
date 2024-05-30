import { Editor } from "@monaco-editor/react";
import React, { useRef, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import { Box, HStack } from "@chakra-ui/react";
import Output from "./Output";

const CodeEditor = () => {
    const [value, setValue] = useState('')
    const editorRef = useRef();
    const [language, setLanguage] = useState('javascript')

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    }

    const onSelect = (language) => {
        setLanguage(language)
        setValue(CODE_SNIPPETS[language]);
    }

    return (
        <div className="flex gap-2">
            <div className="w-1/2">
                <LanguageSelector language={language} onSelect={onSelect}/>
                <Editor
                    height="80vh"
                    theme="vs-dark"
                    language={language}
                    defaultValue={`${CODE_SNIPPETS[language]}`}
                    onMount={onMount}
                    value={value}
                    onChange={(val) => setValue(val)}
                />
            </div>
            <div className="w-1/2">
                <Output editorRef={editorRef} language={language}/>
            </div>  
        </div>
    );
};

export default CodeEditor;
