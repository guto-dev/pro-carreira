//* Libraries imports
import Head from "next/head";
import { useState, type FormEvent } from "react";

//* Local imports
import useUser from "~/hooks/queries/useUser";
import Navbar from "~/components/common/NavbarCompany";
import { api } from "~/utils/api";

export default function SearchStudent() {
  const [search, setSearch] = useState('')
  const [searchCategories, setSearchCategories] = useState<string[]>([]);

  const searchedUsers = api.user.searchUserBySkillName.useQuery({ names: searchCategories }, {
    enabled: searchCategories.length > 0,
  });

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearchCategories([...searchCategories, search]);
    setSearch('');
  }

  return (
    <>
      <Head>
        <title>Pesquisar</title>
        <meta name="description" content="My Profile" />
      </Head>
      <div className="flex flex-col items-center justify-start w-full min-h-screen bg-neutral-200">
        <Navbar />
        <div className="flex flex-col w-full h-full max-w-7xl">
          <form className="py-10" onSubmit={formSubmit}>
            <input
              type="text"
              id="simple-search"
              className="py-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Insira a sua categoria"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <div className="flex flex-row justify-start items-start">
            {
              searchCategories.map((category) => (
                <div className="flex flex-row justify-start items-center bg-blue-500 rounded-full px-4 py-2.5 mx-2.5">
                  <p className="text-white text-sm">{category}</p>
                  <button
                    className="flex flex-row justify-center items-center bg-red-500 rounded-full px-2 py-2.5 mx-2.5"
                    onClick={() => {
                      setSearchCategories(searchCategories.filter((item) => item !== category))
                    }}
                  >
                  </button>
                </div>
              ))
            }
          </div>

          <div className="flex flex-col items-start justify-center w-full bg-red-500">
            {
              searchedUsers.data?.map((user) => (
                <div key={user.id} className="flex flex-row justify-start items-center bg-blue-500 rounded-full px-4 py-2.5 mx-2.5">
                  <p className="text-white text-sm">{user.name}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}