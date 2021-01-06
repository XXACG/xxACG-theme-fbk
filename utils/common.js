export let THEME = {
  auto: 'auto',
  dark: 'dark',
  light: 'light',
}

export function changeAppearance(appearance) {
  if (appearance === THEME.auto || appearance === undefined) {
    appearance = window.matchMedia("(prefers-color-scheme: dark)").matches ? THEME.dark : THEME.light;
  }
  document.body.setAttribute("data-theme", appearance);
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", appearance === THEME.dark ? "#222" : "#fff");
}
