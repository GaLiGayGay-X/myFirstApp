const APIV1 = '/api/v1'
const APIV2 = '/api/v2'
const HOST = 'http://172.20.32.59:9090';
//const HOST='http://172.20.36.71:8080';
const TOAPPHOST = 'http://172.20.32.59:1004';
const ROLEMANGERHOST = 'http://172.20.32.59:1001'
const ADDD = 'http://172.20.32.59:1005'
//资源服务
const APIV3 = 'http://172.20.32.59:1002'
//用户服务

const APIV5 = 'http://172.20.32.59:1000'
const APIV4 = 'http://172.20.32.59:9090'
//超时分钟单位：分钟

module.exports = {
  name: '熙菱信息',
  prefix: '熙菱信息',
  footerText: 'sailing© 2017 Platform Development Department',
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  APIV4,
  APIV5,
  HOST,
  ADDD,
  Minute: 30,
  test: {
    homePageURL: '/dashboard'
  },
  api: {
    newLoginURL: `${HOST}/sip2/ajaxLogin`,
    configURL: `${HOST}/sip2/config/findConfig`,
    dashboradURLNotice: 'http://172.20.32.59:1005/noticeController/list',
    dashboradURLthisNotice: 'http://172.20.32.59:1005/noticeController/findNotice',
    dashboradURLCount: 'http://172.20.32.59:9090/sip2/findMainCount',
    dashboradURLUserOp: 'http://172.20.32.59:9090/sip2/findUserOp',
    userLogin: `${APIV1}/user/login`,
    userLogout: `${APIV1}/user/logout`,
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    sipPowerGeneral: `${APIV1}/sipPowerGeneral/:powerId`,
    manageRole: `${APIV1}/manageRole/:manageRoleId`,
    findTrees: `${APIV1}/findTrees/`,
    findId: `${APIV1}/findId/:id`,
    findTree: `${APIV1}/findTree/:orgId`,
    search: `${APIV1}/search/:searchId`,
    posts: `${APIV1}/posts`,
    user: `${APIV1}/user/:id`,
    dashboard: `${APIV1}/dashboard`,
    menus: `${APIV1}/menus`,
    children: `${APIV1}/children`,
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
    application: `${APIV1}/application/:appId`,
    sipModule: `${APIV1}/sipModule/:moduleId`,
    sipResource: `${APIV1}/sipResource/:resId`,
    sipPower: `${APIV1}/sipPower/:powerId`,
    modifyPassWord: `${APIV1}/modifyPassWord`,
    toapp: `${TOAPPHOST}/systemResourceController/findUseBySystemId`,
    rolemanager: `${APIV1}/rolemanager`,
    roleTree: `${APIV1}/roleTree`,
    roletable: `${APIV1}/roletable`,
    allotSeltree: `${APIV1}/allotSeltree`,
    userAuth: `${APIV1}/org`,
    userList: `${APIV1}/userList`,
    orgTree: `${APIV1}/orgTree`,
    system: `${APIV1}/system`,
    role: `${APIV1}/role`,
    allotTable: `${APIV1}/allotTable`,
    childSystem: `${APIV1}/childSystem`,
    admin: `${APIV1}/admin`,
    adminResourceTree: `${APIV1}/adminResourceTree`,
    sipSystemOrg: `${APIV1}/sipSystemOrg`,
    userManager: `${APIV1}/userManager`,
    opendTree: `${APIV1}/opendTree`,
    orgModalTree: `${APIV1}/orgModalTree`,
    template: `${APIV1}/template`,
    pageMessage: `${APIV1}/pageMessage/:noticeId`,
    dataDictionaryAdd: `${HOST}/sip2/dataDictionary/save`,
    dataDictionaryqueryTree: `${HOST}/sip2/enum/tree?_=1509175282385`,
    dataDictionaryqueryList: `${HOST}/sip2/dataDictionary/list`,
    dataDictionaryremove: `${HOST}/sip2/dataDictionary/delete`,
    noticeController: `${ADDD}/noticeController/list`,
    noticeControllerSave: `${ADDD}/noticeController/save`,
    noticeControllerDelete: `${ADDD}/noticeController/delete`,
    mainHost: `${HOST}`,
    toappHost: `${TOAPPHOST}`,
    roleMange: `${ROLEMANGERHOST}`,
    customPropsMaintenance: `${APIV1}/customPropsMaintenance`,
    apiV3: `${APIV3}`,
    apiV4: `${HOST}`,
    hpq: `${ADDD}`
  }
};
