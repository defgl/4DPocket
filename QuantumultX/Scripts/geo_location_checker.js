if ($response.statusCode !== 200) {
    $done(null);
  }
  
  // const emojis = [
  //   "🆘",
  //   "🈲",
  //   "⚠️",
  //   "🔞",
  //   "📵",
  //   "🚦",
  //   "🏖",
  //   "🖥",
  //   "📺",
  //   "🐧",
  //   "🐬",
  //   "🦉",
  //   "🍄",
  //   "⛳️",
  //   "🚴",
  //   "🤑",
  //   "👽",
  //   "🤖",
  //   "🎃",
  //   "👺",
  //   "👁",
  //   "🐶",
  //   "🐼",
  //   "🐌",
  //   "👥",
  // ];

  const emojis = [
     "🐻‍❄️", // Rabbit
     "🦊", // Fox
     "🐻", // Bear
     "🐼", // Panda
     "🐨", // Koala
     "🐯", // Tiger
     "🐷", // Pig
     "🐖", // Pig2
     "🦌", // Deer
     "🐕", // Dog2
     "🐈", // Cat2
     "🐉", // Dragon
     "🐲", // Dragon Face
     "☘️", // Shamrock
     "🍀", // Four Leaf Clover
    "🎍", // Bamboo
    "🎋", // Tanabata Tree
    "🍃", // Leaf Fluttering in Wind
    "🌞", // Sun with Face
    "🌝", // Full Moon with Face
    "🌛", // First Quarter Moon with Face
    "🌜", // Last Quarter Moon with Face
    "🌚", // New Moon with Face
    "🌕", // Full Moon
    "🌖", // Waning Gibbous Moon
    "🌗", // Last Quarter Moon
    "🌘", // Waning Crescent Moon
    "🌑", // New Moon
    "🌒", // Waxing Crescent Moon
    "🌓", // First Quarter Moon
    "🌔", // Waxing Gibbous Moon
    "🌙", // Crescent Moon
    "🌎", // Earth Americas
    "🌍", // Earth Africa
    "🌏", // Earth Asia
    "🪐", // Ringed Planet
    "💫", // Dizzy
    "⭐️", // Star
    "🌟", // Glowing Star
    "✨", // Sparkles
    "⚡️", // High Voltage
    "☄️", // Comet
    "☀️", // Sun
    "🌤", // Sun Behind Small Cloud
    "⛅️", // Sun Behind Cloud
    "🌥", // Sun Behind Large Cloud
    "☁️", // Cloud
    "🌦", // Sun Behind Rain Cloud
    "🌧", // Cloud with Rain
    "⛈", // Cloud with Lightning and Rain
    "🌩", // Cloud with Lightning
    "🌨", // Cloud with Snow
    "❄️", // Snowflake
    "☃️", // Snowman
    "⛄️", // Snowman Without Snow
    "🌬", // Wind Face
    "💨", // Dashing Away
    "☔️", // Umbrella with Rain Drops
    "☂️", // Umbrella
    "🌊", // Water Wave
    "🌫", // Fog
];

  let defalutCity = "高谭市";
  let ispISP = "Cross-GFW.org";
  
  function City_ValidCheck(para) {
    if(para) {
    return para
    } else
    {
    return defalutCity
    }
  }
  
  function ISP_ValidCheck(para) {
    if(para) {
    return para
    } else
    {
    return ispISP
    }
  }
  
  function Area_check(para) {
    if(para=="中华民国"){
    return "台湾"
    } else
    {
    return para
    }
  }
  
  var flags = new Map([["AC","🇦🇨"],["AD","🇦🇩"],["AE","🇦🇪"],["AF","🇦🇫"],["AG","🇦🇬"],["AI","🇦🇮"],["AL","🇦🇱"],["AM","🇦🇲"],["AO","🇦🇴"],["AQ","🇦🇶"],["AR","🇦🇷"],["AS","🇦🇸"],["AT","🇦🇹"],["AU","🇦🇺"],["AW","🇦🇼"],["AX","🇦🇽"],["AZ","🇦🇿"],["BA","🇧🇦"],["BB","🇧🇧"],["BD","🇧🇩"],["BE","🇧🇪"],["BF","🇧🇫"],["BG","🇧🇬"],["BH","🇧🇭"],["BI","🇧🇮"],["BJ","🇧🇯"],["BM","🇧🇲"],["BN","🇧🇳"],["BO","🇧🇴"],["BR","🇧🇷"],["BS","🇧🇸"],["BT","🇧🇹"],["BV","🇧🇻"],["BW","🇧🇼"],["BY","🇧🇾"],["BZ","🇧🇿"],["CA","🇨🇦"],["CD","🇨🇩"],["CF","🇨🇫"],["CG","🇨🇬"],["CH","🇨🇭"],["CI","🇨🇮"],["CK","🇨🇰"],["CL","🇨🇱"],["CM","🇨🇲"],["CN","🇨🇳"],["CO","🇨🇴"],["CP","🇨🇵"],["CR","🇨🇷"],["CU","🇨🇺"],["CV","🇨🇻"],["CW","🇨🇼"],["CX","🇨🇽"],["CY","🇨🇾"],["CZ","🇨🇿"],["DE","🇩🇪"],["DG","🇩🇬"],["DJ","🇩🇯"],["DK","🇩🇰"],["DM","🇩🇲"],["DO","🇩🇴"],["DZ","🇩🇿"],["EA","🇪🇦"],["EC","🇪🇨"],["EE","🇪🇪"],["EG","🇪🇬"],["EH","🇪🇭"],["ER","🇪🇷"],["ES","🇪🇸"],["ET","🇪🇹"],["EU","🇪🇺"],["FI","🇫🇮"],["FJ","🇫🇯"],["FK","🇫🇰"],["FM","🇫🇲"],["FO","🇫🇴"],["FR","🇫🇷"],["GA","🇬🇦"],["GB","🇬🇧"],["GD","🇬🇩"],["GE","🇬🇪"],["GF","🇬🇫"],["GH","🇬🇭"],["GI","🇬🇮"],["GL","🇬🇱"],["GM","🇬🇲"],["GN","🇬🇳"],["GP","🇬🇵"],["GR","🇬🇷"],["GT","🇬🇹"],["GU","🇬🇺"],["GW","🇬🇼"],["GY","🇬🇾"],["HK","🇭🇰"],["HN","🇭🇳"],["HR","🇭🇷"],["HT","🇭🇹"],["HU","🇭🇺"],["ID","🇮🇩"],["IE","🇮🇪"],["IL","🇮🇱"],["IM","🇮🇲"],["IN","🇮🇳"],["IR","🇮🇷"],["IS","🇮🇸"],["IT","🇮🇹"],["JM","🇯🇲"],["JO","🇯🇴"],["JP","🇯🇵"],["KE","🇰🇪"],["KG","🇰🇬"],["KH","🇰🇭"],["KI","🇰🇮"],["KM","🇰🇲"],["KN","🇰🇳"],["KP","🇰🇵"],["KR","🇰🇷"],["KW","🇰🇼"],["KY","🇰🇾"],["KZ","🇰🇿"],["LA","🇱🇦"],["LB","🇱🇧"],["LC","🇱🇨"],["LI","🇱🇮"],["LK","🇱🇰"],["LR","🇱🇷"],["LS","🇱🇸"],["LT","🇱🇹"],["LU","🇱🇺"],["LV","🇱🇻"],["LY","🇱🇾"],["MA","🇲🇦"],["MC","🇲🇨"],["MD","🇲🇩"],["MG","🇲🇬"],["MH","🇲🇭"],["MK","🇲🇰"],["ML","🇲🇱"],["MM","🇲🇲"],["MN","🇲🇳"],["MO","🇲🇴"],["MP","🇲🇵"],["MQ","🇲🇶"],["MR","🇲🇷"],["MS","🇲🇸"],["MT","🇲🇹"],["MU","🇲🇺"],["MV","🇲🇻"],["MW","🇲🇼"],["MX","🇲🇽"],["MY","🇲🇾"],["MZ","🇲🇿"],["NA","🇳🇦"],["NC","🇳🇨"],["NE","🇳🇪"],["NF","🇳🇫"],["NG","🇳🇬"],["NI","🇳🇮"],["NL","🇳🇱"],["NO","🇳🇴"],["NP","🇳🇵"],["NR","🇳🇷"],["NZ","🇳🇿"],["OM","🇴🇲"],["PA","🇵🇦"],["PE","🇵🇪"],["PF","🇵🇫"],["PG","🇵🇬"],["PH","🇵🇭"],["PK","🇵🇰"],["PL","🇵🇱"],["PM","🇵🇲"],["PR","🇵🇷"],["PS","🇵🇸"],["PT","🇵🇹"],["PW","🇵🇼"],["PY","🇵🇾"],["QA","🇶🇦"],["RE","🇷🇪"],["RO","🇷🇴"],["RS","🇷🇸"],["RU","🇷🇺"],["RW","🇷🇼"],["SA","🇸🇦"],["SB","🇸🇧"],["SC","🇸🇨"],["SD","🇸🇩"],["SE","🇸🇪"],["SG","🇸🇬"],["SI","🇸🇮"],["SK","🇸🇰"],["SL","🇸🇱"],["SM","🇸🇲"],["SN","🇸🇳"],["SR","🇸🇷"],["ST","🇸🇹"],["SV","🇸🇻"],["SY","🇸🇾"],["SZ","🇸🇿"],["TC","🇹🇨"],["TD","🇹🇩"],["TG","🇹🇬"],["TH","🇹🇭"],["TJ","🇹🇯"],["TL","🇹🇱"],["TM","🇹🇲"],["TN","🇹🇳"],["TO","🇹🇴"],["TR","🇹🇷"],["TT","🇹🇹"],["TV","🇹🇻"],["TW","🇨🇳"],["TZ","🇹🇿"],["UA","🇺🇦"],["UG","🇺🇬"],["UK","🇬🇧"],["UM","🇺🇲"],["US","🇺🇸"],["UY","🇺🇾"],["UZ","🇺🇿"],["VA","🇻🇦"],["VC","🇻🇨"],["VE","🇻🇪"],["VG","🇻🇬"],["VI","🇻🇮"],["VN","🇻🇳"],["VU","🇻🇺"],["WS","🇼🇸"],["YE","🇾🇪"],["YT","🇾🇹"],["ZA","🇿🇦"],["ZM","🇿🇲"],["ZW","🇿🇼"]])
  
  let body = $response.body;
  
  let obj = JSON.parse(body);
  
  let title = `${flags.get(obj['countryCode'])} | ${Area_check(obj['country'])} , ${City_ValidCheck(obj['city'])}`
  
  // let subtitle = `🌐 | ${ISP_ValidCheck(obj['org'])}`;

  let subtitle = `${emojis[Math.floor(Math.random() * emojis.length)]} | ${ISP_ValidCheck(obj['org'])}`;
  
  let ip = obj['query'];
  
  let description = `ISP: ${obj['isp']}
  Latitude: [ ${obj["latitude"]},${obj["longitude"]} ] 
  IP: ${obj['query']}
  Timezone: ${obj['timezone']}`;
  
  $done({title, subtitle, ip, description});