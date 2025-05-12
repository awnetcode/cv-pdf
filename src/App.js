import './App.css';
import CV from './components/CV';

import html2canvas from "html2canvas";
import jsPDF from "jspdf";


function App() {

  const documentDownload = () => {
    const input = document.getElementById("pdf-content");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("dokument.pdf");
    });
  };

  return (
    <>
<CV>

</CV>
<button onClick={documentDownload}>Pobierz PDF</button>
    </>
  );
}

export default App;
