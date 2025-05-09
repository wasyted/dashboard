import { motion } from "motion/react"
import Counter from "../Counter"

export default function Dashboard() {
  return (
    <>
      <div className="grid grid-rows-6 gap-2">
        <motion.div initial={{ scale: 0.9, opacity: 0.0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 1 }} className="flex flex-col justify-between p-4 items-start gap-y-4 row-span-5 bg-slate-400 text-neutral-900 rounded-xl">
          <div className="flex flex-col gap-y-4">
            <p className="text-neutral-800">Traffic flow</p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="text-neutral-900 font-semibold text-3xl sm:text-5xl"> <Counter target={4215} /> visits</motion.p>
          </div>
          <div className="self-center h-72 mt-8 flex justify-center items-end gap-1">
            <motion.div
              initial={{ height: "5%" }}
              animate={{ height: "8%" }}
              transition={{ duration: 1, delay: 1.8 }}
              className="rounded-full bg-slate-500/40 w-4 h-6"></motion.div>
            <motion.div
              initial={{ height: "5%" }}
              animate={{ height: "8%" }}
              transition={{ duration: 1, delay: 2 }} className="rounded-full bg-slate-500/40 w-4 h-6" />
            <motion.div
              initial={{ height: "5%" }}
              animate={{ height: "8%" }}
              transition={{ duration: 1, delay: 2.1 }} className="rounded-full bg-slate-500/40 w-4 h-6" />
            <motion.div
              initial={{ height: "5%" }}
              animate={{ height: "55%" }}
              transition={{ duration: 1, delay: 2.2 }} className="rounded-full bg-neutral-900 w-4 h-6" />
            <motion.div
              initial={{ height: "5%" }}
              animate={{ height: "80%" }}
              transition={{ duration: 1, delay: 2.3 }} className="rounded-full bg-neutral-900 w-4 h-6" />
            <motion.div
              initial={{ height: "5%" }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, delay: 2.4 }} className="rounded-full bg-neutral-900 w-4 h-6" />
            <motion.div
              initial={{ height: "5%" }}
              animate={{ height: "75%" }}
              transition={{ duration: 1, delay: 2.5 }} className="rounded-full bg-neutral-900 w-4 h-6" />
            <motion.div
              initial={{ height: "5%" }}
              animate={{ height: "45%" }}
              transition={{ duration: 1, delay: 2.6 }} className="rounded-full bg-neutral-900 w-4 h-6" />
            <motion.div
              initial={{ height: "5%" }}
              animate={{ height: "70%" }}
              transition={{ duration: 1, delay: 2.7 }} className="rounded-full bg-neutral-900 w-4 h-6" />
            <motion.div
              initial={{ height: "5%" }}
              animate={{ height: "15%" }}
              transition={{ duration: 1, delay: 2.8 }}
              className="rounded-full bg-neutral-900 w-4 h-6"></motion.div>
            <motion.div
              initial={{ height: "5%" }}
              animate={{ height: "25%" }}
              transition={{ duration: 1, delay: 2.9 }} className="rounded-full bg-neutral-900 w-4 h-6" />
            <motion.div
              initial={{ height: "5%" }}
              animate={{ height: "53%" }}
              transition={{ duration: 1, delay: 3 }} className="rounded-full bg-neutral-900 w-4 h-6" />
          </div>
        </motion.div>
        <motion.div initial={{ scale: 0.8, opacity: 0.0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="row-span-1 bg-slate-600/15 rounded-xl p-4">
          <div className="flex flex-col gap-4">
            <p className="opacity-75 text-sm">Facebook ad website conversions</p>
            <div className="flex justify-between">
              <p className="text-xl sm:text-2xl text-sky-100 font-semibold"><Counter target={411} /></p>
              <p className="text-xl sm:text-2xl text-sky-100">↗</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="font-thin grid grid-rows-2 gap-2">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, type: "ease-in" }}
          className="justify-between flex flex-col gap-4 text-sm p-6 row-span-1 bg-slate-600/15 rounded-xl">
          <p className="opacity-75 ">Country stats</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="">United states</p>
                <p><Counter target={31.8} decimals={1} />k</p>
              </div>
              <div className="h-[2px] w-full">
                <div className="relative h-full w-full bg-slate-600">
                  <motion.div initial={{ width: 0 }} animate={{ width: "63%" }} transition={{ delay: 2, duration: 0.5 }} className="absolute h-full left-0 bg-slate-400" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="">India</p>
                <p><Counter target={11.7} decimals={1} />k</p>
              </div>
              <div className="h-[2px] w-full">
                <div className="relative h-full w-full bg-slate-600">
                  <motion.div initial={{ width: 0 }} animate={{ width: "23%" }} transition={{ delay: 2, duration: 0.4 }} className="absolute h-full left-0 bg-slate-400" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="">Argentina</p>
                <p><Counter target={2.5} decimals={1} />k</p>
              </div>
              <div className="h-[2px] w-full">
                <div className="relative h-full w-full bg-slate-600">
                  <motion.div initial={{ width: 0 }} animate={{ width: "6%" }} transition={{ delay: 2, duration: 0.3 }} className="absolute h-full left-0 bg-slate-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p>+<Counter target={19} /> more</p>
            <button className="rounded-full px-6 py-2 border">View all countries</button>
          </div>
        </motion.div>
        <div className="flex flex-col row-span-1 bg-slate-600/15 rounded-xl p-6">
          <div className="flex-1 flex flex-col gap-4">
            <p className="opacity-75 text-sm">Visitors this month</p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl sm:text-5xl text-sky-100 font-semibold">+<Counter target={65.7} decimals={1} /><span className="text-xl sm:text-2xl">%</span></motion.p>
          </div>
          <div className="text-center flex-1 grid grid-cols-2 grid-rows-3 gap-y-2 gap-x-4 justify-center items-end">
            <div className="rounded-md bg-slate-500/40 h-[30%] flex-1 row-span-3"></div>
            <div className="rounded-md bg-slate-400 h-[65%] flex-1 row-span-3"></div>
            <p>April</p>
            <p>May</p>
          </div>
        </div>
      </div>
    </>
  )
}