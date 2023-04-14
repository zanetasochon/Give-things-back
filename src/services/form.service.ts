import { supabase } from "../config/supabase";

interface IFormProps {
  userName: string;
  userEmail: string;
  userText: string;
}

export const sendForm = async ({
  userName,
  userEmail,
  userText,
}: IFormProps) => {
  try {
    const { error } = await supabase
      .from("contacts")
      .insert({ id: crypto.randomUUID(), userName, userEmail, userText });
    if (error) {
      console.log(error);
    }
  } catch (err) {
    console.log(err);
  }
};
