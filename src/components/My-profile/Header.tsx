//* Libraries imports
import { CaretLeft } from "@phosphor-icons/react";

export default function Header() {
  return (
    <div className="flex flex-row w-full py-12">
      <div className="flex flex-row gap-4 px-6 py-2 text-2xl text-black bg-white rounded-lg">
        <button>
          <CaretLeft />
        </button>
        <span className="text-2xl font-medium">Voltar</span>
      </div>
    </div>
  );
}