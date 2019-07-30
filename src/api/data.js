import axios from '@/libs/api.request'

export const getTableData = (params) => {
  return axios.request({
    url: 'get_table_data',
    method: 'get',
    params: params
  })
}

export const getMockMenuData = () => {
  return axios.request({
    url: 'get_mock_menu_data',
    method: 'get'
  })
}