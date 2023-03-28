import { supabase } from "../config/supabase";

interface IAuth {
  email: string;
  password: string;
}

export const signUpService = async ({ email, password }: IAuth) => {
  const { data } = await supabase.auth.signUp({
    email,
    password,
  });
  return data.user;
};

export const signInService = async ({ email, password }: IAuth) => {
  const { data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return data.user;
};
