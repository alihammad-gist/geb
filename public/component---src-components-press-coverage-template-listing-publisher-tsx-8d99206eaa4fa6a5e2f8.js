(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2Te1":function(e,t,n){"use strict";var a=n("k1TG"),r=n("8o2o"),i=n("q1tI"),s=n.n(i),o=n("17x9"),l=n.n(o),c=n("TSYQ"),u=n.n(c),d=n("33Jr"),h={color:l.a.string,pill:l.a.bool,tag:d.q,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),children:l.a.node,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,n=e.cssModule,i=e.color,o=e.innerRef,l=e.pill,c=e.tag,h=Object(r.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(d.m)(u()(t,"badge","badge-"+i,!!l&&"badge-pill"),n);return h.href&&"span"===c&&(c="a"),s.a.createElement(c,Object(a.a)({},h,{className:p,ref:o}))};p.propTypes=h,p.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=p},AphP:function(e,t,n){"use strict";var a=n("XKFU"),r=n("S/j/"),i=n("apmT");a(a.P+a.F*n("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=r(this),n=i(t);return"number"!=typeof n||isFinite(n)?t.toISOString():null}})},CaDr:function(e,t,n){"use strict";var a=n("k1TG"),r=n("8o2o"),i=n("q1tI"),s=n.n(i),o=n("17x9"),l=n.n(o),c=n("TSYQ"),u=n.n(c),d=n("33Jr"),h={tag:d.q,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,n=e.cssModule,i=e.tag,o=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.m)(u()(t,"modal-body"),n);return s.a.createElement(i,Object(a.a)({},o,{className:l}))};p.propTypes=h,p.defaultProps={tag:"div"},t.a=p},DCcX:function(e,t,n){"use strict";n("pIFo"),n("Tze0"),n("Oyvg"),n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var a=n("oCue"),r=n("k1TG"),i=n("uRdJ"),s=n("9Hrx"),o=n("q1tI"),l=n.n(o),c=n("17x9"),u=n.n(c),d=n("TSYQ"),h=n.n(d),p=n("i8i4"),m=n.n(p),f=n("33Jr"),g={children:u.a.node.isRequired,node:u.a.any},b=function(e){function t(){return e.apply(this,arguments)||this}Object(s.a)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},n.render=function(){return f.f?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),m.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(l.a.Component);b.propTypes=g;var v=b,y=n("gwnE");function O(){}var k=u.a.shape(y.a.propTypes),$={isOpen:u.a.bool,autoFocus:u.a.bool,centered:u.a.bool,scrollable:u.a.bool,size:u.a.string,toggle:u.a.func,keyboard:u.a.bool,role:u.a.string,labelledBy:u.a.string,backdrop:u.a.oneOfType([u.a.bool,u.a.oneOf(["static"])]),onEnter:u.a.func,onExit:u.a.func,onOpened:u.a.func,onClosed:u.a.func,children:u.a.node,className:u.a.string,wrapClassName:u.a.string,modalClassName:u.a.string,backdropClassName:u.a.string,contentClassName:u.a.string,external:u.a.node,fade:u.a.bool,cssModule:u.a.object,zIndex:u.a.oneOfType([u.a.number,u.a.string]),backdropTransition:k,modalTransition:k,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func]),unmountOnClose:u.a.bool,returnFocusAfterClose:u.a.bool},T=Object.keys($),M={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:O,onClosed:O,modalTransition:{timeout:f.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:f.e.Fade},unmountOnClose:!0,returnFocusAfterClose:!0},E=function(e){function t(t){var n;return(n=e.call(this,t)||this)._element=null,n._originalBodyPadding=null,n.getFocusableChildren=n.getFocusableChildren.bind(Object(i.a)(n)),n.handleBackdropClick=n.handleBackdropClick.bind(Object(i.a)(n)),n.handleBackdropMouseDown=n.handleBackdropMouseDown.bind(Object(i.a)(n)),n.handleEscape=n.handleEscape.bind(Object(i.a)(n)),n.handleStaticBackdropAnimation=n.handleStaticBackdropAnimation.bind(Object(i.a)(n)),n.handleTab=n.handleTab.bind(Object(i.a)(n)),n.onOpened=n.onOpened.bind(Object(i.a)(n)),n.onClosed=n.onClosed.bind(Object(i.a)(n)),n.manageFocusAfterClose=n.manageFocusAfterClose.bind(Object(i.a)(n)),n.clearBackdropAnimationTimeout=n.clearBackdropAnimationTimeout.bind(Object(i.a)(n)),n.state={isOpen:!1,showStaticBackdropAnimation:!1},n}Object(s.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props,t=e.isOpen,n=e.autoFocus,a=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),n&&this.setFocus()),a&&a(),this._isMounted=!0},n.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},n.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),this.props.isOpen&&this.close()),this._isMounted=!1},n.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||O)(e,t)},n.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||O)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},n.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"==typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},n.getFocusableChildren=function(){return this._element.querySelectorAll(f.h.join(", "))},n.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(n){e=t[0]}return e},n.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){if(e.stopPropagation(),"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;var t=this._dialog?this._dialog.parentNode:null;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},n.handleTab=function(e){if(9===e.which){var t=this.getFocusableChildren(),n=t.length;if(0!==n){for(var a=this.getFocusedChild(),r=0,i=0;i<n;i+=1)if(t[i]===a){r=i;break}e.shiftKey&&0===r?(e.preventDefault(),t[n-1].focus()):e.shiftKey||r!==n-1||(e.preventDefault(),t[0].focus())}}},n.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},n.handleEscape=function(e){if(this.props.isOpen&&this.props.keyboard&&e.keyCode===f.l.esc&&this.props.toggle){if(e.preventDefault(),e.stopPropagation(),"static"===this.props.backdrop)return void this.handleStaticBackdropAnimation();this.props.toggle(e)}},n.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},n.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,document.body.appendChild(this._element)),this._originalBodyPadding=Object(f.i)(),Object(f.g)(),0===t.openCount&&(document.body.className=h()(document.body.className,Object(f.m)("modal-open",this.props.cssModule))),t.openCount+=1},n.destroy=function(){this._element&&(document.body.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},n.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},n.close=function(){if(t.openCount<=1){var e=Object(f.m)("modal-open",this.props.cssModule),n=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(n," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(f.p)(this._originalBodyPadding)},n.renderModalDialog=function(){var e,t=this,n=Object(f.n)(this.props,T);return l.a.createElement("div",Object(r.a)({},n,{className:Object(f.m)(h()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),l.a.createElement("div",{className:Object(f.m)(h()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},n.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var n=this.props,i=n.wrapClassName,s=n.modalClassName,o=n.backdropClassName,c=n.cssModule,u=n.isOpen,d=n.backdrop,p=n.role,m=n.labelledBy,g=n.external,b=n.innerRef,O={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":m,role:p,tabIndex:"-1"},k=this.props.fade,$=Object(a.a)({},y.a.defaultProps,{},this.props.modalTransition,{baseClass:k?this.props.modalTransition.baseClass:"",timeout:k?this.props.modalTransition.timeout:0}),T=Object(a.a)({},y.a.defaultProps,{},this.props.backdropTransition,{baseClass:k?this.props.backdropTransition.baseClass:"",timeout:k?this.props.backdropTransition.timeout:0}),M=d&&(k?l.a.createElement(y.a,Object(r.a)({},T,{in:u&&!!d,cssModule:c,className:Object(f.m)(h()("modal-backdrop",o),c)})):l.a.createElement("div",{className:Object(f.m)(h()("modal-backdrop","show",o),c)}));return l.a.createElement(v,{node:this._element},l.a.createElement("div",{className:Object(f.m)(i)},l.a.createElement(y.a,Object(r.a)({},O,$,{in:u,onEntered:this.onOpened,onExited:this.onClosed,cssModule:c,className:Object(f.m)(h()("modal",s,this.state.showStaticBackdropAnimation&&"modal-static"),c),innerRef:b}),g,this.renderModalDialog()),M))}return null},n.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(l.a.Component);E.propTypes=$,E.defaultProps=M,E.openCount=0;t.a=E},GfYQ:function(e,t,n){"use strict";n("tUrg"),n("f3/d");var a=n("q1tI"),r=n.n(a),i=n("2Te1"),s=n("ok1R"),o=n("rhny"),l=n("DCcX"),c=n("vkoW"),u=n("CaDr"),d=n("XAkp"),h=n("xek+"),p=n("ieAt"),m={name:"N/A",strapiId:-12,website:null};function f(e,t){return t.reduce((function(t,n){return n.strapiId===e?n:t}),m)}var g=function(e){var t=e.activity,n=e.publishers,a=e.filterId,o=void 0===a?null:a;return r.a.createElement("div",{className:"py-2 border-bottom"},r.a.createElement("h6",{className:"text-uppercase"},t.title),r.a.createElement("p",{className:""},r.a.createElement(i.a,null,Object(p.a)(t.date))),r.a.createElement(s.a,{noGutters:!0},t.press_coverages.filter((function(e){return!o||e.news_publisher===o})).map((function(e,a){var i;return r.a.createElement(b,{press:e,key:a,activity:t,publisher:f(null!==(i=e.news_publisher)&&void 0!==i?i:0,n)})}))))},b=function(e){var t=e.press,n=e.activity,i=e.publisher,s=Object(a.useState)(!1),m=s[0],f=s[1],g=function(){return f(!m)};return r.a.createElement(o.a,{md:"3"},r.a.createElement("a",{href:"#",className:"img-thumbnail d-block m-1",style:{height:"120px",overflow:"hidden"},onClick:g},r.a.createElement("img",{className:"img-fluid",src:t.prints[0].localFile.childImageSharp.fluid.src})),r.a.createElement(l.a,{isOpen:m,toggle:g,size:"lg"},r.a.createElement(c.a,{toggle:g},r.a.createElement(h.b,{text:n.title,max:50,expandable:!1})),r.a.createElement(u.a,null,r.a.createElement("img",{src:t.prints[0].localFile.publicURL,className:"img-fluid d-block mx-auto"}),r.a.createElement(d.a,{borderless:!0,striped:!0,size:"sm",className:"mt-2"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row",style:{minWidth:"150px"}},"Event Title"),r.a.createElement("td",null,n.title)),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Event Date"),r.a.createElement("td",null,Object(p.a)(n.date))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"News Publisher"),r.a.createElement("td",null,i.website?r.a.createElement("a",{href:i.website,target:"_blank"},i.name):i.name)),t.link&&r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Story Link"),r.a.createElement("td",null,r.a.createElement("a",{href:t.link,target:"_blank"},t.link))))))))};n.d(t,"a",(function(){return g}))},Wgwc:function(e,t,n){n("jqX0"),n("AphP"),n("a1Th"),n("h7Nl"),n("Btvt"),n("SRfc"),n("f3/d"),n("KKXr"),n("pIFo"),n("xfY5"),e.exports=function(){"use strict";var e="millisecond",t="second",n="minute",a="hour",r="day",i="week",s="month",o="quarter",l="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,u=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},h={s:d,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),a=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+d(a,2,"0")+":"+d(r,2,"0")},m:function(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),a=e.clone().add(n,s),r=t-a<0,i=e.clone().add(n+(r?-1:1),s);return Number(-(n+(t-a)/(r?a-i:i-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return{M:s,y:l,w:i,d:r,D:"date",h:a,m:n,s:t,ms:e,Q:o}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",f={};f[m]=p;var g=function(e){return e instanceof O},b=function(e,t,n){var a;if(!e)return m;if("string"==typeof e)f[e]&&(a=e),t&&(f[e]=t,a=e);else{var r=e.name;f[r]=e,a=r}return!n&&a&&(m=a),a||!n&&m},v=function(e,t,n){if(g(e))return e.clone();var a=t?"string"==typeof t?{format:t,pl:n}:t:{};return a.date=e,new O(a)},y=h;y.l=b,y.i=g,y.w=function(e,t){return v(e,{locale:t.$L,utc:t.$u,$offset:t.$offset})};var O=function(){function d(e){this.$L=this.$L||b(e.locale,null,!0),this.parse(e)}var h=d.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(c);if(a)return n?new Date(Date.UTC(a[1],a[2]-1,a[3]||1,a[4]||0,a[5]||0,a[6]||0,a[7]||0)):new Date(a[1],a[2]-1,a[3]||1,a[4]||0,a[5]||0,a[6]||0,a[7]||0)}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(e,t){var n=v(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return v(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<v(e)},h.$g=function(e,t,n){return y.u(e)?this[t]:this.set(n,e)},h.year=function(e){return this.$g(e,"$y",l)},h.month=function(e){return this.$g(e,"$M",s)},h.day=function(e){return this.$g(e,"$W",r)},h.date=function(e){return this.$g(e,"$D","date")},h.hour=function(e){return this.$g(e,"$H",a)},h.minute=function(e){return this.$g(e,"$m",n)},h.second=function(e){return this.$g(e,"$s",t)},h.millisecond=function(t){return this.$g(t,"$ms",e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,o){var c=this,u=!!y.u(o)||o,d=y.p(e),h=function(e,t){var n=y.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return u?n:n.endOf(r)},p=function(e,t){return y.w(c.toDate()[e].apply(c.toDate(),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},m=this.$W,f=this.$M,g=this.$D,b="set"+(this.$u?"UTC":"");switch(d){case l:return u?h(1,0):h(31,11);case s:return u?h(1,f):h(0,f+1);case i:var v=this.$locale().weekStart||0,O=(m<v?m+7:m)-v;return h(u?g-O:g+(6-O),f);case r:case"date":return p(b+"Hours",0);case a:return p(b+"Minutes",1);case n:return p(b+"Seconds",2);case t:return p(b+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(i,o){var c,u=y.p(i),d="set"+(this.$u?"UTC":""),h=(c={},c.day=d+"Date",c.date=d+"Date",c[s]=d+"Month",c[l]=d+"FullYear",c[a]=d+"Hours",c[n]=d+"Minutes",c[t]=d+"Seconds",c[e]=d+"Milliseconds",c)[u],p=u===r?this.$D+(o-this.$W):o;if(u===s||u===l){var m=this.clone().set("date",1);m.$d[h](p),m.init(),this.$d=m.set("date",Math.min(this.$D,m.daysInMonth())).toDate()}else h&&this.$d[h](p);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[y.p(e)]()},h.add=function(e,o){var c,u=this;e=Number(e);var d=y.p(o),h=function(t){var n=v(u);return y.w(n.date(n.date()+Math.round(t*e)),u)};if(d===s)return this.set(s,this.$M+e);if(d===l)return this.set(l,this.$y+e);if(d===r)return h(1);if(d===i)return h(7);var p=(c={},c[n]=6e4,c[a]=36e5,c[t]=1e3,c)[d]||1,m=this.$d.getTime()+e*p;return y.w(m,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this;if(!this.isValid())return"Invalid Date";var n=e||"YYYY-MM-DDTHH:mm:ssZ",a=y.z(this),r=this.$locale(),i=this.$H,s=this.$m,o=this.$M,l=r.weekdays,c=r.months,d=function(e,a,r,i){return e&&(e[a]||e(t,n))||r[a].substr(0,i)},h=function(e){return y.s(i%12||12,e,"0")},p=r.meridiem||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:d(r.monthsShort,o,c,3),MMMM:c[o]||c(this,n),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:d(r.weekdaysMin,this.$W,l,2),ddd:d(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:y.s(i,2,"0"),h:h(1),hh:h(2),a:p(i,s,!0),A:p(i,s,!1),m:String(s),mm:y.s(s,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:a};return n.replace(u,(function(e,t){return t||m[e]||a.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(e,r,c){var u,d=y.p(r),h=v(e),p=6e4*(h.utcOffset()-this.utcOffset()),m=this-h,f=y.m(this,h);return f=(u={},u[l]=f/12,u[s]=f,u[o]=f/3,u[i]=(m-p)/6048e5,u.day=(m-p)/864e5,u[a]=m/36e5,u[n]=m/6e4,u[t]=m/1e3,u)[d]||m,c?f:y.a(f)},h.daysInMonth=function(){return this.endOf(s).$D},h.$locale=function(){return f[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=b(e,t,!0);return a&&(n.$L=a),n},h.clone=function(){return y.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},d}();return v.prototype=O.prototype,v.extend=function(e,t){return e(t,O,v),v},v.locale=b,v.isDayjs=g,v.unix=function(e){return v(1e3*e)},v.en=f[m],v.Ls=f,v}()},XAkp:function(e,t,n){"use strict";var a=n("k1TG"),r=n("8o2o"),i=n("q1tI"),s=n.n(i),o=n("17x9"),l=n.n(o),c=n("TSYQ"),u=n.n(c),d=n("33Jr"),h={className:l.a.string,cssModule:l.a.object,size:l.a.string,bordered:l.a.bool,borderless:l.a.bool,striped:l.a.bool,dark:l.a.bool,hover:l.a.bool,responsive:l.a.oneOfType([l.a.bool,l.a.string]),tag:d.q,responsiveTag:d.q,innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object])},p=function(e){var t=e.className,n=e.cssModule,i=e.size,o=e.bordered,l=e.borderless,c=e.striped,h=e.dark,p=e.hover,m=e.responsive,f=e.tag,g=e.responsiveTag,b=e.innerRef,v=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),y=Object(d.m)(u()(t,"table",!!i&&"table-"+i,!!o&&"table-bordered",!!l&&"table-borderless",!!c&&"table-striped",!!h&&"table-dark",!!p&&"table-hover"),n),O=s.a.createElement(f,Object(a.a)({},v,{ref:b,className:y}));if(m){var k=Object(d.m)(!0===m?"table-responsive":"table-responsive-"+m,n);return s.a.createElement(g,{className:k},O)}return O};p.propTypes=h,p.defaultProps={tag:"table",responsiveTag:"div"},t.a=p},ainN:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return h}));n("f3/d");var a=n("q1tI"),r=n.n(a),i=n("Ac47"),s=n("RnvD"),o=n("1Yj4"),l=n("ok1R"),c=n("rhny"),u=n("GfYQ"),d=n("OEnS"),h="1444359189";t.default=function(e){return console.log(e),r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"GEB in Press"}),r.a.createElement(i.d,{type:i.e.darkOverAltGray},r.a.createElement(o.a,null,r.a.createElement(l.a,null,r.a.createElement(c.a,{md:"3"},r.a.createElement(d.c,{publishers:e.data.allStrapiNewsPublisher.nodes})),r.a.createElement(c.a,{md:"9"},r.a.createElement("h6",{className:"text-right",style:{textDecoration:"underline"}},'Coverage by "',e.pageContext.name,'"'),e.data.allStrapiActivity.edges.map((function(t,n){return r.a.createElement(u.a,{activity:t.node,key:n,publishers:e.data.allStrapiNewsPublisher.nodes,filterId:e.pageContext.id})})))))))}},ieAt:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("Wgwc"),r=n.n(a),i=n("jxkT"),s=n.n(i);function o(e){return r()(e).format("MMMM Do, YYYY")}r.a.extend(s.a)},jqX0:function(e,t,n){var a=n("XKFU"),r=n("jtBr");a(a.P+a.F*(Date.prototype.toISOString!==r),"Date",{toISOString:r})},jtBr:function(e,t,n){"use strict";var a=n("eeVq"),r=Date.prototype.getTime,i=Date.prototype.toISOString,s=function(e){return e>9?e:"0"+e};e.exports=a((function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-50000000000001))}))||!a((function(){i.call(new Date(NaN))}))?function(){if(!isFinite(r.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),n=e.getUTCMilliseconds(),a=t<0?"-":t>9999?"+":"";return a+("00000"+Math.abs(t)).slice(a?-6:-4)+"-"+s(e.getUTCMonth()+1)+"-"+s(e.getUTCDate())+"T"+s(e.getUTCHours())+":"+s(e.getUTCMinutes())+":"+s(e.getUTCSeconds())+"."+(n>99?n:"0"+s(n))+"Z"}:i},jxkT:function(e,t,n){n("2Spj"),n("pIFo"),e.exports=function(){"use strict";return function(e,t,n){var a=t.prototype,r=a.format;n.en.ordinal=function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"},a.format=function(e){var t=this,n=this.$locale(),a=this.$utils(),i=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|gggg|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return n.ordinal(t.$D);case"gggg":return t.weekYear();case"wo":return n.ordinal(t.week(),"W");case"w":case"ww":return a.s(t.week(),"w"===e?1:2,"0");case"k":case"kk":return a.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();default:return e}}));return r.bind(this)(i)}}}()},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},vkoW:function(e,t,n){"use strict";var a=n("k1TG"),r=n("8o2o"),i=n("q1tI"),s=n.n(i),o=n("17x9"),l=n.n(o),c=n("TSYQ"),u=n.n(c),d=n("33Jr"),h={tag:d.q,wrapTag:d.q,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},p=function(e){var t,n=e.className,i=e.cssModule,o=e.children,l=e.toggle,c=e.tag,h=e.wrapTag,p=e.closeAriaLabel,m=e.charCode,f=e.close,g=Object(r.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),b=Object(d.m)(u()(n,"modal-header"),i);if(!f&&l){var v="number"==typeof m?String.fromCharCode(m):m;t=s.a.createElement("button",{type:"button",onClick:l,className:Object(d.m)("close",i),"aria-label":p},s.a.createElement("span",{"aria-hidden":"true"},v))}return s.a.createElement(h,Object(a.a)({},g,{className:b}),s.a.createElement(c,{className:Object(d.m)("modal-title",i)},o),f||t)};p.propTypes=h,p.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=p}}]);
//# sourceMappingURL=component---src-components-press-coverage-template-listing-publisher-tsx-8d99206eaa4fa6a5e2f8.js.map