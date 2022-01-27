import React, { Fragment, FC } from 'react'
import Link from 'next/link'

const Footer: FC = () => {
  return (
    <Fragment>
      <footer>
        <div className="footer-heart">
          Made with
          <span role="img" aria-label="green-heart" className="emoji">
            💛
          </span>
          by
          <a href="https://github.com/knwch" target="_blank" rel="noreferrer">
            korrawich.
          </a>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer
