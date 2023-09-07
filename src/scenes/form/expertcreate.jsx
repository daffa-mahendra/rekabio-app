import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const FormExpert = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);

  
  };

  return (
    <Box m="20px">
      <Header title="Create Expert" subtitle="Create a New Expert Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nama Depan"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Nama Belakang"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Pendidikan"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.education}
                name="education"
                error={!!touched.education && !!errors.education}
                helperText={touched.education && errors.education}
                sx={{ gridColumn: "span 4" }}
                
              />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Deskripsi Pendidikan"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.educationdesc}
                name="educationdesc"
                error={!!touched.educationdesc && !!errors.educationdesc}
                helperText={touched.educationdesc && errors.educationdesc}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Tanggal Masuk"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.educationstart}
                name="educationstart"
                error={!!touched.educationstart && !!errors.educationstart}
                helperText={touched.educationstart && errors.educationstart}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="Tanggal Lulus"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.educationend}
                name="educationend"
                error={!!touched.educationend && !!errors.educationend}
                helperText={touched.educationend && errors.educationend}
                sx={{ gridColumn: "span 2" }}
              />
               <Box display="fixwd" justifyContent="end" mt="1px">
              <Button type="" color="secondary" variant="contained">
               Tambah Pendidikan
              </Button>
            </Box>
            {/* <TextField
                fullWidth
                variant="filled"
                select="select"
                label="Nama Project"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.projectname}
                name="projectname"
                error={!!touched.projectname && !!errors.projectname}
                helperText={touched.projectname && errors.projectname}
                sx={{ gridColumn: "span 4" }}
              /> */}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Expert
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  education: yup.string().required("required"),
  educationdesc: yup.string().required("required"),
  educationstart: yup.string().required("required"),
  educationend: yup.string().required("required"),
  projectname: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  education: "",
  educationdesc:"",
  educationstart: "",
  educationend: "",
  projectname: "",
};

export default FormExpert;
