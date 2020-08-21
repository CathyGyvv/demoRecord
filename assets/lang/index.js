import zh_CN from './zh_CN';
import zh_TW from './zh_TW';
import en_US from './en_US';
import antdCN from 'antd/lib/locale-provider/zh_CN';
import antdTW from 'antd/lib/locale-provider/zh_TW';
import antdEN from 'antd/lib/locale-provider/en_US';

const messages = {
  'zh-CN': {
    local: zh_CN,
    antdLocal: antdCN
  },
  'zh-TW': {
    local: zh_TW,
    antdLocal: antdTW
  },
  'en-US': {
    local: en_US,
    antdLocal: antdEN
  }
};

export default messages;
