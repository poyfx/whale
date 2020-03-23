import {
	http
} from '@/utils/request/index'

export default {
	playPrize({
		success,
		fail,
		complete
	} = {}) {
		http.post('app/user/draw_prize', {}, {
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},
	getPrize({
		realname,
		mobile,
		address,
		success,
		fail,
		complete
	} = {}) {
		http.post('app/user/save_prize', {
			realname:realname,
			mobile:mobile,
			address:address,
		}, {
			
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: res => {
				complete && complete(res)
			}
		})
	},


}
