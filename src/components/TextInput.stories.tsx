import {TextInput, TextInputInputProps, TextInputRootProps, TextInputIconProps} from './TextInput'
import {Meta, StoryObj} from '@storybook/react'
import { Envelope, Lock } from 'phosphor-react';
export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args:{
        // placeholder: 'Digitai',
        children: [
            <TextInput.Icon>
                <Envelope/>
            </TextInput.Icon>,
            <TextInput.Input placeholder='Digitai'/>
        ],
    },
    argTypes: {
        asChild:{
            table:{
                disable: true,
            }
        }
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const InputSenha: StoryObj<TextInputRootProps> = {
    args:{
        // placeholder: 'Digitai',
        children: [
            <TextInput.Icon>
                <Lock/>
            </TextInput.Icon>,
            <TextInput.Input type='password' placeholder='*******'/>
        ],
    },
}
export const WithotIcon: StoryObj<TextInputRootProps> = {
    args:{
        // placeholder: 'Digitai',
        children: [
            <TextInput.Input placeholder='Digitai'/>
        ],
    },
}

