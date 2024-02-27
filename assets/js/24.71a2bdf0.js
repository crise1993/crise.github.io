(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{487:function(s,a,t){s.exports=t.p+"assets/img/process.a1a10996.png"},559:function(s,a,t){"use strict";t.r(a);var _=t(65),v=Object(_.a)({},(function(){var s=this,a=s.$createElement,_=s._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[_("h1",{attrs:{id:"ssh免密登陆及原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ssh免密登陆及原理"}},[s._v("#")]),s._v(" ssh免密登陆及原理")]),s._v(" "),_("h2",{attrs:{id:"导语"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#导语"}},[s._v("#")]),s._v(" 导语")]),s._v(" "),_("p",[s._v("作为开发者，所开发的每一个应用在成型后都需要部署，虽然我们使用着各式各样的部署工具，但是其背后最本质的东西完全一样，便是如何与服务器交互，而交互的第一步便涉及到登录。")]),s._v(" "),_("h2",{attrs:{id:"认识ssh"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#认识ssh"}},[s._v("#")]),s._v(" 认识ssh")]),s._v(" "),_("p",[_("code",[s._v("SSH（Secure Shell）")]),s._v("，译做“安全shell”，如何做到安全？"),_("em",[_("strong",[s._v("便是通过加密算法将需要传输的数据进行处理后，通过TCP传输，在两端之间通过密文交互达到安全目的，所以它的本质即数据的加密")])]),s._v("。")]),s._v(" "),_("p",[_("code",[s._v("SSH")]),s._v("目前一共有两个不兼容的版本，区别在于各自采用的加密方式不相同。")]),s._v(" "),_("ul",[_("li",[s._v("SSH1使用了在加密对称加密秘钥的时候使用了"),_("code",[s._v("非对称加密算法（RSA）")]),s._v(", 使用了"),_("code",[s._v("循环冗余校验码（CRC）")]),s._v("来保证传输数据的完整。")]),s._v(" "),_("li",[s._v("SSH2则使用了新的"),_("code",[s._v("对称加密算法")]),s._v("和"),_("code",[s._v("替代RSA加密秘钥的算法")]),s._v("，并且使用"),_("code",[s._v("散列值（HMAC）算法")]),s._v("替代CRC来保证传输数据的完整。")])]),s._v(" "),_("h2",{attrs:{id:"ssh认证方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ssh认证方式"}},[s._v("#")]),s._v(" ssh认证方式")]),s._v(" "),_("p",[s._v("SSH的用户认证方式有两种：")]),s._v(" "),_("ol",[_("li",[_("strong",[s._v("账号密码登录")])])]),s._v(" "),_("p",[s._v("即你需要连接的远程服务器某一个用户与密码，比较常用，也比较简单。")]),s._v(" "),_("p",[s._v("原理：用户在客户端ssh远程服务器，远程服务器将自己的公用密钥下发至客户端的~/.ssh/known_hosts，客户端将使用该公开密钥来加密数据，远程服务器使用自己的私有密钥来解密数据，从而实现加密访问，建立连接过程。")]),s._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[_("strong",[s._v("公钥验证授权登录")])])]),s._v(" "),_("p",[s._v("也就是常说的免密登录，这一种认证较为复杂，但是配置好后其后续操作将十分便捷，不需要输入密码。本次也主要梳理该种认证方式原理及其流程。")]),s._v(" "),_("h2",{attrs:{id:"免密登录原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#免密登录原理"}},[s._v("#")]),s._v(" 免密登录原理")]),s._v(" "),_("p",[s._v("如果将输入密码登录比作拿钥匙开门，那么免密登录可以理解为刷脸或者刷指纹开门，而刷脸和录指纹的操作便是你在此之前已经在开门认证的可信任数据库中录下来，在录下来之后才体会到开门不用钥匙便捷。所以，免密登录的前提就是远端的服务器能够认识你的机器，而你的机器“刷脸”（免密）进门就需要把它的“脸”（公钥）放到远端的服务器的可信列表里。")]),s._v(" "),_("p",[_("img",{attrs:{src:t(487),alt:"免密登录"}})]),s._v(" "),_("h2",{attrs:{id:"免密登录实现流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#免密登录实现流程"}},[s._v("#")]),s._v(" 免密登录实现流程")]),s._v(" "),_("h3",{attrs:{id:"_1、生成秘钥对"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、生成秘钥对"}},[s._v("#")]),s._v(" 1、生成秘钥对")]),s._v(" "),_("div",{staticClass:"language-sh extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[s._v("ssh-keygen -t rsa -C "),_("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你自己的名字"')]),s._v(" -f "),_("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你自己的名字_rsa"')]),s._v("\n")])])]),_("p",[s._v("如：输入"),_("code",[s._v("ssh-keygen -t rsa -C crise1993 -f aliCloud_rsa")]),s._v("\n然后敲（三个回车,千万不要输入密码），就会生成两个文件 aliCloud_rsa（私钥名）、aliCloud_rsa.pub（公钥）")]),s._v(" "),_("h3",{attrs:{id:"_2、上传配置公钥"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、上传配置公钥"}},[s._v("#")]),s._v(" 2、上传配置公钥")]),s._v(" "),_("ul",[_("li",[s._v("上传公钥到服务器对应账号的home路径下的.ssh/中 ( ssh-copy-id -i 公钥文件名 用户名@服务器ip或域名 )")]),s._v(" "),_("li",[s._v("配置公钥文件访问权限为 600（chmod 600 公钥文件名）")])]),s._v(" "),_("h3",{attrs:{id:"_3、配置本地私钥"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、配置本地私钥"}},[s._v("#")]),s._v(" 3、配置本地私钥")]),s._v(" "),_("ul",[_("li",[s._v("把第一步生成的私钥复制到你的home目录下的.ssh/ 路径下")]),s._v(" "),_("li",[s._v("配置你的私钥文件访问权限为 600（chmod 600 私钥文件名）")])]),s._v(" "),_("p",[s._v("这时候其实就可以使用"),_("code",[s._v("ssh 用户名@服务器ip -i .ssh/私钥文件名")]),s._v("进行免密登录。\n由于ip是一段无序的数字，要是不记在心里，则需要每次登陆服务器都需要找寻对应ip，是比较费劲的，这时候可以给它起一个别名，比如你的服务器是阿里云服务器，可以叫ali-cloud，当你链接它的时候直接"),_("code",[s._v("ssh 别名")]),s._v("就可以了，仅需要在你本地简单配置一下即可。")]),s._v(" "),_("h3",{attrs:{id:"_4、免密登陆功能的本地配置文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、免密登陆功能的本地配置文件"}},[s._v("#")]),s._v(" 4、免密登陆功能的本地配置文件")]),s._v(" "),_("ul",[_("li",[s._v("编辑自己home目录的.ssh/ 路径下的config文件")])]),s._v(" "),_("div",{staticClass:"language-sh extra-class"},[_("pre",{pre:!0,attrs:{class:"language-sh"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入.ssh")]),s._v("\n"),_("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh/\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建config")]),s._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" config\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加以下内容  ")]),s._v("\nHost ali-cloud\nHostName "),_("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.11")]),s._v(".xx.xx  \nUser 账号名称  \nIdentityFile ~/.ssh/私钥名\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存")]),s._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh别名链接验证")]),s._v("\n"),_("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" ali-cloud\n")])])]),_("ul",[_("li",[s._v("配置config文件的访问权限为 644")])])])}),[],!1,null,null,null);a.default=v.exports}}]);