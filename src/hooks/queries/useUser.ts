//* Libraries imports

//* Local imports
import { api } from "~/utils/api";

export default function useUser() {
  return api.user.getUser.useQuery(undefined, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 5, // 5 minutes
  });
}
