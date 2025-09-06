
'use client';

import { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';

export function DownloadButton() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const content = document.getElementById('download-content');
      if (!content) {
          console.error("Download content not found");
          return;
      }

      const canvas = await html2canvas(content, {
        scale: 2, 
        useCORS: true,
        logging: true,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const ratio = canvasWidth / canvasHeight;
      const pageHeight = pdfWidth / ratio;
      
      let heightLeft = canvasHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pageHeight);
      heightLeft -= (pdf.internal.pageSize.getHeight() * canvasWidth / pdf.internal.pageSize.getWidth());

      while (heightLeft > 0) {
        position = heightLeft - canvasHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pageHeight);
        heightLeft -= (pdf.internal.pageSize.getHeight() * canvasWidth / pdf.internal.pageSize.getWidth());
      }
      
      pdf.save('Exnus-Protocol-Whitepaper.pdf');

    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button onClick={handleDownload} disabled={isGenerating}>
      {isGenerating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating PDF...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </>
      )}
    </Button>
  );
}
