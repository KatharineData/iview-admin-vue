import Mock from 'mockjs'
import {pagination, getNowFormatDate, getQueryString} from '@/libs/util'

var dataList = []
for (var i = 0; i < 20; i++) {
  // 调用mock方法模拟数据
  // mockjs示例: http://mockjs.com/examples.html
dataList.push(Mock.mock({
    'id': '@increment',
    'name': '@last',
    'displayName': '@cname',
    'phone': /^1[0-9]{10}$/,
    'email': '@email',
    'isActive': true,
    'roleIdList': [1],
    'createTime': '@date("yyyy-MM-dd")'
  }))
}


// 对数组的元素进行降序排序
dataList = dataList.sort((a, b) => {
  return b.id - a.id
})



export default {	
	getData: config => { // 对数据进行处理，查询、分页等
      var list = []      
      var name = getQueryString(config.url, 'name') // 姓名查询
      if (name) {
        dataList.forEach(item => {
          if (item.name.indexOf(name) !== -1) // 模糊查询
            list.push(item)
        })
      } else {
        list = dataList
      }
      var index = getQueryString(config.url, 'pageIndex') // 当前页
      var size = getQueryString(config.url, 'pageSize') // 每页显示数量
      var total = list.length // 总数
      list = pagination(index, size, list) // 分页     
      return {
        'code': 0,
        'message': '请求成功',
        'token': '',
        'result': {
          'pageIndex': parseInt(index),
          'pageSize': parseInt(size),
          'totalPage': total,
          'list': list
        }
      }   
		}
}


