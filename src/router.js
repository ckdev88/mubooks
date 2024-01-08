// later balans zoeken wat sneller/beter is, een voor een inladen, of alle componenten direct de
// eerste keer... voor nu doen we een voor een, ze zeggen dat dit best practice is... ze zeggen ook
// dat de homepage niet dynamisch ingeladen kan worden... ik weet het zo net nog niet hoor...
// maargoed
// import HomePage from './views/HomePage.vue'
import HomePage from './views/HomePage.vue'
// import UserDetailPage from './views/UserDetailPage.vue'

import { supabase } from './clients/supabase'
let localUser

export const routes = [
	{
		path: '/',
		children: [
			{ path: '/', name: 'home', component: HomePage },
			{
				path: '/routeinfo',
				name: 'routeinfo',
				component: () => import('./views/RouteinfoPage.vue')
			},
			{ path: '/quotes', name: 'quotes', component: () => import('./views/QuotesPage.vue') },
			{
				path: '/states',
				name: 'states',
				component: () => import('./views/GlobalStates.vue')
			},
			{
				path: '/boekzoek',
				name: 'boekzoek',
				component: () => import('./views/BoekzoekPage.vue')
			},
			// { path: '/user', name: 'user', component: () => import('./views/UserPage.vue') },
			{
				path: '/books',
				name: 'books',
				component: () => import('./views/BooksPage.vue')
			},
			{ path: '/mubooks', name: 'mubooks', component: () => import('./views/MuPage.vue') },
			{
				path: '/bookstore',
				name: 'bookstore',
				component: () => import('./views/BookstorePage.vue')
			},
			{ path: '/series', name: 'series', component: () => import('./views/SeriesPage.vue') }
		]
	},
	{
		path: '/login',
		children: [
			{
				path: '/login',
				name: 'login',
				component: () => import('./views/account/LoginPage.vue'),
				meta: { requiresNoAuth: true }
			},
			{
				path: '/profile-create',
				name: 'profile-create',
				component: () => import('./views/account/CreatePage.vue'),
				meta: { requiresNoAuth: true }
			},
			{
				path: '/profile-preferences',
				name: 'profile-preferences',
				component: () => import('./views/account/PreferencesPage.vue'),
				meta: { requiresAuth: true }
			},
			{
				path: '/profile-secret',
				name: 'profile-secret',
				component: () => import('./views/account/SecretPage.vue'),
				meta: { requiresAuth: true }
			},
			{
				path: '/logout',
				name: 'logout',
				component: () => import('./views/account/LogoutPage.vue'),
				meta: { requiresAuth: true }
			},
			{
				path: '/profile-unauthorized',
				name: 'profile-unauthorized',
				component: () => import('./views/status/UnauthorizedPage.vue')
			},
			{
				path: '/loginpage',
				name: 'loginpage',
				component: () => import('./views/LoginPage.vue')
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
			}
		]
	},
	,
	// {
	// 	path: '/users/:id',
	// 	name: 'user',
	// 	component: () => import('./views/UserPage.vue')
	// },

	{
		path: '/misc',
		name: 'misc',
		component: () => import('./views/CompoPage.vue'),
		children: [
			{
				path: 'comments',
				name: 'comments',
				component: () => import('./views/CommentsPage.vue')
			},
			{
				path: '/counter',
				name: 'counter',
				component: () => import('./views/CounterPage.vue')
			},
			{
				path: '/posts',
				name: 'posts',
				component: () => import('./views/PostsPage.vue')
			},

			{
				path: '/supabase-test',
				name: 'supabase-test',
				component: () => import('./views/SupabaseTest.vue')
			},
			{
				path: '/compo',
				name: 'compo',
				component: () => import('./views/CompoPage.vue')
			}
		]
	},

	{},
	{ path: '/:catchAll(.*)', name: '404', component: () => import('./views/status/404Page.vue') }
]
