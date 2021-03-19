import * as React from "react"
import Header from "./header"
import "./layout.css"

const Layout = ({children}) => (
    (
        <>
            <Header/>
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                }}>
                <main>{children}</main>
                <footer
                    style={{marginTop: `2rem`}}>
                    <a href="https://www.free.law">Footer</a>
                </footer>
            </div>
        </>
    )
)
export default Layout
