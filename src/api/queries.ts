import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "@/lib/axios";

import type { IPaginatedResponse, IResponse } from "@/types/response";
import type { IUserListItem } from "@/types/devices";

// /getUser
export const useGetAllUsersPollQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosClient.get<
        IResponse<IPaginatedResponse<IUserListItem>>
      >("/admin/all/user");
      return data;
    },
    select: (data) => data.data,
    refetchInterval: 30000, // Refetch every 30 seconds
  });
};
