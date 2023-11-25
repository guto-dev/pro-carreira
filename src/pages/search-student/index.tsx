//* Libraries imports
import Head from "next/head";

//* Local imports
import useUser from "~/hooks/queries/useUser";
import Navbar from "~/components/common/NavbarCompany";

export default function SearchStudent() {

  const user = useUser();

  return (
    <>
      <Head>
        <title>{user.data?.user.name ?? "Meu Perfil"}</title>
        <meta name="description" content="My Profile" />
      </Head>
      <div className="flex flex-col items-center justify-start w-full min-h-screen bg-neutral-200">
        <Navbar />
        <div className="flex flex-col w-full h-full max-w-7xl">
            <form className="py-10">
            <input
              type="text"
              id="simple-search"
              className="py-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Insira a sua categoria"
              required
            />
            </form>
          <div className="flex flex-row items-start justify-center w-full">
          </div>
        </div>
      </div>
    </>
  );
}