import Typography from 'typography'
import stardust from 'typography-theme-stardust'

stardust.headerWeight = '100'
stardust.bodyWeight = '100'

const typography = new Typography(stardust)


// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
