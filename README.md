# Aero UI Icons

SVG icons in the style of the Windows 7 Aero interface: window controls, scroll buttons, arrows, symbolic arrows, clipboard and power symbols, dropdown arrows, slider thumbs, a loading spinner, folders, a Control Panel icon and toolbar icons.

## Installation

```sh
npm install aero-ui-icons
```

## Usage

The package works with any framework or none. Import an icon as an SVG string and put it in the DOM:

```js
import { close, spinner } from "aero-ui-icons";

button.innerHTML = close;
```

The export names are the file names in camelCase, so `slider-indicator-box-hover.svg` becomes `sliderIndicatorBoxHover`.

You can also import the SVG files directly. Your bundler turns them into URLs or components, depending on its config:

```js
import closeUrl from "aero-ui-icons/close.svg";
```

### CSS classes

Like an icon font, the stylesheet turns any element with a class into an icon:

```js
import "aero-ui-icons/icons.css";
```

```html
<span class="aero aero-close"></span>
```

The class names are the file names with an `aero-` prefix, so `slider-indicator-box-hover.svg` becomes `aero-slider-indicator-box-hover`. The artwork is `1em` square and scales with the `font-size`. The element is `2em` with a `-0.5em` margin, so shadows have room without changing the layout. Icons keep their gradients, so `color` doesn't change them.

## Icons

All icons are 32 × 32 with the artwork centered at 16 × 16, so shadows don't get cut off. The previews are scaled up 3×. The full-color shell and toolbar icons are sized to look as big as `sliders.svg`.

### Window controls

| Preview | File | Size |
| :-: | --- | --- |
| <img src="icons/minimize.svg" width="96" height="96" alt="Minimize"> | [`minimize.svg`](icons/minimize.svg) | 32 × 32 |
| <img src="icons/maximize.svg" width="96" height="96" alt="Maximize"> | [`maximize.svg`](icons/maximize.svg) | 32 × 32 |
| <img src="icons/restore.svg" width="96" height="96" alt="Restore"> | [`restore.svg`](icons/restore.svg) | 32 × 32 |
| <img src="icons/close.svg" width="96" height="96" alt="Close"> | [`close.svg`](icons/close.svg) | 32 × 32 |
| <img src="icons/help.svg" width="96" height="96" alt="Help"> | [`help.svg`](icons/help.svg) | 32 × 32 |

### Scroll buttons

| Normal | Light | Size |
| :-: | :-: | --- |
| <img src="icons/button-up.svg" width="96" height="96" alt="Up"><br>[`button-up.svg`](icons/button-up.svg) | <img src="icons/button-up-light.svg" width="96" height="96" alt="Up, light"><br>[`button-up-light.svg`](icons/button-up-light.svg) | 32 × 32 |
| <img src="icons/button-up-right.svg" width="96" height="96" alt="Up right"><br>[`button-up-right.svg`](icons/button-up-right.svg) | <img src="icons/button-up-right-light.svg" width="96" height="96" alt="Up right, light"><br>[`button-up-right-light.svg`](icons/button-up-right-light.svg) | 32 × 32 |
| <img src="icons/button-right.svg" width="96" height="96" alt="Right"><br>[`button-right.svg`](icons/button-right.svg) | <img src="icons/button-right-light.svg" width="96" height="96" alt="Right, light"><br>[`button-right-light.svg`](icons/button-right-light.svg) | 32 × 32 |
| <img src="icons/button-down-right.svg" width="96" height="96" alt="Down right"><br>[`button-down-right.svg`](icons/button-down-right.svg) | <img src="icons/button-down-right-light.svg" width="96" height="96" alt="Down right, light"><br>[`button-down-right-light.svg`](icons/button-down-right-light.svg) | 32 × 32 |
| <img src="icons/button-down.svg" width="96" height="96" alt="Down"><br>[`button-down.svg`](icons/button-down.svg) | <img src="icons/button-down-light.svg" width="96" height="96" alt="Down, light"><br>[`button-down-light.svg`](icons/button-down-light.svg) | 32 × 32 |
| <img src="icons/button-down-left.svg" width="96" height="96" alt="Down left"><br>[`button-down-left.svg`](icons/button-down-left.svg) | <img src="icons/button-down-left-light.svg" width="96" height="96" alt="Down left, light"><br>[`button-down-left-light.svg`](icons/button-down-left-light.svg) | 32 × 32 |
| <img src="icons/button-left.svg" width="96" height="96" alt="Left"><br>[`button-left.svg`](icons/button-left.svg) | <img src="icons/button-left-light.svg" width="96" height="96" alt="Left, light"><br>[`button-left-light.svg`](icons/button-left-light.svg) | 32 × 32 |
| <img src="icons/button-up-left.svg" width="96" height="96" alt="Up left"><br>[`button-up-left.svg`](icons/button-up-left.svg) | <img src="icons/button-up-left-light.svg" width="96" height="96" alt="Up left, light"><br>[`button-up-left-light.svg`](icons/button-up-left-light.svg) | 32 × 32 |

