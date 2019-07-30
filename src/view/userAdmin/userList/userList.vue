<template>
  <div class="ivu-content-div">
    <Form ref="dataForm" :model="dataForm" label-position="right" :label-width="50" inline>
        <FormItem prop="name" label="姓名">
            <Input v-model="dataForm.name"></Input>
        </FormItem>       
        <Button type="primary" @click="getDataList()">搜索</Button>
        <Button type="primary" style="margin-left: 5px;" @click="rest">重置</Button>
    </Form>
    <div class="ivu-right-button">
    		<Button type="primary" size="default" @click="">新增</Button>
        <Button type="error" size="default" @click="" style="margin-left: 5px;">删除</Button>    		
    </div>
    <Table
    	 @on-selection-change="selectionChange"
    	 border :columns="userColumns" :data="userList" :loading="loading">
    	 <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="edit(index)">编辑</Button>
            <Button type="error" size="small" @click="remove(index)">删除</Button>
        </template>
    </Table>
    <Page
    	@on-page-size-change="pageSizeChange"
    	@on-change="pageIndexChange"
    	:total="totalPage" 
    	:current="pageIndex"     	
    	:page-size="pageSize" show-total show-elevator show-sizer/>
    	<div class="clearfloat"></div>
  </div>  
</template>
<script>
import {getTableData} from '@/api/data'
export default {
  data() {
    return {    	
    	loading: false,
    	dataForm:{
    		name:''
    	},
    	userColumns:[
    		 {
           type: 'selection',
           width: 60,
           align: 'center'
         },
         {
         	 title:'用户名',
         	 key:'name',
         	 align: 'center'
         },
         {
         	 title:'姓名',
         	 key:'displayName',
         	 align: 'center'
         },
         {
         	 title:'邮箱',
         	 key:'email',
         	 align: 'center'
         },
         {
         	 title:'手机号',
         	 key:'phone',
         	 align: 'center'
         },
         {
         	 title:'状态',
         	 key:'isActive',
         	 align: 'center'
         },
         {
         	 title:'创建日期',
         	 key:'createTime',
         	 align: 'center'
         },
         {
           title: '操作',
           slot: 'action',
           width: 150,
           align: 'center'
         }
    	],
    	userList:[],
    	seletedArray:[],
    	pageIndex: 1,//当前页
      pageSize: 10,//x条/页
      totalPage:0//总条数
    }
  },
  mounted() {
  	this.getDataList()
  },
  methods: {
  	//列表请求
  	getDataList () {
      this.loading = true  		
  		const	params = {
          'pageIndex': this.pageIndex,
          'pageSize': this.pageSize,
          'name': this.dataForm.name
        }
		getTableData(params).then(({data}) => {
			console.log(data)
			if(data && data.code ===0) {
				this.pageIndex = data.result.pageIndex
        this.pageSize = data.result.pageSize
        this.totalPage = data.result.totalPage
        this.userList = data.result.list
			}
			this.loading = false
		})
  	},
  	//表单重置
  	rest () {
  		this.$refs.dataForm.resetFields()
  	},
  	//当前页
	  pageIndexChange (pageIndex) {
			this.pageIndex = pageIndex
      this.getDataList()
	  },
	  //每页显示数量
	  pageSizeChange (pageSize) {
    	this.pageSize = pageSize
      this.pageIndex = 1
      this.getDataList()
	  },
  	//多选
    selectionChange (items) {
    	this.seletedArray = items
    }
  }
}
</script>

