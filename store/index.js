import Vue from 'vue'
import Vuex from 'vuex'
import wx from 'jweixin-module'
import loginServer from '@/api/login.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		Token: null,
		appId: null,
		nonceStr: null,
		signature: null,
		timestamp: null,
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
			uni.setStorage({
				key: 'Token',
				data: token
			})
			state.hasLogin = true;
		},
		setAppId(state, appId) {
			state.appId = appId;

		},
		setNonceStr(state, nonceStr) {
			state.nonceStr = nonceStr;
		},
		setSignature(state, signature) {
			state.signature = signature;

		},
		setTimestamp(state, timestamp) {
			state.timestamp = timestamp;

		},
	},
	actions: {
		getLogin({
			commit
		}, data) {
			commit('setToken', data)
		},
		getWxInfo({
			commit
		}, data) {
			return new Promise((resolve, reject) => {
				try {
					loginServer.handleShare({
						success: res => {
							const datas = res.data.artUser
							if (res.data.code != 0) {
								uni.showModal({
									content: res.data.msg
								})
								resolve(datas)
								return
							}
							commit('setAppId', res.data.appId)
							commit('setNonceStr', res.data.nonceStr)
							commit('setSignature', res.data.signature)
							commit('setTimestamp', res.data.timestamp)

							resolve(datas)

						},
						fail: err => {
							console.log(err)
						},
						complete: err => {
							console.log(err)
						}
					})
				} catch (e) {
					reject(e)
				}
			})
		}
	},
})
export default store
