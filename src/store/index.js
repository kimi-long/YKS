import Vue from 'vue'
import Vuex from 'vuex'
// import {getAdminInfo} from '@/api/getData'

Vue.use(Vuex)

const state = {
    firstTime:true,
	adminInfo: {
		avatar: 'default.jpg'
	},
}

const mutations = {
	saveAdminInfo(state, adminInfo){
		state.adminInfo = adminInfo;
	},
    enterSys(state){
        state.firstTime = false;
    },
}

const actions = {
	async getAdminData({commit}){
		try{
			// const res = await getAdminInfo()
			if (res.status == 1) {
				commit('saveAdminInfo', res.data);
			}else{
				throw new Error(res)
			}
		}catch(err){
			// console.log('您尚未登陆或者session失效')
		}
	},
    showConfig({commit}) {
        commit('enterSys')
    },
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
})
