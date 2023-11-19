//* Libraries imports
import { useAtom } from "jotai/react";

//* Hooks imports
import useUser from "~/hooks/queries/useUser";

//* Atom import
import { userMyProfileEditAtom } from "~/atoms/userMyProfileEdit";

export default function BasicInfo() {
  const [userMyProfileEdit, setUserMyProfileEdit] = useAtom(userMyProfileEditAtom);
  const user = useUser();

  if (user.isLoading) return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <span className="w-full h-8 bg-neutral-100 animate-pulse rounded-lg" />
      <span className="w-full h-7 bg-neutral-100 animate-pulse rounded-lg" />
    </div>
  );

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMyProfileEdit({
      ...userMyProfileEdit,
      user: {
        ...userMyProfileEdit.user,
        name: event.target.value,
      }
    });
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <input
        type="text"
        defaultValue={user.data?.user.name ?? "Sem nome"}
        className="w-full p-2 text-2xl font-medium text-center border rounded-lg border-neutral-300 focus:outline-neutral-500"
        onChange={handleNameChange}
      />
      <input
        type="email"
        defaultValue={user.data?.user.email ?? "Sem email"}
        className="w-full p-2 text-xl font-light text-center border rounded-lg border-neutral-300 focus:outline-neutral-500"
        disabled
      />
    </div>
  );
}