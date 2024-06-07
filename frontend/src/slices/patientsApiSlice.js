import { PATIENT_URL } from "../urlConstants";
import { apiSlice } from "./apiSlice";

export const patientsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${PATIENT_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: `${PATIENT_URL}/signup`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${PATIENT_URL}/logout`,
        method: "POST",
      }),
    }),
    getPatients: builder.query({
      query: () => ({
        url: PATIENT_URL,
      }),
      providesTags: ["Patient"],
      keepUnusedDataFor: 5,
    }),
    deletePatient: builder.mutation({
      query: (patientId) => ({
        url: `${PATIENT_URL}/${patientId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Patient"],
    }),
    getPatient: builder.query({
      query: (patientId) => ({
        url: `${PATIENT_URL}/${patientId}`,
      }),
      providesTags: (result, error, id) => [{ type: "Patient", id }],
      keepUnusedDataFor: 5,
    }),
    updatePatient: builder.mutation({
      query: (data) => ({
        url: `${PATIENT_URL}/${data.patientId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { patientId }) => [
        { type: "Patient", id: patientId },
      ],
    }),
    deleteMe: builder.mutation({
      query: () => ({
        url: `${PATIENT_URL}/deleteMe`,
        method: "DELETE",
      }),
      invalidatesTags: ["Patient"],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation,
  useGetPatientsQuery,
  useGetPatientQuery,
  useDeletePatientMutation,
  useUpdatePatientMutation,
  useDeleteMeMutation,
} = patientsApiSlice;
