import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const FormProjectEdit = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
  
    const handleFormSubmit = (values) => {
      console.log(values);
  
    
    };
  
    return (
      <Box m="20px">
        <Header title="Edit Project" subtitle="Edit a Project" />
  
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
                  label="Nama Project"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.projectname}
                  name="projectname"
                  error={!!touched.projectname && !!errors.projectname}
                  helperText={touched.projectname && errors.projectname}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Nama Client"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.clientname}
                  name="clientname"
                  error={!!touched.clientname && !!errors.clientname}
                  helperText={touched.clientname && errors.clientname}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Nama Perusahaan"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.companyname}
                  name="companyname"
                  error={!!touched.companyname && !!errors.companyname}
                  helperText={touched.companyname && errors.companyname}
                  sx={{ gridColumn: "span 4" }}
                />
                 <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Deskripsi Project"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.projectdesc}
                  name="projectdesc"
                  error={!!touched.projectdesc && !!errors.projectdesc}
                  helperText={touched.projectdesc && errors.projectdesc}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="date"
                  label="Tanggal Mulai"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.projectstart}
                  name="projectstart"
                  error={!!touched.projectstart && !!errors.projectstart}
                  helperText={touched.projectstart && errors.projectstart}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="date"
                  label="Tanggal Berakhir"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.projectend}
                  name="projectend"
                  error={!!touched.projectend && !!errors.projectend}
                  helperText={touched.projectend && errors.projectend}
                  sx={{ gridColumn: "span 2" }}
                />
                
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Edit Project
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
    projectname: yup.string().required("required"),
    clientname: yup.string().required("required"),
    companyname: yup.string().required("required"),
    education: yup.string().required("required"),
    educationdesc: yup.string().required("required"),
    projectdesc: yup.string().required("required"),
    projectstart: yup.string().required("required"),
    projectend: yup.string().required("required"),
  });
  const initialValues = {
    projectname: "",
    clientname: "",
    companyname: "",
    education: "",
    educationdesc:"",
    projectstart: "",
    projectdesc:"",
    projectend: "",
    
  };
  
  export default FormProjectEdit;
  
  