//* Libraries imports
import Image from "next/image";
import { Question, ArrowSquareRight, MagnifyingGlass } from "@phosphor-icons/react";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-center w-full h-16 py-3 bg-gradient-to-r from-purple-600 to-blue-700 px-7">
      <div className="flex flex-row items-center justify-between w-full max-w-7xl">
        <div className="h-full w-fit">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={150}
            height={40}
            className="object-contain w-auto h-auto"
          />
        </div>
        <ul className="flex flex-row items-center justify-center h-full gap-2 text-2xl text-white">
          <li className="flex flex-row items-center justify-center h-full">
            <button>
              <Question />
            </button>
          </li>
          <li className="flex flex-row items-center justify-center h-full">
            <button>
              <MagnifyingGlass />
            </button>
          </li>
          <li className="flex flex-row items-center justify-center h-full">
            <button>
              <ArrowSquareRight />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}