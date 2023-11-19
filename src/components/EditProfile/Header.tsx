//* Libraries imports
import { Check, X } from "@phosphor-icons/react";

export default function Header() {
  return (
    <div className="flex flex-row w-full py-12">
      <div className="flex flex-row gap-4 px-6 py-2 text-2xl text-black bg-white rounded-lg">
        <span className="text-2xl font-medium">Editar Perfil</span>
        <button>
          <Check />
        </button>
        <button>
          <X />
        </button>
      </div>
    </div>
  );
}