//* Hooks imports
import useUser from "~/hooks/queries/useUser";

export default function BasicInfo() {
  const user = useUser();

  if (user.isLoading) return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <span className="w-full h-8 bg-neutral-100 animate-pulse rounded-lg" />
      <span className="w-full h-7 bg-neutral-100 animate-pulse rounded-lg" />
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center w-full gap-2">
      <p className="w-full text-2xl font-medium text-center">{user.data?.user.name}</p>
      <p className="w-full text-xl font-light text-center">{user.data?.user.email}</p>
    </div>
  );
}