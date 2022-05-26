export const actions = {
  setUserName: "SET_USERNAME",
  setTheme: "SET_THEME",
};

export const setUserName = userName => ({
    type: actions.setUserName,
    payload:userName,
})

export const setTheme = theme => ({
  type: actions.setTheme,
  payload: theme,
});
