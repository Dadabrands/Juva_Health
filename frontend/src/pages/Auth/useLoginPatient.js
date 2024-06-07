import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

import { loginPatient as loginPatientApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLoginPatient() {
  const navigate = useNavigate()
  const { mutate: loginPatient, isLoading } = useMutation({
    mutationFn: ({email, password}) => loginPatientApi({email, password}),
    onSuccess: () => {
      toast.success("You are logged in!");
      navigate("/dashboard");
    },
  });

  return { isLoading, loginPatient };
}



