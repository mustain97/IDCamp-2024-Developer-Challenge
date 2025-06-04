import { motion } from 'framer-motion';
export default function CvGenerator() {
  return (
    <motion.div className="p-10" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <h2 className="text-3xl font-semibold text-indigo-700 mb-4">CV Generator</h2>
      <p className="text-gray-700">Generator CV otomatis berdasarkan data pengguna. (Coming soon)</p>
    </motion.div>
  );
}
