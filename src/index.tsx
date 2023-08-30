import { createRoot } from 'react-dom/client'
// eslint-disable-next-line import/no-internal-modules
import { App } from 'app/App'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(<App />)
