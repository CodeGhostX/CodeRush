import MonacoEditor from "@monaco-editor/react";

const CodeEditor = () => {
  const defaultCode = `#include<bits/stdc++.h>
using namespace std;

int main(){
    // Code Here
}`
  
  return (
    <div>
      <MonacoEditor
        className="pt-2 border mt-2 rounded-xl"
        height="100vh"
        theme="vs-light"
        defaultLanguage="cpp"
        defaultValue={`${defaultCode}`}
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
