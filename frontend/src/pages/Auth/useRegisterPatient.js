import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { registerPatient as registerPatientApi } from "../../services/apiAuth";

export function useRegisterPatient() {
  const { mutate: registerPatient, isLoading } = useMutation({
    mutationFn: registerPatientApi,
    onSuccess: () => {
      toast.success("Account successfully created!");
    },
  });

  return { isLoading, registerPatient };
}
