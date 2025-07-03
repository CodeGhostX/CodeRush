import MonacoEditor from "@monaco-editor/react";
import { defaultCode } from "../constants/constants";

const CodeEditor = ({setCurrCode, currLang}) => {
  const handleCodeChange = (value) => {
    setCurrCode(value);
  }
  return (
    <div>
      <MonacoEditor
        className="pt-2 border mt-2 rounded-xl"
        height="100vh"
        theme="vs-light"
        defaultLanguage={currLang}
        defaultValue={`${defaultCode.cpp}`}
        value={defaultCode[currLang]}
        onChange={handleCodeChange}
        options={{
          fontSize: 18,
          fontFamily: "Monospace",
          lineHeight: 32,
          tabSize:4,
          autoClosingBrackets: "always",
          autoClosingQuotes: "always",
          autoClosingOvertype: "always",
          autoClosingTags: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
