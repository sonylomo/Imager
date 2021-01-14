import React from 'react'
import Display from '../components/Display'

export default {
    title: "Display",
    component: Display,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  };
  
export const Dark = () => <Display StoryTheme="dark"/>
export const Grey = () => <Display StoryTheme="grey"/>
export const Light = () => <Display StoryTheme="light"/>
