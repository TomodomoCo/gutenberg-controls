# Tomodomo Gutenberg Controls

This repo contains a selection of custom controls for the WordPress Gutenberg editor.

## Controls

### RadioImageControl

This control adds a visual element to the standard Gutenberg `RadioControl`, allowing you to display a preview image with each item in the picker:

![image-radio-image-control](https://user-images.githubusercontent.com/1231306/43051364-dfdad69c-8de6-11e8-8da2-cecf6c4532ac.png)

#### Usage

The control has most of the same properties as the standard Gutenberg `RadioControl`, with a slight variation in the addition of the `preview` parameter inside each option.

```jsx
import { RadioImageControl } from "@tomodomo/gutenberg-controls";

<RadioImageControl
  label="Text Label"
  className="optional-custom-class-names"
  options={[
    {
      value: "option-1",
      label: "Option 1",
      preview: "/path/to/preview-image-1.png"
    },
    {
      value: "option-2",
      label: "Option 2",
      preview: "/path/to/preview-image-2.png"
    },
    {
      value: "option-3",
      label: "Option 3",
      preview: "/path/to/preview-image-3.png"
    },
  ]}
  selected={currentlySelectedOption}
  help="Optional help text."
  onChange={onChangeCallback}
/>
```

## About Tomodomo

Tomodomo is a creative agency for magazine publishers. We use custom design and technology to speed up your editorial workflow, engage your readers, and build sustainable subscription revenue for your business.

Learn more at [tomodomo.co](https://tomodomo.co) or email us: [hello@tomodomo.co](mailto:hello@tomodomo.co)

## License & Conduct

This project is licensed under the terms of the MIT License, included in `LICENSE.md`.

All open source Tomodomo projects follow a strict code of conduct, included in `CODEOFCONDUCT.md`. We ask that all contributors adhere to the standards and guidelines in that document.

Thank you!
