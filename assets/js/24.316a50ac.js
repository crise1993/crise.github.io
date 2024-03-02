(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{471:function(t,a,r){t.exports=r.p+"assets/img/tcp-ip.5c2903e4.png"},542:function(t,a,r){"use strict";r.r(a);var e=r(65),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tcp-ip协议四层架构详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip协议四层架构详解"}},[t._v("#")]),t._v(" TCP/IP协议四层架构详解")]),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("国际标准化组织ISO于1977年提出了著名的"),e("a",{attrs:{href:"https://baike.baidu.com/item/OSI%E5%8D%8F%E8%AE%AE%E9%9B%86/9441499",target:"_blank",rel:"noopener noreferrer"}},[t._v("OSI协议集"),e("OutboundLink")],1),t._v("，协议规定，只要遵循OSI标准，一个系统就可以和位于世界上任何地方的、也遵循着统一标准的提前任何系统进行通信。但是20世纪90年代初期，由于因特网（Internet）抢先覆盖了全世界相当大的范围，导致使用在因特网的"),e("code",[t._v("TCP/IP协议")]),t._v("已成为建立计算机局域网, 广域网的首选协议, 成为了事实上的工业标准和国际标准。")]),t._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://baike.baidu.com/item/TCP%2FIP%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP/IP协议"),e("OutboundLink")],1),t._v("是一系列网络协议的总和；包括：TCP，IP，UDP，ARP等，这些被称为子协议。在这些协议中，最重要、最著名的就是TCP和IP。因此，大部分网络管理员称整个协议族为“TCP/IP”它定义了电子设备如何接入互联网，以及数据如何在它们之间互相传输。")]),t._v(" "),e("h2",{attrs:{id:"作用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#作用"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),e("p",[t._v("解决了互联网中，数据怎么从一台主机传输到另外一台主机的问题。")]),t._v(" "),e("h2",{attrs:{id:"四层架构模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四层架构模型"}},[t._v("#")]),t._v(" 四层架构模型")]),t._v(" "),e("p",[e("img",{attrs:{src:r(471),alt:"TCP/IP四层架构"}}),t._v("\n发送端数据从应用层往下走进行数据“封装”，接收端数据从链路层往上走进行数据“分片”。")]),t._v(" "),e("h3",{attrs:{id:"_1-应用层-application-layer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-应用层-application-layer"}},[t._v("#")]),t._v(" 1. 应用层（application layer）")]),t._v(" "),e("p",[t._v("TCP/IP协议中的最高层，应用层决定这次通信的应用类型和要进行什么工作，直接为用户的应用进程提供服务。")]),t._v(" "),e("h4",{attrs:{id:"主要协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要协议"}},[t._v("#")]),t._v(" 主要协议")]),t._v(" "),e("p",[t._v("应用层定义了各种各样的协议来规范数据格式，常见的有HTTP、DNS、"),e("a",{attrs:{href:"https://baike.baidu.com/item/ftp/13839",target:"_blank",rel:"noopener noreferrer"}},[t._v("FTP"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://baike.baidu.com/item/SMTP",target:"_blank",rel:"noopener noreferrer"}},[t._v("SMTP"),e("OutboundLink")],1),t._v("、"),e("a",{attrs:{href:"https://baike.baidu.com/item/ssh/10407",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSH"),e("OutboundLink")],1),t._v("等")]),t._v(" "),e("h4",{attrs:{id:"功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),e("p",[t._v("主要工作是定义数据格式并按照对应的格式封装或解读数据。")]),t._v(" "),e("h4",{attrs:{id:"工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[t._v("#")]),t._v(" 工作原理：")]),t._v(" "),e("p",[t._v("举个🌰，比如说在浏览器访问网站的过程中，应用层的工作便是：")]),t._v(" "),e("ul",[e("li",[e("ol",[e("li",[t._v("发送端通过DNS服务进行域名解析，得到网站的ip地址后，准备好HTTP报文（在Request Header中，定义了可接受的"),e("code",[t._v("数据格式accept")]),t._v("，"),e("code",[t._v("编码方式accept-encoding")]),t._v("以及"),e("code",[t._v("语言accept-language")]),t._v("），然后将报文传递给传输层。")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[t._v("接收端接收到响应后，然后对请求进行处理，再按照请求方接受的格式"),e("code",[t._v("Accept")]),t._v("将处理完成之后的响应报文传递给传输层。")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"3"}},[e("li",[t._v("最后请求端的应用层在接收到响应报文之后，就按照Response Header中"),e("code",[t._v("Content-Type")]),t._v("规定的格式进行解读。")])])])]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[t._v("HTTP报文包括：\n  "),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 请求报头（Request Header）：请求方法、目标地址、遵循的协议等等\n  "),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 请求主体（其他参数）\n")])])]),e("h3",{attrs:{id:"_2-传输层-transport-layer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-传输层-transport-layer"}},[t._v("#")]),t._v(" 2. 传输层（transport layer）")]),t._v(" "),e("p",[t._v("传输层向高层用户屏蔽了下面网络核心细节（如网络拓扑、所采用的路径选择协议等），它使应用进程看见的就是好像在两个传输层实体之间有一条端对端（"),e("em",[e("strong",[t._v("端口是应用层各种协议进程与传输层进行层间交互的一种地址")])]),t._v("）的逻辑通信信道，但这条信道对上层的表现却因传输层使用的不同协议而有很大的差别。")]),t._v(" "),e("p",[t._v("当传输层采用面向连接的TCP协议时，尽管下面的网络层是不可靠的（不检查数据是否被准确接收），但这种逻辑通信信道就相当于一条全双工的可靠信道。但当传输层采用无连接的UDP协议时，这种逻辑通信信道仍然是一条不可靠信道。")]),t._v(" "),e("h4",{attrs:{id:"主要协议-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要协议-2"}},[t._v("#")]),t._v(" 主要协议")]),t._v(" "),e("ul",[e("li",[e("p",[e("a",{attrs:{href:"https://baike.baidu.com/item/%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("用户数据报协议（UDP）"),e("OutboundLink")],1),t._v("：无连接协议，多使用在电话，视频会议，流媒体等。UDP协议定义了端口，同一个主机上的每个应用程序都需要指定唯一的端口号，并且规定网络中传输的数据包必须加上端口信息，当发送端主机接收到响应数据报之后，就可以根据端口号找到对应的应用程序了。UDP协议比较简单，实现容易，但它没有确认机制，数据包一旦发出，无法知道对方是否收到，因此可靠性较差，为了解决这个问题，提高网络可靠性，TCP协议就诞生了。")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/QUIC",target:"_blank",rel:"noopener noreferrer"}},[t._v("可靠UDP传输协议（QUIC）"),e("OutboundLink")],1),t._v("：最初是“快速UDP互联网连接”（Quick UDP Internet Connection）的首字母缩写，但在IETF标准中，QUIC不是任何内容的缩写。QUIC提高了目前使用TCP的面向连接的网络应用的性能。QUIC通过UDP协议在两个端点之间创建若干个多路连接，以达到在网络层淘汰TCP的目标。")]),t._v(" "),e("p",[t._v("QUIC与HTTP/2的多路复用连接协同工作，允许多个数据流独立到达所有端点，因此不受涉及其他数据流的丢包影响。与之相比，HTTP/2创建在传输控制协议（TCP）上，如果任何一个TCP数据包延迟或丢失，所有多路数据流都会遭受队头阻塞延迟。")])]),t._v(" "),e("li",[e("p",[e("a",{attrs:{href:"https://baike.baidu.com/item/TCP/33012",target:"_blank",rel:"noopener noreferrer"}},[t._v("传输控制协议（TCP）"),e("OutboundLink")],1),t._v("：TCP协议在UDP基础之上建立了三次对话的确认机制，即在正式收发数据前，必须和对方建立可靠的连接。数据传输完毕后，必须释放已经建立的TCP连接。")])])]),t._v(" "),e("h4",{attrs:{id:"功能-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能-2"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),e("ul",[e("li",[e("ol",[e("li",[t._v("为两个主机中进程之间的通信（端口对端口）提供服务。传输层根据"),e("code",[t._v("TCP协议")]),t._v("把来自应用层的数据报文进行分割，并在每一个分割好的报文上加上自己的头部（包括序号和端口号）形成TCP报文段，然后传输给网络层；或者从网络层接收TCP报文段，剥离出HTTP响应报文，根据TCP报文段中的端口信息交给应用层对应的程序。")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[t._v("对收到的报文段进行差错检测，保证数据可靠传输")])])])]),t._v(" "),e("h4",{attrs:{id:"tcp协议传输原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp协议传输原理"}},[t._v("#")]),t._v(" TCP协议传输原理")]),t._v(" "),e("p",[t._v("TCP协议可以保证数据传输的可靠性。为了确保在传输过程中不发生丢包，会给每个包一个序号（用以确认数据是否成功送达对方，同时序号也保证了传送到接收端实体的包的按序接收）。")]),t._v(" "),e("p",[t._v("然后接收端实体对已成功收到的包发回一个相应的"),e("code",[t._v("确认（ACK）")]),t._v("；如果发送端实体在合理的"),e("code",[t._v("往返时延（RTT）")]),t._v("内未收到确认，那么对应的数据包就被假设为已丢失将会被进行重传。")]),t._v(" "),e("p",[e("code",[t._v("TCP协议")]),t._v("用一个"),e("code",[t._v("校验和函数")]),t._v("来检验数据是否有错误；在发送和接收时都要计算校验和。")]),t._v(" "),e("h3",{attrs:{id:"_3-网络-ip层-network-layer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-网络-ip层-network-layer"}},[t._v("#")]),t._v(" 3. 网络/IP层（network layer）")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("名词解释")]),t._v(" "),e("h5",{attrs:{id:"mac地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac地址"}},[t._v("#")]),t._v(" Mac地址")]),t._v(" "),e("p",[t._v("以太网规定了连入网络的所有设备都必须具备“网卡”接口，数据包都是从一块网卡传递到另一块网卡，网卡的地址就是 Mac 地址。每一个 Mac 地址都是独一无二的，具备了一对一的能力。")]),t._v(" "),e("h5",{attrs:{id:"ip地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ip地址"}},[t._v("#")]),t._v(" IP地址")]),t._v(" "),e("p",[t._v("指互联网协议地址。是"),e("code",[t._v("IP协议")]),t._v("提供的一种统一的地址格式（网络地址+主机地址），IP协议为每一个连接互联网的设备（不管是交换机、PC还是其他设备）分配一个逻辑地址，以此来屏蔽物理地址的差异。IP地址分为"),e("code",[t._v("IPv4")]),t._v("和"),e("code",[t._v("IPv6")]),t._v("两种，"),e("code",[t._v("IPv4")]),t._v("使用4字节共32位（如114.114.114.114）地址，"),e("code",[t._v("IPv6")]),t._v("地址共16字节128位（如2408:8207:250d:76c0:c872:b2d4:3900:d000）。")]),t._v(" "),e("p",[e("strong",[t._v("Mac地址是链路层和物理层使用的地址，而IP地址是网络层和以上各层使用的地址")]),t._v("。由于Mac地址是一段复杂的字串组成不利于我们计算机进行逻辑运算，而我们的消息要在网络中快速路由到目标计算机，那么就一定需要有一套逻辑运算的规则，所以就有了IP地址，IP是一套有规则的数字组合，通过IP地址可以快速定位到我们的目标计算机区域，和Mac地址组合就能快速找到网络中具体的一台计算机了。")])]),t._v(" "),e("h4",{attrs:{id:"主要协议-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要协议-3"}},[t._v("#")]),t._v(" 主要协议")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://baike.baidu.com/item/IP/224599",target:"_blank",rel:"noopener noreferrer"}},[t._v("IP协议"),e("OutboundLink")],1),t._v("：主要包含IP地址方案，IP数据报封装格式、IP分组转发规则。")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://baike.baidu.com/item/ARP/609343",target:"_blank",rel:"noopener noreferrer"}},[t._v("ARP协议"),e("OutboundLink")],1),t._v("：解决同一局域网上的主机或路由器的IP地址和硬件地址的映射问题")])]),t._v(" "),e("h4",{attrs:{id:"功能-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能-3"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),e("ul",[e("li",[e("ol",[e("li",[t._v("在首部加入源及目标的IP地址后，将数据段打包成IP数据报，并且通过ARP协议获取目标主机或路由器的mac地址，然后一起传输给链路层；或者从链路层接收IP数据报，抽出TCP报文段，交给传输层。")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[t._v("负责寻找传输路线，让每一块数据包都能够到达目的主机（但不检查是否被正确接收）。")])])])]),t._v(" "),e("h4",{attrs:{id:"工作原理-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作原理-2"}},[t._v("#")]),t._v(" 工作原理")]),t._v(" "),e("p",[t._v("主机A先查找自己的路由表，看目标主机B是否在本局域网内。")]),t._v(" "),e("h5",{attrs:{id:"情况a-假设主机a和主机b处于同一局域网-进行直接交付"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#情况a-假设主机a和主机b处于同一局域网-进行直接交付"}},[t._v("#")]),t._v(" 情况A —— 假设主机A和主机B处于同一局域网，进行直接交付")]),t._v(" "),e("p",[t._v("先在发送端主机A的"),e("code",[t._v("ARP高速缓存")]),t._v("的映射表中查找有没有接收端主机B的"),e("code",[t._v("IP地址到mac地址的映射")]),t._v("，如果有，直接返回mac地址。如果没有，则按照以下步骤找出主机B的mac地址。")]),t._v(" "),e("ul",[e("li",[e("ol",[e("li",[e("code",[t._v("ARP进程")]),t._v("在本局域网广播发送一个"),e("code",[t._v("ARP分组")]),t._v("（会写入自己的IP地址到mac地址的映射、目标主机的IP），在本局域网上的所有主机上运行的ARP进程都会收到此"),e("code",[t._v("ARP请求分组")]),t._v("。")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[t._v("主机B在"),e("code",[t._v("ARP请求分组")]),t._v("中见到自己的IP地址，就向主机A单播发送"),e("code",[t._v("ARP响应分组")]),t._v("，并写入自己的mac地址，顺便也会在自己的"),e("code",[t._v("ARP高速缓存")]),t._v("中写入主机A的IP到mac地址的映射（为了减少网络通信量，以后主机B向主机A发送数据报时就很方便）；其余所有主机则不理睬这个ARP请求分组。")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"3"}},[e("li",[t._v("主机A收到主机B的"),e("code",[t._v("ARP响应分组")]),t._v("后，就在其ARP高速缓存中写入主机B的IP地址到mac地址的映射。")])])])]),t._v(" "),e("h5",{attrs:{id:"情况a-假设主机a和主机b不处于同一局域网-进行间接交付"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#情况a-假设主机a和主机b不处于同一局域网-进行间接交付"}},[t._v("#")]),t._v(" 情况A —— 假设主机A和主机B不处于同一局域网，进行间接交付")]),t._v(" "),e("p",[t._v("这时主机A就无法通过ARP协议解析出主机B的mac地址（实际上也不需要知道远程主机B的mac地址），工作流程如下：")]),t._v(" "),e("ul",[e("li",[e("ol",[e("li",[t._v("这时候就需要通过"),e("code",[t._v("IP协议")]),t._v("的"),e("code",[t._v("分组转发规则")]),t._v("来把IP数据包转发给与主机A连接在同一局域网的路由器R1，因此主机A这时就需要把路由器R1的IP地址通过ARP解析成mac地址（以便能够把IP数据包传送到路由器R1），然后传递到链路层（mac帧头封装的是主机A和路由器R1的mac地址）。")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[t._v("后续，当mac帧传递到路由器R1后，R1从路由表中找到指定的下一跳路由器R2，同时使用ARP解析出R2的mac地址，传递到R1的链路层（此时mac帧头封装的是路由器R1和路由器R2的mac地址），在经过如干次路由转发后，最终解析出主机B的mac地址，把mac帧交付给主机B。")])])])]),t._v(" "),e("h3",{attrs:{id:"_4-链路层-link-layer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-链路层-link-layer"}},[t._v("#")]),t._v(" 4. 链路层（link layer）")]),t._v(" "),e("p",[t._v("TCP/IP协议中的最低层，该层用来处理网络的硬件部分。数据链路层包含了软件与硬件的接口部分，以及各种网络设备的硬件，也就是整个网络通信过程中最底层的基础设施。")]),t._v(" "),e("h4",{attrs:{id:"主要协议-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主要协议-4"}},[t._v("#")]),t._v(" 主要协议")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://baike.baidu.com/item/PPP/6660214",target:"_blank",rel:"noopener noreferrer"}},[t._v("点对点协议PPP"),e("OutboundLink")],1),t._v("：\n这种协议提供全双工操作，并按照顺序传递数据包。设计目的主要是用来通过拨号或专线方式建立点对点连接发送数据，使其成为各种主机、网桥和路由器之间简单连接的一种共通的解决方案。")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://baike.baidu.com/item/%E4%BB%A5%E5%A4%AA%E7%BD%91%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"}},[t._v("以太网协议"),e("OutboundLink")],1),t._v("：\n使用最广泛的局域网技术。根据以太网协议将数据分为以“帧”为单位的数据包，每一帧分为两个部分：\n"),e("ul",[e("li",[t._v("标头：数据包的发送者、接受者、数据类型、必要的控制信息（如同步信息、地址信息、差错控制等）")]),t._v(" "),e("li",[t._v("数据：数据包具体内容")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://baike.baidu.com/item/PPPOE",target:"_blank",rel:"noopener noreferrer"}},[t._v("PPPOE协议"),e("OutboundLink")],1),t._v("：\n以太网上的点对点协议，是将点对点协议封装在以太网框架中的一种链路层协议。")])]),t._v(" "),e("h4",{attrs:{id:"功能-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能-4"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),e("ul",[e("li",[e("ol",[e("li",[t._v("接收IP数据包后添加首部（源以及目标的mac地址等）和尾部（EOT帧结束符等）封装成帧，并通过网络发送；或者从网络上接收mac帧，抽出IP数据报，交给网络层。")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[t._v("提供比特（bit）级差错检测和纠正技术")])])])]),t._v(" "),e("h4",{attrs:{id:"工作原理-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作原理-3"}},[t._v("#")]),t._v(" 工作原理")]),t._v(" "),e("p",[t._v("主机A发送的数据在一段一段（"),e("code",[t._v("主机 -> 路由器")]),t._v("，"),e("code",[t._v("路由器 -> 路由器")]),t._v("）的链路上传送到达主机B所在的局域网之后。")]),t._v(" "),e("ul",[e("li",[e("ol",[e("li",[t._v("以太网采用广播形式，把数据包发给该子网内所有主机，子网内每台主机在接收到这个包以后，都会读取首部里的目标MAC地址，然后和自己的MAC地址进行对比，如果不同，就丢弃这个包；如果相同就做下一步处理；")])])]),t._v(" "),e("li",[e("ol",{attrs:{start:"2"}},[e("li",[t._v("相同，开始接收数据，控制信息使接收端能够检测到所收到的帧有误差错。如发现有差错，链路层便丢弃这个出了差错的帧，以免继续传递下去浪费网络资源；如果没有差错，便从帧中提取IP数据报（帧头的控制信息使接收端能够知道一个帧从哪个bit开始到哪个bit结束），上交给网络层。")])])])]),t._v(" "),e("p",[e("span",{staticStyle:{color:"#8c8c8c"}},[t._v("ps：两个相邻节点之间（主机->路由器，路由器->路由器）的数据是点对点直接传送的。")])]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://book.douban.com/subject/35498120/",target:"_blank",rel:"noopener noreferrer"}},[t._v("计算机网络"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzUxNzk1MjQ0Ng==&mid=2247512978&idx=1&sn=28b938913d581d1512df173fc8cf33c4&chksm=f992b543cee53c552ac175b157328d44b66dd67db7d08a4f4027e2b0cb60819dfe65b5fb3c45&cur_album_id=1569680030484447233&scene=189#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("36张图，一次性补全网络基础知识"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=_.exports}}]);