import {Text, TextProps} from './Text'
import {Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Components/Text',
    component: Text,
    args:{
        children: 'Bora Biil',
        size: 'md'
    },
    argTypes: {
        size:{
            options: ['sm', 'md', 'lg'],
            control: {
                type:'inline-radio'
            }
        },
        asChild: {
            table:{
                disable: true,
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
    args:{
        children: 'Bora Biil',
        size: 'md'
    },
}
export const Small: StoryObj<TextProps> = {
    args:{
        children: 'Bora Filho do Biil',
        size: 'sm'
    },
}
export const Large: StoryObj<TextProps> = {
    args:{
        children: 'Bora Mulher do Biil',
        size: 'lg'
    },
}

export const CustomComponent: StoryObj<TextProps> = {
    args:{
        asChild: true,
        children: (
            <p>BoriBiiill</p>
        ),
    },
    argTypes:{
        children:{
            table:{
                disable: true,
            }
        },
    }
}