// import * as yup from 'yup';

// const formSchema = yup.object().shape({
//   firstName: yup.string().required('First name is required'),
//   lastName: yup.string().required('Last name is required'),
//   email: yup.string().email('Invalid email').required('Email is required'),
//   address: yup.string().address().required('Address is required'),
//   phoneNumber: yup.string().phoneNumber().required('Phone Number is required'),
//   gender: yup.string().required('Gender is required').oneOf(['male', 'female', 'other'], 'Invalid gender'),
//   dob: yup.date()
//     .required('Date of birth is required')
//     .max(new Date(), 'Date of birth cannot be in the future')
//     .min(new Date('1900-01-01'), 'Date of birth cannot be earlier than 1900-01-01'),

// });

// export default formSchema;