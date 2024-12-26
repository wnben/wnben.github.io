import React from 'react';
import '../css/WeddingDetails.css';

const eventDetails = [
  {
      theme: '入住',
      time: '星期六, 2025年3月8日, 15:00开始 ',
      location: '酒店接待处, 三亚海棠湾民生威斯汀度假酒店',
      precautions: '如果需要提前入住或者需要搭乘酒店机场接驳车，请提前与我们联系，我们将与酒店进行沟通。此外，默认为大家准备了海景双床房，如需要海景大床房，请提前与我们联系。'
  },  
  {
      theme: '来和我们打个招呼吧',
      time: '星期六, 2025年3月8日, 16:00 - 22:00',
      location: '泳池别墅（地图上#19，地图在本页面最后）, 三亚海棠湾民生威斯汀度假酒店 (具体别墅号码将会晚点提供)',
      precautions: '我们非常期待在第二天仪式之前见到大家，一起聊天叙旧。所以周六没有安排的朋友，可以来别墅找我们玩哦！早到的朋友可以自行安排别的活动，推荐游玩项目可参考下面两段。'
  },
  {
    theme: '自助早餐',
    time: '星期天, 2025年3月9日/10日, 07:00 - 11:00',
    location: '知味西餐厅（地图上#4）, 三亚海棠湾民生威斯汀度假酒店',
    precautions: '我们为大家预订了9号10号两日的自助早餐。餐厅有非常多样的美食可供选择，如果不睡懒觉的话，不要错过哦！此外，房间mini bar里的饮料也都是免费的，三亚天气炎热，多多喝水！'
  },
  {
    theme: '自由活动',
    time: '星期天, 2025年3月9日, 11:00 - 16:00',
    location: '自由选择，但记得不要错过16点的婚礼仪式哦',
    precautions: (
      <>
        <p><strong>推荐活动：</strong></p>
        <ul>
          <li><strong>泳池玩乐（地图上#14，#15，#16，#18）：</strong>酒店有10000平的泳池，包括400米长的椰林河道泳池。同时我们为大家准备了泳池玩乐六件套：免费租用酒店的浆板 / 皮划艇 / 独木舟 / 冲浪板 / 透明观光船 / 网红泳圈（每日限时1小时）。</li>
          <li><strong>旅拍（需提前1天预约）：</strong>酒店提供免费旅拍，可在酒店椰林，泳池或沙滩拍照。注意最后选片时只有5张免费，超出的话是需要额外付费哦。</li>
          <li><strong>顶层无边泳池（地图上#11）：</strong>可以游泳拍照，非常好看，可以参考我们的故事里的照片嘻嘻。但是注意有低消（其实买个椰子就可以了）。</li>
          <li><strong>免税店购物（地图上#13）：</strong>酒店旁边就是cdf三亚国际免税城，可通过酒店内专属步行通道（地图上#12）直达免税店，可以享受85-95折优惠，详情可咨询前台。</li>
          <li><strong>冲浪/尾波冲浪：</strong>需要去后海或凤凰岛，感兴趣的朋友可以联系我们提供更多细节。</li>
          <li><strong>三亚其余景点：</strong>天涯海角，椰梦长廊，热带森林公园，鹿回头，蜈支洲岛，西岛...</li>
        </ul>
        <p><strong>推荐餐饮：</strong></p>
        <ul>
          <li><strong>海棠环球68美食街：</strong>距离酒店最近的美食街，推荐耶小鸡（椰子鸡），琼州糟粕醋（海南百年传统火锅），红沙大排档（海鲜），黎竹（海南菜）...</li>
          <li><strong>酒店内餐厅：</strong>水汀沙滩餐厅（海鲜自助餐厅）（地图上#24），Five Sen5es（中国元素餐厅）（地图上#2），Mai餐厅（日本料理餐厅）（地图上#6），拾楼（餐厅+酒吧）（地图上#10）...</li>
          <li><strong>夜市：</strong>林旺夜市，亿恒夜市，后海夜市...</li>
          <li><strong>外卖：</strong>不想出门的朋友也可以点外卖哦</li>
        </ul>
      </>
    )
  },
  {
    theme: '婚礼仪式 -- 最重要的环节来啦！！！',
    time: '星期天, 2025年3月9日, 16:00 - 18:00',
    location: '微风草坪（地图上#23）, 三亚海棠湾民生威斯汀度假酒店',
    precautions: (
      <>
        <p><strong>着装要求：</strong>正装。为了仪式整体效果，<strong><span style={{ color: '#b01e1f' }}>请一定一定一定要穿浅色的衣服哦!</span></strong></p>
        <ul>
          <li>请大家对比我们提供的色卡进行服装颜色选择，提前感谢您的配合！</li>
        </ul>
      </>
    )
  },
  {
      theme: '海边草坪晚宴',
      time: '星期天, 2025年3月9日, 19:00 - 22:00',
      location: '天梦草坪（地图上#23）, 三亚海棠湾民生威斯汀度假酒店',
      precautions: (
        <>
          <p><strong>着装要求：</strong>尽量正装。晚宴服装颜色可自行选择哦！穿得美美的帅帅的来吧！</p>
        </>
      )
  },
  {
      theme: 'After Party',
      time: '星期天, 2025年3月9日, 22:00 - 02:00',
      location: '泳池别墅（地图上#19）, 三亚海棠湾民生威斯汀度假酒店',
      precautions: '晚宴后我们将会回到别墅继续庆祝，如果还不累的话，一起加入吧！'
  },
  {
      theme: '退房',
      time: '星期一, 2025年3月9日, 12:00之前',
      location: '酒店接待处, 三亚海棠湾民生威斯汀度假酒店',
      precautions: '如果需要延迟入住或者需要搭乘酒店机场接驳车，请提前与我们联系，我们将与酒店进行沟通。 '
  }
];

const WeddingDetails = () => {
  return (
      <div className="home-section-4">
          <div className="container">
              <h2 className="section-title">婚礼细节｜流程安排</h2>
              <div className="events-container">
                  {eventDetails.map((event, index) => (
                      <div className="event-card" key={index}>
                          <h3 className="event-theme">{event.theme}</h3>
                          <p className="event-time"><strong>Time:</strong> {event.time}</p>
                          <p className="event-location"><strong>Location:</strong> {event.location}</p>
                          <p className="event-precautions"><strong>Precautions:</strong> {event.precautions}</p>
                      </div>
                  ))}
              </div>
          <div className="image-container">
                  <img src={require('../../assets/map.jpg')} alt="Wedding" className="wedding-image" />
              </div>
          </div>
      </div>
  );
};


export default WeddingDetails;
