//* Libraries imports
import { atom } from "jotai";

//* Interfaces imports
import type { UpdateUserProfile } from "~/schemas/user";

const clearUserMyProfileEdit: UpdateUserProfile = {
  user: {
    name: "",
    info: {
      aboutMe: "",
      experiences: "",
    },
  },
  skills: [],
};

export const userMyProfileEditAtom = atom<UpdateUserProfile>(
  clearUserMyProfileEdit,
);
