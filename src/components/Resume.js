import React from 'react';
import resume from '../assets/resume.pdf'
import {pdfjs} from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

const Resume = () =>{
    return(
        <div>
            <embed src={resume} height="1000" width="75%" />
        </div>
    )
}

export default Resume