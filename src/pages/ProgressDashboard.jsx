import { motion } from 'framer-motion';
export default function ProgressDashboard() {
  return (
    <motion.div className="p-10" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
      <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Progress Dashboard</h2>
      <p className="text-gray-700">Fitur untuk melacak kursus yang diikuti dan menyelesaikan modul pembelajaran.</p>
    </motion.div>
  );
}
