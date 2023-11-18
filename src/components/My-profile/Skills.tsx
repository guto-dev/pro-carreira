//* Libraries imports
import { X } from "@phosphor-icons/react";

//* Hooks imports
import useUser from "~/hooks/queries/useUser";

export default function Skills() {
  const user = useUser();

  if (user.isLoading) return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <h2 className="w-full text-2xl font-medium text-start">
        Habilidades
      </h2>
      <div className="flex flex-row flex-wrap w-full gap-1">
        <Tag loading />
        <Tag loading />
        <Tag loading />
        <Tag loading />
        <Tag loading />
        <Tag loading />
        <Tag loading />
        <Tag loading />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <h2 className="w-full text-2xl font-medium text-start">
        Habilidades
      </h2>
      <div className="flex flex-row flex-wrap w-full gap-1">
        {
          user.data?.skills.map((skill, index) => (
            <Tag editable key={index} skill={skill} />
          ))
        }
      </div>
    </div>
  );
}

type TagProps = {
  loading?: boolean;
  editable?: boolean;
  skill?: {
    id: number;
    name: string;
    level: number;
  };
}

function Tag(props: TagProps) {

  if (props.loading) return (
    <div className="flex flex-row items-center justify-center gap-2 px-4 py-1 bg-purple-800 rounded-full animate-pulse">
      <span className="h-5 w-12" />
    </div>
  );

  return (
    <div className="flex flex-row items-center justify-center gap-2 px-4 py-1 bg-purple-800 rounded-full">
      <span className="text-sm font-light text-white">{props.skill?.name}: {props.skill?.level}</span>
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