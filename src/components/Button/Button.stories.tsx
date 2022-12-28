import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "CatsUiLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  text: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  text: "Click me!",
};


export const Size = Template.bind({})

Size.args = {
  text: "size small!",
  size: 'small',
}

export const Disabled = Template.bind({});

Disabled.args = {
  text: "disabled!",
  disabled: true,
}
