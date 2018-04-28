import {getSampleList} from './mock/sample.js';
// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';
const proxy = {
  'GET /api/sampleList': getSampleList
}
export default noProxy ? {} : proxy
