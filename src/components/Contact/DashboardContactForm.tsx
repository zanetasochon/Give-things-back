/* eslint-disable react/jsx-props-no-spreading */
import { useForm, SubmitHandler } from "react-hook-form";
import * as Scroll from "react-scroll";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { sendForm } from "../../services/form.service";
import background from "../../assets/Background Image.png";
import decoration from "../../assets/Decoration.png";

interface IFormInputs {
  name: string;
  email: string;
  text: string;
}

export const DashboardContactForm = () => {
  const { register, handleSubmit } = useForm<IFormInputs>();
  const { Element } = Scroll;

  const onSubmit: SubmitHandler<IFormInputs> = async ({
    name,
    email,
    text,
  }) => {
    console.log(name, email, text);
    try {
      await sendForm({ name, email, text });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="container__section--contact">
      <Element name="elementContact" />
      <img src={background} alt={background} />
      <div className="container">
        <h3 className="header__form">Contact Us</h3>
        <img src={decoration} alt={decoration} />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            {...register("name")}
            id="name"
            label="Enter your name"
            // helperText="Name is invalid!"
            variant="standard"
            placeholder="Lorem"
          />
          <TextField
            {...register("email")}
            id="email"
            label="Enter your e-mail"
            // helperText="E-mail is invalid!"
            variant="standard"
            placeholder="lorem@ipsum.pl"
          />{" "}
          <TextField
            {...register("text")}
            id="text"
            label="Enter your message"
            // helperText="The message must be at least 120 characters long!"
            multiline
            rows={10}
            variant="standard"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          {/* <input {...register("name")} />
          <input {...register("email")} />
          <input {...register("text")} /> */}
          <Stack spacing={2} direction="row">
            <Button variant="outlined">Submit</Button>
          </Stack>
        </forBox>
      </div>
    </section>
  );
};
