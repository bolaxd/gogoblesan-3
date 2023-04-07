	
import { Router } from 'express'
import path from 'path'
const HomeRoute = Router()

HomeRoute.get('/', (req, res) => {
	res.sendFile(path.join(process.cwd(), 'public/index.html'))
})

export default HomeRoute
