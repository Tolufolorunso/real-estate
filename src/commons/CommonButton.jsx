import React from 'react'
import Button from '@mui/material/Button'

const CommonButton = ({children,color,disabled,size,variant,sx,clickHandler}) => {

  return (
    <Button color={color} disabled={disabled} size={size} variant={variant} sx={sx} onClick={() =>clickHandler() }>
     {children}
    </Button>
  )
}

export default CommonButton