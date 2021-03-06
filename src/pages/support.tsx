import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'

import Layout from '../components/layout'
import MarbleImage from '../components/marble-image'

// @ts-ignore
import Logo from '../images/logo.svg'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      askAbeImage: file(relativePath: { eq: "ask-abe.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className='ig-about'>
        <div className='relative flex items-center justify-center' style={{height: 200}}>
          <MarbleImage/>
          <div className='relative text-white text-center mx-4' style={{maxWidth: 716}}>
            <h2 className='montserrat text-2xl md:text-4xl font-bold leading-tight'
                style={{color: '#e0e0e0'}}>
              Ask Abe
            </h2>
          </div>
        </div>

        <div className='mx-auto px-8 my-16' style={{maxWidth: 584}}>
          <div className='text-xl leading-loose text-center' style={{color: '#575757'}}>
            <div className='my-10'>
              <p>Thanks for stopping by!</p>
              <p>If you need help from Indigov, click the <b>Ask Abe</b> app.</p>
              <div className={"p-5 flex justify-center"}>
                <div style={{ width: '300px'}}>
                  <Img fluid={data.askAbeImage.childImageSharp.fluid} style={{maxWidth:'300px'}} />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </Layout>
  )
}
