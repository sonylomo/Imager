import React from "react";
import Button from "./Button";

// A bit of meta data the story and corresponding component
// component is optional but encouraged as it's needed by some of the addons
export default {
  title: "Button",
  component: Button,
};

/* Named export representing every story */

export const Black = () => <Button variant="black">Black</Button>;
export const Dark = () => <Button variant="dark">Dark</Button>;
export const Light = () => <Button variant="light">Light</Button>;
