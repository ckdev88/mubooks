import { defineStore } from 'pinia'
// import { supabase } from '../clients/supabase'
// TODO: apply supabase to global states

// TODO: apply supabase to global states
// const localSession = async () => {
// 	await supabase.auth.getSession().then((res) => console.log('res', res))
// }
// console.log('localsession:', localSession)

/* 1337 deze erin
const localSession = await supabase.auth.getSession()

var st
var sc
var us
var em
var id
if (localSession.data.session === null) {
	console.log('go login, there is no supabase session')
	st = false
	sc = null
	us = null
	em = null
	id = null
} else {
	console.log('logged in, update pinia store with localsession userdata')
	console.log(localSession.data.session)
	const localUser = localSession.data.session.user
	st = true
	sc = localUser.user_metadata.screenname
	us = localUser.email
	em = localUser.email
	id = localUser.id
	console.log('localuser in AuthStore.js', localUser)
}
*/

export const useAuthStore = defineStore('AuthStore', {
	/* 1337 deze erin
	state: () => ({
		status: st,
		screenname: sc,
		username: us,
		email: em,
		uid: id,
		link: 'login'
		// status: false,
		// screenname: '',
		// username: '',
		// email: '',
		// uid: '',
		// link: 'login'
	}),
*/

	state: () => ({
		status: false,
		screenname: '',
		username: '',
		email: '',
		uid: '',
		link: 'login'
	}), // 1337 TODO: deze state eruit
	actions: {
		setUsername(s = '') {
			this.username = s
		},
		setLoginStatus(s = false) {
			// user.role: authenticated / user.aud: authenticated
			console.log('set loginStatus to ', s)
			this.status = s
			if (s === false) {
				this.setUsername()
			}
		},
		setEmail(s = '') {
			// user.email
			this.email = s
		},
		setScreenname(s = '') {
			// user.user_metadata.screenname
			this.screenname = s
		},
		setUid(s = '') {
			// user.id
			this.uid = s
		},
		setStatus(status, screenname, username, email, uid) {
			// TODO: bit hacky, needs to be better,
			// see main.js for hacky call
			this.status = status
			this.screenname = screenname
			this.username = username
			this.email = email
			uid = uid
		},
		doLogout() {
			this.status = false
			this.screenname = null
			this.username = null
			this.email = null
			this.uid = null
		}
	}
})
