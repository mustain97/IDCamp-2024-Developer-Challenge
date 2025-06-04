import { motion } from 'framer-motion';
export default function LearningRoadmap() {
  return (
    <motion.div className="p-10" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Learning Roadmap</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>Dasar-dasar sesuai minat (Teknologi, Bisnis, dll)</li>
        <li>Skill lanjutan dan proyek mini</li>
        <li>Portofolio dan pengembangan diri</li>
      </ul>
    </motion.div>
  );
}
