import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import './index.less';
import 'react-quill/dist/quill.snow.css';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';

const Word = (props) => {
  const text = `${'<div class="article-holder"><p><span class="color-gray-02">据国家统计局公布数据</span></p><p><span class="color-gray-02">7 月份的鲜果价格上涨了 39.1%</span></p><p><span class="color-gray-02">其中</span></p><p><span class="color-gray-02">「苹果价格涨得很凶」</span></p><p><br/></p><figure class="img-box" contenteditable="false"><img data-src="//i0.hdslb.com/bfs/article/d3dd2c4e16d96b9821e0a612ed7e694448244d39.jpg" width="800" height="470" data-size="65333"/><figcaption class="caption" contenteditable=""></figcaption></figure><p><br/></p><p><span class="color-gray-02">继没有实现“车厘子自由”后</span></p><p><span class="color-gray-02">「今年的水果贵到连苹果皮都不敢削了」</span></p><p><span class="color-gray-02">emmmm</span></p><p><span class="color-gray-02">吃葡萄不吐葡萄皮</span></p><p><span class="color-gray-02">那吃苹果到底要不要削不削苹果皮呢？</span></p><p><br/></p><figure class="img-box" contenteditable="false"><img data-src="//i0.hdslb.com/bfs/article/15b78de481c7a16bf96436d3b17f7199fbaf6b8b.gif" width="500" height="295" data-size="1054234"/><figcaption class="caption" contenteditable="">▲动图来源于soogif<br/></figcaption></figure><p><br/></p><p><span class="color-gray-02">看起来是一个小小的选择</span></p><p><span class="color-gray-02">实际上已经争议了许久</span></p><p><strong><span class="color-purple-04">削皮党：</span></strong></p><p><span class="color-gray-02">削皮！皮上有农残还不好吃！</span></p><p><span class="color-gray-02">不削皮！皮的营养含量高过果肉，带皮吃带感！</span></p><p><strong><span class="color-purple-04">带皮吃：</span></strong></p><p><span class="color-gray-02"> 我们都知道苹果皮的味道真的很一般</span></p><p><span class="color-gray-02">用「味同嚼蜡」来形容也不为过</span></p><p><span class="color-gray-02">但因为所谓的营养或懒</span></p><p><span class="color-gray-02">很多人愿意牺牲口感</span></p><p><br/></p><figure class="img-box" contenteditable="false"><img data-src="//i0.hdslb.com/bfs/article/3b9a2084a5491aa866a86e3392c70b16e30ee621.gif" width="386" height="396" data-size="1319820"/><figcaption class="caption" contenteditable="">▲动图来源于soogif<br/></figcaption></figure><p><br/></p><p><span class="color-gray-02">那让味蕾饱受折磨吃下的苹果皮</span></p><p><span class="color-gray-02">能换取多少营养呢？</span></p><p><span class="color-gray-02">根据美国农业部的数据</span></p><p><span class="color-gray-02">我们可以看到</span></p><p><span class="color-gray-02">「每 100g 苹果皮的营养素含量</span></p><p><span class="color-gray-02">确实全面高于 100g 的苹果果肉」</span></p><p><br/></p><figure class="img-box" contenteditable="false"><img data-src="//i0.hdslb.com/bfs/article/f513cdc2220ff3923a78e22fc5815edfb8f03a36.jpg" width="800" height="440" data-size="106539"/><figcaption class="caption" contenteditable=""></figcaption></figure><p><br/></p><p><span class="color-gray-02">那我们按照食用习惯来</span></p><p><span class="color-gray-02">看看一个苹果的苹果皮的营养素含量</span></p><p><span class="color-gray-02">是否同样高于一个苹果果肉的营养素含量</span></p><p><span class="color-gray-02"> </span></p><figure class="img-box" contenteditable="false"><img data-src="//i0.hdslb.com/bfs/article/a7f5feb0805909a892ba08aaf34b02b4282786ae.jpg" width="800" height="536" data-size="133234"/><figcaption class="caption" contenteditable=""></figcaption></figure><p><br/></p><p><span class="color-gray-02"> 经过我们实物称重可以发现</span></p><p><span class="color-gray-02">一个 207 克重的苹果</span></p><p><span class="color-gray-02">苹果皮是 21 克，苹果果肉是 186g</span></p><p><span class="color-gray-02">经过换算</span></p><p><span class="color-gray-02"> 苹果果肉和苹果皮营养成分对比如下</span></p><p><br/></p><figure class="img-box" contenteditable="false"><img data-src="//i0.hdslb.com/bfs/article/f7f9daaa9b7e46c1a95a45418aa6861f845f43c5.jpg" width="800" height="440" data-size="67908"/><figcaption class="caption" contenteditable=""></figcaption></figure><p><br/></p><p><span class="color-gray-02">这么看</span></p><p><span class="color-gray-02">即使苹果皮的重量只有整个苹果的1/9</span></p><p><span class="color-gray-02">它所含的营养成分也不容小觑</span></p><p><span class="color-gray-02">膳食纤维和维生素 K 的含量</span></p><p><span class="color-gray-02">也比没皮的苹果果肉高出不少</span></p><p><span class="color-gray-02"> 也就是说</span></p><p><span class="color-gray-02"> 皮虽轻，营养价值却很重</span></p><p><span class="color-gray-02">手里拿着的水果刀看来要放下了？</span></p><p><br/></p><figure class="img-box" contenteditable="false"><img data-src="//i0.hdslb.com/bfs/article/01c913b7fb8da8478080248d6dc4a590f3621357.gif" width="290" height="218" data-size="1625678"/><figcaption class="caption" contenteditable="">▲动图来源于soogif<br/></figcaption></figure><p><br/></p><p><strong><span class="color-purple-04">且慢！</span></strong></p><p><span class="color-gray-02">美国某环保组织调查农残最多的果蔬中</span></p><p><span class="color-gray-02">苹果排到了前 5 名</span></p><p><br/></p><figure class="img-box" contenteditable="false"><img data-src="//i0.hdslb.com/bfs/article/e34a9c82c4290f98c207c85704a5dd263a2472ff.jpg" width="800" height="706" data-size="204449"/><figcaption class="caption" contenteditable=""></figcaption></figure><p><br/></p><p><span class="color-gray-02">世界卫生组织（WHO）建议：</span></p><p><span class="color-gray-02">吃苹果削皮！！！</span></p><p><span class="color-gray-02">原因是削皮可以更好地</span></p><p><span class="color-gray-02">去除农残和病原菌</span></p><p><span class="color-gray-02">  </span></p><figure class="img-box" contenteditable="false"><img data-src="//i0.hdslb.com/bfs/article/38d9aa3fed299bbf6b0915a5eef6324ad3591ab9.jpg" width="800" height="590" data-size="103063"/><figcaption class="caption" contenteditable=""></figcaption></figure><p><br/></p><p><span class="color-gray-02">而且</span></p><p><strong><span class="color-purple-04">这还是专门给咱们中国人的建议！！！</span></strong></p><p><span class="color-gray-02"> </span></p><figure class="img-box" contenteditable="false"><img data-src="//i0.hdslb.com/bfs/article/0ccc08c4ac0f8da313d24695d02fdb318d56388f.jpg" width="800" height="550" data-size="60795"/><figcaption class="caption" contenteditable=""></figcaption></figure><p><br/></p><p><span class="color-gray-02">并且</span></p><p><strong><span class="color-purple-04">除了苹果</span></strong></p><p><strong><span class="color-purple-04">其他带皮水果和土豆、红薯</span></strong></p><p><strong><span class="color-purple-04">WHO 建议</span></strong></p><p><strong><span class="color-purple-04">在中国都是「不吃皮为好」！</span></strong></p><p><span class="color-gray-02">毕竟</span></p><p><span class="color-gray-02">对于爱吃皮的人来说</span></p><p><span class="color-gray-02">可是连土豆的皮都不会放过的</span></p><p><br/></p><figure class="img-box" contenteditable="false"><img data-src="//i0.hdslb.com/bfs/article/2de3a8acd0211c7db3b74c701bed07926d5c8e72.jpg" width="800" height="380" data-size="61447"/><figcaption class="caption" contenteditable=""></figcaption></figure><p><br/></p><p><span class="color-gray-02">考虑到咱们国家果蔬农残超标的风险</span></p><p><span class="color-gray-02">不削皮可能会对健康造成伤害</span></p><p><span class="color-gray-02">如果你对自己买苹果</span></p><p><span class="color-gray-02">和洗苹果的能力不太自信</span></p><p><span class="color-gray-02">最好还是削皮食用</span></p><p><br/></p><figure class="img-box" contenteditable="false"><img data-src="//i0.hdslb.com/bfs/article/28952e51ac1bd1362080de7b8f8102a38891927a.gif" width="150" height="130" data-size="233357"/><figcaption class="caption" contenteditable="">▲动图来源于soogif<br/></figcaption></figure><p><br/></p><p><span class="color-gray-02">毕竟研究发现</span></p><p><span class="color-gray-02">清洗虽能去除部分农残</span></p><p><span class="color-gray-02">但去皮的效果却是清洗的两倍！！</span></p><p><br/></p><figure class="img-box" contenteditable="false"><img data-src="//i0.hdslb.com/bfs/article/be2ae1aa899c77fea16e765e984840375a19b08c.gif" width="640" height="429" data-size="68941"/><figcaption class="caption" contenteditable="">▲动图来源于网络<br/></figcaption></figure><p><br/></p><p><span class="color-gray-02">除此之外</span></p><p><span class="color-gray-02">需要引起我们注意的是</span></p><p><span class="color-gray-02">为什么 WHO  </span></p><p><span class="color-gray-02">只针对中国提出削皮的建议？</span></p><p><span class="color-gray-02">这背后意味着什么</span></p><p><span class="color-gray-02">我想不需要多说</span></p><p><span class="color-gray-02">大家也能明白几分</span></p><p><span class="color-gray-02">这才是值得所有人</span></p><p><span class="color-gray-02">深思以及反思的地方！</span></p><p><br/></p><p><span class="color-gray-02">参考资料：</span></p><p><span class="color-gray-02">1、食品安全五大要点——WHO</span></p><p><span class="color-gray-02">2、USDA, National Nutrient Database for Standard Reference Legacy Release</span></p><p><span class="color-gray-02">3、https://www.who.int/zh/news-room/fact-sheets/detail/pesticide-residues-in-food</span></p><p><span class="color-gray-02">4、https://mp.weixin.qq.com/s?__biz=MjM5MjAxNDM4MA==&amp;mid=213059137&amp;idx=3&amp;sn=6f27f28a32dbc10338faaf6c09da49ae#rd</span></p><p><span class="color-gray-02">5、https://www.healthline.com/nutrition/peeling-fruits-veggies#section5</span></p><p><br/></p><p><strong><span class="color-purple-04">觉得这篇科普有用的，记得三连哦~</span></strong></p></div>'}`;

  const [editorState, setEditorState] = useState(
    BraftEditor.createEditorState(`<span class="color-gray-02">据国家统计局公布数据</span>`)
  );
  const handleChange = () => {};
  useEffect(() => {
    setEditorState(
      BraftEditor.createEditorState(`<span class="color-gray-02">据国家统计局公布数据</span>`)
    );
  }, []);
  console.log('editorState', editorState);
  return (
    <div>
      <BraftEditor defaultValue={editorState} onChange={handleChange} />
    </div>
  );
};
export default Word;