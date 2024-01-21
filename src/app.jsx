import { useState } from 'preact/hooks';
import buttons from './buttons';

export default function App() {
  const [selectedText, setSelectedText] = useState('');
  const getSelectedText = () => {
    const selectedText = window.getSelection().toString();
    setSelectedText(selectedText);
  };
  const changeHeading = (heading) => {
    if (!selectedText) alert('select a text for change heading');
    const range = window.getSelection().getRangeAt(0);
    const h = document.createElement(heading);
    h.innerText = selectedText;
    range.deleteContents();
    range.insertNode(h);
  };
  const changeFontWeight = (fontWeight) => {
    if (!selectedText) alert('select a text for change font style');
    const range = window.getSelection().getRangeAt(0);
    if (fontWeight === 'normal') {
      const textNode = document.createTextNode(selectedText);
      range.deleteContents();
      range.insertNode(textNode);
      return;
    }
    const el = document.createElement(fontWeight);
    el.innerText = selectedText;
    range.deleteContents();
    range.insertNode(el);
  };
  const toggleLeft = () => {
    if (!selectedText) alert('select a text for change font weight');
    const range = window.getSelection().getRangeAt(0);
    const el = document.createElement('div');
    el.style.textAlign = 'left';
    el.innerText = selectedText;
    range.deleteContents();
    range.insertNode(el);
  };
  const handleClickButton = (command) => {
    switch (command) {
      case 'toggleHeading1':
        changeHeading('h1');
        break;
      case 'toggleHeading2':
        changeHeading('h2');
        break;
      case 'toggleNormal':
        changeFontWeight('normal');
        break;
      case 'toggleBold':
        changeFontWeight('b');
        break;
      case 'toggleItalic':
        changeFontWeight('i');
        break;
      case 'toggleUnderline':
        changeFontWeight('u');
        break;
      default:
        break;
    }
  };
  return (
    <div className="container">
      <div className="btn-wrapper">
        {buttons.map(({ text, command }) => {
          return (
            <button className="btn" onClick={() => handleClickButton(command)}>
              {text}
            </button>
          );
        })}
      </div>
      <div className="text-box" onMouseUp={getSelectedText}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
        deserunt esse voluptatem blanditiis modi maiores aperiam libero voluptas
        velit, fugit sapiente explicabo nihil. Ea necessitatibus ex ratione in
        quidem assumenda saepe voluptatibus optio excepturi sed id possimus
        earum delectus perferendis, incidunt aut repellendus quos! Rerum est
        inventore autem eligendi? Totam
      </div>
    </div>
  );
}
