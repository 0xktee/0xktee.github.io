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
      background: theme.colors.bgDark,
      borderRadius: theme.radius.xs,
      boxShadow: `0px 0px 0px 0.08em ${
        variant === 'outline' ? theme.colors.bgLight : theme.colors.orenji
      } inset`,
    },

    'button, a': {
      zIndex: 1,
      backgroundColor: variant === 'outline' ? theme.colors.bgDark : theme.colors.orenji,

      fontWeight: 500,
      color: variant === 'outline' ? 'white' : 'black',

      transition: 'all 0.2s ease',

      borderWidth: '0.08em',
      borderColor: variant === 'outline' ? theme.colors.bgLight : theme.colors.orenji,
      borderRadius: theme.radius.xs,
      boxShadow: 'none',

      '&:hover': {
        transform: 'translate(4px, -4px)',
        backgroundColor: variant === 'outline' ? theme.colors.bgDark : theme.colors.orenji,
        color: variant === 'outline' ? 'white' : 'black',
        borderColor: variant === 'outline' ? theme.colors.bgLight : theme.colors.orenji,
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
