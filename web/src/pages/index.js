import * as React from "react"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import tw, { styled } from "twin.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BodyContent = styled.div(() => [
    tw`container mx-auto p-6`
])

const IndexPage = () => (
    <Layout>
        <BodyContent>
            Stuff will be here; which is sweet.
        </BodyContent>
    </Layout>
)

export default IndexPage
