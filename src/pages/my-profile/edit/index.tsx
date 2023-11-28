//* Libraries imports
import Head from "next/head";

//* Components imports
import EditProfile from "~/components/EditProfile";
import Navbar from "~/components/common/Navbar";

export default function MyProfileEdit() {
  return (
    <>
      <Head>
        <title>Editar perfil</title>
        <meta name="description" content="Página de edição de perfil" />
      </Head>
      <div className="flex flex-col items-center justify-start w-full min-h-screen bg-neutral-200">
        <Navbar />
        <div className="flex flex-col w-full h-full max-w-7xl">
          <EditProfile.Header />
          <div className="flex flex-row items-start justify-center w-full">
            {/* LEFT */}
            <div className="flex flex-col items-center justify-center w-1/3 h-full gap-8 p-4 bg-white rounded-md">
              <EditProfile.Avatar />
              <EditProfile.BasicInfo />
              <EditProfile.Skills />
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-center justify-between w-2/3 h-full gap-4 pl-16">
              <EditProfile.AcademicHistory />
              <EditProfile.Experiences />
              <EditProfile.AboutMe />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}