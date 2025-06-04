import { useState } from "react";
import { motion } from "framer-motion";

const interests = ["Teknologi", "Bisnis", "Desain", "Lainnya"];
const skills = ["Pemrograman", "Marketing", "Grafis", "Lainnya"];

export default function CareerQuiz() {
  const [interest, setInterest] = useState("");
  const [skill, setSkill] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (!interest || !skill) {
      alert("Mohon pilih minat dan skill terlebih dahulu!");
      return;
    }
    localStorage.setItem("careerQuiz", JSON.stringify({ interest, skill }));
    setSaved(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-6"
    >
      <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">
        Career Quiz
      </h2>

      <div className="mb-6">
        <p className="mb-2 font-semibold">Apa minat utama kamu?</p>
        <div className="flex flex-wrap gap-4">
          {interests.map((item) => (
            <button
              key={item}
              onClick={() => setInterest(item)}
              className={`px-4 py-2 rounded-full border cursor-pointer transition 
                ${
                  interest === item
                    ? "bg-purple-600 text-white border-purple-600"
                    : "bg-gray-100 border-gray-300 hover:bg-purple-100"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="mb-2 font-semibold">Skill apa yang kamu kuasai?</p>
        <div className="flex flex-wrap gap-4">
          {skills.map((item) => (
            <button
              key={item}
              onClick={() => setSkill(item)}
              className={`px-4 py-2 rounded-full border cursor-pointer transition 
                ${
                  skill === item
                    ? "bg-purple-600 text-white border-purple-600"
                    : "bg-gray-100 border-gray-300 hover:bg-purple-100"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleSave}
        className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition"
      >
        Simpan Jawaban
      </button>

      {saved && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-green-600 font-semibold text-center"
        >
          Jawaban berhasil disimpan!
        </motion.p>
      )}
    </motion.div>
  );
}