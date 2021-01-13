import React from 'react'
import Display from '../components/Display'

export default {
    title: "Display",
    component: Display,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  };
  
export const Dark = () => <Display Theme="dark"/>
export const Grey = () => <Display Theme="grey"/>
export const Light = () => <Display Theme="light"/>
