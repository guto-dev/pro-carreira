//* Libraries imports
import { atom } from "jotai";

//* Interfaces imports
import { User, Skill } from "@prisma/client";

type UserMyProfileEdit = {
  user?: Omit<
    User,
    "role" | "id" | "email" | "emailVerified" | "image" | "status"
  >;
  skills?: Skill[];
};

const clearUserMyProfileEdit: UserMyProfileEdit = {
  user: {
    cpfcnpj: "",
    name: "",
    info: "",
  },
  skills: [],
};

export const userMyProfileEdit = atom<UserMyProfileEdit>(
  clearUserMyProfileEdit,
);
