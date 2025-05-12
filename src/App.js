import { useRef } from 'react';

import './App.css';
import CV from './components/CV';

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { Button } from '@mui/material';


function App() {
  const pdfRef = useRef();


  const documentDownload = () => {
    html2canvas(pdfRef.current, {scale:3}).then((canvas) => {  //scale: 3 poprawia jakosć tekstu
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, 'MEDIUM');
      pdf.save("Adam-Wróblewski-Frontend-developer.pdf");
    });
  };

  return (
    <>
<CV ref={pdfRef}>

</CV>
<Button variant='outlined' sx={{
  position:'absolute',
  left:'10%',
  top:'50%'
}}
onClick={documentDownload}
>Pobierz PDF</Button>
    </>
  );
}

export default App;
