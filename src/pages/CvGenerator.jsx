import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CvGenerator = () => {
  const { register, handleSubmit, watch } = useForm();
  const cvRef = useRef();

  const onSubmit = async () => {
    const element = cvRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 10, 10);
    pdf.save('cv-edupath.pdf');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">CV Generator</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-8">
        <input {...register("name")} placeholder="Nama Lengkap" className="input input-bordered w-full" />
        <input {...register("email")} placeholder="Email" className="input input-bordered w-full" />
        <textarea {...register("summary")} placeholder="Ringkasan Diri" className="textarea textarea-bordered w-full" />
        <button type="submit" className="btn btn-primary">Unduh CV (PDF)</button>
      </form>

      <div className="p-4 bg-white shadow rounded" ref={cvRef}>
        <h2 className="text-xl font-semibold mb-2">Preview CV</h2>
        <p><strong>Nama:</strong> {watch("name")}</p>
        <p><strong>Email:</strong> {watch("email")}</p>
        <p><strong>Ringkasan:</strong> {watch("summary")}</p>
      </div>
    </div>
  );
};

export default CvGenerator;
