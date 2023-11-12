//* Libraries imports
import type { ReactNode } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Question, UserCircle, ArrowSquareRight, Check, X, Plus, GraduationCap, Bank, BookBookmark, CaretLeft } from "@phosphor-icons/react";

export default function MyProfile() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <Head>
        <title>João da Silva</title>
        <meta name="description" content="My Profile" />
      </Head>
      <div className="flex flex-col items-center justify-start w-full min-h-screen bg-neutral-200">
        <Navbar />
        <div className="flex flex-col w-full h-full max-w-7xl">
          <Header />
          <div className="flex flex-row items-start justify-center w-full">
            {/* LEFT */}
            <div className="flex flex-col items-center justify-center w-1/3 h-full gap-8 p-4 bg-white rounded-md">
              <div className="flex flex-col items-center justify-center w-full h-fit">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={256}
                  height={256}
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-2">
                <p className="w-full text-2xl font-medium text-center">Lucas Gabriel de Souze</p>
                <p className="w-full text-xl font-light text-center">lucas.gg2201@gmail.com</p>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-4">
                <h2 className="w-full text-2xl font-medium text-start">
                  Habilidades
                </h2>
                <div className="flex flex-row flex-wrap w-full gap-1">
                  <Tag editable={false} value={0}>React</Tag>
                  <Tag editable={false} value={8}>Next.js</Tag>
                  <Tag editable={false} value={7}>Typescript</Tag>
                  <Tag editable={false} value={10}>Node.js</Tag>
                  <Tag editable={false} value={4}>Express</Tag>
                  <Tag editable={false} value={5}>PostgreSQL</Tag>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-center justify-between w-2/3 h-full gap-4 pl-16">
              <div className="flex flex-col w-full h-full gap-3 p-4 bg-white rounded-md">
                <h2 className="capitalize">Histórico academico</h2>
                <div className="flex flex-col items-center justify-center w-full gap-2">
                  <div className="flex flex-row items-center justify-center w-full gap-2">
                    <GraduationCap className="text-2xl" />
                    <p className="w-full">Banana</p>
                  </div>
                  <div className="flex flex-row items-center justify-center w-full gap-2">
                    <Bank className="text-2xl" />
                    <p className="w-full">Banana</p>
                  </div>
                  <div className="flex flex-row items-center justify-center w-full gap-2">
                    <BookBookmark className="text-2xl" />
                    <p className="w-full">Banana</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full h-full gap-3 p-4 bg-white rounded-md">
                <h2 className="capitalize">Experiências</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere officiis voluptas optio, earum recusandae nobis illum dolores! Distinctio consequatur culpa vero error fugit harum dolore aperiam dignissimos quis asperiores.</p>
              </div>
              <div className="flex flex-col w-full h-full gap-3 p-4 bg-white rounded-md">
                <h2 className="capitalize">Sobre mim</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere officiis voluptas optio, earum recusandae nobis illum dolores! Distinctio consequatur culpa vero error fugit harum dolore aperiam dignissimos quis asperiores.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

type TagProps = {
  children: ReactNode;
  value: number;
  editable: boolean;
}

function Tag(props: TagProps) {
  return (
    <div className="flex flex-row items-center justify-center gap-2 px-4 py-1 bg-purple-800 rounded-full">
      <span className="text-sm font-light text-white">{props.children}: {props.value}</span>
      {
        props.editable && (
          <button className="text-white">
            <X />
          </button>
        )
      }
    </div>
  );
}

function Navbar() {
  return (
    <nav className="flex flex-row justify-center w-full h-16 py-3 bg-gradient-to-r from-purple-600 to-blue-700 px-7">
      <div className="flex flex-row items-center justify-between w-full max-w-7xl">
        <div className="h-full w-fit">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={150}
            height={40}
            className="object-contain"
          />
        </div>
        <ul className="flex flex-row items-center justify-center h-full gap-2 text-2xl text-white">
          <li className="flex flex-row items-center justify-center h-full">
            <button>
              <Question />
            </button>
          </li>
          <li className="flex flex-row items-center justify-center h-full">
            <button>
              <UserCircle />
            </button>
          </li>
          <li className="flex flex-row items-center justify-center h-full">
            <button>
              <ArrowSquareRight />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Header() {
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