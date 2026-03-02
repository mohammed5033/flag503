/*
  تدريب أعلام الدول والأقاليم (250+)
  - صور الأعلام من https://flagcdn.com عبر كود ISO-3166-1 alpha-2 بحروف صغيرة
  - رابط الصورة: https://flagcdn.com/w320/{code}.png
  - هذا الإصدار يحوّل الأسئلة إلى اختيار من 4 خيارات بالعربية (إجابة واحدة صحيحة)
*/

function makeUrl(code) {
  return `https://flagcdn.com/w320/${code.toLowerCase()}.png`;
}

// قائمة موسعة للدول والأقاليم (ISO alpha-2 فقط لضمان توفر الصور)
// الحقول: code, nameEn, nameAr, region, isTerritory?
const entries = [
  // أفريقيا
  {code:'dz', nameEn:'Algeria', nameAr:'الجزائر', region:'africa'},
  {code:'ao', nameEn:'Angola', nameAr:'أنغولا', region:'africa'},
  {code:'bj', nameEn:'Benin', nameAr:'بنين', region:'africa'},
  {code:'bw', nameEn:'Botswana', nameAr:'بوتسوانا', region:'africa'},
  {code:'bf', nameEn:'Burkina Faso', nameAr:'بوركينا فاسو', region:'africa'},
  {code:'bi', nameEn:'Burundi', nameAr:'بوروندي', region:'africa'},
  {code:'cm', nameEn:'Cameroon', nameAr:'الكاميرون', region:'africa'},
  {code:'cv', nameEn:'Cabo Verde', nameAr:'الرأس الأخضر', region:'africa'},
  {code:'cf', nameEn:'Central African Republic', nameAr:'جمهورية أفريقيا الوسطى', region:'africa'},
  {code:'td', nameEn:'Chad', nameAr:'تشاد', region:'africa'},
  {code:'km', nameEn:'Comoros', nameAr:'جزر القمر', region:'africa'},
  {code:'cd', nameEn:'Congo (DRC)', nameAr:'الكونغو الديمقراطية', region:'africa'},
  {code:'cg', nameEn:'Congo (Republic)', nameAr:'الكونغو', region:'africa'},
  {code:'ci', nameEn:"Côte d'Ivoire", nameAr:'ساحل العاج', region:'africa'},
  {code:'dj', nameEn:'Djibouti', nameAr:'جيبوتي', region:'africa'},
  {code:'eg', nameEn:'Egypt', nameAr:'مصر', region:'africa'},
  {code:'gq', nameEn:'Equatorial Guinea', nameAr:'غينيا الاستوائية', region:'africa'},
  {code:'er', nameEn:'Eritrea', nameAr:'إريتريا', region:'africa'},
  {code:'sz', nameEn:'Eswatini', nameAr:'إسواتيني', region:'africa'},
  {code:'et', nameEn:'Ethiopia', nameAr:'إثيوبيا', region:'africa'},
  {code:'ga', nameEn:'Gabon', nameAr:'الغابون', region:'africa'},
  {code:'gm', nameEn:'Gambia', nameAr:'غامبيا', region:'africa'},
  {code:'gh', nameEn:'Ghana', nameAr:'غانا', region:'africa'},
  {code:'gn', nameEn:'Guinea', nameAr:'غينيا', region:'africa'},
  {code:'gw', nameEn:'Guinea-Bissau', nameAr:'غينيا بيساو', region:'africa'},
  {code:'ke', nameEn:'Kenya', nameAr:'كينيا', region:'africa'},
  {code:'ls', nameEn:'Lesotho', nameAr:'ليسوثو', region:'africa'},
  {code:'lr', nameEn:'Liberia', nameAr:'ليبيريا', region:'africa'},
  {code:'ly', nameEn:'Libya', nameAr:'ليبيا', region:'africa'},
  {code:'mg', nameEn:'Madagascar', nameAr:'مدغشقر', region:'africa'},
  {code:'mw', nameEn:'Malawi', nameAr:'مالاوي', region:'africa'},
  {code:'ml', nameEn:'Mali', nameAr:'مالي', region:'africa'},
  {code:'mr', nameEn:'Mauritania', nameAr:'موريتانيا', region:'africa'},
  {code:'mu', nameEn:'Mauritius', nameAr:'موريشيوس', region:'africa'},
  {code:'yt', nameEn:'Mayotte', nameAr:'مايوت', region:'africa', isTerritory:true},
  {code:'ma', nameEn:'Morocco', nameAr:'المغرب', region:'africa'},
  {code:'mz', nameEn:'Mozambique', nameAr:'موزمبيق', region:'africa'},
  {code:'na', nameEn:'Namibia', nameAr:'ناميبيا', region:'africa'},
  {code:'ne', nameEn:'Niger', nameAr:'النيجر', region:'africa'},
  {code:'ng', nameEn:'Nigeria', nameAr:'نيجيريا', region:'africa'},
  {code:'re', nameEn:'Réunion', nameAr:'ريونيون', region:'africa', isTerritory:true},
  {code:'rw', nameEn:'Rwanda', nameAr:'رواندا', region:'africa'},
  {code:'sh', nameEn:'Saint Helena, Ascension and Tristan da Cunha', nameAr:'سانت هيلينا وأساسينشين وتريستان دا كونا', region:'africa', isTerritory:true},
  {code:'st', nameEn:'São Tomé and Príncipe', nameAr:'ساو تومي وبرينسيب', region:'africa'},
  {code:'sn', nameEn:'Senegal', nameAr:'السنغال', region:'africa'},
  {code:'sc', nameEn:'Seychelles', nameAr:'سيشل', region:'africa'},
  {code:'sl', nameEn:'Sierra Leone', nameAr:'سيراليون', region:'africa'},
  {code:'so', nameEn:'Somalia', nameAr:'الصومال', region:'africa'},
  {code:'za', nameEn:'South Africa', nameAr:'جنوب أفريقيا', region:'africa'},
  {code:'ss', nameEn:'South Sudan', nameAr:'جنوب السودان', region:'africa'},
  {code:'sd', nameEn:'Sudan', nameAr:'السودان', region:'africa'},
  {code:'tz', nameEn:'Tanzania', nameAr:'تنزانيا', region:'africa'},
  {code:'tg', nameEn:'Togo', nameAr:'توغو', region:'africa'},
  {code:'tn', nameEn:'Tunisia', nameAr:'تونس', region:'africa'},
  {code:'ug', nameEn:'Uganda', nameAr:'أوغندا', region:'africa'},
  {code:'eh', nameEn:'Western Sahara', nameAr:'الصحراء الغربية', region:'africa', isTerritory:true},
  {code:'zm', nameEn:'Zambia', nameAr:'زامبيا', region:'africa'},
  {code:'zw', nameEn:'Zimbabwe', nameAr:'زيمبابوي', region:'africa'},

  // الأمريكيتان
  {code:'ai', nameEn:'Anguilla', nameAr:'أنغويلا', region:'americas', isTerritory:true},
  {code:'ag', nameEn:'Antigua and Barbuda', nameAr:'أنتيغوا وبربودا', region:'americas'},
  {code:'ar', nameEn:'Argentina', nameAr:'الأرجنتين', region:'americas'},
  {code:'aw', nameEn:'Aruba', nameAr:'أروبا', region:'americas', isTerritory:true},
  {code:'bs', nameEn:'Bahamas', nameAr:'باهاماس', region:'americas'},
  {code:'bb', nameEn:'Barbados', nameAr:'بربادوس', region:'americas'},
  {code:'bz', nameEn:'Belize', nameAr:'بليز', region:'americas'},
  {code:'bm', nameEn:'Bermuda', nameAr:'برمودا', region:'americas', isTerritory:true},
  {code:'bo', nameEn:'Bolivia', nameAr:'بوليفيا', region:'americas'},
  {code:'br', nameEn:'Brazil', nameAr:'البرازيل', region:'americas'},
  {code:'bq', nameEn:'Bonaire, Sint Eustatius and Saba', nameAr:'بونير وسانت أوستاتيوس وسابا', region:'americas', isTerritory:true},
  {code:'vg', nameEn:'British Virgin Islands', nameAr:'جزر فيرجن البريطانية', region:'americas', isTerritory:true},
  {code:'ca', nameEn:'Canada', nameAr:'كندا', region:'americas'},
  {code:'ky', nameEn:'Cayman Islands', nameAr:'جزر كايمان', region:'americas', isTerritory:true},
  {code:'cl', nameEn:'Chile', nameAr:'تشيلي', region:'americas'},
  {code:'co', nameEn:'Colombia', nameAr:'كولومبيا', region:'americas'},
  {code:'cr', nameEn:'Costa Rica', nameAr:'كوستاريكا', region:'americas'},
  {code:'cu', nameEn:'Cuba', nameAr:'كوبا', region:'americas'},
  {code:'cw', nameEn:'Curaçao', nameAr:'كوراساو', region:'americas', isTerritory:true},
  {code:'dm', nameEn:'Dominica', nameAr:'دومينيكا', region:'americas'},
  {code:'do', nameEn:'Dominican Republic', nameAr:'جمهورية الدومينيكان', region:'americas'},
  {code:'ec', nameEn:'Ecuador', nameAr:'الإكوادور', region:'americas'},
  {code:'sv', nameEn:'El Salvador', nameAr:'السلفادور', region:'americas'},
  {code:'fk', nameEn:'Falkland Islands', nameAr:'جزر فوكلاند', region:'americas', isTerritory:true},
  {code:'gf', nameEn:'French Guiana', nameAr:'غويانا الفرنسية', region:'americas', isTerritory:true},
  {code:'gl', nameEn:'Greenland', nameAr:'غرينلاند', region:'americas', isTerritory:true},
  {code:'gd', nameEn:'Grenada', nameAr:'غرينادا', region:'americas'},
  {code:'gp', nameEn:'Guadeloupe', nameAr:'غوادلوب', region:'americas', isTerritory:true},
  {code:'gt', nameEn:'Guatemala', nameAr:'غواتيمالا', region:'americas'},
  {code:'gy', nameEn:'Guyana', nameAr:'غيانا', region:'americas'},
  {code:'ht', nameEn:'Haiti', nameAr:'هايتي', region:'americas'},
  {code:'hn', nameEn:'Honduras', nameAr:'هندوراس', region:'americas'},
  {code:'jm', nameEn:'Jamaica', nameAr:'جامايكا', region:'americas'},
  {code:'mq', nameEn:'Martinique', nameAr:'مارتينيك', region:'americas', isTerritory:true},
  {code:'mx', nameEn:'Mexico', nameAr:'المكسيك', region:'americas'},
  {code:'ms', nameEn:'Montserrat', nameAr:'مونتسرات', region:'americas', isTerritory:true},
  {code:'ni', nameEn:'Nicaragua', nameAr:'نيكاراغوا', region:'americas'},
  {code:'pa', nameEn:'Panama', nameAr:'بنما', region:'americas'},
  {code:'py', nameEn:'Paraguay', nameAr:'باراغواي', region:'americas'},
  {code:'pe', nameEn:'Peru', nameAr:'بيرو', region:'americas'},
  {code:'pr', nameEn:'Puerto Rico', nameAr:'بورتوريكو', region:'americas', isTerritory:true},
  {code:'bl', nameEn:'Saint Barthélemy', nameAr:'سان بارتليمي', region:'americas', isTerritory:true},
  {code:'kn', nameEn:'Saint Kitts and Nevis', nameAr:'سانت كيتس ونيفيس', region:'americas'},
  {code:'lc', nameEn:'Saint Lucia', nameAr:'سانت لوسيا', region:'americas'},
  {code:'mf', nameEn:'Saint Martin (French part)', nameAr:'سان مارتن (فرنسا)', region:'americas', isTerritory:true},
  {code:'pm', nameEn:'Saint Pierre and Miquelon', nameAr:'سان بيير وميكلون', region:'americas', isTerritory:true},
  {code:'vc', nameEn:'Saint Vincent and the Grenadines', nameAr:'سانت فينسنت والغرينادين', region:'americas'},
  {code:'sx', nameEn:'Sint Maarten (Dutch part)', nameAr:'سينت مارتن (هولندا)', region:'americas', isTerritory:true},
  {code:'sr', nameEn:'Suriname', nameAr:'سورينام', region:'americas'},
  {code:'tt', nameEn:'Trinidad and Tobago', nameAr:'ترينيداد وتوباغو', region:'americas'},
  {code:'tc', nameEn:'Turks and Caicos Islands', nameAr:'جزر تركس وكايكوس', region:'americas', isTerritory:true},
  {code:'us', nameEn:'United States', nameAr:'الولايات المتحدة', region:'americas'},
  {code:'uy', nameEn:'Uruguay', nameAr:'الأوروغواي', region:'americas'},
  {code:'ve', nameEn:'Venezuela', nameAr:'فنزويلا', region:'americas'},
  {code:'vi', nameEn:'U.S. Virgin Islands', nameAr:'جزر فيرجن الأمريكية', region:'americas', isTerritory:true},
  {code:'io', nameEn:'British Indian Ocean Territory', nameAr:'إقليم المحيط الهندي البريطاني', region:'asia', isTerritory:true},
  {code:'um', nameEn:'U.S. Minor Outlying Islands', nameAr:'جزر الولايات المتحدة الصغيرة النائية', region:'oceania', isTerritory:true},

  // آسيا
  {code:'af', nameEn:'Afghanistan', nameAr:'أفغانستان', region:'asia'},
  {code:'am', nameEn:'Armenia', nameAr:'أرمينيا', region:'asia'},
  {code:'az', nameEn:'Azerbaijan', nameAr:'أذربيجان', region:'asia'},
  {code:'bh', nameEn:'Bahrain', nameAr:'البحرين', region:'asia'},
  {code:'bd', nameEn:'Bangladesh', nameAr:'بنغلاديش', region:'asia'},
  {code:'bt', nameEn:'Bhutan', nameAr:'بوتان', region:'asia'},
  {code:'bn', nameEn:'Brunei', nameAr:'بروناي', region:'asia'},
  {code:'kh', nameEn:'Cambodia', nameAr:'كمبوديا', region:'asia'},
  {code:'cn', nameEn:'China', nameAr:'الصين', region:'asia'},
  {code:'cx', nameEn:'Christmas Island', nameAr:'جزيرة كريسماس', region:'asia', isTerritory:true},
  {code:'cc', nameEn:'Cocos (Keeling) Islands', nameAr:'جزر كوكوس', region:'asia', isTerritory:true},
  {code:'ge', nameEn:'Georgia', nameAr:'جورجيا', region:'asia'},
  {code:'hk', nameEn:'Hong Kong', nameAr:'هونغ كونغ', region:'asia', isTerritory:true},
  {code:'in', nameEn:'India', nameAr:'الهند', region:'asia'},
  {code:'id', nameEn:'Indonesia', nameAr:'إندونيسيا', region:'asia'},
  {code:'ir', nameEn:'Iran', nameAr:'إيران', region:'asia'},
  {code:'iq', nameEn:'Iraq', nameAr:'العراق', region:'asia'},
  {code:'il', nameEn:'Israel', nameAr:'إسرائيل', region:'asia'},
  {code:'jp', nameEn:'Japan', nameAr:'اليابان', region:'asia'},
  {code:'jo', nameEn:'Jordan', nameAr:'الأردن', region:'asia'},
  {code:'kz', nameEn:'Kazakhstan', nameAr:'كازاخستان', region:'asia'},
  {code:'kw', nameEn:'Kuwait', nameAr:'الكويت', region:'asia'},
  {code:'kg', nameEn:'Kyrgyzstan', nameAr:'قيرغيزستان', region:'asia'},
  {code:'la', nameEn:'Laos', nameAr:'لاوس', region:'asia'},
  {code:'lb', nameEn:'Lebanon', nameAr:'لبنان', region:'asia'},
  {code:'mo', nameEn:'Macao', nameAr:'ماكاو', region:'asia', isTerritory:true},
  {code:'my', nameEn:'Malaysia', nameAr:'ماليزيا', region:'asia'},
  {code:'mv', nameEn:'Maldives', nameAr:'المالديف', region:'asia'},
  {code:'mn', nameEn:'Mongolia', nameAr:'منغوليا', region:'asia'},
  {code:'mm', nameEn:'Myanmar', nameAr:'ميانمار', region:'asia'},
  {code:'np', nameEn:'Nepal', nameAr:'نيبال', region:'asia'},
  {code:'kp', nameEn:'North Korea', nameAr:'كوريا الشمالية', region:'asia'},
  {code:'om', nameEn:'Oman', nameAr:'عُمان', region:'asia'},
  {code:'pk', nameEn:'Pakistan', nameAr:'باكستان', region:'asia'},
  {code:'ps', nameEn:'Palestine', nameAr:'فلسطين', region:'asia'},
  {code:'ph', nameEn:'Philippines', nameAr:'الفلبين', region:'asia'},
  {code:'qa', nameEn:'Qatar', nameAr:'قطر', region:'asia'},
  {code:'sa', nameEn:'Saudi Arabia', nameAr:'السعودية', region:'asia'},
  {code:'sg', nameEn:'Singapore', nameAr:'سنغافورة', region:'asia'},
  {code:'kr', nameEn:'South Korea', nameAr:'كوريا الجنوبية', region:'asia'},
  {code:'lk', nameEn:'Sri Lanka', nameAr:'سريلانكا', region:'asia'},
  {code:'sy', nameEn:'Syria', nameAr:'سوريا', region:'asia'},
  {code:'tw', nameEn:'Taiwan', nameAr:'تايوان', region:'asia'},
  {code:'tj', nameEn:'Tajikistan', nameAr:'طاجيكستان', region:'asia'},
  {code:'th', nameEn:'Thailand', nameAr:'تايلاند', region:'asia'},
  {code:'tl', nameEn:'Timor-Leste', nameAr:'تيمور الشرقية', region:'asia'},
  {code:'tr', nameEn:'Türkiye', nameAr:'تركيا', region:'asia'},
  {code:'tm', nameEn:'Turkmenistan', nameAr:'تركمانستان', region:'asia'},
  {code:'ae', nameEn:'United Arab Emirates', nameAr:'الإمارات', region:'asia'},
  {code:'uz', nameEn:'Uzbekistan', nameAr:'��وزبكستان', region:'asia'},
  {code:'vn', nameEn:'Vietnam', nameAr:'فيتنام', region:'asia'},
  {code:'ye', nameEn:'Yemen', nameAr:'اليمن', region:'asia'},

  // أوروبا
  {code:'al', nameEn:'Albania', nameAr:'ألبانيا', region:'europe'},
  {code:'ad', nameEn:'Andorra', nameAr:'أندورا', region:'europe'},
  {code:'at', nameEn:'Austria', nameAr:'النمسا', region:'europe'},
  {code:'by', nameEn:'Belarus', nameAr:'بيلاروس', region:'europe'},
  {code:'be', nameEn:'Belgium', nameAr:'بلجيكا', region:'europe'},
  {code:'ba', nameEn:'Bosnia and Herzegovina', nameAr:'البوسنة والهرسك', region:'europe'},
  {code:'bg', nameEn:'Bulgaria', nameAr:'بلغاريا', region:'europe'},
  {code:'hr', nameEn:'Croatia', nameAr:'كرواتيا', region:'europe'},
  {code:'cy', nameEn:'Cyprus', nameAr:'قبرص', region:'europe'},
  {code:'cz', nameEn:'Czechia', nameAr:'تشيكيا', region:'europe'},
  {code:'dk', nameEn:'Denmark', nameAr:'الدنمارك', region:'europe'},
  {code:'ee', nameEn:'Estonia', nameAr:'إستونيا', region:'europe'},
  {code:'fo', nameEn:'Faroe Islands', nameAr:'جزر فارو', region:'europe', isTerritory:true},
  {code:'fi', nameEn:'Finland', nameAr:'فنلن��ا', region:'europe'},
  {code:'fr', nameEn:'France', nameAr:'فرنسا', region:'europe'},
  {code:'de', nameEn:'Germany', nameAr:'ألمانيا', region:'europe'},
  {code:'gi', nameEn:'Gibraltar', nameAr:'جبل طارق', region:'europe', isTerritory:true},
  {code:'gr', nameEn:'Greece', nameAr:'اليونان', region:'europe'},
  {code:'gg', nameEn:'Guernsey', nameAr:'غيرنزي', region:'europe', isTerritory:true},
  {code:'va', nameEn:'Holy See', nameAr:'الفاتيكان', region:'europe'},
  {code:'hu', nameEn:'Hungary', nameAr:'المجر', region:'europe'},
  {code:'is', nameEn:'Iceland', nameAr:'آيسلندا', region:'europe'},
  {code:'ie', nameEn:'Ireland', nameAr:'إيرلندا', region:'europe'},
  {code:'im', nameEn:'Isle of Man', nameAr:'جزيرة مان', region:'europe', isTerritory:true},
  {code:'it', nameEn:'Italy', nameAr:'إيطاليا', region:'europe'},
  {code:'je', nameEn:'Jersey', nameAr:'جيرسي', region:'europe', isTerritory:true},
  {code:'lv', nameEn:'Latvia', nameAr:'لاتفيا', region:'europe'},
  {code:'li', nameEn:'Liechtenstein', nameAr:'ليختنشتاين', region:'europe'},
  {code:'lt', nameEn:'Lithuania', nameAr:'ليتوانيا', region:'europe'},
  {code:'lu', nameEn:'Luxembourg', nameAr:'لوكسمبورغ', region:'europe'},
  {code:'mt', nameEn:'Malta', nameAr:'مالطا', region:'europe'},
  {code:'md', nameEn:'Moldova', nameAr:'مولدوفا', region:'europe'},
  {code:'mc', nameEn:'Monaco', nameAr:'موناكو', region:'europe'},
  {code:'me', nameEn:'Montenegro', nameAr:'الجبل الأسود', region:'europe'},
  {code:'nl', nameEn:'Netherlands', nameAr:'هولندا', region:'europe'},
  {code:'mk', nameEn:'North Macedonia', nameAr:'مقدونيا الشمالية', region:'europe'},
  {code:'no', nameEn:'Norway', nameAr:'النرويج', region:'europe'},
  {code:'pl', nameEn:'Poland', nameAr:'بولندا', region:'europe'},
  {code:'pt', nameEn:'Portugal', nameAr:'البرتغال', region:'europe'},
  {code:'ro', nameEn:'Romania', nameAr:'رومانيا', region:'europe'},
  {code:'ru', nameEn:'Russia', nameAr:'روسيا', region:'europe'},
  {code:'sm', nameEn:'San Marino', nameAr:'سان مارينو', region:'europe'},
  {code:'rs', nameEn:'Serbia', nameAr:'صربيا', region:'europe'},
  {code:'sk', nameEn:'Slovakia', nameAr:'سلوفاكيا', region:'europe'},
  {code:'si', nameEn:'Slovenia', nameAr:'سلوفينيا', region:'europe'},
  {code:'es', nameEn:'Spain', nameAr:'إسبانيا', region:'europe'},
  {code:'sj', nameEn:'Svalbard and Jan Mayen', nameAr:'سفالبارد ويان ماين', region:'europe', isTerritory:true},
  {code:'se', nameEn:'Sweden', nameAr:'السويد', region:'europe'},
  {code:'ch', nameEn:'Switzerland', nameAr:'سويسرا', region:'europe'},
  {code:'ua', nameEn:'Ukraine', nameAr:'أوكرانيا', region:'europe'},
  {code:'gb', nameEn:'United Kingdom', nameAr:'المملكة المتحدة', region:'europe'},
  {code:'ax', nameEn:'Åland Islands', nameAr:'جزر أولاند', region:'europe', isTerritory:true},

  // أوقيانوسيا
  {code:'as', nameEn:'American Samoa', nameAr:'ساموا الأمريكية', region:'oceania', isTerritory:true},
  {code:'au', nameEn:'Australia', nameAr:'أستراليا', region:'oceania'},
  {code:'ck', nameEn:'Cook Islands', nameAr:'جزر كوك', region:'oceania', isTerritory:true},
  {code:'fj', nameEn:'Fiji', nameAr:'فيجي', region:'oceania'},
  {code:'pf', nameEn:'French Polynesia', nameAr:'بولينيزيا الفرنسية', region:'oceania', isTerritory:true},
  {code:'gu', nameEn:'Guam', nameAr:'غوام', region:'oceania', isTerritory:true},
  {code:'ki', nameEn:'Kiribati', nameAr:'كيريباتي', region:'oceania'},
  {code:'mh', nameEn:'Marshall Islands', nameAr:'جزر مارشال', region:'oceania'},
  {code:'fm', nameEn:'Micronesia', nameAr:'ميكرونيزيا', region:'oceania'},
  {code:'nr', nameEn:'Nauru', nameAr:'ناورو', region:'oceania'},
  {code:'nc', nameEn:'New Caledonia', nameAr:'كاليدونيا الجديدة', region:'oceania', isTerritory:true},
  {code:'nz', nameEn:'New Zealand', nameAr:'نيوزيلندا', region:'oceania'},
  {code:'nu', nameEn:'Niue', nameAr:'نيوي', region:'oceania', isTerritory:true},
  {code:'nf', nameEn:'Norfolk Island', nameAr:'جزيرة نورفولك', region:'oceania', isTerritory:true},
  {code:'mp', nameEn:'Northern Mariana Islands', nameAr:'جزر ماريانا الشمالية', region:'oceania', isTerritory:true},
  {code:'pw', nameEn:'Palau', nameAr:'بالاو', region:'oceania'},
  {code:'pg', nameEn:'Papua New Guinea', nameAr:'بابوا غينيا الجديدة', region:'oceania'},
  {code:'pn', nameEn:'Pitcairn Islands', nameAr:'جزر بيتكيرن', region:'oceania', isTerritory:true},
  {code:'ws', nameEn:'Samoa', nameAr:'ساموا', region:'oceania'},
  {code:'sb', nameEn:'Solomon Islands', nameAr:'جزر سليمان', region:'oceania'},
  {code:'tk', nameEn:'Tokelau', nameAr:'توكيلاو', region:'oceania', isTerritory:true},
  {code:'to', nameEn:'Tonga', nameAr:'تونغا', region:'oceania'},
  {code:'tv', nameEn:'Tuvalu', nameAr:'توفالو', region:'oceania'},
  {code:'vu', nameEn:'Vanuatu', nameAr:'فانواتو', region:'oceania'},
  {code:'wf', nameEn:'Wallis and Futuna', nameAr:'واليس وفوتونا', region:'oceania', isTerritory:true},

  // القطب الجنوبي وأقاليم جنوبية
  {code:'aq', nameEn:'Antarctica', nameAr:'أنتاركتيكا', region:'antarctic'},
  {code:'bv', nameEn:'Bouvet Island', nameAr:'جزيرة بوفيه', region:'antarctic', isTerritory:true},
  {code:'hm', nameEn:'Heard Island and McDonald Islands', nameAr:'جزيرة هيرد وجزر ماكدونالد', region:'antarctic', isTerritory:true},
  {code:'gs', nameEn:'South Georgia and the South Sandwich Islands', nameAr:'جورجيا الجنوبية وجزر ساندويتش الجنوبية', region:'antarctic', isTerritory:true},
  {code:'tf', nameEn:'French Southern Territories', nameAr:'الأقاليم الجنوبية الفرنسية', region:'antarctic', isTerritory:true},
];

