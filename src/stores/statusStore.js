import { reactive } from 'vue'
const status = reactive({
	loggedin: false,
	uid: null,
	email: null,
	username: null,
	screenname: null
})

const setStatusLogin = (uid = '', email = '', s = '') => {
	status.loggedin = true
	status.uid = uid
	status.email = email
	status.username = email
	status.screenname = s
	localStorage.setItem('user', JSON.stringify(status))
}
const setStatusLogout = () => {
	console.log('set status to logout')
	localStorage.removeItem(user)
	status.loggedin = false
}
export function useStatusStore() {
	return { setStatusLogin, setStatusLogout, status }
}
