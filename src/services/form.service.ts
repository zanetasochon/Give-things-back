import { supabase } from "../config/supabase";

interface IFormProps {
  name: string;
  email: string;
  text: string;
}

export const sendForm = async ({ name, email, text }: IFormProps) => {
  try {
    const { error } = await supabase
      .from("contacts")
      .insert({ id: crypto.randomUUID(), name, email, text });
    if (error) {
      console.log(error);
    }
  } catch (err) {
    console.log(err);
  }
};