// إزالة التكرارات إن وجدت حسب الكود
function dedupeByCode(arr){
  const seen = new Set();
  const out = [];
  for(const e of arr){
    const c = e.code.toLowerCase();
    if(seen.has(c)) continue;
    seen.add(c); out.push({...e, code:c});
  }
  return out;
}

// جلب بقية الدول من REST Countries لزيادة العدد إلى 250+
async function fetchAndMergeRestCountries(base) {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=cca2,name,region');
    const data = await res.json();
    const have = new Set(base.map(x => x.code.toLowerCase()));
    for (const c of data) {
      const code = (c.cca2 || '').toLowerCase();
      if (!code || have.has(code)) continue;
      let region = 'territories';
      const r = (c.region || '').toLowerCase();
      if (['africa','americas','asia','europe','oceania','antarctic'].includes(r)) region = r;
      const nameEn = c.name?.common || code.toUpperCase();
      // ترجمة عربية أساسية لبعض المناطق الشائعة فقط، الباقي سيظهر بالإنجليزية عند غياب التعريب
      const basicAr = {
        'sa':'السعودية','ae':'الإمارات','qa':'قطر','kw':'الكويت','bh':'البحرين','om':'عُمان','ye':'اليمن',
        'eg':'مصر','sd':'السودان','dz':'الجزائر','ma':'المغرب','tn':'تونس','ly':'ليبيا',
        'iq':'العراق','jo':'الأردن','lb':'لبنان','sy':'سوريا','ps':'فلسطين',
        'tr':'تركيا','ir':'إيران','cn':'الصين','jp':'اليابان','in':'الهند',
        'ru':'روسيا','de':'ألمانيا','fr':'فرنسا','es':'إسبانيا','it':'إيطاليا','gb':'المملكة المتحدة',
        'us':'الولايات المتحدة','ca':'كندا','br':'البرازيل','ar':'الأرجنتين','mx':'المكسيك'
      };
      const nameAr = basicAr[code] || nameEn;
      base.push({code, nameEn, nameAr, region});
      have.add(code);
    }
  } catch (e) {
    console.warn('REST Countries fetch failed; using local list only.', e);
  }
  return dedupeByCode(base);
}

