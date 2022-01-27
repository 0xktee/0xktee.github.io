export const sidebar = {
  open: {
    clipPath: `circle(250px at 260px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(30px at 260px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export const ulvariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    display: 'block',
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: 'afterChildren',
    },
    display: 'none',
  },
}

export const livariants = {
  open: {
    x: -15,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 0,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
}
