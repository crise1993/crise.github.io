(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{481:function(t,e,v){t.exports=v.p+"assets/img/https-process.014e3a0c.jpg"},547:function(t,e,v){"use strict";v.r(e);var r=v(65),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"深入理解https"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#深入理解https"}},[t._v("#")]),t._v(" 深入理解HTTPS")]),t._v(" "),r("p",[t._v("最近几年，我们一直习以为常的HTTP协议，逐渐的被 HTTPS协议 所取代。随着各种网络攻击层出不穷，用户和企业对网络安全的需求不断提升，在浏览器、搜索引擎、CA机构、大型互联网企业多方努力促进下，互联网迎来了“HTTPS加密时代”，据权威机构估测， HTTPS协议 将在未来的几年内全面取代HTTP成为传输协议的主流。")]),t._v(" "),r("p",[t._v("本篇文章从HTTP通信存在的问题出发，逐渐引入到HTTPS的工作原理，以及如何解决HTTP存在的那些问题。")]),t._v(" "),r("h2",{attrs:{id:"http通信存在的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#http通信存在的问题"}},[t._v("#")]),t._v(" HTTP通信存在的问题")]),t._v(" "),r("p",[t._v("HTTP协议存在以下问题：")]),t._v(" "),r("h3",{attrs:{id:"通信明文-不加密-内容可能被窃听"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#通信明文-不加密-内容可能被窃听"}},[t._v("#")]),t._v(" 通信明文（不加密），内容可能被窃听")]),t._v(" "),r("p",[t._v("由于HTTP本身不具备加密的功能，所以也无法做到对通信整体（使用HTTP协议通信的请求和响应的内容）进行加密。即，HTTP报文使用明文（指未经过加密的报文）方式发送。")]),t._v(" "),r("p",[t._v("HTTP明文协议的缺陷是导致数据泄露、数据篡改、流量劫持、钓鱼攻击等安全问题的重要原因。HTTP协议无法加密数据，所有通信数据都在网络中明文“裸奔”。通过网络的嗅探设备及一些技术手段，就可还原HTTP报文内容。")]),t._v(" "),r("h3",{attrs:{id:"无法证明报文完整性-内容可能遭篡改"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#无法证明报文完整性-内容可能遭篡改"}},[t._v("#")]),t._v(" 无法证明报文完整性，内容可能遭篡改")]),t._v(" "),r("p",[t._v("所谓完整性是指信息的准确度。若无法证明其完整性，通常也就意味着无法判断信息是否准确。由于HTTP协议无法证明通信的报文完整性，因此，在请求或响应送出之后直到对方接收之前的这段时间内，即使请求或响应的内容遭到篡改，也没有办法获悉。\n换句话说，没有任何办法确认，发出的请求/响应和接收到的请求/响应是前后相同的。")]),t._v(" "),r("h3",{attrs:{id:"不验证通信方的身份-可能遭遇伪装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不验证通信方的身份-可能遭遇伪装"}},[t._v("#")]),t._v(" 不验证通信方的身份，可能遭遇伪装")]),t._v(" "),r("p",[t._v("HTTP协议中的请求和响应不会对通信方进行确认。在HTTP协议通信时，由于不存在确认通信方的处理步骤，任何人都可以发起请求。另外，服务器只要接收到请求，不管对方是谁都会返回一个响应（但也仅限于发送端的IP地址和端口号没有被Web服务器设定限制访问的前提下）")]),t._v(" "),r("p",[t._v("HTTP协议无法验证通信方身份，任何人都可以伪造虚假服务器欺骗用户，实现“钓鱼欺诈”，用户无法察觉。")]),t._v(" "),r("h2",{attrs:{id:"什么是https"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是https"}},[t._v("#")]),t._v(" 什么是HTTPS？")]),t._v(" "),r("p",[t._v("通常，HTTP直接和TCP通信。当使用SSL时，则演变成先和SSL通信，再由SSL和TCP通信了。所以 "),r("em",[r("strong",[t._v("HTTPS，其实就是身披SSL协议这层外壳的HTTP")])]),t._v("，是HTTP协议的安全版。现在它被广泛用于万维网上安全敏感的通讯，例如交易支付方面。")]),t._v(" "),r("p",[t._v("HTTPS主要作用是：")]),t._v(" "),r("p",[t._v("（1）对数据进行加密，并建立一个信息安全通道，来保证传输过程中的数据安全;")]),t._v(" "),r("p",[t._v("（2）对网站服务器进行真实身份认证。")]),t._v(" "),r("p",[t._v("我们经常会在Web的登录页面和购物结算界面等使用HTTPS通信。使用HTTPS通信时，不再用"),r("code",[t._v("http://")]),t._v("，而是改用"),r("code",[t._v("https://")]),t._v("。另外，当浏览器访问HTTPS通信有效的Web网站时，浏览器的地址栏内会出现一个带锁的标记。对HTTPS的显示方式会因浏览器的不同而有所改变。")]),t._v(" "),r("h2",{attrs:{id:"https工作流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#https工作流程"}},[t._v("#")]),t._v(" HTTPS工作流程")]),t._v(" "),r("p",[r("img",{attrs:{src:v(481),alt:"https工作流程"}})]),t._v(" "),r("ol",[r("li",[t._v("Client发起一个HTTPS（比如https://www.baidu.com/）的请求，根据RFC2818的规定，Client知道需要连接Server的443（默认）端口；")]),t._v(" "),r("li",[t._v("Server把事先配置好的公钥证书（public key certificate）返回给客户端；")]),t._v(" "),r("li",[t._v("Client验证公钥证书：比如是否在有效期内，证书的用途是不是匹配Client请求的站点，是不是在CRL吊销列表里面，它的上一级证书是否有效，这是一个递归的过程，直到验证到根证书（操作系统内置的Root证书或者Client内置的Root证书）；如果验证通过则继续，不通过则显示警告信息；")]),t._v(" "),r("li",[t._v("Client使用伪随机数生成器生成加密所使用的对称密钥，然后用证书的公钥加密这个对称密钥，发给Server；")]),t._v(" "),r("li",[t._v("Server使用自己的私钥（private key）解密这个消息，得到对称密钥。至此，Client和Server双方都持有了相同的对称密钥；")]),t._v(" "),r("li",[t._v("Server使用对称密钥加密“明文内容A”，发送给Client；")]),t._v(" "),r("li",[t._v("Client使用对称密钥解密响应的密文，得到“明文内容A”；")]),t._v(" "),r("li",[t._v("Client再次发起HTTPS的请求，使用对称密钥加密请求的“明文内容B”，然后Server使用对称密钥解密密文，得到“明文内容B”。")])]),t._v(" "),r("h2",{attrs:{id:"参考文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/ljianshu/Blog/issues/50",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解HTTPS工作原理"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);