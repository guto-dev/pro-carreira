//* Libraries imports
import { useEffect } from "react";
import { useAtom } from "jotai/react";

//* Local imports
import { api } from "~/utils/api";
import { userMyProfileEditAtom } from "~/atoms/userMyProfileEdit";

export default function updateUserProfile() {
  const user = api.user.getUser.useQuery(undefined, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 5, // 5 minutes
  });
  const updateUserProfile = api.user.updateUserProfile.useMutation();
  const [userMyProfileEdit, setUserMyProfileEdit] = useAtom(
    userMyProfileEditAtom,
  );

  useEffect(() => {
    if (user.data) {
      setUserMyProfileEdit({
        user: {
          name: user.data.user.name || "",
        },
        skills: user.data.skills.map((skill) => ({
          id: skill.id,
          level: skill.level,
        })),
      });
    }
  }, [user.data]);

  const handleUpdateUserProfile = async () => {
    await updateUserProfile.mutateAsync(userMyProfileEdit);
  };

  return {
    handleUpdateUserProfile,
  };
}
