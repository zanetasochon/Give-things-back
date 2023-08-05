/* eslint-disable react/jsx-props-no-spreading */
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as Scroll from "react-scroll";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { sendForm } from "../../services/form.service";
import background from "../../assets/Background.png";
import decoration from "../../assets/Decoration.png";

interface IFormInputs {
  name: string;
  email: string;
  text: string;
}
const schema = yup
  .object()
  .shape({
    userName: yup
      .string()
      .matches(/^[^\s]+$/, "Name must be a single word")
      .required("Please enter name"),
    userEmail: yup.string().email().required("Please enter email"),
    userText: yup
      .string()
      .required("The message must be at least 120 characters long!")
      .min(120, "The message must be at least 120 characters long!"),
  })
  .required();

export const DashboardContactForm = () => {
  const { register, handleSubmit } = useForm<IFormInputs>();
  const { Element } = Scroll;
  const [successText, setSuccessText] = useState<string>("");

  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      userEmail: "",
      userText: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = async ({
    name,
    email,
    text,
  }) => {
    console.log(name, email, text);
    try {
      await sendForm({ name, email, text });
      setSuccessText("Message was sent! We`ll be in touch soon.");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="container__section--contact">
      <div className="banner">
        <img src={background} alt={background} />
      </div>
      <Element name="elementContact" />

      <div className="wrapper__form">
        <div className="container__form">
          <h2 className="header__form">Contact Us</h2>
          <div className="decor">
            <img src={decoration} alt={decoration} />
          </div>

          <h3 className="success__message">{successText}</h3>

          <FormControl className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="inputs">
                <Controller
                  name="userName"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      {...register("name")}
                      id="name"
                      label="Enter your name"
                      helperText={errors ? errors?.userName?.message : null}
                      variant="standard"
                      placeholder="Lorem"
                      className="input"
                      onChange={onChange}
                      value={value}
                      required
                    />
                  )}
                />
                <Controller
                  name="userEmail"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      {...register("email")}
                      id="email"
                      label="Enter your e-mail"
                      helperText={errors ? errors?.userEmail?.message : null}
                      variant="standard"
                      placeholder="lorem@ipsum.pl"
                      className="input"
                      onChange={onChange}
                      value={value}
                      required
                    />
                  )}
                />
              </div>
              <Controller
                name="userText"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    {...register("text")}
                    id="text"
                    label="Enter your message"
                    helperText={errors ? errors?.userText?.message : null}
                    multiline
                    rows={5}
                    variant="standard"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    className="mess__input"
                    onChange={onChange}
                    value={value}
                    required
                  />
                )}
              />
              <Stack className="button__container" spacing={2} direction="row">
                <Button
                  type="submit"
                  className="button__form"
                  variant="outlined"
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </FormControl>
        </div>
      </div>
    </section>
  );
};
