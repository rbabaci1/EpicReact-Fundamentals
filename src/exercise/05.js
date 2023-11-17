// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({size, style, ...otherProps}) => {
  return (
    <div
      className={`box ${size ? `box--${size}` : ''}`}
      {...otherProps}
      style={{fontStyle: 'italic', ...style}}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>

      <Box size="medium" style={{backgroundColor: 'pink'}}>
        small lightblue box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        small lightblue box
      </Box>
    </div>
  )
}

export default App