The light versions are meant for dark or colored backgrounds.

### Symbolic arrows

| Preview | File | Size |
| :-: | --- | --- |
| <img src="icons/arrow-symbolic-up.svg" width="96" height="96" alt="Symbolic arrow up"> | [`arrow-symbolic-up.svg`](icons/arrow-symbolic-up.svg) | 32 × 32 |
| <img src="icons/arrow-symbolic-up-right.svg" width="96" height="96" alt="Symbolic arrow up right"> | [`arrow-symbolic-up-right.svg`](icons/arrow-symbolic-up-right.svg) | 32 × 32 |
| <img src="icons/arrow-symbolic-right.svg" width="96" height="96" alt="Symbolic arrow right"> | [`arrow-symbolic-right.svg`](icons/arrow-symbolic-right.svg) | 32 × 32 |
| <img src="icons/arrow-symbolic-down-right.svg" width="96" height="96" alt="Symbolic arrow down right"> | [`arrow-symbolic-down-right.svg`](icons/arrow-symbolic-down-right.svg) | 32 × 32 |
| <img src="icons/arrow-symbolic-down.svg" width="96" height="96" alt="Symbolic arrow down"> | [`arrow-symbolic-down.svg`](icons/arrow-symbolic-down.svg) | 32 × 32 |
| <img src="icons/arrow-symbolic-down-left.svg" width="96" height="96" alt="Symbolic arrow down left"> | [`arrow-symbolic-down-left.svg`](icons/arrow-symbolic-down-left.svg) | 32 × 32 |
| <img src="icons/arrow-symbolic-left.svg" width="96" height="96" alt="Symbolic arrow left"> | [`arrow-symbolic-left.svg`](icons/arrow-symbolic-left.svg) | 32 × 32 |
| <img src="icons/arrow-symbolic-up-left.svg" width="96" height="96" alt="Symbolic arrow up left"> | [`arrow-symbolic-up-left.svg`](icons/arrow-symbolic-up-left.svg) | 32 × 32 |

The symbolic arrows use the same gray gradient as the scroll buttons.

### Arrows

| Preview | File | Size |
| :-: | --- | --- |
| <img src="icons/arrow-up.svg" width="96" height="96" alt="Arrow up"> | [`arrow-up.svg`](icons/arrow-up.svg) | 32 × 32 |
| <img src="icons/arrow-down.svg" width="96" height="96" alt="Arrow down"> | [`arrow-down.svg`](icons/arrow-down.svg) | 32 × 32 |
| <img src="icons/arrow-left.svg" width="96" height="96" alt="Arrow left"> | [`arrow-left.svg`](icons/arrow-left.svg) | 32 × 32 |
| <img src="icons/arrow-right.svg" width="96" height="96" alt="Arrow right"> | [`arrow-right.svg`](icons/arrow-right.svg) | 32 × 32 |

The arrows are white, so they're meant for dark or colored backgrounds.

### Symbols

| Preview | File | Size |
| :-: | --- | --- |
| <img src="icons/clipboard.svg" width="96" height="96" alt="Clipboard"> | [`clipboard.svg`](icons/clipboard.svg) | 32 × 32 |
| <img src="icons/power.svg" width="96" height="96" alt="Power"> | [`power.svg`](icons/power.svg) | 32 × 32 |

The symbols match the arrows and are white as well.

### Dropdown and search

| Preview | File | Size |
| :-: | --- | --- |
| <img src="icons/dropdown-arrow.svg" width="96" height="96" alt="Dropdown arrow"> | [`dropdown-arrow.svg`](icons/dropdown-arrow.svg) | 32 × 32 |
| <img src="icons/dropdown-arrow-light.svg" width="96" height="96" alt="Dropdown arrow, light"> | [`dropdown-arrow-light.svg`](icons/dropdown-arrow-light.svg) | 32 × 32 |
| <img src="icons/dropdown-arrow-disabled.svg" width="96" height="96" alt="Dropdown arrow, disabled"> | [`dropdown-arrow-disabled.svg`](icons/dropdown-arrow-disabled.svg) | 32 × 32 |
| <img src="icons/search.svg" width="96" height="96" alt="Search"> | [`search.svg`](icons/search.svg) | 32 × 32 |