const $ = sel => document.querySelector(sel);

const state = {
  pool: [],
  order: [],
  index: 0,
  correct: 0,
  wrong: 0,
  current: null,
  region: 'all',
  options: [] // العناصر الأربعة الحالية
};

function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j = Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }

function renderStats() {
  $('#qIndex').textContent = `${state.index+1} / ${state.order.length}`;
  $('#correct').textContent = state.correct;
  $('#wrong').textContent = state.wrong;
  const t = $('#tags');
  t.innerHTML = '';
  if (state.current) {
    const tags = [
      {label:'المنطقة', value:state.current.region},
      {label:'الكود', value:state.current.code.toUpperCase()}
    ];
    for (const tag of tags) {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = `${tag.label}: ${tag.value}`;
      t.appendChild(span);
    }
  }
}

function ensureOptionsContainer(){
  const answerBox = document.querySelector('.answer');
  let opts = document.getElementById('options');
  if (!opts) {
    // إخفاء عناصر الإدخال غير المستخدمة في نمط الاختيارات
    const input = document.getElementById('answer'); if (input) input.style.display = 'none';
    const checkBtn = document.getElementById('checkBtn'); if (checkBtn) checkBtn.style.display = 'none';
    const modeSel = document.getElementById('mode'); if (modeSel) modeSel.style.display = 'none';
    // تعديل نص المساعدة
    const help = document.querySelector('.help'); if (help) help.textContent = 'اختر الإجابة الصحيحة من أربع خيارات بالعربية.';

    opts = document.createElement('div');
    opts.id = 'options';
    opts.style.display = 'grid';
    opts.style.gridTemplateColumns = '1fr 1fr';
    opts.style.gap = '8px';
    answerBox.insertBefore(opts, document.getElementById('skipBtn'));
  }
  return opts;
}

