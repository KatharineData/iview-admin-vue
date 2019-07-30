export const mockMenuData = [
 {
    'path': '/userMenu',
    'name': 'userMenu',
    'meta': {
      'icon': 'md-menu',
      'title': '用户管理'
    },
    'component': 'Main',
    'children': [
      {
        'path': '/userList',
        'name': 'userList',
        'meta': {
          'icon': 'md-funnel',
          'title': '用户列表'
        },
        'component': 'userAdmin/userList/userList'
      },
//    {
//      'path': '/level_2_2',
//      'name': 'level_2_2',
//      'meta': {
//        'icon': 'md-funnel',
//        'showAlways': true,
//        'title': '二级-2'
//      },
//      'component': 'parentView',
//      'children': [
//        {
//          'path': '/level_2_2_1',
//          'name': 'level_2_2_1',
//          'meta': {
//            'icon': 'md-funnel',
//            'title': '三级'
//          },
//          'component': 'multilevel/level-2-2/level-2-2-1'
//        }         
//      ]
//    },
      {
        'path': '/useRmanage',
        'name': 'useRmanage',
        'meta': {
          'icon': 'md-funnel',
          'title': '用户管理'
        },
        'component': 'userAdmin/useRmanage/useRmanage'
    }
    ]
 },
 {
    'path': '/systemMenu ',
    'name': 'systemMenu',
    'meta': {
      'icon': 'md-menu',
      'title': '系统设置'
    },
    'component': 'Main',
    'children': [
      {
        'path': '/userPassword',
        'name': 'userPassword',
        'meta': {
          'icon': 'md-funnel',
          'title': '密码修改'
        },
        'component': 'systemMenu/userPassword/userPassword'
      },
      {
        'path': '/systemOther',
        'name': 'systemOther',
        'meta': {
          'icon': 'md-funnel',
          'title': '其他设置'
        },
        'component': 'systemMenu/systemOther/systemOther'
      }    
    ]
  }
]