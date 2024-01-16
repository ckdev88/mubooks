import HomePage from './views/HomePage.vue'

export const routes = [
	{
		path: '/',
		children: [
			{ path: '/', name: 'home', component: HomePage, meta: { includeNav: true } },
			{
				path: '/routeinfo',
				name: 'routeinfo',
				component: () => import('./views/RouteinfoPage.vue'),
				props: { username: 'proptest' },
				meta: { includeNav: true }
			},
			{
				path: '/quotes',
				name: 'quotes',
				component: () => import('./views/QuotesPage.vue'),
				meta: { includeNav: true }
			},
			{
				path: '/states',
				name: 'states',
				component: () => import('./views/GlobalStates.vue'),
				meta: { includeNav: false }
			},
			{
				path: '/explore',
				name: 'explore',
				component: () => import('./views/ExplorePage.vue'),
				meta: { includeNav: true }
			},
			{
				path: '/books',
				name: 'books',
				component: () => import('./views/BooksPage.vue'),
				meta: { includeNav: true }
			},
			{
				path: '/mubooks',
				name: 'mubooks',
				component: () => import('./views/MuPage.vue'),
				meta: { includeNav: true }
			},
			{
				path: '/bookstore',
				name: 'bookstore',
				component: () => import('./views/BookstorePage.vue'),
				meta: { includeNav: true }
			},
			{
				path: '/series',
				name: 'series',
				component: () => import('./views/SeriesPage.vue'),
				meta: { includeNav: true }
			}
		]
	},
	{
		path: '/login',
		children: [
			{
				path: '/login',
				name: 'login',
				component: () => import('./views/account/LoginPage.vue'),
				meta: { requiresAuth: false, requiresNoAuth: true, includeNav: true }
			},
			{
				path: '/signup',
				name: 'signup',
				component: () => import('./views/account/SignupPage.vue'),
				meta: { requiresAuth: false, requiresNoAuth: true, includeNav: true }
			},
			{
				path: '/checkmail',
				name: 'checkmail',
				component: () => import('./views/account/CheckMailPage.vue'),
				meta: { requiresAuth: false, requiresNoAuth: false, includeNav: false },
				props: true
			},
			{
				path: '/welcome',
				name: 'welcome',
				component: () => import('./views/account/WelcomePage.vue'),
				meta: { requiresAuth: true, requiresNoAuth: false, includeNav: true }
			},
			{
				path: '/profile',
				name: 'profile',
				component: () => import('./views/account/ProfilePage.vue'),
				meta: { requiresAuth: true, requiresNoAuth: false, includeNav: true }
			},
			{
				path: '/profile-secret',
				name: 'profile-secret',
				component: () => import('./views/account/SecretPage.vue'),
				meta: { requiresAuth: true, requiresNoAuth: false, includeNav: false }
			},
			{
				path: '/logout',
				name: 'logout',
				component: () => import('./views/account/LogoutPage.vue'),
				meta: { requiresAuth: true, requiresNoAuth: false, includeNav: true }
			},
			{
				path: '/profile-unauthorized',
				name: 'profile-unauthorized',
				component: () => import('./views/status/UnauthorizedPage.vue'),
				meta: { requiresAuth: false, requiresNoAuth: true, includeNav: false }
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
