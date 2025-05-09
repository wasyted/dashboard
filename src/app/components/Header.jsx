import Link from "next/link"

export default function Header() {
  return (
    <div className="z-99 sticky top-0 bg-neutral-900 flex justify-between items-center p-2 py-4">
      <div className="flex items-center justify-center gap-4">
        <div className="flex relative w-12">
          <div className="border rounded-full w-8 aspect-square flex items-center justify-center"></div>
          <div className="absolute bg-sky-100 w-8 aspect-square left-4 rounded-full text-neutral-600 flex items-center text-center font-bold justify-center">AI</div>
        </div>
        <div className="hidden sm:flex text-sm gap-x-4 justify-center items-center">
          <Link href={"./overview"}>Overview</Link>
          <Link href={"./learn"}>Learn</Link>
          <Link href={"./support"}>Support</Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="w-8 aspect-square left-4 rounded-full text-neutral-600 flex items-center text-center font-bold justify-center">🔔</div>
        <div className="font-black bg-sky-100 w-8 aspect-square left-4 rounded-full text-neutral-600 flex items-center text-center justify-center">U</div>
        <div className="flex items-center justify-between gap-x-2 text-white/75">User <span className="opacity-50">▿</span></div>
      </div>
    </div>
  )
}