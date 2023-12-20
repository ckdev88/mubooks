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
		path: '/counter',
		name: 'counter',
		component: () => import('./views/CounterPage.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('./views/LoginPage.vue')
	},
	// { path: '/user', name: 'user', component: () => import('./views/UserPage.vue') },
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
	{
		path: '/dashboard',
		name: 'dashboard',
		component: () => import('./views/DashboardPage.vue')
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
		path: '/books',
		name: 'books',
		component: () => import('./views/BooksPage.vue')
	},
	{
		path: '/compo',
		name: 'compo',
		component: () => import('./views/CompoPage.vue')
	},
	{
		path: '/new',
		name: 'new',
		component: () => import('./views/NewPage.vue')
		// component: NewPage
	}
]
