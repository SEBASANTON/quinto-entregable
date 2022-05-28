export const actions = {
  setUserName: "SET_USERNAME",
  setTheme: "SET_THEME",
  setPages: "SET_PAGES",
};

export const setUserName = userName => ({
    type: actions.setUserName,
    payload:userName,
})

export const setTheme = theme => ({
  type: actions.setTheme,
  payload: theme,
});

export const setPages = pages => ({
  type: actions.setPages,
  payload: pages,
})
