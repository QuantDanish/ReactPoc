(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),r=a.n(o),s=(a(16),a(17),function(e){var t=e.children,a=e.index,n=e.title,o=e.minWidth;return l.a.createElement("div",{className:"card p-2 m-2",style:{width:o}},l.a.createElement("div",{className:"h4"},a,". ",n),l.a.createElement("hr",null),l.a.createElement("div",{className:"card-body"},t))});s.defaultProps={children:"Dummy Child",title:"Title",index:0,minWidth:"48%"};var i=s,c=a(1),d=a(4),m=a(5),u=a(7),h=a(6),p=a(8),b=a(9),f=(a(18),function(e){var t={};for(var a in e)e.hasOwnProperty(a)&&!a.match(/margin/i)&&(t[a]=e[a]);return t}),v=function(e){var t=e.show,a=e.hideCallback,n=e.startAnimation,o=e.className,r=e.body,s=e.backdropStyle,i=e.modalStyle,c=Object(b.a)({},s);c.display=t?"block":"none";var d=f(i);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"modal-backdrop "+(t?"show":""),style:c,onClick:a}),l.a.createElement("div",{className:"modal "+(t?"show":""),role:"dialog",style:c},l.a.createElement("div",{className:"modal-dialog "+o,role:"document"},l.a.createElement("div",{className:"modal-content "+(n?"aniamtionActive":""),style:d},r))))},y={borderBottom:"none",padding:"0.5rem"},E=function(e){var t=e.header,a=e.hideCallback,n=w(t);return l.a.createElement("div",{className:"modal-header",style:n?y:null},n?null:l.a.createElement("h5",{className:"modal-title"},t),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true",onClick:a},"\xd7")))},w=function(e){return 0===e.trim().length};E.defaultProps={header:""};var k=E,N=function(e){var t=e.footer,a=e.hideCallback,n=e.showTopBorder,o=e.showCloseButton,r=e.buttonText,s=e.buttonStyle,i=n?null:{borderTop:"none"};return l.a.createElement("div",{className:"modal-footer",style:i},null!==t?l.a.createElement("div",{className:"flex-fill"},t):null,o?l.a.createElement("button",{style:s,type:"button",className:"btn btn-primary",onClick:a},r):null)};N.defaultProps={footer:null,showTopBorder:!1,showCloseButton:!0,buttonText:"Close",buttonStyle:null};var C=N,g=function(e){var t=e.header,a=e.hideCallback,n=e.content,o=e.footer;return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{header:t,hideCallback:a}),l.a.createElement("div",{className:"modal-body"},n),l.a.createElement(C,{footer:o,hideCallback:a}))},S=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this))).state={show:!1,animation:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"setShow",value:function(e){this.setState({animation:this.state.animation,show:e})}},{key:"setAnimation",value:function(e){this.setState({animation:e,show:this.state.show})}},{key:"renderModal",value:function(){var e=this;this.setShow(!0),setTimeout(function(){e.setAnimation(!0)},this.props.delay)}},{key:"closeModal",value:function(){var e=this;console.log("close  modal ::",this.state,this.props),this.setAnimation(!1),setTimeout(function(){e.setShow(!1)},this.props.delay)}},{key:"shouldComponentUpdate",value:function(e,t){return!this.props.isOpen&&e.isOpen?(this.renderModal(),!1):!(this.props.isOpen&&!e.isOpen)||(this.closeModal(),!1)}},{key:"render",value:function(){var e=this.props.children||l.a.createElement(g,{header:this.props.header,footer:this.props.footer,content:this.props.content,hideCallback:this.props.closeHandler});return l.a.createElement(v,{show:this.state.show,hideCallback:this.props.closeHandler,startAnimation:this.state.animation,body:e,className:this.props.className,modalStyle:this.props.modalStyle,backdropStyle:this.props.backdropStyle})}},{key:"componentDidMount",value:function(){this.props.isOpen&&this.renderModal()}}]),t}(n.Component);S.defaultProps={isOpen:!1,delay:200,className:"",modalStyle:{},backdropStyle:{}};var O=S,x=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],o=t[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"mb-1"},"This is simple modal using bootstrap css. Clicking on this button will trigger modal."),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return o(!0)}},"Show Modal"),a?l.a.createElement(O,{isOpen:a,closeHandler:function(){return o(!1)},content:"Hey how are  you guys !!"}):null)},j=function(e){var t=e.isLoading,a=e.children,n=e.className;return t?l.a.createElement("div",{className:n},l.a.createElement("span",{className:"sr-only"},"Loading..")):a};j.defaultProps={className:"spinner-border",delay:100};var T=j,M=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=t[0],o=t[1];return l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("button",{onClick:function(){return o(!0)},className:"btn btn-outline-primary mx-3 "+(a?"disabled":"")},"Start"),l.a.createElement(T,{isLoading:a},l.a.createElement("div",{className:"h4"},"Loading finished.")),l.a.createElement("button",{onClick:function(){return o(!1)},className:"btn btn-outline-primary mx-3 "+(a?"":"disabled")},"Finish"))};var A=function(){return l.a.createElement("div",{className:"App container"},l.a.createElement("div",{className:"d-flex justify-content-around"},l.a.createElement("div",{className:"h1"},"React Components")),l.a.createElement("hr",null),l.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},l.a.createElement(i,{index:1,title:"Modal"},l.a.createElement(x,null)),l.a.createElement(i,{index:2,title:"Loader"},l.a.createElement(M,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.531a93d6.chunk.js.map