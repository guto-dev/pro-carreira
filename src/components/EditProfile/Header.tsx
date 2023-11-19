//* Libraries imports
import { Check, X } from "@phosphor-icons/react";

//* Hooks imports
import useUpdateUserProfile from "~/hooks/mutations/useUpdateUserProfile";

export default function Header() {
  const { handleUpdateUserProfile } = useUpdateUserProfile();

  return (
    <div className="flex flex-row w-full py-12">
      <div className="flex flex-row gap-4 px-6 py-2 text-2xl text-black bg-white rounded-lg">
        <span className="text-2xl font-medium">Editar Perfil</span>
        <button onClick={handleUpdateUserProfile}>
          <Check />
        </button>
        <button>
          <X />
        </button>
      </div>
    </div>
  );
}