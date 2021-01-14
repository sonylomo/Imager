import React from 'react'
import Uploaded from '../components/Uploaded'

export default {
    title: "Uploaded",
    component: Uploaded,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    // },
  };
  
export const Dark = () => <Uploaded StoryTheme="dark" Url='../assets/agents_of_shield.jpg' Title='Agents of SHIELD'/>
export const Grey = () => <Uploaded StoryTheme="grey" Url='../assets/agents_of_shield.jpg' Title='Agents of SHIELD'/>
export const Light = () => <Uploaded StoryTheme="light" Url='../assets/agents_of_shield.jpg' Title='Agents of SHIELD'/>
