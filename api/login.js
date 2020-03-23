import {http} from '@/utils/request/index'

export default{
	getWXLogin({
		urls,
		success,
		fail,
		complete
	} = {}) {
		http.get('app/auth/wx_auth', {
			params: {
				redirect_uri: urls,
			},
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
	
	getUploadfile({
		file,
		success,
		fail,
		complete
	} = {}) {
		http.post('app/user/uploadFile',{}, {
			params: {
				file: file,
			},
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
	
	// 分享
	handleShare({
		success,
		fail,
		complete,
	}={}){
		http.get('app/auth/wx_jsconfig',{
		
			success:res=>{
				success && success(res)
			},
			fail:err=>{
				fail && fail(err)
			},
			complete:res=>{
				complete && complete(res)
			}
		})
	}
}