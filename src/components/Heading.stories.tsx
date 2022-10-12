import {Heading, HeadingProps} from './Heading'
import {Meta, StoryObj} from '@storybook/react'

export default {
    title: 'Components/Heading',
    component: Heading,
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
        asChild:{
            table:{
                disable: true,
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
    args:{
        children: 'Bora Biil',
        size: 'md'
    },
}
export const Small: StoryObj<HeadingProps> = {
    args:{
        children: 'Bora Filho do Biil',
        size: 'sm'
    },
}
export const Large: StoryObj<HeadingProps> = {
    args:{
        children: 'Bora Mulher do Biil',
        size: 'lg'
    },
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args:{
        asChild: true,
        children: (
            <h1>BoriBiiill</h1>
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