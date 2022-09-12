import { motion } from 'framer-motion'

import Introduce from '../components/layouts/Introduce'
import Technology from '../components/layouts/Technology'
import Contact from '../components/layouts/Contact'

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: 'easeIn',
      }}
    >
      <Introduce />
      <Technology />
      <Contact />
    </motion.div>
  )
}
