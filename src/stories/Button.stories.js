import React from "react";
import Button from "../components/Button";

// A bit of meta data the story and corresponding component
// component is optional but encouraged as it's needed by some of the addons
export default {
  title: "Button",
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

/* Named export representing every story */

export const Dark = () => <Button Theme="dark">🌚 Dark </Button>;
export const Grey = () => <Button Theme="grey">🌓 Grey </Button>;
export const Light = () => <Button Theme="light">🌝 Light</Button>;
