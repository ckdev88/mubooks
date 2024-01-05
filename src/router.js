// later balans zoeken wat sneller/beter is, een voor een inladen, of alle componenten direct de
// eerste keer... voor nu doen we een voor een, ze zeggen dat dit best practice is... ze zeggen ook
// dat de homepage niet dynamisch ingeladen kan worden... ik weet het zo net nog niet hoor...
// maargoed
import HomePage from './views/HomePage.vue'
// import UserDetailPage from './views/UserDetailPage.vue'

export const routes = [
	{
		path: '/',
		name: 'home',
		// component: () => import('./views/HomePage.vue')
		component: HomePage
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('./views/LoginPage.vue')
	},
	{ path: '/boekzoek', name: 'boekzoek', component: () => import('./views/BoekzoekPage.vue') },
	// { path: '/user', name: 'user', component: () => import('./views/UserPage.vue') },
	{
		path: '/books',
		name: 'books',
		component: () => import('./views/BooksPage.vue')
	},
	{ path: '/mubooks', name: 'mubooks', component: () => import('./views/MuPage.vue') },
	{ path: '/bookstore', name: 'bookstore', component: () => import('./views/BookstorePage.vue') },
	{ path: '/series', name: 'series', component: () => import('./views/SeriesPage.vue') },
	{
		path: '/compo',
		name: 'compo',
		component: () => import('./views/CompoPage.vue')
	},
	{
		path: '/users',
		name: 'users',
		component: () => import('./views/UsersPage.vue')
	},
	{
		path: '/users/:id',
		component: () => import('./views/UserDetailPage.vue')
		// component: UserDetailPage
	},
	// {
	// 	path: '/users/:id',
	// 	name: 'user',
	// 	component: () => import('./views/UserPage.vue')
	// },
	{
		path: '/posts',
		name: 'posts',
		component: () => import('./views/PostsPage.vue')
	},
	{
		path: '/comments',
		name: 'comments',
		component: () => import('./views/CommentsPage.vue')
	},
	{
		path: '/counter',
		name: 'counter',
		component: () => import('./views/CounterPage.vue')
	},
	{
		path: '/routeinfo',
		name: 'routeinfo',
		component: () => import('./views/RouteinfoPage.vue')
	},
	{ path: '/quotes', name: 'quotes', component: () => import('./views/QuotesPage.vue') },
	{ path: '/states', name: 'states', component: () => import('./views/GlobalStates.vue') }
]