function buildPool() {
  let pool = entries.slice();
  if (state.region !== 'all') {
    if (state.region === 'territories') pool = pool.filter(x => x.isTerritory);
    else pool = pool.filter(x => x.region === state.region);
  }
  state.pool = pool;
  state.order = shuffle([...Array(pool.length).keys()]);
  state.index = 0; state.correct = 0; state.wrong = 0; state.current = null; state.options = [];
}

function pickWrongOptions(correctItem, count){
  const sameRegion = state.pool.filter(x => x.code !== correctItem.code && x.region === correctItem.region);
  const others = state.pool.filter(x => x.code !== correctItem.code && x.region !== correctItem.region);
  const picks = [];
  const src1 = shuffle(sameRegion).slice(0, Math.min(2, count));
  picks.push(...src1);
  if (picks.length < count) {
    const left = count - picks.length;
    picks.push(...shuffle(others).slice(0, left));
  }
  // تأكد من العدد
  return picks.slice(0, count);
}

function renderOptions() {
  const opts = ensureOptionsContainer();
  opts.innerHTML = '';
  const correct = state.current;
  const wrongs = pickWrongOptions(correct, 3);
  state.options = shuffle([correct, ...wrongs]);
  for (const opt of state.options) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = opt.nameAr || opt.nameEn;
    btn.style.background = '#1f2937';
    btn.style.border = '1px solid rgba(255,255,255,0.08)';
    btn.style.padding = '10px 12px';
    btn.style.borderRadius = '10px';
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', () => onChooseOption(btn, opt, correct));
    opts.appendChild(btn);
  }
}

