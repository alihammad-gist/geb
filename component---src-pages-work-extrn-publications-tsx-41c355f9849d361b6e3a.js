(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{CaDr:function(e,t,a){"use strict";var n=a("k1TG"),o=a("8o2o"),i=a("q1tI"),c=a.n(i),s=a("17x9"),l=a.n(s),r=a("TSYQ"),d=a.n(r),p=a("33Jr"),u={tag:p.q,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,i=e.tag,s=Object(o.a)(e,["className","cssModule","tag"]),l=Object(p.m)(d()(t,"modal-body"),a);return c.a.createElement(i,Object(n.a)({},s,{className:l}))};b.propTypes=u,b.defaultProps={tag:"div"},t.a=b},DCcX:function(e,t,a){"use strict";a("pIFo"),a("Tze0"),a("Oyvg"),a("2Spj"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V");var n=a("oCue"),o=a("k1TG"),i=a("uRdJ"),c=a("9Hrx"),s=a("q1tI"),l=a.n(s),r=a("17x9"),d=a.n(r),p=a("TSYQ"),u=a.n(p),b=a("i8i4"),m=a.n(b),h=a("33Jr"),f={children:d.a.node.isRequired,node:d.a.any},g=function(e){function t(){return e.apply(this,arguments)||this}Object(c.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return h.f?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),m.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(l.a.Component);g.propTypes=f;var v=g,E=a("gwnE");function O(){}var C=d.a.shape(E.a.propTypes),k={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:C,modalTransition:C,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool},y=Object.keys(k),j={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:O,onClosed:O,modalTransition:{timeout:h.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:h.e.Fade},unmountOnClose:!0,returnFocusAfterClose:!0},N=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(i.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(i.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(i.a)(a)),a.handleEscape=a.handleEscape.bind(Object(i.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(i.a)(a)),a.handleTab=a.handleTab.bind(Object(i.a)(a)),a.onOpened=a.onOpened.bind(Object(i.a)(a)),a.onClosed=a.onClosed.bind(Object(i.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(i.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(i.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(c.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),n&&n(),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),this.props.isOpen&&this.close()),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||O)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||O)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"==typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(h.h.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){if(e.stopPropagation(),"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;var t=this._dialog?this._dialog.parentNode:null;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){var t=this.getFocusableChildren(),a=t.length;if(0!==a){for(var n=this.getFocusedChild(),o=0,i=0;i<a;i+=1)if(t[i]===n){o=i;break}e.shiftKey&&0===o?(e.preventDefault(),t[a-1].focus()):e.shiftKey||o!==a-1||(e.preventDefault(),t[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){if(this.props.isOpen&&this.props.keyboard&&e.keyCode===h.l.esc&&this.props.toggle){if(e.preventDefault(),e.stopPropagation(),"static"===this.props.backdrop)return void this.handleStaticBackdropAnimation();this.props.toggle(e)}},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,document.body.appendChild(this._element)),this._originalBodyPadding=Object(h.i)(),Object(h.g)(),0===t.openCount&&(document.body.className=u()(document.body.className,Object(h.m)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){this._element&&(document.body.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(h.m)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(h.p)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(h.n)(this.props,y);return l.a.createElement("div",Object(o.a)({},a,{className:Object(h.m)(u()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),l.a.createElement("div",{className:Object(h.m)(u()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,i=a.wrapClassName,c=a.modalClassName,s=a.backdropClassName,r=a.cssModule,d=a.isOpen,p=a.backdrop,b=a.role,m=a.labelledBy,f=a.external,g=a.innerRef,O={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":m,role:b,tabIndex:"-1"},C=this.props.fade,k=Object(n.a)({},E.a.defaultProps,{},this.props.modalTransition,{baseClass:C?this.props.modalTransition.baseClass:"",timeout:C?this.props.modalTransition.timeout:0}),y=Object(n.a)({},E.a.defaultProps,{},this.props.backdropTransition,{baseClass:C?this.props.backdropTransition.baseClass:"",timeout:C?this.props.backdropTransition.timeout:0}),j=p&&(C?l.a.createElement(E.a,Object(o.a)({},y,{in:d&&!!p,cssModule:r,className:Object(h.m)(u()("modal-backdrop",s),r)})):l.a.createElement("div",{className:Object(h.m)(u()("modal-backdrop","show",s),r)}));return l.a.createElement(v,{node:this._element},l.a.createElement("div",{className:Object(h.m)(i)},l.a.createElement(E.a,Object(o.a)({},O,k,{in:d,onEntered:this.onOpened,onExited:this.onClosed,cssModule:r,className:Object(h.m)(u()("modal",c,this.state.showStaticBackdropAnimation&&"modal-static"),r),innerRef:g}),f,this.renderModalDialog()),j))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(l.a.Component);N.propTypes=k,N.defaultProps=j,N.openCount=0;t.a=N},NIcq:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return l}));var n=a("Lnxd"),o=function(e){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}}]})(e)};o.displayName="MdFileDownload";var i=function(e){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}}]})(e)};i.displayName="MdPlace";var c=function(e){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}}]})(e)};c.displayName="MdArrowForward";var s=function(e){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}}]})(e)};s.displayName="MdChevronLeft";var l=function(e){return Object(n.a)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}}]})(e)};l.displayName="MdChevronRight"},OBzv:function(e,t,a){"use strict";var n=a("k1TG"),o=a("8o2o"),i=a("q1tI"),c=a.n(i),s=a("17x9"),l=a.n(s),r=a("TSYQ"),d=a.n(r),p=a("33Jr"),u={tag:p.q,className:l.a.string,cssModule:l.a.object},b=function(e){var t=e.className,a=e.cssModule,i=e.tag,s=Object(o.a)(e,["className","cssModule","tag"]),l=Object(p.m)(d()(t,"modal-footer"),a);return c.a.createElement(i,Object(n.a)({},s,{className:l}))};b.propTypes=u,b.defaultProps={tag:"div"},t.a=b},Z3jw:function(e){e.exports=JSON.parse('{"data":{"allStrapiExternalPublication":{"edges":[{"node":{"cover":{"publicURL":"/geb/static/1025fb9b1acabab48b28cb0746dbc337-c639dc99d125c2f1e448373c9ab4c708.jpg","size":37763},"id":"External-publication_1","title":"Environment and Climate Change outlook of Pakistan - Executive Summary","document":{"size":635601,"publicURL":"/geb/static/614132e8bc129f876fdaa2dc6cffec6d-2a8dbf40a4886c38aa07fd86bf3c8fec.pdf"}}},{"node":{"cover":{"publicURL":"/geb/static/ff0d49452ed5408487d7f29fe940bda8-7d9d1d540ef775fd31cd1bc8a6a2a791.jpg","size":403136},"id":"External-publication_2","title":"Pakistan Vision 2025","document":{"size":5125158,"publicURL":"/geb/static/424abd165ec5fdcfa025875c31479871-2b4b9c76d68bcc4c48efbbd87a2d1ae4.pdf"}}},{"node":{"cover":{"publicURL":"/geb/static/8c36056a9175008740775567f64ae80c-f2b6d5b800e06aab1105a7e5c4dfd6c2.jpg","size":123802},"id":"External-publication_3","title":"National Environment Policy 2005","document":{"size":180076,"publicURL":"/geb/static/1f5f07a1241f16919451a3cb25978738-918e78cf2d44ad90ce23356371817c81.pdf"}}},{"node":{"cover":{"publicURL":"/geb/static/17cbbb8ab30ddc5cc887796c19f368b0-36e49df6f0cfe88eeb939fa1ff413e74.jpg","size":53590},"id":"External-publication_4","title":"National Forest Policy 2002","document":{"size":51056,"publicURL":"/geb/static/6e2792decf0f568812cb49007f5cbdd7-d2a96637d58528acd8b283d0ed4cea4d.pdf"}}},{"node":{"cover":{"publicURL":"/geb/static/1ecd4e233cf94be574939da33698d4e6-c1083e536be108f12e3531a176ecab45.jpg","size":66071},"id":"External-publication_5","title":"National Water Policy, April 2018","document":{"size":793314,"publicURL":"/geb/static/ec53b0cee616da9d45b7a040fbd00d2e-a52c2495eff5d16b6d77717cfeaba423.pdf"}}},{"node":{"cover":{"publicURL":"/geb/static/efc83118d7233aec065a30ca5b0b766f-d9a9cfbf52980086800eee610ba8487c.jpg","size":36825},"id":"External-publication_6","title":"National Environmental Legislation and National Environment Quality Standards","document":{"size":112136,"publicURL":"/geb/static/7c59f8fd6a90fe681dc47db3399e7621-abd49aafa85e8b70a055da7bb1b6c559.pdf"}}},{"node":{"cover":{"publicURL":"/geb/static/cf1526d3e1973bcf4734bd637e12b00e-faee2c5a73504726135d16e10226ad68.jpg","size":31436},"id":"External-publication_7","title":"The Pakistan National Conservation Strategy","document":{"size":173900,"publicURL":"/geb/static/cf50a80e963811ba8c847889633c3a46-6e5e68f70776040f0d023399821a7d70.pdf"}}},{"node":{"cover":{"publicURL":"/geb/static/8b2b896bf77fdc25cb609e16e420e8e0-6d34cc2511067f816636e2bb03f7cae4.jpg","size":68033},"id":"External-publication_8","title":"Pakistan Climate Change Act, 2017","document":{"size":477165,"publicURL":"/geb/static/7a1cc0ab904add313f1c7b947760cbbc-25680fdbc77aa1c3dc1df960c76c8af0.pdf"}}},{"node":{"cover":{"publicURL":"/geb/static/13487f475af288ffd69f4352bd0c0c9f-b83b7ace1eece88505e2daf68e43db35.jpg","size":42420},"id":"External-publication_9","title":"Pakistan Intended Nationally Determined Contributions","document":{"size":779814,"publicURL":"/geb/static/91bc15c37e1b8244204613c2677b9d1c-0810379c080040c67873487dcfe510c7.pdf"}}},{"node":{"cover":{"publicURL":"/geb/static/9b554e77dd27518fc3988a5539f225a8-22fe1c7918239e258d8a180b5bd1d3b7.jpg","size":66336},"id":"External-publication_10","title":"Pakistan Environment Protection Act 1997","document":{"size":51409,"publicURL":"/geb/static/4504756cda26f2558cbc1a8870f1ce54-a29369d8dcb55e698d5fa236d15c2c84.pdf"}}}]}}}')},jyl9:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),i=a("Ac47"),c=a("RnvD"),s=a("1Yj4"),l=a("ok1R"),r=a("rhny"),d=a("OEnS"),p=a("Z3jw"),u=a("UU0N"),b=a("T4ee"),m=function(){var e=Object(n.useState)(0),t=e[0],a=e[1],i=Object(n.useState)(!1),c=i[0],s=i[1],d=function(){s(!c)},m=p.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{noGutters:!0},m.allStrapiExternalPublication.edges.map((function(e,t){var n=e.node;return o.a.createElement(r.a,{md:"6",key:t},o.a.createElement(u.a,{className:"\n                                    p-2 \n                                    d-flex-block\n                                    "+b.item+"\n                                ",tag:"a",href:"#",onClick:function(){return function(e){a(e),d()}(t)}},o.a.createElement(u.a,{left:!0,className:"mr-2"},o.a.createElement("img",{className:"img-fluid img-thumbnail rounded-lg",style:{maxWidth:"200px"},src:n.cover.publicURL,alt:"Cover image for "+n.title})),o.a.createElement(u.a,{body:!0},o.a.createElement("h4",{className:"h6"},n.title))))}))),o.a.createElement(k,{isOpen:c,toggle:d,publication:m.allStrapiExternalPublication.edges[t].node}))},h=a("DCcX"),f=a("vkoW"),g=a("CaDr"),v=a("OBzv"),E=a("sOKU"),O=a("xek+"),C=a("NIcq"),k=function(e){var t=e.isOpen,a=e.toggle,n=e.publication;return o.a.createElement(h.a,{size:"lg",isOpen:t,toggle:a},o.a.createElement(f.a,{toggle:a},o.a.createElement(O.b,{text:"Download Confirmation.",tag:"span",max:65,expandable:!1})),o.a.createElement(g.a,null,o.a.createElement(u.a,{className:"p-2"},o.a.createElement(u.a,{left:!0,className:"mr-2"},o.a.createElement("img",{className:"img-fluid img-thumbnail rounded-lg",style:{maxWidth:"250px"},src:n.cover.publicURL,alt:"Cover image for "+n.title})),o.a.createElement(u.a,{body:!0},o.a.createElement("h2",{className:"h5"},n.title)))),o.a.createElement(v.a,null,o.a.createElement(E.a,{color:"secondary",href:n.document.publicURL,tag:"a",target:"_blank"},o.a.createElement("span",{className:"icon-text"},o.a.createElement(C.d,{size:"1.3rem"}),o.a.createElement("span",null,"  Download PDF (",(n.document.size/1e6).toPrecision(2)," MB)")))))};t.default=function(){return o.a.createElement(i.a,null,o.a.createElement(c.a,{title:"Important Publications"}),o.a.createElement(i.b,{type:i.c.darkOverWhite},o.a.createElement(s.a,null,o.a.createElement(l.a,null,o.a.createElement(r.a,{md:"3"},o.a.createElement(d.d,null)),o.a.createElement(r.a,{md:"9"},o.a.createElement(m,null))))))}},vkoW:function(e,t,a){"use strict";var n=a("k1TG"),o=a("8o2o"),i=a("q1tI"),c=a.n(i),s=a("17x9"),l=a.n(s),r=a("TSYQ"),d=a.n(r),p=a("33Jr"),u={tag:p.q,wrapTag:p.q,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},b=function(e){var t,a=e.className,i=e.cssModule,s=e.children,l=e.toggle,r=e.tag,u=e.wrapTag,b=e.closeAriaLabel,m=e.charCode,h=e.close,f=Object(o.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),g=Object(p.m)(d()(a,"modal-header"),i);if(!h&&l){var v="number"==typeof m?String.fromCharCode(m):m;t=c.a.createElement("button",{type:"button",onClick:l,className:Object(p.m)("close",i),"aria-label":b},c.a.createElement("span",{"aria-hidden":"true"},v))}return c.a.createElement(u,Object(n.a)({},f,{className:g}),c.a.createElement(r,{className:Object(p.m)("modal-title",i)},s),h||t)};b.propTypes=u,b.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=b}}]);
//# sourceMappingURL=component---src-pages-work-extrn-publications-tsx-41c355f9849d361b6e3a.js.map