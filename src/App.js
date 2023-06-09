import './App.css';
import { useState } from "react";
import { marked } from "marked";

function App() {

  const [text, setText] = useState(`
  # Welcome to my React Markdown Previewer!
  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.

  \`\`\`
    // this is multi-line code:

    function anotherExample(firstLine, lastLine) {
     if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
    }
  }
  \`\`\`

  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.

  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!

  - And of course there are lists.
    - Some are bulleted.
      - With different indentation levels.
          - That look like this.


  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  `);

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">

      <textarea
        id="editor"
        onChange={(event) => { setText(event.target.value) }}
        value={text}>
      </textarea>

      <div id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>


    </div>
  );
}

export default App;


//a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text