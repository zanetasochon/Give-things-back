import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { signInService } from "../../services/auth.service";
import { useAppDispatch } from "../../store/hooks";
import { getUser } from "../../store/slices/userSlice";
import { IAuth } from "../../types/user.types";

const schema = yup
  .object({
    email: yup.string().email().required("Please enter email"),
    password: yup.string().required("Please enter password"),
  })
  .required();

export const Signin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IAuth> = async ({ email, password }: IAuth) => {
    try {
      const user = await signInService({ email, password });
      if (user) {
        dispatch(getUser({ id: user?.id, email: user?.email }));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <Typography
        component="h1"
        variant="h5"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "12.3rem",
          fontSize: "4rem",
          fontFamily: "Open Sans",
          borderBottom: "2px solid #1A1818;",
          paddingBottom: "4.215rem",
          width: "25.3rem",
          marginBottom: "6.69rem",
        }}
      >
        Sign in
      </Typography>
      <Box
        sx={{
          width: "38.45rem",
          height: "23.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#F0F1F1",
          fontSize: "1.6rem",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: "1rem", width: "25rem" }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    helperText={errors.email?.message}
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    onChange={onChange}
                    value={value}
                    sx={{ marginBottom: "1.1rem" }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    fullWidth
                    helperText={errors.password?.message}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="password"
                    onChange={onChange}
                    value={value}
                    variant="standard"
                    sx={{
                      fontFamily: "Open Sans",
                    }}
                  />
                )}
              />
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{
                fontFamily: "Open Sans",
                fontWeight: "300",
                fontSize: "1.8rem",
                background: "none",
                color: "inherit",
                border: "none",
                boxShadow: "none",
                padding: "0.3rem 0.2rem",
                mt: "2rem",
                "&:hover": {
                  border: "0.75px solid #3C3C3C",
                  background: "none",
                  boxShadow: "none",
                  borderRadius: "0",
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        </Box>
      </Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        sx={{ marginTop: "4rem" }}
      >
        <Grid item>
          <Link
            href="/signup"
            variant="body2"
            marginLeft="15.579rem"
            sx={{
              fontFamily: "Open Sans",
              fontWeight: "300",
              fontSize: "1.8rem",
              textDecoration: "none",
              color: "#000",
              padding: "1.3rem 1.1rem",
              "&:hover": {
                border: "0.75px solid #3C3C3C",
              },
            }}
          >
            Sign up
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};
