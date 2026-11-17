# Aero UI Icons

SVG icons in the style of the Windows 7 Aero interface: window controls, scroll buttons, dropdown arrows, slider thumbs and a loading spinner.

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

The class names are the file names with an `aero-` prefix, so `slider-indicator-box-hover.svg` becomes `aero-slider-indicator-box-hover`. Icons are `1em` tall and scale with the `font-size`, and the width follows each icon's aspect ratio. They keep their gradients, so `color` doesn't change them.

## Icons

The previews are scaled up 3×. The size column shows the actual size of each SVG.

### Window controls

| Preview | File | Size |
| :-: | --- | --- |
| <img src="icons/minimize.svg" width="36" height="15" alt="Minimize"> | [`minimize.svg`](icons/minimize.svg) | 12 × 5 |
| <img src="icons/maximize.svg" width="36" height="30" alt="Maximize"> | [`maximize.svg`](icons/maximize.svg) | 12 × 10 |
| <img src="icons/restore.svg" width="36" height="36" alt="Restore"> | [`restore.svg`](icons/restore.svg) | 12 × 12 |
| <img src="icons/close.svg" width="33" height="30" alt="Close"> | [`close.svg`](icons/close.svg) | 11 × 10 |
| <img src="icons/help.svg" width="23" height="34" alt="Help"> | [`help.svg`](icons/help.svg) | 7.6 × 11.5 |

### Scroll buttons

| Preview | File | Size |
| :-: | --- | --- |
| <img src="icons/button-up.svg" width="21" height="12" alt="Up"> | [`button-up.svg`](icons/button-up.svg) | 7 × 4 |
| <img src="icons/button-down.svg" width="21" height="12" alt="Down"> | [`button-down.svg`](icons/button-down.svg) | 7 × 4 |
| <img src="icons/button-left.svg" width="12" height="21" alt="Left"> | [`button-left.svg`](icons/button-left.svg) | 4 × 7 |
| <img src="icons/button-right.svg" width="12" height="21" alt="Right"> | [`button-right.svg`](icons/button-right.svg) | 4 × 7 |

### Dropdown and search

| Preview | File | Size |
| :-: | --- | --- |
| <img src="icons/dropdown-arrow.svg" width="21" height="12" alt="Dropdown arrow"> | [`dropdown-arrow.svg`](icons/dropdown-arrow.svg) | 7 × 4 |
| <img src="icons/dropdown-arrow-disabled.svg" width="21" height="12" alt="Dropdown arrow, disabled"> | [`dropdown-arrow-disabled.svg`](icons/dropdown-arrow-disabled.svg) | 7 × 4 |
| <img src="icons/search.svg" width="42" height="42" alt="Search"> | [`search.svg`](icons/search.svg) | 14 × 14 |

### Slider thumbs

| Normal | Hover | Active | Disabled | Size |
| :-: | :-: | :-: | :-: | --- |
| <img src="icons/slider-indicator.svg" width="30" height="54" alt="Slider indicator"><br>[`slider-indicator.svg`](icons/slider-indicator.svg) | <img src="icons/slider-indicator-hover.svg" width="30" height="54" alt="Slider indicator, hover"><br>[`slider-indicator-hover.svg`](icons/slider-indicator-hover.svg) | <img src="icons/slider-indicator-active.svg" width="30" height="54" alt="Slider indicator, active"><br>[`slider-indicator-active.svg`](icons/slider-indicator-active.svg) | <img src="icons/slider-indicator-disabled.svg" width="30" height="54" alt="Slider indicator, disabled"><br>[`slider-indicator-disabled.svg`](icons/slider-indicator-disabled.svg) | 10 × 18 |
| <img src="icons/slider-indicator-box.svg" width="30" height="54" alt="Slider box"><br>[`slider-indicator-box.svg`](icons/slider-indicator-box.svg) | <img src="icons/slider-indicator-box-hover.svg" width="30" height="54" alt="Slider box, hover"><br>[`slider-indicator-box-hover.svg`](icons/slider-indicator-box-hover.svg) | <img src="icons/slider-indicator-box-active.svg" width="30" height="54" alt="Slider box, active"><br>[`slider-indicator-box-active.svg`](icons/slider-indicator-box-active.svg) | <img src="icons/slider-indicator-box-disabled.svg" width="30" height="54" alt="Slider box, disabled"><br>[`slider-indicator-box-disabled.svg`](icons/slider-indicator-box-disabled.svg) | 10 × 18 |

### Spinner

| Preview | File | Size |
| :-: | --- | --- |
| <img src="icons/spinner.svg" width="64" height="64" alt="Spinner"> | [`spinner.svg`](icons/spinner.svg) | 32 × 32 |

The spinner is animated with SMIL and rotates once every 1.05 s.

## Credits

Based on the icons from [7.css](https://github.com/khang-nd/7.css/tree/main/gui/icon) by [khang-nd](https://github.com/khang-nd), licensed under the [MIT License](https://github.com/khang-nd/7.css/blob/main/LICENSE).
