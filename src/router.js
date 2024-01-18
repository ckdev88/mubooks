import DashboardPage from './views/account/DashboardPage.vue'

export const routes = [
	{
		path: '/',
		redirect: { name: 'dashboard' },
		children: [
			{
				path: '/account/dashboard',
				name: 'dashboard',
				component: DashboardPage,
				meta: { includeNav: true, requiresAuth: true, requiresNoAuth: false }
			},
			{
				path: '/routeinfo',
				name: 'routeinfo',
				component: () => import('./views/RouteinfoPage.vue'),
				props: { username: 'proptest' },
				meta: { requiresAuth: false, requiresNoAuth: false, includeNav: true }
			},
			{
				path: '/quotes',
				name: 'quotes',
				component: () => import('./views/QuotesPage.vue'),
				meta: { requiresAuth: false, requiresNoAuth: false, includeNav: true }
			},
			{
				path: '/states',
				name: 'states',
				component: () => import('./views/GlobalStates.vue'),
				meta: { requiresAuth: false, requiresNoAuth: false, includeNav: false }
			},
			{
				path: '/reading-add',
				name: 'reading-add',
				component: () => import('./views/ReadingAddPage.vue'),
				meta: { requiresAuth: true, requiresNoAuth: false, includeNav: true }
			},
			{
				path: '/explore',
				name: 'explore',
				component: () => import('./views/ExplorePage.vue'),
				meta: { requiresAuth: false, requiresNoAuth: false, includeNav: true }
			},
			{
				path: '/books',
				name: 'books',
				component: () => import('./views/BooksPage.vue'),
				meta: { requiresAuth: false, requiresNoAuth: false, includeNav: true }
			},
			{
				path: '/mubooks',
				name: 'mubooks',
				component: () => import('./views/MuPage.vue'),
				meta: { requiresAuth: false, requiresNoAuth: false, includeNav: true }
			},
			{
				name: 'savedbooks',
				path: '/saved-books',
				component: () => import('./views/books/SavedBooksPage.vue'),
				meta: {
					navName: 'Saved books',
					requiresAuth: true,
					requiresNoAuth: false,
					includeNav: true
				}
			},
			{
				path: '/bookstore',
				name: 'bookstore',
				component: () => import('./views/BookstorePage.vue'),
				meta: { requiresAuth: false, requiresNoAuth: false, includeNav: true }
			},
			{
				path: '/series',
				name: 'series',
				component: () => import('./views/SeriesPage.vue'),
				meta: { requiresAuth: false, requiresNoAuth: false, includeNav: true }
			}
		]
	},
	{
		path: '/account/login',
		children: [
			{
				path: '/account/login',
				name: 'login',
				component: () => import('./views/account/LoginPage.vue'),
				meta: { requiresAuth: false, requiresNoAuth: true, includeNav: true }
			},
			{
				path: '/account/signup',
				name: 'signup',
				component: () => import('./views/account/SignupPage.vue'),
				meta: { requiresAuth: false, requiresNoAuth: true, includeNav: true }
			},
			{
				path: '/account/checkmail',
				name: 'checkmail',
				component: () => import('./views/account/CheckMailPage.vue'),
				meta: { requiresAuth: false, requiresNoAuth: false, includeNav: false },
				props: true
			},
			{
				path: '/account/dashboard',
				name: 'dashboard',
				component: () => import('./views/account/DashboardPage.vue'),
				meta: { requiresAuth: true, requiresNoAuth: false, includeNav: true }
			},
			{
				path: '/account/profile',
				name: 'profile',
				component: () => import('./views/account/ProfilePage.vue'),
				meta: { requiresAuth: true, requiresNoAuth: false, includeNav: true }
			},
			{
				path: '/account/profile-secret',
				name: 'profile-secret',
				component: () => import('./views/account/SecretPage.vue'),
				meta: { requiresAuth: true, requiresNoAuth: false, includeNav: false }
			},
			{
				path: '/account/logout',
				name: 'logout',
				component: () => import('./views/account/LogoutPage.vue'),
				meta: { requiresAuth: true, requiresNoAuth: false, includeNav: true }
			},
			{
				path: '/account/profile-unauthorized',
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
	{ path: '/:catchAll(.*)', name: '404', component: () => import('./views/status/404Page.vue') }
]
