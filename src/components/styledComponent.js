import * as React from "react"
import styled from "styled-components"

const ComponentSection = styled.div`
    background:green;
`
const ComponentTitle = styled.h3`
    color:blue;
`

const StyledComponent = props => (
  <ComponentSection>
      <ComponentTitle>
            {props.title}
      </ComponentTitle>
  </ComponentSection>
)

export default StyledComponent
