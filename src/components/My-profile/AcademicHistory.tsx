//* Libraries imports
import { GraduationCap, Bank, BookBookmark } from "@phosphor-icons/react";

export default function AcademicHistory() {
  return (
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
  );
}