function lockOptions(){
  const opts = document.getElementById('options');
  if (!opts) return;
  opts.querySelectorAll('button').forEach(b => b.disabled = true);
}

function onChooseOption(btn, chosen, correct){
  if (btn.disabled) return;
  if (chosen.code === correct.code) {
    state.correct++;
    btn.style.background = 'var(--accent)';
    btn.style.color = '#0b1220';
    $('#feedback').innerHTML = `<span class="correct">صحيح! ${correct.nameAr} — ${correct.nameEn} (${correct.code.toUpperCase()})</span>`;
    lockOptions();
    state.index++;
    renderStats();
    setTimeout(pickNext, 650);
  } else {
    state.wrong++;
    btn.style.background = 'var(--wrong)';
    btn.style.color = '#fff';
    $('#feedback').innerHTML = `<span class="wrong">خطأ. حاول خياراً آخر.</span>`;
    btn.disabled = true; // اترك بقية الأزرار فعّالة لمحاولة ثانية
    renderStats();
  }
}

function pickNext() {
  if (state.index >= state.order.length) {
    $('#feedback').innerHTML = `<span class="correct">انتهيت! نتيجتك: ${state.correct}/${state.order.length}</span>`;
    return;
  }
  const e = state.pool[state.order[state.index]];
  state.current = e;
  $('#loader').hidden = false;
  $('#flag').hidden = true;
  $('#flag').src = makeUrl(e.code);
  $('#flag').onload = () => { $('#loader').hidden = true; $('#flag').hidden = false; };
  $('#flag').onerror = () => { $('#flag').src = `https://flagcdn.com/w160/${e.code}.png`; };
  $('#feedback').textContent = '';
  renderStats();
  renderOptions();
}

function onSkip(){
  state.wrong++;
  $('#feedback').innerHTML = `<span class="wrong">تخطي. الإجابة: ${state.current.nameAr} — ${state.current.nameEn} (${state.current.code.toUpperCase()})</span>`;
  state.index++;
  pickNext();
}

function onReset(){
  buildPool();
  pickNext();
}

async function init(){
  // دمج القائمة مع REST Countries لبلوغ أكثر من 250
  let base = dedupeByCode(entries);
  state.region = 'all';
  await fetchAndMergeRestCountries(base).then(merged => {
    // حدّث pool بعد الدمج
    entries.length = 0; // امسح المرجع القديم
    merged.forEach(x => entries.push(x));
  });

  document.getElementById('regionFilter').addEventListener('change', e=>{ state.region = e.target.value; onReset(); });
  document.getElementById('skipBtn').addEventListener('click', onSkip);
  document.getElementById('resetBtn').addEventListener('click', onReset);

  onReset();
}

window.addEventListener('DOMContentLoaded', init);
