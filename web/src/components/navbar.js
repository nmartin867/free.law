import * as React from 'react'
import tw, { css, styled } from 'twin.macro'

const hoverStyles = css`
    &:hover {
      ${tw`text-gray-900`}
    }
`
const focusStyles = css`
    &:focus {
      ${tw`outline-none ring-2 ring-offset-2 ring-indigo-500`}
    }
`

const DonateButton = tw.button`
`


//const DonateButton = ({ hasHover, hasFocus}) => (
    //<button  tw="group text-gray-500 bg-white rounded-md inline-flex" />
    // <button css={[
    //     tw`text-gray-500`,
    //     tw`bg-white`,
    //     tw`rounded-md`,
    //     tw`inline-flex`,
    //     tw`items-center`,
    //     tw`text-base`,
    //     tw`font-medium`,
    //     hasHover && hoverStyles,
    //     hasFocus && focusStyles
    // ]} />
//)

const Navbar = () => (
    <nav tw="hidden md:flex space-x-10">
        <div tw="relative">
            <DonateButton className="group">
                <span>Test</span>
            </DonateButton>
        </div>
    </nav>
)

export default Navbar