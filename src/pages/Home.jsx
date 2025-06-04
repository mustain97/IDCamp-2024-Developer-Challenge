import { motion } from 'framer-motion';
export default function Home() {
  return (
    <motion.div className="p-10 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-5xl font-bold text-blue-700 mb-4">Selamat datang di EduPath</h1>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Platform penemuan karier dan roadmap belajar interaktif untuk pelajar, mahasiswa, dan fresh graduate. Temukan potensimu!
      </p>
    </motion.div>
  );
}
