import homeRoute from './home.route.js'

let routes = [
	['/', homeRoute]
]

const Router = (App) => {
	routes.forEach(([pathName, routeFile]) => {
		App.use(pathName, routeFile)
	})
}

export default Router