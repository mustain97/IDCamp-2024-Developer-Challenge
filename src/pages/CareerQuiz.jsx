import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CareerQuiz() {
  const [interest, setInterest] = useState('');
  const [skill, setSkill] = useState('');

  return (
    <motion.div className="p-10" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Career Quiz</h2>
      <div className="grid gap-6 max-w-md">
        <div>
          <label className="block text-sm font-medium">Apa minat utama kamu?</label>
          <select value={interest} onChange={e => setInterest(e.target.value)} className="mt-1 w-full border rounded p-2">
            <option value="">-- Pilih --</option>
            <option value="Teknologi">Teknologi</option>
            <option value="Bisnis">Bisnis</option>
            <option value="Desain">Desain</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Skill apa yang kamu kuasai?</label>
          <select value={skill} onChange={e => setSkill(e.target.value)} className="mt-1 w-full border rounded p-2">
            <option value="">-- Pilih --</option>
            <option value="Pemrograman">Pemrograman</option>
            <option value="Marketing">Marketing</option>
            <option value="Grafis">Desain Grafis</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">Simpan Jawaban</button>
      </div>
    </motion.div>
  );
}
