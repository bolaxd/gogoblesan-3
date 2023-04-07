import Express from 'express'
import cors from 'cors'
import Router from './routes/index.js'
import path from 'path'

const App = Express();
const PORT = 3009

App.use(Express.static(path.join(process.cwd(), 'public')))

App.use(cors());
App.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
});

Router(App)

App.listen(PORT, () => console.log('Server telah ready'));