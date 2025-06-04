import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { motion } from 'framer-motion';

const CVContent = React.forwardRef((props, ref) => (
  <div ref={ref} className="p-6 bg-white text-black max-w-2xl mx-auto shadow-xl rounded-xl">
    <h1 className="text-2xl font-bold mb-2">{props.name}</h1>
    <p className="text-sm text-gray-600 mb-4">{props.title}</p>
    <h2 className="text-lg font-semibold mt-4">Skills</h2>
    <ul className="list-disc ml-5">
      {props.skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
    <h2 className="text-lg font-semibold mt-4">Experience</h2>
    <p>{props.experience}</p>
  </div>
));

export default function CvGenerator() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({ content: () => componentRef.current });

  const sampleData = {
    name: 'John Doe',
    title: 'Frontend Developer',
    skills: ['React', 'Tailwind CSS', 'JavaScript'],
    experience: '1 year internship at TechCorp as Frontend Intern.'
  };

  return (
    <motion.div className="p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-3xl font-bold mb-6">CV Generator</h1>

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <CVContent ref={componentRef} {...sampleData} />
        <button
          onClick={handlePrint}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          Download PDF
        </button>
      </div>
    </motion.div>
  );
}
