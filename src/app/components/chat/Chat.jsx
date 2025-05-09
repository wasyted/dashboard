'use client'

import { motion } from "motion/react"

export default function Chat() {
  return (
    <>
      <div className="flex gap-x-2 p-1 sm:gap-x-4 text-xs sm:text-sm sm:p-2">
        <button className="text-neutral-800 bg-slate-400 rounded-full px-5 py-1">Today</button>
        <button className="hover:bg-white hover:text-black transition-all text-white/25 bg-slate-600/15 rounded-full px-5 py-1">Trends 2025</button>
        <button className="hover:bg-white hover:text-black transition-all text-white/25 bg-slate-600/15 rounded-full px-5 py-1">Total salary</button>
        <button className="hover:bg-white hover:text-black transition-all text-white/25 bg-slate-600/15 rounded-full px-5 py-1">Social networks</button>
      </div>
      <div>
        <div className="text-white/50 grid grid-cols-2 grid-rows-2 p-2 gap-2">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.75, duration: 1 } }} className="bg-neutral-700/25 py-2 px-4 rounded-md">
            <p>Campaign monitoring</p>
            <p className="text-xs text-white-25">Monitoring ad campaing performance</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1, duration: 0.75 } }} className="bg-neutral-700/25 py-2 px-4 rounded-md">
            <p>Audience segmentation</p>
            <p className="text-xs text-white-25">Segment identification through data analysis</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.25, duration: 0.75 } }} className="bg-neutral-700/25 py-2 px-4 rounded-md">
            <p>Trend forecasting</p>
            <p className="text-xs text-white-25">Utilizing algorithms to forecast trends</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.50 } }} className="bg-neutral-700/25 py-2 px-4 rounded-md">
            <p>Report automation</p>
            <p className="text-xs text-white-25">Automating report generation</p>
          </motion.div>
        </div>
        <motion.div
          initial={{ transform: "translateY(1000%)" }}
          animate={{ transform: "translateY(0px)" }}
          transition={{ delay: 1, duration: 1.5}} className="rounded-sm px-2 py-2">

          <div className="bg-slate-600/15 p-2 rounded-md flex justify-center items-center">
            <label className="w-full px-2" htmlFor="prompt">
              <input className="w-full" placeholder="How can i help you?" type="text" name="prompt" id="prompt" />
            </label>
            <div className="aspect-square w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center">
              <button type="submit">↑</button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )

}