'use client'

import { motion } from "motion/react"
import { useState } from "react";
import Chat from "./components/chat/Chat";
import Link from "next/link";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./components/Header";

export default function Home() {
  const [viewChat, setViewChat] = useState(false);
  const toggleView = () => {
    setViewChat(!viewChat);
  }
  return (
    <div className="min-h-screen flex flex-col gap-y-4 font-[family-name:var(--font-nunito-sans)] text-neutral-50 bg-neutral-900 p-4 sm:p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-4xl font-semibold text-sky-100">General statistics</h1>
        <div className="hidden sm:flex gap-4">
          <button className="rounded-full px-6 py-1 border">Refresh</button>
          <button className="rounded-full px-6 py-1 border">Widgets</button>
        </div>
        <div className="flex sm:hidden gap-4">
          <button onClick={toggleView} className="rounded-full px-6 py-1 border">{viewChat ? "Dashboard" : "AI Chat"}</button>
        </div>
      </div>
      <div className="flex-1 sm:hidden grid overflow-hidden grid-cols-1 gap-2 justify-between items-center">
        {viewChat ?
          <motion.div
            className="min-h-full xl:min-h-32 justify-between flex flex-col flex-1 border-1 border-sky-50/25 rounded-xl p-1">
            <Chat />
          </motion.div> :
          <motion.div
            className="grid gap-2 grid-cols-1 lg:grid-cols-2 grid-rows-1">
            <Dashboard />
          </motion.div>
        }
      </div>
      <div className="hidden sm:grid overflow-hidden grid-cols-1 xl:grid-cols-2 gap-2 justify-between items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0.0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: "ease-in" }} className="grid gap-2 grid-cols-1 lg:grid-cols-2 grid-rows-1">
          <Dashboard />
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, type: "ease-in" }}
          className="min-h-screen xl:min-h-32 justify-between flex flex-col flex-1 border-1 border-sky-50/25 rounded-xl h-full p-1">
          <Chat />
        </motion.div>
      </div>
    </div>
  );
}
