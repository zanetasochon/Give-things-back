export const checkIfUserExistsInLocalStorage = () => {
  if (localStorage.getItem("userData") !== null) {
    return true;
  }
  return false;
};

export const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("userData")!);
};
