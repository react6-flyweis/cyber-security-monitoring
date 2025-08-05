import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { axiosClient } from "@/lib/axios";
import { useAuthStore } from "@/store/authStore";

// /{{url}}/admin/registration
export function useRegisterMutation() {
  const login = useAuthStore((state) => state.login);
  return useMutation({
    mutationKey: ["register"],
    mutationFn: async (data: {
      // fullName: string;
      email: string;
      // password: string;
    }) => {
      try {
        const response = await axiosClient.post("/admin/register", data);
        login(response.data.accessToken, response.data.data);
        return response;
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          throw new Error(
            error.response?.data?.message || "Registration failed"
          );
        }
      }
    },
  });
}

export function useLoginMutation() {
  const login = useAuthStore((state) => state.login);
  return useMutation({
    mutationKey: ["login"],
    // mutationFn: async (data: { email: string; password: string }) => {
    mutationFn: async (data: { email: string }) => {
      // for demo
      try {
        const response = await axiosClient.post("/admin/login", data);
        login(response.data.accessToken, response.data.data);
        return response;
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          throw new Error(error.response?.data?.message || "Login failed");
        }
        return Promise.reject(error);
      }
    },
  });
}