### Slider thumbs

| Normal | Hover | Active | Disabled | Size |
| :-: | :-: | :-: | :-: | --- |
| <img src="icons/slider-indicator.svg" width="96" height="96" alt="Slider indicator"><br>[`slider-indicator.svg`](icons/slider-indicator.svg) | <img src="icons/slider-indicator-hover.svg" width="96" height="96" alt="Slider indicator, hover"><br>[`slider-indicator-hover.svg`](icons/slider-indicator-hover.svg) | <img src="icons/slider-indicator-active.svg" width="96" height="96" alt="Slider indicator, active"><br>[`slider-indicator-active.svg`](icons/slider-indicator-active.svg) | <img src="icons/slider-indicator-disabled.svg" width="96" height="96" alt="Slider indicator, disabled"><br>[`slider-indicator-disabled.svg`](icons/slider-indicator-disabled.svg) | 32 × 32 |
| <img src="icons/slider-indicator-box.svg" width="96" height="96" alt="Slider box"><br>[`slider-indicator-box.svg`](icons/slider-indicator-box.svg) | <img src="icons/slider-indicator-box-hover.svg" width="96" height="96" alt="Slider box, hover"><br>[`slider-indicator-box-hover.svg`](icons/slider-indicator-box-hover.svg) | <img src="icons/slider-indicator-box-active.svg" width="96" height="96" alt="Slider box, active"><br>[`slider-indicator-box-active.svg`](icons/slider-indicator-box-active.svg) | <img src="icons/slider-indicator-box-disabled.svg" width="96" height="96" alt="Slider box, disabled"><br>[`slider-indicator-box-disabled.svg`](icons/slider-indicator-box-disabled.svg) | 32 × 32 |

### Spinner

| Preview | File | Size |
| :-: | --- | --- |
| <img src="icons/spinner.svg" width="96" height="96" alt="Spinner"> | [`spinner.svg`](icons/spinner.svg) | 32 × 32 |

The spinner is animated with SMIL and rotates once every 1.05 s.

### Shell icons

| Preview | File | Size |
| :-: | --- | --- |
| <img src="icons/folder.svg" width="96" height="96" alt="Folder"> | [`folder.svg`](icons/folder.svg) | 32 × 32 |
| <img src="icons/folder-open.svg" width="96" height="96" alt="Open folder"> | [`folder-open.svg`](icons/folder-open.svg) | 32 × 32 |
| <img src="icons/folder-download.svg" width="96" height="96" alt="Download folder"> | [`folder-download.svg`](icons/folder-download.svg) | 32 × 32 |
| <img src="icons/control-panel.svg" width="96" height="96" alt="Control Panel"> | [`control-panel.svg`](icons/control-panel.svg) | 32 × 32 |

### Toolbar icons

| Preview | File | Size |
| :-: | --- | --- |
| <img src="icons/sidebar.svg" width="96" height="96" alt="Sidebar"> | [`sidebar.svg`](icons/sidebar.svg) | 32 × 32 |
| <img src="icons/sliders.svg" width="96" height="96" alt="Sliders"> | [`sliders.svg`](icons/sliders.svg) | 32 × 32 |
| <img src="icons/back-forward.svg" width="96" height="96" alt="Back and forward"> | [`back-forward.svg`](icons/back-forward.svg) | 32 × 32 |
| <img src="icons/pipette.svg" width="96" height="96" alt="Pipette"> | [`pipette.svg`](icons/pipette.svg) | 32 × 32 |
| <img src="icons/rainbow.svg" width="96" height="96" alt="Rainbow"> | [`rainbow.svg`](icons/rainbow.svg) | 32 × 32 |
| <img src="icons/eye.svg" width="96" height="96" alt="Eye"> | [`eye.svg`](icons/eye.svg) | 32 × 32 |
| <img src="icons/palette.svg" width="96" height="96" alt="Palette"> | [`palette.svg`](icons/palette.svg) | 32 × 32 |

## Credits

Based on the icons from [7.css](https://github.com/khang-nd/7.css/tree/main/gui/icon) by [khang-nd](https://github.com/khang-nd), licensed under the [MIT License](https://github.com/khang-nd/7.css/blob/main/LICENSE).
