import HomePage from './views/HomePage.vue'

export const routes = [
	{
		path: '/',
		children: [
			{ path: '/', name: 'home', component: HomePage },
			{
				path: '/routeinfo',
				name: 'routeinfo',
				component: () => import('./views/RouteinfoPage.vue'),
				props: { username: 'proptest' }
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
				meta: { requiresAuth: false, requiresNoAuth: true }
			},
			{
				path: '/profile-create',
				name: 'profile-create',
				component: () => import('./views/account/CreatePage.vue'),
				meta: { requiresAuth: false, requiresNoAuth: true }
			},
			{
				path: '/profile-preferences',
				name: 'profile-preferences',
				component: () => import('./views/account/PreferencesPage.vue'),
				meta: { requiresAuth: true, requiresNoAuth: false }
			},
			{
				path: '/profile-secret',
				name: 'profile-secret',
				component: () => import('./views/account/SecretPage.vue'),
				meta: { requiresAuth: true, requiresNoAuth: false }
			},
			{
				path: '/logout',
				name: 'logout',
				component: () => import('./views/account/LogoutPage.vue'),
				meta: { requiresAuth: true, requiresNoAuth: false }
			},
			{
				path: '/profile-unauthorized',
				name: 'profile-unauthorized',
				component: () => import('./views/status/UnauthorizedPage.vue'),
				meta: { requiresAuth: false, requiresNoAuth: true }
			}
		]
	},
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
