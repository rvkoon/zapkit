import { useMutation } from "react-query";
import { api } from "../../config";

export interface ICreateUserBody {
  email: string;
  password: string;
}

export function useCreateUser() {
  const { mutate: createUser, isLoading: isCreatingUser } = useMutation(
    (body: ICreateUserBody) => api.post("users", body),
    {
      mutationKey: ["users", "create"],
    }
  );
  return {
    createUser,
    isCreatingUser,
  };
}
