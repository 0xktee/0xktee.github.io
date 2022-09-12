import { Fragment } from 'react'

import { Box, Button, createStyles } from '@mantine/core'
import type { ButtonProps, UnstyledButtonProps } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',

    '&::before': {
      /* box model */
      zIndex: 0,
      overflow: 'visible',
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',

      /* other */
      boxShadow: '4px 4px 0px black',
    },

    'button, a': {
      zIndex: 1,
      backgroundColor: theme.colors.lime,

      fontWeight: 500,
      color: 'black',

      transition: 'all 0.2s ease',
      border: '1px solid black',
      borderRadius: 0,
      boxShadow: 'none',

      '&:hover': {
        transform: 'translate(4px, 4px)',
        backgroundColor: theme.colors.lime,
      },
    },
  },
}))

export default function ButtonCustom(props: ButtonProps & any) {
  const { classes } = useStyles()
  const { children, fullWidth } = props

  return (
    <Fragment>
      <Box
        className={classes.wrapper}
        {...(fullWidth
          ? null
          : {
              sx: {
                display: 'inline-block',
                width: 'fit-content',
              },
            })}
      >
        <Button {...props}>{children}</Button>
      </Box>
    </Fragment>
  )
}
