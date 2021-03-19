import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import tw, { styled } from 'twin.macro'

const HeaderContainer = styled.div`
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
`

const HeaderInnerLayout = styled.div(() => [
    tw`container mx-auto p-6`
])

const HeaderTitle = styled.h2(() => [
    tw`text-4xl font-bold mb-2 text-white`
])

const HeaderSubtitle = styled.h3(() => [
    tw`text-base mb-8 text-gray-200`
])

const Header = () => (
    <HeaderContainer>
        <HeaderInnerLayout>
            <HeaderTitle>Free Law Project</HeaderTitle>
            <HeaderSubtitle>
                Providing free access to primary legal materials, developing legal research tools, and supporting academic research on legal corpora.
            </HeaderSubtitle>
        </HeaderInnerLayout>
    </HeaderContainer>
)

export default Header