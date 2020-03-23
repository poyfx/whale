import {
	http
} from '@/utils/request/index'

export default {
	//排行榜
	getRanking({
		success,
		fail,
		complete
	} = {}) {
		http.post('app/graph/like_count', {}, {
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
	//用户点赞
	userVote({
		graphId,
		success,
		fail,
		complete
	} = {}) {
		http.get('app/graph/vote', {
			params: {
				graphId: graphId
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
	//获取用户
	getUserinfo({
		
		success,
		fail,
		complete
	} = {}) {
		http.post('app/user/queryUserInfo',{}, {
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
	//点击分你想链接获取信息
	getAllinfo({
		graphId,
		success,
		fail,
		complete
	} = {}) {
		http.get('app/graph/query_graph', {
			params:{
				graphId:graphId,
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
}
