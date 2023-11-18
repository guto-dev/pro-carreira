//* Libraries imports
import Head from "next/head";

//* Local imports
import useUser from "~/hooks/queries/useUser";

//* Components imports
import MyProfile from "~/components/My-profile";
import Navbar from "~/components/common/Navbar";

export default function MyProfile2() {
  const user = useUser();

  return (
    <>
      <Head>
        <title>{user.data?.user.name || "Meu Perfil"}</title>
        <meta name="description" content="My Profile" />
      </Head>
      <div className="flex flex-col items-center justify-start w-full min-h-screen bg-neutral-200">
        <Navbar />
        <div className="flex flex-col w-full h-full max-w-7xl">
          <MyProfile.Header />
          <div className="flex flex-row items-start justify-center w-full">
            {/* LEFT */}
            <div className="flex flex-col items-center justify-center w-1/3 h-full gap-8 p-4 bg-white rounded-md">
              <MyProfile.Avatar />
              <MyProfile.BasicInfo />
              <MyProfile.Skills />
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-center justify-between w-2/3 h-full gap-4 pl-16">
              <MyProfile.AcademicHistory />
              <MyProfile.Experiences />
              <MyProfile.AboutMe />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}