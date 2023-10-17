import { Fragment } from 'react'

import { Box, Button, createStyles } from '@mantine/core'
import type { ButtonProps } from '@mantine/core'

const useStyles = createStyles((theme, { variant }: ButtonProps) => ({
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
      background: theme.colors.gray[3],
      borderRadius: 0,
      boxShadow: `0px 0px 0px 2px #333333 inset`,
    },

    'button, a': {
      zIndex: 1,
      backgroundColor: 'white',

      fontWeight: 400,
      color: theme.colors.bgDark,

      transition: 'all 0.2s ease',

      border: 'none',
      borderRadius: 0,

      boxShadow: `0px 0px 0px 2px #333333 inset`,

      '&:hover': {
        transform: 'translate(6px, -6px)',
        backgroundColor: theme.colors.main,
        color: 'black',
      },
    },
  },
}))

export default function ButtonCustom(props: ButtonProps & any) {
  const { children, fullWidth, variant, radius } = props
  const { classes } = useStyles({ variant, radius })

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
