import './TextEditor.css';
import '../navbar/navbar.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

const  modules  = {
  toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list:  "ordered" }, { list:  "bullet" }],
      ["link", "image"],
      ["clean"],
  ],
};

const colorList = ['#ed5e84' , '#feca4d' , '#70dc76' ]

function TextEditor() {
  const [isTrue , setIsTrue]  = useState({ 
        palette : false,
        label : false
  });
  const [value, setValue] =  useState("");
        console.log(value);

  return (
    <div className="main-textEditor">
        <div className='text-editor-container d-flex gap-1 flex-column'>
            <div>
                <input type="text" placeholder='Title' className='text-editor-title font-size-md' />
            </div>
            <ReactQuill modules={modules} onChange={ setValue }  theme="snow" placeholder='Take a note...' />
            <div className='d-flex justify-between'>
              <div className='btn-container p-relative'>
                  <button className='icon-btn material-icons-outlined' onClick={ () => setIsTrue({ ...isTrue , palette:!isTrue.palette }) } >palette</button>
                  { isTrue.palette ? <div className='color-tooltip'>
                   { colorList.map( (color, index) => {
                     return (
                       <button key={index} className='color-btn' style={{backgroundColor : `${color}`}}></button>
                     )
                   })
                   }
                  </div> : null 
                  }
                  
                  <button className='icon-btn material-icons-outlined'>archive</button>
                  <button className='icon-btn material-icons-outlined' onClick={ () => setIsTrue({ ...isTrue , label:!isTrue.label })}>label</button>
                  { isTrue.label ? <div className='label-tooltip'>
                      
                      <input type="text"className='label-input' placeholder='label name '/>
                      <button className='notesy-btn notesy-primary-btn font-size-sm'>Add</button>
                      <button className=' icon-btn material-icons-outlined font-size-sm' onClick={ () => setIsTrue({ ...isTrue , label:!isTrue.label })}>clear</button>
                  </div>   : null
                  }  
              </div>
              <div>
                <button className='notesy-btn notesy-primary-btn'>Add</button>
              </div>
            </div>
            
        </div>  
       
       
       
       
        
    </div>
  );
}

export { TextEditor } ;
