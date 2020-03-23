import {
	http
} from '../utils/request/index.js'
const token = uni.getStorageSync('Token');
 const baseUrl ='http://api.whale.act.go-tech.cn/'
//const baseUrl ='http://test.kkbear.me:9788/'
export default {
	// uploadfiles({
	// 	photo,
	// 	success,
	// 	fail,
	// 	complete
	// } = {}) {

	// 	uni.uploadFile({
	// 		url: 'http://api.whale.act.go-tech.cn/app/user/uploadFile',
	// 		filePath: photo, // 要上传文件资源的路径。
	// 		name: 'file', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
	// 		formData: {}, // HTTP 请求中其他额外的 form data
	// 		header:{
	// 			Token:token
	// 		},
	// 		success: res => {
	// 			success && success(res)
	// 		},
	// 		fail: err => {
	// 			fail && fail(err)
	// 		},
	// 		complete: err => {
	// 			complete && complete(err)
	// 		}
	// 	})
	// },
	
	uploadPoster({
		code,
		photo,
		success,
		fail,
		complete
	} = {}) {
	
		uni.uploadFile({
			url:baseUrl+ 'app/graph/graph_save',
			filePath: photo, // 要上传文件资源的路径。
			name: 'file', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
			formData: {
				code:code
			}, // HTTP 请求中其他额外的 form data
			header:{
				Token:token
			},
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: err => {
				complete && complete(err)
			}
		})
	},
	uploadPosterRink({
		code,
		photo,
		success,
		fail,
		complete
	} = {}) {
	
		uni.uploadFile({
			url:baseUrl+ 'app/graph/rank_graph_save',
			filePath: photo, // 要上传文件资源的路径。
			name: 'file', // 文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
			formData: {
				code:code
			}, // HTTP 请求中其他额外的 form data
			header:{
				Token:token
			},
			success: res => {
				success && success(res)
			},
			fail: err => {
				fail && fail(err)
			},
			complete: err => {
				complete && complete(err)
			}
		})
	},
}
