import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAxiosUser } from "../../useAxios";

const usePostuserMutationcashe = () => {
  const queryClient = useQueryClient();
  return (data) => {
    queryClient.setQueryData("Post", (olddata = []) => [...olddata, data]);
  };
};
export const usePostUserMutation = () => {
  const axios = useAxiosUser();
  const postUserMutationCache = usePostuserMutationcashe();

  return useMutation({
    mutationKey: "Post",
    mutationFn: async (data) => {
      const response = await axios({
        url: "devbooksUser",
        method: "POST",
        body: data,
      });
      postUserMutationCache(data);
      return response;
    },
    onError: (error) => {
      console.error("Mutation failed:", error);
    },
  });
};

const usePatchuserMutationCache = () => {
  const queryClient = useQueryClient();
  return ({ id, data }) => {
    queryClient.setQueryData("Post", (olddata = []) =>
      olddata.map((value) => (value.id === id ? { ...value, ...data } : value))
    );
  };
};

export const usePatchUserMutation = () => {
  const axios = useAxiosUser();
  const patchUserMutationCache = usePatchuserMutationCache();

  return useMutation({
    mutationKey: "Post",
    mutationFn: async ({ id, data }) => {
      const response = await axios({
        url: `devbooksUser/${id}`,
        method: "PUT",
        body: data,
      });
      patchUserMutationCache({ id, data });
      return response;
    },
    onError: (error) => {
      console.error("Mutation failed:", error);
    },
  });
};
