//* Libraries imports
import Image from "next/image";

//* Hooks imports
import useUser from "~/hooks/queries/useUser";

export default function Avatar() {
  const user = useUser();

  if (user.isLoading) return (
    <div className="flex flex-col items-center justify-center w-full h-fit">
      <div className="w-64 h-64 bg-neutral-100 animate-pulse rounded-full" />
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center w-fit h-fit overflow-hidden rounded-full">
      <Image
        src={user.data?.user.image ?? "/profile.png"}
        alt="Profile"
        width={256}
        height={256}
        className="rounded-full"
      />
    </div>
  );
}