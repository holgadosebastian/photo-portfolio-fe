import React from 'react'

import Container from '../components/container'
import Hero from '../components/hero'
import Hdn from '../components/heading'



const Styleguide = () => {
  return (
    <Container>
      <Hdn>Headings</Hdn>
      <Hdn size={1}>Heading size 1</Hdn>
      <Hdn size={2}>Heading size 2</Hdn>
      <Hdn size={3}>Heading size 3</Hdn>
      <Hdn size={4}>Heading size 4</Hdn>
      <Hdn size={5}>Heading size 5</Hdn>
      <Hdn size={6}>Heading size 6</Hdn>

      <Hdn className="pt-10">Buttons</Hdn>
    </Container>
  )
}

export default Styleguide
