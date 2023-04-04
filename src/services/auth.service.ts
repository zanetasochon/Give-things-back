import { supabase } from "../config/supabase";
import { IAuth } from "../types/user.types";

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

export const signOutService = async () => {
  try {
    await supabase.auth.signOut();
  } catch (err) {
    console.log(err);
  }
};
