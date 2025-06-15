import { motion } from 'motion/react'

const bars = [
  'bg-yellow-400', 'bg-sky-400', 'bg-purple-400', 'bg-emerald-400',
  'bg-pink-400', 'bg-orange-400', 'bg-white'
]

export default function AudioBars() {
  return (
    <div className="w-full px-4 py-2 bg-zinc-950">
      <div className="flex justify-center gap-1 h-24 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-2 rounded-full ${bars[i % bars.length]}`}
            animate={{
              height: [8, 40, 28, 20, 16],
              opacity: [0.6, 1, 0.8, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1 + (i % 5) * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  )
}
