/*! For license information please see ar-ps.2d4199ef.chunk.js.LICENSE.txt */
(self.webpackChunk_dhis2_app_shell=self.webpackChunk_dhis2_app_shell||[]).push([[8617],{8095:function(e,_,s){!function(e){"use strict";var _={1:"\u0661",2:"\u0662",3:"\u0663",4:"\u0664",5:"\u0665",6:"\u0666",7:"\u0667",8:"\u0668",9:"\u0669",0:"\u0660"},s={"\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u0660":"0"};e.defineLocale("ar-ps",{months:"\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u062b\u0627\u0646\u064a_\u0634\u0628\u0627\u0637_\u0622\u0630\u0627\u0631_\u0646\u064a\u0633\u0627\u0646_\u0623\u064a\u0651\u0627\u0631_\u062d\u0632\u064a\u0631\u0627\u0646_\u062a\u0645\u0651\u0648\u0632_\u0622\u0628_\u0623\u064a\u0644\u0648\u0644_\u062a\u0634\u0631\u064a \u0627\u0644\u0623\u0648\u0651\u0644_\u062a\u0634\u0631\u064a\u0646 \u0627\u0644\u062b\u0627\u0646\u064a_\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u0623\u0648\u0651\u0644".split("_"),monthsShort:"\u0643\u0662_\u0634\u0628\u0627\u0637_\u0622\u0630\u0627\u0631_\u0646\u064a\u0633\u0627\u0646_\u0623\u064a\u0651\u0627\u0631_\u062d\u0632\u064a\u0631\u0627\u0646_\u062a\u0645\u0651\u0648\u0632_\u0622\u0628_\u0623\u064a\u0644\u0648\u0644_\u062a\u0661_\u062a\u0662_\u0643\u0661".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0635|\u0645/,isPM:function(e){return"\u0645"===e},meridiem:function(e,_,s){return e<12?"\u0635":"\u0645"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",ss:"%d \u062b\u0627\u0646\u064a\u0629",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},preparse:function(e){return e.replace(/[\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,(function(e){return s[e]})).split("").reverse().join("").replace(/[\u0661\u0662](?![\u062a\u0643])/g,(function(e){return s[e]})).split("").reverse().join("").replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,(function(e){return _[e]})).replace(/,/g,"\u060c")},week:{dow:0,doy:6}})}(s(5521))}}]);
//# sourceMappingURL=ar-ps.2d4199ef.chunk.js.map