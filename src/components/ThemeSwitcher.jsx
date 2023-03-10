import { Popover } from "./Popover";

export default function ThemeSwitcher() {

  function theme(theme) {
    localStorage.setItem("theme",theme);
    document.body.className = theme;
  }
  const selected = localStorage.getItem("theme");
	if (selected) document.body.className = selected;

  let c = {
    bg:     localStorage.getItem("custom-bg"),
    soft:   localStorage.getItem("custom-bg-soft"),
    mute:   localStorage.getItem("custom-bg-mute"),
    extra:  localStorage.getItem("custom-bg-extra"),
    accent: localStorage.getItem("custom-accent"),
    text:   localStorage.getItem("custom-text"),
  }
  let style = document.body.style;
  if (c.bg)     style.setProperty("--clr-custom-bg", c.bg, "important");
  if (c.soft)   style.setProperty("--clr-custom-bg-soft", c.soft, "important");
  if (c.mute)   style.setProperty("--clr-custom-bg-mute", c.mute, "important");
  if (c.extra)  style.setProperty("--clr-custom-bg-extra", c.extra, "important");
  if (c.accent) style.setProperty("--clr-custom-accent", c.accent, "important");
  if (c.text)   style.setProperty("--clr-custom-text", c.text, "important");

  const colorRegex = /^#?[0-9A-Fa-f]{3}(([0-9A-Fa-f]{3})([0-9A-Fa-f]{2})?)?$/g;
  function changeCustom(type) {
    // For some reason, doing this test twice makes it work.
    // JavaScript is amazing.
    console.log(colorRegex.test(document.getElementById(`custom-${type}`).value));
    if (colorRegex.test(document.getElementById(`custom-${type}`).value)) {
      c[type] = document.getElementById(`custom-${type}`).value;
      if (c[type].charAt(0) !== "#") c[type] = '#' + c[type];
      style.setProperty(`--clr-custom-${type}`, c[type]);
      localStorage.setItem(`custom-${type}`, c[type])
    }
  }
  function colorCheck(type) {
    const elem = document.getElementById(`custom-${type}`);
    if (!colorRegex.test(elem.value)) elem.style.color = "var(--clr-error)";
    else elem.style.color = "var(--clr-text)";
  }
  function onEnter(type, event) {
    if (event.keyCode) 
      if (event.keyCode === 13) changeCustom(type);
    else if (event.key === 'Enter') changeCustom(type);
  }

  // TODO: Attempt to add animation.
  // Tried to do this with Tippy.js, but wasn't successful.
  return (
    <>
      <Popover
        render={({}) => (
          <>
            <button className="theme-btn flash" onClick={() => theme('flash')}></button>
            <button className="theme-btn light" onClick={() => theme('light')}></button>
            <button className="theme-btn dark" onClick={() => theme('dark')}></button>
            <button className="theme-btn amoled" onClick={() => theme('amoled')}></button>
            <button className="theme-btn custom" onClick={() => theme('custom')}></button>
            <br/>
            <input 
              className="theme-input" id="custom-bg" type="text"
              placeholder="Background" defaultValue={c.bg} minLength="9" maxLength="9" size="9"
              onInput={() => colorCheck('bg')} onKeyDown={() => onEnter('bg', event)}
            ></input>
            <span className="theme-color" id="custom-bg-color">Hi!</span>
            <br/>
            <input 
              className="theme-input" id="custom-bg-soft" type="text"
              placeholder="BG Soft" defaultValue={c.soft} minLength="9" maxLength="9" size="9"
              onInput={() => colorCheck('bg-soft')} onKeyDown={() => onEnter('bg-soft', event)}
            ></input>
            <span className="theme-color" id="custom-bg-soft-color">Hi!</span>
            <br/>
            <input 
              className="theme-input" id="custom-bg-mute" type="text"
              placeholder="BG Mute" defaultValue={c.mute} minLength="9" maxLength="9" size="9"
              onInput={() => colorCheck('bg-mute')} onKeyDown={() => onEnter('bg-mute', event)}
            ></input>
            <span className="theme-color" id="custom-bg-mute-color">Hi!</span>
            <br/>
            <input 
              className="theme-input" id="custom-bg-extra" type="text"
              placeholder="BG Extra" defaultValue={c.extra} minLength="9" maxLength="9" size="9"
              onInput={() => colorCheck('bg-extra')} onKeyDown={() => onEnter('bg-extra', event)}
            ></input>
            <span className="theme-color" id="custom-bg-extra-color">Hi!</span>
            <br/>
            <input 
              className="theme-input" id="custom-accent" type="text"
              placeholder="Accent" defaultValue={c.accent} minLength="9" maxLength="9" size="9"
              onInput={() => colorCheck('accent')} onKeyDown={() => onEnter('accent', event)}
            ></input>
            <span className="theme-color" id="custom-accent-color">Hi!</span>
            <br/>
            <input 
              className="theme-input" id="custom-text" type="text"
              placeholder="Text" defaultValue={c.text} minLength="9" maxLength="9" size="9"
              onInput={() => colorCheck('text')} onKeyDown={() => onEnter('text', event)}
            ></input>
            <span className="theme-color" id="custom-text-color">Hi!</span>
          </>
        )}
      >
        <button className="px-1 prlgm"><span>Theme</span></button>
      </Popover>
    </>
  );
};