export default (store) => {
  store.subscribe((mutation, state) => {
    console.log(mutation);
    localStorage.setItem("settings", JSON.stringify(state.settings));
  });
};
