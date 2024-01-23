Quantumult X
---

> 更多使用方法：[QX常用知识](https://getupnote.com/share/notes/8SiMnOcwXxZ3xEtK4k2v9Gr3pv32/7cfb91ee-6a18-4d71-b1ec-45b71bec633b)


# QuantumultX 下载地址

<a href="https://apps.apple.com/app/id1443988620"><img width="200px" alt="Download on App Store" src="https://logos-download.com/wp-content/uploads/2016/06/Download_on_the_App_Store_logo.png"/></a>  

请支持正版！

# 新手入门

<details>
  <summary>点击查看</summary>

### 1.添加以下 **配置文件** 
> 配置参数解释见：_[KOP-XIAO/QuantumultX](https://github.com/KOP-XIAO/QuantumultX/blob/master/QuantumultX_Profiles.conf)_


<details>
  <summary>QuantumultX</summary>

- 「x」 地区分流（香港、美国、日本、台湾、新加坡）
- 「x」 苹果、谷歌、微软、电报、推特分流
- 「x」 流媒体（不支持单独分流）
- 「x」 自动选择最低延迟
- 「 」 负载均衡
- 「 」 故障转移
- 「x」 广告屏蔽重写
- 「 」 适用于软路由环境

</details>

```
https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/QuantumultX.conf
```



<details>
  <summary>QuantumultX_tvOS</summary>

- 「x」 地区分流（香港、美国、日本、台湾、新加坡）
- 「x」 苹果、谷歌、微软、电报、推特分流
- 「x」 流媒体（支持单独分流）
- 「x」 自动选择最低延迟
- 「 」 负载均衡
- 「 」 故障转移
- 「 」 广告屏蔽重写
- 「 」 适用于软路由环境
- 「x」 适用于tvOS

</details>

```
https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/QuantumultX_tvOS.conf
```

<details>
  <summary>QuantumultX_Pro 🚨🚨新手勿碰🚨🚨 </summary>

- 「x」 地区分流（香港、美国、日本、台湾、新加坡）
- 「x」 苹果、谷歌、微软、电报、推特分流
- 「x」 流媒体（不支持单独分流）
- 「x」 自动选择最低延迟
- 「x」 负载均衡
- 「x」 故障转移
- 「x」 广告屏蔽重写
- 「x」 适用于软路由环境

</details>

```
https://raw.githubusercontent.com/Repcz/Tool/X/QuantumultX/QuantumultX_Pro.conf
```

* 运行 **Quantumult X** ，点击右下角的 **风车** 图标
* 弹出的 **设置** 菜单中，在最下方 **配置文件** 区域，点击 **下载配置**
* 将配置文件链接填入并保存
![Image text](https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/%E8%AE%A2%E9%98%85%E9%85%8D%E7%BD%AE.jpg)


### 2.添加机场订阅
> 机场订阅本地转换可参考[Sub-Store 教程](https://getupnote.com/share/notes/8SiMnOcwXxZ3xEtK4k2v9Gr3pv32/7522F394-6D73-414E-BE04-1455EDB15B9F)

* 运行 **Quantumult X**，点击右下角的 **风车** 图标
* 弹出的 **设置** 菜单中，在最上方 **节点** 区域，点击 **节点资源**
* 点击右上角 **🔗** 按钮
* 添加机场订阅并保存
![Image text](https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/%E8%AE%A2%E9%98%85.jpg) 

### 3.为配置文件生成证书
* 运行 **Quantumult X**，点击右下角的 **风车** 图标
* 弹出的 **设置** 菜单中，在下方 **MitM** 区域，点击 **生成证书**
* 点击 **配置证书** ，**确定** 提示后，在Safari中 **允许** 下载配置文件
![Image text](https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/%E7%94%9F%E6%88%90%E5%B9%B6%E9%85%8D%E7%BD%AEzhensu.jpg) 

### 4.设置中安装描述文件
* 在 **系统设置** 中，点击 **已下载描述文件** ，并 **安装**
![Image text](https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/%E8%AE%BE%E7%BD%AE-%E5%AE%89%E8%A3%85%E8%AF%81%E4%B9%A6.jpg)

### 5.设置中信任描述文件
* 在 **系统设置** - **通用** - **关于本机** - **证书信任设置** 中，勾选已安装的描述文件
* 安装完成后，返回QuantumultX，勾选以启用 **MitM** 和 **重写**
![Image text](https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/%E8%AE%BE%E7%BD%AE-%E4%BF%A1%E4%BB%BB%E8%AF%81%E4%B9%A6.jpg)


### 6.添加**GeoLite2**订阅
> 项目地址：[Hackl0us/GeoIP2-CN](https://github.com/Hackl0us/GeoIP2-CN)
* 运行 **Quantumult X**，点击右下角的 **风车** 图标
* 弹出的 **设置** 菜单中，拉至最下，点击 **其他设置**
* 在 **其他设置** 中找到 **GeoLite2** 区域，点击右侧的 **来源** 按钮
* 在弹出的窗口中粘贴项目提供的 `Country.mmdb` 链接(仅包含ipv4地址)：
```
https://cdn.jsdelivr.net/gh/Hackl0us/GeoIP2-CN@release/Country.mmdb
```
* 建议启用 **自动更新** 功能以保持地址库信息最新
* 点击 **立即更新** 即可
![Image text](https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/GeoLite2%E8%AE%A2%E9%98%85.jpg)

### 7.设置分流模式

* 首页长按右下角风车，设置为彩色风车，及为按配置文件中的规则进行分流

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/UI1.JPEG">


### 策略组修改为手动选择节点
> 默认为自动选择延迟最低节点，**按需** 修改为手动选择
* 在自定义策略下的分流策略组中选择需要的地区节点，此处以 **全球加速** 举例，选择 **香港节点**
* 下拉到下方的 **香港节点** 策略组，此时该策略组以 `url-latency-benchmark` 运行，即按最低延迟选择节点
* 如果要修改为手动选择节点，则长按 **香港节点** 策略组， **类型** 选择 `static`，并保存
* 在 **香港节点** 策略组中选择需要的节点，则 **全球加速** 策略组走 **香港节点** 中选择的节点
```yaml
static                 # 手动选择想要的节点/策略组。
available              # 将按顺序选择你列表中第一个可用的节点。
round-robin            # 将按列表的顺序轮流使用其中的节点。
url-latency-benchmark  # 自动选取延迟最优节点。
dest-hash              # 随机负载均衡，但相同域名走固定节点。
```
![1](https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/%E6%89%8B%E5%8A%A8%E7%AD%96%E7%95%A5.jpg)
***

</details>

# 图标集

> 均来源于互联网，侵删

<details>
  <summary>点击查看</summary>

点击下方连接一键导入

> 综合类图标
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fgithub.com%2FKoolson%2FQure%2Fraw%2Fmaster%2FOther%2FQureColor-All.json%22%0A%5D">Qure Color (All)@Koolson</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2FKoolson%2FQure%2Fmaster%2FOther%2FQuremini.json%22%0A%5D">Qure mini@Koolson</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2FOrz-3%2Fmini%2Fmaster%2FminiColor.json%22%0A%5D">mini Color@Orz-3</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https%3A%2F%2Fgithub.com%2FOrz-3%2Fmini%2Fraw%2Fmaster%2Fmini.json%22%5D">mini icons@Orz-3</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https://raw.githubusercontent.com/Orz-3/face/master/face.json%22%5D">mini face@Orz-3</a>

* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%0A%20%20%20%20%22https%3A%2F%2Fraw.githubusercontent.com%2FSemporia%2FHand-Painted-icon%2Fmaster%2FSemporia.json%22%0A%5D">Hand Painted Icon@Semporia</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https://raw.githubusercontent.com/fmz200/wool_scripts/main/icons/icons-all.json%22%5D">fzm200图标订阅@fmz200</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https%3A%2F%2Fraw.githubusercontent.com%2FToperlock%2FQuantumult%2Fmain%2FShin-icons.json%22%5D">蜡笔小新@Toperlock</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https%3A%2F%2Fraw.githubusercontent.com%2FToperlock%2FQuantumult%2Fmain%2FWolffy-icons.json%22%5D">喜羊羊与灰太狼@Toperlock</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https%3A%2F%2Fraw.githubusercontent.com%2FToperlock%2FQuantumult%2Fmain%2FD-icons.json%22%5D">哆啦A梦@Toperlock</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https%3A%2F%2Fraw.githubusercontent.com%2Fshoujiqiyuan%2FPVSZforQuanX%2Fmaster%2FPVSZ.json%22%5D">植物大战僵尸@Toperlock</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https%3A%2F%2Fraw.githubusercontent.com%2Fshoujiqiyuan%2FDigimonforQuanX%2Fmaster%2FDigimon.json%22%5D">数码宝贝@shoujiqiyuan</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https%3A%2F%2Fraw.githubusercontent.com%2Fshoujiqiyuan%2FPokemonGOforQuanX%2Fmaster%2FPokemonGo.json%22%5D">皮卡丘@shoujiqiyuan</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https%3A%2F%2Fraw.githubusercontent.com%2FYuanxsxs%2FQtumultX%2Fmaster%2FIcon%2FCatcat.json%22%5D">小可爱猫猫@Yuanxsxs</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https://raw.githubusercontent.com/lige47/QuanX-icon-rule/main/ligeicon.json%22%5D">离歌图标订阅@lige47</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https://raw.githubusercontent.com/LovedGM/Quantumult-X-TuBiao/a6da7ef83e55a098bc7e9b793a670bbdfde5e36e/yyy.json%22%5D">嘤嘤嘤@LovedGM</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https://raw.githubusercontent.com/LovedGM/Quantumult-X-TuBiao/main/zishi-cs.json%22%5D">姿势图标@LovedGM</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https://raw.githubusercontent.com/erdongchanyo/icon/main/edc-country-icon-gallery.json%22%5D">EDC Country Icon@ErdongChan</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/icons.json%22%5D">chxm1023图标订阅@chxm1023</a>

> Emby图标
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https://raw.githubusercontent.com/Onlookers-Group/Texonin-LAB-Public/main/Quantumult(X)/Icon/color/color.json%22%5D">TEXON’S EMBY图标@Onlookers-Group</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https://raw.githubusercontent.com/Softlyx/Fileball/main/YUAN/tubiao.json%22%5D">Fileball图标@Softlyx</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https://raw.githubusercontent.com/Twoandz9/Emby-icons/main/TheRaw.json%22%5D">Emby@Twoandz9</a>

> 机场图标
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https://raw.githubusercontent.com/Twoandz9/TheMagic-Icons/main/TheRaw.json%22%5D">TheMagic@Twoandz9</a>
* <a href="https://quantumult.app/x/open-app/ui?module=gallery&type=icon&action=add&content=%5B%22https://raw.githubusercontent.com/erdongchanyo/icon/main/edc-airport-icon-gallery.json%22%5D">Edc Airport Icon@ErdongChan</a>

</details>


---

# QuantumultX使用指南？

> 建议结合目录一同查看

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/Menu.png">

简易目录：
- [首页交互界面(UI)](https://github.com/Repcz/Tool/blob/X/QuantumultX/README.MD#%E9%A6%96%E9%A1%B5%E4%BA%A4%E4%BA%92%E7%95%8C%E9%9D%A2ui)
- [节点订阅](https://github.com/Repcz/Tool/blob/X/QuantumultX/README.MD#%E8%8A%82%E7%82%B9%E8%AE%A2%E9%98%85)
- [规则系统](https://github.com/Repcz/Tool/blob/X/QuantumultX/README.MD#%E8%A7%84%E5%88%99%E7%B3%BB%E7%BB%9F)
- [策略(策略组)](https://github.com/Repcz/Tool/blob/X/QuantumultX/README.MD#%E7%AD%96%E7%95%A5)
- [DNS 相关设置](https://github.com/Repcz/Tool/blob/X/QuantumultX/README.MD#dns-%E7%9B%B8%E5%85%B3%E8%AE%BE%E7%BD%AE)




## 交互界面(UI)

### 首页UI
<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/UI1.JPEG">

#### 「风车」按钮

单击「风车」按钮进入「设置」页面

长按「风车」按钮，进入设置分流模式与资源更新界面

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/UI2.PNG" width="900">

- 设置分流模式
  - 蓝绿色风车：全部代理，即所有请求均使用PROXY选择的节点访问
  - 纯黄色风车：全部直连，即所有请均不使用节点访问
  - 三色风车：规则模式，由分流规则及所有策略（内置以及自定义策略）共同決定是否通过节点以及通过什么节点访问。

- 资源更新
  - 点击🔁圆形按钮更新所有外部资源，包括节点、分流、重写及其引用的脚本
  - 如果只需要更新节点或重写，可以进入设置-分流/重写-资源规则，对指定的资源左滑，点击🔁单独更新；或点击右上角全部更新
  - 如果需要更新重写内的脚本，可以左滑指定重写资源，点击「🔍」→「全部更新」
<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/UI3.PNG" width="300">


  - 当左上角出现红色🔺警告时，表示有资源出现问题，可能是引用了错误的资源或不符合QX的资源格式，点击该🔺警告按钮，即可查看出现问题的资源



### 网络活动

#### 脚本记录

#### DNS 查询记录

### 分流规则

### 重写规则

### 流量&流速

### 调整UI



## 节点订阅

### 添加远程节点订阅

以下主要讲的是 `[server_local]`、`[server_remote]` 或 `[general]` 区块下的内容，所以示例以`[server_local]`、`[server_remote]` 或 `[general]`  开头表明在其之下，并不是让你每个参数字段前都加上 `[server_local]`、`[server_remote]` 或 `[general]` 。


#### UI添加

- 长按最上方「节点」按钮，即可进入添加机场订阅，效果和下图是一致的
- 切记不要使用一键导入，而是复制通用订阅；如果是非通用订阅，可以尝试开启资源解析器进行使用(本地转换，无泄漏风险，但不代表转换后一定可用)

  - 如果你的解析器是空的，「节点页」点击左下角编辑，需要在 `[general]` 下添加：

```
resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js 
```

![添加机场订阅](https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/%E8%AE%A2%E9%98%85.jpg) 

#### 配置文件添加

```
[server_remote]
https://example.com/provider.txt, tag=机场名称, img-url=hhttps://example.com/airport.png, update-interval=86400, opt-parser=false, inserted-resource=false, enabled=true 
```

对应的完整参数：

`<资源路径>, <资源标签>, <资源图标>，<自动更新时间间隔>, <是否使用资源解析器>, <插入资源>, <是否启用>`

- `tag` 资源标签：相当于名称，标识这条节点订阅的作用；

- `img-url` 自定义图标参数是可选的，使用它可以更美观些，但此处不显示彩色图标

- `update-interval` 自动更新的时间间隔，单位为秒；

- `opt-parser` 是否使用资源解析器，若关闭则改为 `false`；

- `inserted-resource` 插入资源，将文件中的节点放置于本地节点之前；

- `enabled` 是否启用该分流文件，若不使用可改为 `false`；

---

### 添加本地节点

#### 配置文件[server_loacl]下添加
将节点内容复制粘贴到配置文件`[server_loacl]`下,会增加一个「已保存」

但是这样做会存在一个问题：无法在策略组中使用正则参数进行筛选，具体[策略组参数](https://github.com/Repcz/Tool/blob/X/QuantumultX/README.MD#%E7%AD%96%E7%95%A5%E5%8F%82%E6%95%B0)

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/server_loacl_1.jpg" width="1200">

#### 配置片段添加

使用配置片段的方式添加，类似于添加远程节点订阅，只不过引用的远程资源是本地文件

⚠️ 注意：添加配置片段时，无需带有`[server_local]`、`[server_remote]`、`[filter_local]`、`[filter_remote]` 等字段

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/server_loacl_2.PNG" width="900">

#### 节点格式：

  > 搬运至[@KOP-XIAO](https://github.com/KOP-XIAO/QuantumultX/blob/4a705faac3cfed6ba0e55d6a71bc3b35036f0f96/QuantumultX_Profiles.conf#L237)

<details>
  <summary>点击查看</summary>

##### shadowsocks以及shadowsocksR类型

支持 V2-Plugin；支持UDP，支持UDP-OVER-TCP（版本1.0.29 665+）
```
shadowsocks=ss-a.example.com:80, method=chacha20, password=pwd, obfs=http, obfs-host=bing.com, obfs-uri=/resource/file, fast-open=false, udp-relay=false, server_check_url=http://www.apple.com/generate_204, tag=Sample-A

shadowsocks=ss-b.example.com:80, method=chacha20, password=pwd, obfs=http, obfs-host=bing.com, obfs-uri=/resource/file, fast-open=false, udp-relay=false, tag=Sample-B

shadowsocks=ss-c.example.com:443, method=chacha20, password=pwd, obfs=tls, obfs-host=bing.com, fast-open=false, udp-relay=false, tag=Sample-C

shadowsocks=ssr-a.example.com:443, method=chacha20, password=pwd, ssr-protocol=auth_chain_b, ssr-protocol-param=def, obfs=tls1.2_ticket_fastauth, obfs-host=bing.com, tag=Sample-D

shadowsocks=ws-a.example.com:80, method=aes-128-gcm, password=pwd, obfs=ws, obfs-uri=/ws, fast-open=false, udp-relay=false, tag=Sample-E

shadowsocks=ws-b.example.com:80, method=aes-128-gcm, password=pwd, obfs=ws, fast-open=false, udp-relay=false, tag=Sample-F

shadowsocks=ws-tls-a.example.com:443, method=aes-128-gcm, password=pwd, obfs=wss, obfs-uri=/ws, fast-open=false, udp-relay=false, tag=Sample-G

shadowsocks=ws-tls-a.example.com:443, method=aes-128-gcm, password=pwd, udp-over-tcp=true fast-open=false, udp-relay=false, tag=Sample-H
```

##### vmess 类型

ws，wss(ws+tls),over-tls,tcp，支持 UDP；

vmess 类型节点默认开启 aead，关闭请用 aead=false

- ws 类型
```
vmess=ws-c.example.com:80, method=chacha20-ietf-poly1305, password= 23ad6b10-8d1a-40f7-8ad0-e3e35cd32291, obfs-host=ws-c.example.com, obfs=ws, obfs-uri=/ws, fast-open=false, udp-relay=false, aead=false, tag=Sample-H
```
- wss(ws+tls) 类型
```
vmess=ws-tls-b.example.com:443, method=chacha20-ietf-poly1305, password= 23ad6b10-8d1a-40f7-8ad0-e3e35cd32291, obfs-host=ws-tls-b.example.com, obfs=wss, obfs-uri=/ws, tls-verification=true,fast-open=false, udp-relay=false, tag=Sample-I
```
  
- http 类型
```
vmess=example.com:80, method=chacha20-poly1305, password=23ad6b10-8d1a-40f7-8ad0-e3e35cd32291, obfs=http, obfs-host=bing.com, obfs-uri=/resource/file, fast-open=false, udp-relay=false, server_check_url=http://www.apple.com/generate_204, tag=vmess-http
```

- tcp 类型
```
vmess=vmess-a.example.com:80, method=aes-128-gcm, password=23ad6b10-8d1a-40f7-8ad0-e3e35cd32291, fast-open=false, udp-relay=false, tag=Sample-J

vmess=vmess-b.example.com:80, method=none, password=23ad6b10-8d1a-40f7-8ad0-e3e35cd32291, fast-open=false, udp-relay=false, tag=Sample-K
```
- over-tls 类型
```
vmess=vmess-over-tls.example.com:443, method=none, password=23ad6b10-8d1a-40f7-8ad0-e3e35cd32291, obfs-host=vmess-over-tls.example.com, obfs=over-tls, tls-verification=true, fast-open=false, udp-relay=false, tag=Sample-L
```

##### http(s) 类型
```
http=http.example.com:80, username=name, password=pwd, fast-open=false, udp-relay=false, tag=http

http=https.example.com:443, username=name, password=pwd, over-tls=true, tls-verification=true, tls-host=example.com, tls-verification=true, fast-open=false, udp-relay=false, tag=http-tls
```

##### socks5 类型节点
```
socks5=example.com:80,fast-open=false, udp-relay=false, tag=socks5-01

socks5=example.com:80, username=name, password=pwd, fast-open=false, udp-relay=false, tag=socks5-02

socks5=example.com:443, username=name, password=pwd, over-tls=true, tls-host=example.com, tls-verification=true, fast-open=false, udp-relay=false, tag=socks5-tls-01

socks5=example.com:443, username=name, password=pwd, over-tls=true, tls-host=example.com, tls-verification=true, tls-pubkey-sha256=eb5ec6684564fd0d04975903ed75342d1b9fdc2096ea54b4cf8caf4740f4ae25, fast-open=false, udp-relay=false, tag=socks5-tls-02
```

##### trojan 类型
支持 over-tls 以及 websockets，支持 UDP
```
trojan=example.com:443, password=pwd, over-tls=true, tls-verification=true, fast-open=false, udp-relay=true, tag=trojan-tls-01

trojan=example1.com:443, password=pwd, over-tls=true, tls-host=example.com, tls-verification=true, fast-open=false, udp-relay=false, tag=trojan-tls-02

trojan=192.168.1.1:443, password=pwd, obfs=wss, obfs-host=example.com, obfs-uri=/path, udp-relay=true, tag=trojan-wss-05
```

</details>

---
### 节点延迟

该设置一般通过配置文件`[general]`下的参数进行配置
```
[general]
network_check_url = http://wifi.vivo.com.cn/generate_204
server_check_url = http://1.1.1.1/generate_204
; server_check_user_agent = Agent/1.0
server_check_timeout = 5000
```

- `network_check_url` 网络检查 URL 设置；
- `server_check_url` 代理服务器网络检查 URL 设置；
- `server_check_user_agent` 代理服务器检查的 User Agent 自定义设置；
- `server_check_timeout` 测试超时设置，单位为 ms；

#### 触发节点延迟测试

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/Server_tets.jpg" width="600">

- 单击节点资源图标/策略组图标，即可对该项目下的所有节点进行测试
- 节点资源(PROXY)区域,长按节点，即可对单个节点进行测试

Quantumult 使用 HEAD 方法向 `server_check_url` 发送 HTTP 请求来测试代理的状态，结果应该是两个延迟：
- 第一个是到代理服务器的 TCP 握手
- 第二个是 HTTP 延迟（Quantumult 成功接收到 HTTP 之间的持续时间）来自 server_check_url 的响应和 Quantumult 开始将 HTTP 请求发送到 server_check_url）

⚠️ 注意：

> 如果 `[server_local]` 或 `[server_remote]` 部分中的服务器有自己的`server_check_url`，则将使用其自己的`server_check_url`，而不是`[general]`部分中的`server_check_url`。

---

### 节点标识说明

节点后标识：

- 🅰：Vmess 协议的AEAD（aead=true）
- 🅵：tcp-fast-open 开启（fast-open=true）
- 🆄：UDP 开启（udp-relay=true）

- 🆂：tls，开启验证（tls-verification=true）
- 🅂：tls，未开启验证（tls-verification=false）
- 🅿：tls-cert-sha256 / tls-pubkey-sha256 自定义验证参数

- 🆄 🅵 显示仅代表配置开启，不代表服务端支持
- 黑色⚡️表示 TFO 触发成功

节点前标识：
- ⚠︎：标识有节点名称重复


---

### 左上角节点信息(节点GEO信息)

- 左上角的节点显示区域，可以修改配置文件(点左下角的编辑)，修改`geo_location_checker`参数，可以显示不同样式的信息

例如：

```
geo_location_checker=disabled
;geo_location_checker = http://ip-api.com/json/?lang=zh-CN, https://mirror.ghproxy.com/https://raw.githubusercontent.com/ConnersHua/RuleGo/master/Quantumult/Script/geo_location_checker.js
```
`disabled`表示关闭；

`#`或`;`或`//`表示注释，即起说明作用或者不生效，删除则表示启用，注意不同时启用两个`geo_location_checker`

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/geochecker.jpg" width="300">


以下是搜集的`geo_location_checker`
```
geo_location_checker = http://ip-api.com/json/?lang=zh-CN, https://jexxagn.netlify.app/IP-API.js
```

```
geo_location_checker = http://ip-api.com/json/?lang=zh-CN, https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/GeoLocationChecker/QuantumultX/IP-API.js
```

```
geo_location_checker = http://ip-api.com/json, https://raw.githubusercontent.com/kiksong/qsc/master/qx/script/IPInfo.js
```

```
geo_location_checker = http://ip-api.com/json/?fields=8450015&lang=zh-CN,https://raw.githubusercontent.com/deezertidal/QuantumultX-Rewrite/master/rewrite/ip-api.js
```


```
geo_location_checker = http://ip-api.com/json/?lang=zh-CN, https://github.com/KOP-XIAO/QuantumultX/raw/master/Scripts/IP_API.js
```

```
geo_location_checker = http://ip-api.com/json/?lang=zh-CN, https://raw.githubusercontent.com/ConnersHua/RuleGo/master/Quantumult/Script/geo_location_checker.js
```

---

### 节点资源图标

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/ICON.jpg" width="600">

- 长按策略组/节点资源 → 图标
- QX节点资源区域的图标只支持单色，策略组区域支持彩色；
- 图标分辨率限制144x144、108x108；
- 修改配置文件的 `img-url` 即可自定义图标
- 点此查看[图标集](https://github.com/Repcz/Tool/blob/X/QuantumultX/README.MD#%E5%9B%BE%E6%A0%87%E9%9B%86)


## 规则系统

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/UI2.JPEG" width="900">


规则是有先后顺序的，放置正确才可以有效的进行分流

以下主要讲的是 `[filter_local]`、`[filter_remote]` 或 `[policy]`  区块下的内容，所以示例都以 `[filter_local]`、`[filter_remote]` 或 `[policy]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[filter_local]`、`[filter_remote]` 或 `[policy]`。


> 以下内容主要搬运[DivineEngine`s Blog](https://divineengine.net/article/policy-and-filter-of-quantumult-x/),侵删

### 「Filter」参数

「Filter」即分流规则，规则由四个部分组成：

```
<规则类型>, <内容条件>, <策略>, 「参数」
```

Quantumult X 默认有 3 个自带策略：

- `DIRECT` 直连
- `PROXY` 代理 (需添加节点订阅使用)
- `REJECT` 阻止

---

### 添加 **本地规则** 

添加本地规则方法如图：

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/UI2-1.JPEG" width="600">

或直接按照下文里所示格式，写入配置文件的 `[filter_local]`

- 直接点击顶部「分流规则」按钮，即可查看所有规则及其顺序(包括本地和远程规则里面的每一条)

- 也可以点击 右下角风车 → 「分流」区域-「分流规则」 进行查看

---


#### 域名类型规则

首先需要弄明白，URL 中域名是哪些？以一条 URL 为例：

`http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument`

其中 `www.example.com` 为域名，或者说是第二个 / 之后以及第三个 / 之间的内容（不包括冒号和端口）。

##### `HOST`规则

当请求的域名完全匹配时，则执行该规则：

```
[filter_local]
# 屏蔽百度首页
host, www.baidu.com, reject

# 屏蔽百度百科
host, baike.baidu.com, reject
```

如上，对于「百度」的一些域名使用了「阻止请求」策略

⚠️ 注意：

> 如果你是从 Surge 过来的用户可能会这么使用 HOST 规则：`host, 1.1.1.1, proxy`，但这并不适用于 Quantumult X

##### `HOST-SUFFIX`规则

当请求的域名的后缀匹配，则执行该规则：

```
[filter_local]
host-suffix, doubleclick.net, reject
```

如上示例，相比使用 hosts 需要一条条的阻止域名，如：

```
127.0.0.1 ad.doubleclick.net
127.0.0.1 adx.g.doubleclick.net
127.0.0.1 pubads.g.doubleclick.net
```

Quantumult X 仅使用一条 `HOST-SUFFIX` 类型规则，就可以对 `doubleclick.net` 及其子域名都做出了阻止。

💡 再看两条关于 `HOST-SUFFIX` 的例子：

`ads.example.com` 本身及其子域名是广告，而 `example.com` 本身及其他子域名是正常内容就可以使用： `host-suffix, ads.example.com, reject`，所以并不是只能将一级域名用于 `HOST-SUFFIX`；

可以对域名后缀使用，如想对所有 `.cn` 后缀的域名做出直连策略，那么可以：`host-suffix, cn, direct`

##### `HOST-KEYWORD`规则

当请求的域名包含关键词时，执行该规则：

```
[filter_local]
host-keyword, adservice, reject
```

顾名思义就是匹配到域名中的关键词，这条规则对于以下域名都会生效：

```
adservice.google.com
adservice.google.com.hk
googleadservice.com
adservice-google.com
```


##### `HOST-WILDCARD`规则

当请求的域名的匹配通配符时，执行该规则：

```
[filter_local]
host-wildcard, ad*.example.com, reject
```

`HOST-WILDCARD` 类型规则用于通配符 `*` 与 `?` 匹配，如上示例可以匹配如下域名：

```
ads.example.com
adx.example.com
advert.example.com
```

---


#### IP 类型规则

##### `IPv4`规则

```
ip-cidr, 8.8.8.8/32, direct
```

##### `IPv6`规则

```
ip6-cidr, 2001:4860:4860::8888/64, direct
```

如果不清楚这里的 /32 与 /64，需要自行了解「CIDR」与「子网掩码」，还可以搜索「子网掩码计算器」获取帮助。

可以参考：[IP地址、子网掩码、网络号、主机号、网络地址、主机地址以及ip段/CIDR含义](https://limbopro.com/archives/23707.html)


##### `GEOIP`规则

当 IP 归属地地区符合时，执行该规则：

```
[filter_local]
geoip, cn, direct
```

如上示例，当 IP 为中国地区时走直连。

##### `IP-ASN`规则

当 IP 属于 ASN 号时，执行该规则：

```
ip-asn, 13335, direct
```

---


#### 其它类型规则

##### `USER-AGENT`规则

当请求的 User Agent 匹配时，执行该规则：

```
[filter_local]
user-agent, TIM*, direct
```

可使用通配符 `*` 与 `?`

> 在 iOS 15 系统后，系统出于隐私保护考虑，不再于 CONNECT 请求中提供 User-Agent，这意味着对于所有 HTTPS 请求，在未开启 MITM 时，User-Agent 均不可见且规则无法生效。

##### `FINAL`规则

在规则的末尾始终有一个 FINAL 类型规则兜底

```
host-suffix, baidu.com, reject
final, direct
```

它作用于 **除了已有规则以外** 的网络活动策略。

如上示例只有两条规则，这表示除了 baidu.com 及其子域名使用阻止策略外，其他网络活动都使用直连策略。

  - 注意：由于规则存在优先级，查看规则时，本地规则会显示在远程(引用)规则上方，`FINAL`规则会默认(强制)显示在本地规则的末尾，但仅仅只是显示，实际上优先级还是在最后！
  - 本地规则中，所有写在`FINAL`规则后的规则都是无效的！！

#### 规则参数

默认情况下，即不带上参数时，则当处于 Wi-Fi 网络时使用 Wi-Fi 数据，当处于仅蜂窝网络时使用网络数据，

```
[filter_local]
host-suffix, qq.com, direct, force-cellular
host-suffix, qq.com, direct, multi-interface
host-suffix, qq.com, direct, multi-interface-balance
host-suffix, qq.com, direct, via-interface=pdp_ip0
```

可以使用几个参数来指定规则的出站接口：

`force-cellular`：当处于 Wi-Fi 网络时仍使用蜂窝网络数据；

`multi-interface`：当处于 Wi-Fi网络时，同时使用 Wi-Fi 网络与蜂窝网络建立 TCP 连接，使用拥有最佳 TCP 握手值的连接来传输数据。

`multi-interface-balance`：当处于 Wi-Fi 网络时，均衡使用 Wi-Fi 网络与蜂窝网络，以提升并发任务的出口贷款。

`via-interface`：指定出站接口

另外，还可以直接在「设置」底部的「其他设置」中，全局设置「出站接口」。

---

### 添加 **远程(引用)规则**

#### 配置文件编辑

远程分流在 配置文件`[filter_remote]` 下添加：

```
[filter_remote]
https://example.com/reject.txt, tag=🛡️ Block Ads, force-policy=reject, update-interval=86400, opt-parser=true, inserted-resource=true, enabled=true
```
也就是说一条完整的远程分流规则配置是这么组成的：

`<资源路径>, <资源标签>, <策略偏好>, <自动更新时间间隔>, <是否使用资源解析器>, <插入资源>, <是否启用>`

- `tag` 资源标签：相当于名称，标识这条远程分流文件的作用；

- `force-policy` 策略偏好：可选，此处明确设置为 REJECT 策略，如果远程分流文件中已经指明则此处可忽略；

- `update-interval` 自动更新的时间间隔，单位为秒；

- `opt-parser` 是否使用资源解析器，若关闭则改为 `false`；

- `inserted-resource` 插入资源，将分流文件中的规则放置于本地规则之前；

- `enabled` 是否启用该分流文件，若不使用可改为 `false`；

#### UI添加

默认UI情况下，长按顶部「分流规则」按钮，即可进入**添加远程(引用)规则**页面

也可点击右下角风车 → 找到「分流」区域-「资源规则」

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/UI2-2.jpg" width="900">


#### Tips

- 资源路径，需要填写**raw格式**

以下方的链接举例(这是个网页，不是真正能使用的资源链接)：
`https://github.com/blackmatrix7/ios_rule_script/blob/master/rule/QuantumultX/12306/12306.list`

例如在末尾添加`?raw=ture`：
`https://github.com/blackmatrix7/ios_rule_script/blob/master/rule/QuantumultX/12306/12306.list?raw=ture`

或者直接点击`raw`或者`view`，⁠使用跳转后的链接：
`https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/12306/12306.list`

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/raw1.jpg" >

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/raw2.png" >

或者将链接里的`blob`⁠修改为`raw`：
`https://github.com/blackmatrix7/ios_rule_script/raw/master/rule/QuantumultX/12306/12306.list`

- 「插入资源」：开启这项后，远程(引用)的资源**优先级将高于**本地资源
- 「资源解析器」：是对引用的资源文件内容(远程or配置片段)，进行解析/转换/修改，变成 Quantumult X 支持的内容，可用在Quantumult X 的三个主要模块：①节点 ②分流 ③重写，具体使用说明见解析器下方教程；

  - 如果你的解析器是空的，「节点页」点击左下角编辑，需要在 `[general]` 下添加：

```
resource_parser_url=https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/resource-parser.js 
```

- 「策略偏好」：**建议开启**，如上文所述，分流规则需要带有一个 <策略>，开启策略偏好，即可强制指定远程规则集的策略，而不是使用规则集内的策略：

  - 当不开启「策略偏好」时，恰好配置文件中不存在远程(引用)规则集内指定的策略，QX将会自动补全一个`与规则集内置策略同名的策略组`

  - 当不开启「策略偏好」时，且开启「资源解析器」，「资源解析器」会将规则集的策略设置为`Shawn`，QX将会自动补全一个同名策略组(即名为`Shawn`的策略组)

#### 配置片段方式添加

 此方法是将本地规则写入本地文件，将该本地文件作为引用资源的方式进行添加(类似于添加远程规则，只不过远程规则的位置是本地文件)

 `设置`→`配置文件`区域-`配置片段`→`分流`,一样可进行添加。

 ⚠️ 注意：添加配置片段时，无需带有`[server_local]`、`[server_remote]`、`[filter_local]`、`[filter_remote]` 等字段

 规则格式参考 [添加本地规则](https://github.com/Repcz/Tool/blob/X/QuantumultX/README.MD#%E6%B7%BB%E5%8A%A0-%E6%9C%AC%E5%9C%B0%E8%A7%84%E5%88%99)

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/UI2-4.jpg" width="600">

#### 内置规则集

在添加远程规则时，资源路径填写`FILTER_REGION`；此时这条规则将会在「iCloud云盘 ▸ Quantumult X ▸ Profiles 文件夹」下生成一个`FILTER_REGION`文件，内容是`geoip, cn ,direct`。相当于将这条规则当成远程规则进行引用，只不过规则地址是本地(iCloud)。

同样的，资源路径填写`FILTER_LAN`，这条规则将会在「iCloud云盘 ▸ Quantumult X ▸ Profiles 文件夹」下生成一个`FILTER_LAN`文件，即局域网地址，内容如下：

```
ip-cidr, 10.0.0.0/8, direct
ip-cidr, 127.0.0.0/8, direct
ip-cidr, 172.16.0.0/12, direct
ip-cidr, 192.168.0.0/16, direct
ip-cidr, 224.0.0.0/24, direct
```

其对应的配置文件写法：
```
[filter_remote]
FILTER_LAN, tag=LAN, force-policy=direct, enabled=true
FILTER_REGION, tag=CN, force-policy=direct, enabled=true

```

#### 远程分流资源更新与分流细则查看

- 默认自动更新时间为48小时，需打开QX才可自动更新
  - 可以更改配置文件中的`update-interval`参数，单位为秒(S)，修改为`-1`即为不更新

- 左滑规则集可以单独更新，并查看其细则

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/filter_remote.jpg" width="900">

---

### 注意 **规则类型优先级** 问题

在默认情况下，Quantumult X 会启用 **「分流匹配优化」**，大致的优先级先后顺序为：
`HOST > HOST-SUFFIX > HOST-WILDCARD > HOST-KEYWORD > USER-AGENT > IP类型规则 (IP-CIDR 等)`

如此可能会产生什么问题？来看一个示例：

```
[filter_local]
host-keyword, qq, direct
host-suffix, qq.com, reject
```

一般来说规则是按照  **先后顺序** 进行匹配，但开启 **「分流匹配优化」** 后是第二条生效，因为前面说了 `HOST-SUFFIX` 的优先级高于 `HOST-KEYWORD`。

不过这样的问题并不是特别常见，可以先不去管它，如果你遇到这样的问题，可以：

* 写一条与优先级高的规则一样的规则，在本地覆盖掉它；
* 或者想要完全按照规则的顺序匹配，可以在「设置」底部的「其他设置」的「VPN」下，将「分流匹配优化」关闭；

---

### 注意 **远程(引用)规则 先后顺序** 问题

通常，远程规则可以按照以下顺序进行放置

`修正规则`(例如苹果推送服务、不能被去广告分流REJECT的、与其他规则有冲突需要单独分流的)，此类规则的策略通常是`DIRECT`

👇

`广告屏蔽规则`，此类规则的策略通常是`REJECT`

👇

`需要单独分流的规则`（容易被包含在大合集里面，但是有单独分流的需求）

👇

`各种合集规则`（国外网站合集、国外媒体合集，按需添加）

👇

`FILTER_LAN`(内置的局域网规则集)

👇

`国内IP集/域名集/ASN集` 或 `FILTER_REGION`(内置的`geoip, cn ,direct`，国内规则通常有这一个就够了)

长按远程规则待右侧出现`≡`即可拖动摆放顺序

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/filter_remote_change.jpg" width="300">


---

### 注意 **本地与远程(引用)规则 先后顺序** 问题

默认情况下，Quantumult X 的 *本地规则* 总是位于 *远程规则* 的前面(Final除外，默认所有规则最后面)。

如此可能会产生什么问题？？来看一个示例，假设你的本地规则有一条规则：

```
[filter_local]
geoip, cn, direct
```

但**远程(引用)规则**中有一条这样的规则：

`ip-cidr, 180.76.76.76/32, reject`

此时远程规则并不会生效，因为顺序上来说**本地规则** `geoip, cn ,direct` (表示中国大陆的 IP 直连)位于**远程(引用)规则** `ip-cidr, 180.76.76.76/32, reject` 的前面，而 `180.76.76.76` 是中国大陆地区的 IP，所以先匹配到了如上**本地规则**，所以就没法执行如上**远程(引用)规则**了。

要解决这个问题，可以在该 **远程(引用)规则** 的分流配置中添加参数 `inserted-resource=true`，或在图形界面的远程分流文件的设置中，打开 **「插入资源」** 开关。

  - 开启「插入资源」的远程规则，优先级会高于本地，同时会显示在本地规则上方，启用图标也会变化成弯箭头

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/%E6%8F%92%E5%85%A5%E8%B5%84%E6%BA%90.jpg" width="600">

以上只是例子；

实际上，`geoip, cn ,direct`规则的最佳放置位置，应该是远程规则的最后面，有以下方法：

> 填写前建议先在 `设置`→最下方`其他设置`，找到并开启`资源`-`iCloud云盘`；


- 在添加远程规则时，资源路径填写`FILTER_REGION`；此时这条规则将会在「iCloud云盘 ▸ Quantumult X ▸ Profiles 文件夹」下生成一个`FILTER_REGION`文件，内容是`geoip, cn ,direct`。相当于将这条规则当成远程规则进行引用，只不过规则地址是本地(iCloud)。

- 或者可以如下图所示操作，通过配置片段，新建本地文件，将`geoip, cn ,direct`填入，文件名可自定义；此时资源路径会自动填充。
<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/UI2-3.JPEG" width="1200">

  - 或者从 `设置`→`配置文件`区域-`配置片段`→`分流`,一样可进行添加。
<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/UI2-4.jpg" width="600">


## 策略(策略组)

以下主要讲的是 `[filter_local]`、`[filter_remote]` 或 `[policy]`  区块下的内容，所以示例都以 `[filter_local]`、`[filter_remote]` 或 `[policy]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[filter_local]`、`[filter_remote]` 或 `[policy]`。


Policy：除了内置的 [3 个策略](https://github.com/Repcz/Tool/blob/X/QuantumultX/README.MD#filter%E5%8F%82%E6%95%B0)，还有以下策略：

- `Static`:「手动选择」，你需要手动选择想要的节点/策略组。
- `Available`：「故障转移」，将按顺序选择你列表中第一个可用的节点。
- `Round-Robin`：「节点轮询」，将按列表的顺序轮流使用其中的节点。
- `Dest-Hash`：「随机负载均衡」，相同域名走固定节点
- `URL-Latency-Benchmark`：「最低延迟」，选取延迟最低的节点。
- `SSID`：根据Wi-Fi的SSID参数选择策略

---

### 添加策略组

#### `Static`:「手动选择」

`Static` 策略用于「手动选择策略」。需要手动选择想要的节点/策略组。

 >　类似于 Surge 的 `Select` 策略组

需编辑配置文件，注意不要重复出现`[policy]`、`[filter_remote]`：

```
[policy]
static = Guard, reject, direct, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Hijacking.png

[filter_remote]
# 阻止广告
https://example.com/advertising.txt, tag=🛡️ Block Advertising, force-policy=Guard, update-interval=86400, opt-parser=true, inserted-resource=true, enabled=true

# 阻止追踪
https://example.com/tracking.txt, tag=🛡️ Block Tracking, force-policy=Guard, update-interval=86400, opt-parser=true, inserted-resource=true, enabled=true

# 阻止劫持
https://example.com/hijacking.txt, tag=🛡️ Block Hijacking, force-policy=Guard, update-interval=86400, opt-parser=true, inserted-resource=true, enabled=true
```

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/Static_1.PNG" width="600">


如上示例，新建了一个名为 `Guard` 的「手动选择策略组」，里面有阻止 (`REJECT`) 与直连 (`DIRECT`) 两个策略可供选择，还设置了一个策略图标。

然后添加了三条远程分流文件，分别关于广告、追踪与劫持的，强制它们的策略偏好指向 `Guard` 策略组。

这样，就可以使用一个开关管理关于广告、追踪与劫持的规则是开启 (阻止) 还是关闭 (直连)。

`img-url` 自定义图标参数是可选的，详见[节点资源图标](https://github.com/Repcz/Tool/blob/X/QuantumultX/README.MD#%E8%8A%82%E7%82%B9%E8%B5%84%E6%BA%90%E5%9B%BE%E6%A0%87)

##### UI添加

当然你也可以通过UI创建这样一个策略组：

> 需要先导入配置并导入节点，否则添加策略组的按钮不会显示

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/Static_2.jpg" width="900">

`需匹配的资源标签`是节点资源 (订阅) 的名称，一般是机场名称；

`需匹配的节点标签`很好理解，就是节点的名称；

- 点击「类型」可以选择「策略组类型」
- 右上角的`<>`可以在「正则筛选」或「手动引用」之间切换
  - UI「手动引用」只能在「策略组类型」为`Static`时使用
- 图标仅支持 `144x144` 或 `108x108`，支持彩色，可以通过UI选择，也可以通过`img-url`参数编辑


#### `Available`：「故障转移」

`Available` 策略用于自动回退代理服务器。将按顺序选择你列表中第一个可用的节点。

> 类似于 Surge 的 Fallback 策略组

```
[policy]
available = Available, ProxyA, ProxyB, ProxyC

[filter_local]
final, Available
```

当 ProxyA 故障时自动切换到 ProxyB，以此类推

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/Available.jpg" width="600">


#### `Round-Robin`：「节点轮询」

`Round-Robin` 轮询策略用于顺序轮流使用代理服务器

```
[policy]
round-robin = RoundRobin, ProxyA, ProxyB, ProxyC

[filter_local]
final, RoundRobin
```

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/Round-Robin.jpg" width="600">


#### `Dest-Hash`：「随机负载均衡」

`Dest-Hash` 策略用于随机负载均衡，相同域名走固定节点，此策略对于需要会话持久性的用例特别有用。

```
[policy]
dest-hash = DestHash, ProxyA, ProxyB, ProxyC

[filter_local]
final, DestHash
```

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/Dest-Hash.jpg" width="600">

#### `URL-Latency-Benchmark`：「最低延迟」

`URL-Latency-Benchmark` 策略用于自动测试选出延迟最低的代理服务器

⚠️ 注意：「延迟最低」不代表「服务器最快」，还需要考虑其他如带宽、丢包率等等

> 类似于 Surge 的 url-test 策略组

```
[policy]
url-latency-benchmark = AutoTest,  ProxyA, ProxyB, ProxyC, resource-tag-regex=^sample, server-tag-regex=^example, check-interval=600, alive-checking=false, tolerance=0

[filter_local]
final, AutoTest
```

`URL-Latency-Benchmark` 策略指向具有最佳 (评估 `tolerance` 参数，单位毫秒的) url latency 结果的服务器。

当用户手动启动 URL 测试时，其策略结果也将被更新。

此类型策略有一个名为 `check-interval` (秒) 的参数，如果此策略已由任何请求激活，则将考虑该间隔。

如果 `alive-checking` 被设置为 true，那么即使该策略处于空闲状态，也会考虑间隔时间，并启动基准测试。

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/URL-Latency-Benchmark.jpg" width="600">


#### `SSID`
该策略组无法通过UI添加，只能修改配置文件，其具体格式为：

`ssid = <策略名称>, <蜂窝数据下默认策略>, <Wi-Fi 下默认策略>, <SSID 名称: 策略>`

```
[policy]
ssid = SSID, ProxyA, ProxyA, TP-Link:ProxyB, D-Link:ProxyC

[filter_local]
final, SSID
```

如上示例，表示在`蜂窝数据网络`及 `Wi-Fi` 下默认使用 `ProxyA` 节点，然后就是指定`特定的 SSID` 所使用的策略，当网络位于 SSID 为 `TP-Link` 时使用 `ProxyB` 节点，为 `D-Link` 时使用 `ProxyC` 节点。

再举个例子，将 `SSID` 与 `URL-Latency-Benchmark` 相结合：

```
[policy]
static=全球加速, 香港SSID, proxy

ssid=香港SSID, 香港节点, 香港节点, Wi-Fi_5G:DIRECT

url-latency-benchmark=香港节点, server-tag-regex=^(?=.*((?i)🇭🇰|香港|(\b(HK|Hong)\b)))(?!.*((?i)回国|校园|游戏|(\b(GAME)\b))).*$, check-interval=600, tolerance=0, alive-checking=false

[filter_local]
final, 全球加速
```

当 `全球加速` 选中 `香港SSID` 时：
- 特定Wi-Fi下( Wi-Fi_5G)：`全球加速` → `香港SSID` → `DIRECT`
- 非特定Wi-Fi下：`全球加速` → `香港SSID` → `香港节点` → 策略组中选择的节点
- 蜂窝数据下：`全球加速` → `香港SSID` → `香港节点` → 策略组中选择的节点

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/SSID.jpg" width="900">


---

### 策略参数

具体参数如下，只能在配置文件中写入：

- `resource-tag-regex=` 表示使用`正则筛选`需要匹配的`资源标签`（比如机场名称）
- `server-tag-regex=` 表示使用`正则筛选`需要匹配的`节点标签`（比如节点中带有香港、美国这种）
  - 该参数无法筛选`[server_loacl]`下的本地节点，因此推荐本地节点以「配置片段」的方式添加
- `check-interval=600` 表示每`600`秒检查一次节点延迟，如果此策略已由任何请求激活，则将重新计算该间隔。
- `alive-checking=false` 如果被设置为`true`，那么即使该策略处于空闲状态，也会重新计算间隔时间，并启动基准测试。
- `tolerance=0` 表示上一次节点的最低延迟数值与本次节点最低延迟数值的差值，当超过这个差值时切换至最低延迟的节点

`resource-tag-regex=` 和 `server-tag-regex=` 两者结合在一起使用，既可以筛选出只需要某服务商的特定节点用于某个策略。

`resource-tag-regex=` 和 `server-tag-regex=` 仅适用于 `static`、`available` 和 `round-robin` 类型的策略。

---

### 修改策略组 & 删除策略组

#### 修改策略组

前文所述每条分流规则必须有[对应的策略](https://github.com/Repcz/Tool/blob/X/QuantumultX/README.MD#filter%E5%8F%82%E6%95%B0)。

同时，QX通过UI修改策略策略组名称时，并不会同步到其他位置

因此，

- 修改策略组`名称`，必须通过配置文件修改，不仅要修改policy中的策略组本身，其他被引用的部分也要修改。

比如其他引用了该「需要修改策略组」的策略组、策略偏好为「需要修改策略组」的分流规则，都需进行相应的修改。

eg: 将 `香港节点` 修改为 `香港`

```
[policy]

static=手动切换, 香港节点, 美国节点, 狮城节点, 日本节点, 台湾节点, direct
url-latency-benchmark=香港节点, server-tag-regex=香港, check-interval=600, alive-checking=false, tolerance=50

[filter_local]
final, 香港节点
```

👇 所有的 `香港节点` 都要修改

```
[policy]

static=手动切换, 香港, 美国节点, 狮城节点, 日本节点, 台湾节点, direct
url-latency-benchmark=香港, server-tag-regex=香港, check-interval=600, alive-checking=false, tolerance=50

[filter_local]
final, 香港
```

- 修改策略组`参数`
  - 比如修改 `resource-tag-regex`(需要匹配的`资源标签`)和 `server-tag-regex`(需要匹配的`节点标签`),这些可以直接UI修改
  - 如果是修改 `check-interval`、`alive-checking`、`tolerance`，则必须配置文件修改
  - 特例：当一个`static`策略组使用 `resource-tag-regex` 或 `server-tag-regex` 参数，并同时引用了 其他的策略组，此时UI编辑将失效，必须修改配置文件
    - eg：`static=手动切换, 香港节点, direct, server-tag-regex=.`


#### 删除策略组

如上文所述，需要删除每一处使用需要删除的策略组的地方，都需要修改。

eg: 将 `香港节点` 删除

```
[policy]

static=手动切换, 香港节点, 美国节点, 狮城节点, 日本节点, 台湾节点, direct
url-latency-benchmark=香港节点, server-tag-regex=香港, check-interval=600, alive-checking=false, tolerance=50

[filter_local]
final, 香港节点
```

👇 所有的 `香港节点` 都要删除，分流规则需要改为其他策略。

```
[policy]

static=手动切换, 美国节点, 狮城节点, 日本节点, 台湾节点, direct

[filter_local]
final, 美国节点
```

## DNS 相关设置

以 `;` 或 `#` 或 `//` 开头的行为注释行。

以下主要讲的是 `[dns]` 区块下的内容，所以示例都以 `[dns]` 开头表明在其之下，并不是让你每个参数字段前都加上 `[dns]`。

DNS 查询结果仅用于分流规则或通过直接策略连接，通过服务器连接时不会使用该结果，Quantumult 永远不会知道相关域名的目的 IP。

### 推荐 DNS 设置
```
[dns]
no-system
no-ipv6
server = 119.29.29.29
server = 223.5.5.5:53
```
此 DNS 设置适合绝大多数国内用户

### 传统 DNS 设置
```
[dns]
server = 119.29.29.29
server = 223.5.5.5:53
server = [2402:4e00::]
server = [2400:3200::1]

```
可以如上第二条那样指定端口


### 禁用系统 DNS
```
[dns]
no-system
```
如果你并不想使用系统 (通过 DHCP) 自动获取的 DNS 设置，可以如上设置，但需要注意应该设置至少一条自定义 DNS，如上述的 `server = 119.29.29.29`

### 禁用 IPv6
```
[dns]
no-ipv6
```
当设置 `no-ipv6` 时，Quantumult X Tunnel 的 DNS 模块将直接让 AAAA 查询失败，但仍然允许从 IPv6的 DNS 服务器查询 A 记录。

### 启用 IPv6
```
[dns]
no-system
server = 119.29.29.29
server = 223.5.5.5
server = [2402:4e00::]
server = [2400:3200::1]
```
同时需要在右下角风车「设置」→「其他设置」→「VPN」区域-开启/关闭「兼容性增强」


### 加密 DNS 设置

#### DNS over HTTPS
```
[dns]
;doh-server = https://exmaple1.com/dns-query, https://exmaple2.com/dns-query
doh-server = https://dns.alidns.com/dns-query
```
当设置 doh-server (DNS over HTTPS) 或 doq-server (DNS over QUIC)时，system 和所有其他未加密的常规 (没有特定的域与之绑定) 服务器将被忽略。

多个 (并发查询) doh-server 应配置在一行中，URLs 应以逗号分开。

如果 iOS 版本小于 iOS 13.0，最大的 doh-server 数量将被限制为 1；如果 iOS 版本小于iOS 15.0，最大的 doh-server 数量将被限制为 2。

当使用的 doh-server 不是基于 HTTP/2 时，DoH 将被暂时禁用，普通的服务器将被使用，直到下次启动 VPN 连接。

#### HTTP/3 的 DoH
```
[dns]
prefer-doh3
```
当 prefer-doh3 被设置时，DoH 将尝试通过 HTTP/3 的查询，如果失败，查询连接将退回到 HTTP/2。

由于 HTTP/2 和 HTTP/3 连接都支持复用，当改变该设置时它可能不会立即生效，但可以通过重新连接Quantumult X 隧道或手动改变当前网络环境，让它立即生效。

#### 自定义 DoH 的 User Agent
DoH 的 `User Agent` 需要在 `[general]` 设置：见 [节点延迟](https://github.com/Repcz/Tool/blob/X/QuantumultX/README.MD#%E8%8A%82%E7%82%B9%E5%BB%B6%E8%BF%9F)

#### DNS over QUIC
```
[dns]
;doq-server = quic://dns1.example.com, quic://dns2.example.com
doq-server = quic://dns.adguard.com
```
当设置 doh-server (DNS over HTTPS) 或 doq-server (DNS over QUIC)时，system 和所有其他未加密的常规 (没有特定的域与之绑定) 服务器将被忽略。

多个(并发查询) doq-server 应配置在一行中，URLs 应以逗号分隔。

DoQ 的默认端口是 853，如果双方同意使用其他端口，如 456，你可以设置为 `quic://dns.example.com:456。`

### 国内 DNS 推荐

#### 腾讯DNS

- IPv4 UDP：`119.29.29.29`
- IPv6 UDP：`[2402:4e00::]`
- DoH：`https://1.12.12.12/dns-query`, `https://120.53.53.53/dns-query`, `https://doh.pub/dns-query`

#### 阿里云DNS
- IPv4 UDP：`223.5.5.5`, `223.6.6.6`
- IPv6 UDP：`[2400:3200::1]`, `[2400:3200:baba::1]`
- DoH：`https://dns.alidns.com/dns-query`
- DoQ：`quic://dns.alidns.com:853`, `quic://223.5.5.5:853`, `quic://223.6.6.6:853`

### 指定 DNS 查询指定域名
```
[dns]
; 使用系统 DNS 解析 example.com
server = /example.com/system

; 使用 119.29.29.29 查询 qq.com 及其子域名
server = /qq.com/119.29.29.29
server = /*.qq.com/119.29.29.29:53

; 使用 [2001:4860:4860::8888] 的 53 端口解析 example.com
server = /example.com/[2001:4860:4860::8888]:53
```
可以如上指定 DNS 查询特定域名，如需要指定端口号，可以在 DNS 后面加上英文冒号及端口号。

### 本地 DNS 映射
```
[dns]
; 指定域名到特定 IP 地址
;address = /example5.com/192.168.16.18
;address = /example6.com/[2001:8d3:8d3:8d3:8d3:8d3:8d3:8d3]

; 别名
alias = /example7.com/another-example.com
```
这里不允许直接为某个域设置 `127.0.0.1`。

如果想让某个域 (例如 example.com) 为 `127.0.0.1`，只需在 `[filter_local]` 部分添加 `host, example.com, reject`，REJECT 操作将向查询返回具有 `127.0.0.1` 的 DNS 响应。

### 在指定 SSID 下生效或失效
在 SSID 为 `SSID1` 时不使用 `8.8.8.8`：
```
[dns]
server = 8.8.8.8, excluded_ssids=SSID1
```
在 SSID 为 `SSID2` 时使用 `8.8.4.4`：

```
[dns]
server = 8.8.4.4:53, included_ssids=SSID2
```
### 规避指定结果
```
[dns]
circumvent-ipv4-answer = 127.0.0.1, 0.0.0.0
circumvent-ipv6-answer = ::
```
用于指定 DNS 服务器返回的 A 及 AAAA 记录中哪些属于无效结果

可使用通配符 `?` 与 `*`

⚠️ 注意：

> 当并发向多个上游 DNS 进行查询时，如响应最快的上游 DNS 抢答的结果命中了该条目，则 Quantumult X Tunnel DNS 模块会等待其他 DNS 服务器的响应结果（如抢答的结果中至少有一个不属于该条目，则不会等待其他 DNS 的响应，此时有效结果采用不属于该条目的所有记录）；

> 如所有上游 DNS 返回的所有结果均命中该条目，则判定为 DNS 查询失败；

> 如配置的上游 DNS 包含有去广告功能的 DNS 服务器，请勿使用该参数；


## MitM & 证书

所有的HTTPS解密、重写(rewrite)和[中间人攻击](https://zh.wikipedia.org/wiki/%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%94%BB%E5%87%BB)(MitM)，均依赖于根证书

### 安装并信任证书

> 建议先导入配置

- 点击右下角风车进入「设置」 → 在「MitM」区域，点击「生成证书」

- 点击「配置证书」 → 跳转Safari，点击允许 → 点击「iPhone」

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/MITM1.jpg" width="1500">

- 进入「系统设置」 → 「已下载描述文件」 → 输入密码并安装

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/MITM2.jpg" width="900">

- 进入「系统设置」 → 「通用」 → 「关于本机」 → 最下方「证书信任设置」 → 勾选刚才安装的证书

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/MITM3.jpg" width="900">

- 返回QX，点击右下角风车进入「设置」 → 在「MitM」区域，勾选「MitM」开关

### 备份证书

当完成上面的步骤后，会在配置文件 `[mitm]` 区域，生成对应的`passphrase`和`p12`数据

```
[mitm]
passphrase = 
p12 = 

```

当需要替换其他配置时，只需要将对应的`passphrase`和`p12`数据复制粘贴到新的配置中去，就无需再次安装证书

### 主机名

```
[mitm]
hostname = abc.com

```

- 可使用通配符 `*` 和 `?` ；
- 可使用前缀 `-` 将特定主机名排除；
- 配置文件中，多个主机名可用 `,` 分割
- 单独的`*`符合作为主机名参数会匹配所有主机名

#### UI 查看 & 添加

点击右下角风车进入「设置」 → 「MitM」区域-「主机名」

<img src="https://github.com/Repcz/Tool/blob/X/QuantumultX/Photo/HOSTNAME.jpg" width="900">

### `[mitm]` 其他参数

```
[mitm]
# 跳过验证证书
skip_validating_cert = false
# 强制嗅探域名
force_sni_domain_name = false

# 当使用 Quantumult X 在 M 芯片的 Mac 设备上作为局域网网关时，使用下面的参数来 跳过某些特定设备的 mitm 需求
;skip_src_ip = 192.168.4.50, 92.168.4.51
# 当多个不同的 TCP 连接（非域名类请求）的目标 IP 不同，但这些连接的 TSL 握手 SNI 字段相同时，如需跳过其中某些连接的 MitM hostname 匹配过程，可使用👇参数。
;skip_dst_ip = 123.44.55.4

```

## 重写(rewrite)

## HTTP 请求

## HTTP 抓取

## 其他设置

## 配置文件`[general]`部分