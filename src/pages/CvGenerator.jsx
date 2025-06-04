import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CvGenerator = () => {
  const { register, handleSubmit } = useForm();
  const cvRef = useRef();

  const onSubmit = async (data) => {
    const element = cvRef.current;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 10, 10);
    pdf.save('cv.pdf');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">CV Generator</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} placeholder="Nama Lengkap" className="input input-bordered w-full" />
        <input {...register("email")} placeholder="Email" className="input input-bordered w-full" />
        <textarea {...register("summary")} placeholder="Ringkasan Profil" className="textarea textarea-bordered w-full" />
        <button type="submit" className="btn btn-primary">Download CV</button>
      </form>

      <div className="mt-8 p-4 border rounded bg-white shadow" ref={cvRef}>
        <h1 className="text-xl font-semibold">Preview CV</h1>
        <p><strong>Nama:</strong> {watch("name")}</p>
        <p><strong>Email:</strong> {watch("email")}</p>
        <p><strong>Ringkasan:</strong> {watch("summary")}</p>
      </div>
    </div>
  );
};

export default CvGenerator;
