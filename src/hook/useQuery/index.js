import { useMutation, useQuery } from "@tanstack/react-query";
import { useAxios, useAxiosUser } from "../useAxios";

export const useQueryHandler = ({ pathname, url, params }) => {
  const axios = useAxios();
  return useQuery({
    queryKey: [pathname],
    queryFn: () => axios({ url, params }),
  });
};
useAxiosUser;
export const useQueryHandlerUser = ({ pathname, url, params }) => {
  const axios = useAxiosUser();
  return useQuery({
    queryKey: [pathname],
    queryFn: () => axios({ url, params }),
  });
};
