import { useState,useEffect } from "react";
import Editor from "./components/Editor";

function App() {
  const[html, setHtml] = useState('');
  const[css, setCss] = useState('');
  const[js, setJs] = useState('');
  const[srcDoc,setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>${html}</html>
        <style>${css}</style>
        <script>${js}</script>
      `)
    },500);

    return () => clearTimeout(timeout);
  }, [html,css,js]);

  console.log('app '+ html);

  return (
    <>
    <div className="pane top-pane">
      <Editor 
        language='xml'
        displayName='HTML'
        value= {html}
        onChange= {setHtml}
      />
      <Editor 
        language='css'
        displayName='CSS'
        value= {css}
        onChange= {setCss}
      />
      <Editor 
        language='javascript'
        displayName='JS'
        value= {js}
        onChange= {setJs}
      />
    </div>
    <div className="pane">
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </div>
    </>
  );
}

export default App;
