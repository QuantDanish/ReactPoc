(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(3),l=n.n(s),r=(n(16),n(17),function(e){var t=e.children,n=e.index,a=e.title,s=e.minWidth;return o.a.createElement("div",{className:"card p-2 m-2",style:{width:s}},o.a.createElement("div",{className:"h4"},n,". ",a),o.a.createElement("hr",null),o.a.createElement("div",{className:"card-body"},t))});r.defaultProps={children:"Dummy Child",title:"Title",index:0,minWidth:"100%"};var i=r,c=n(1),m=n(4),u=n(5),d=n(7),h=n(6),p=n(8),y=n(9),f=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight)},b=function(e){return"undefined"!==typeof e&&null!==e?e.getBoundingClientRect():null},g=function(e,t,n){if(e.preventDefault(),function(e){var t=e.currentTarget,n=b(t),a=f(),o=n.bottom>a||n.top<0,s=e.deltaY<0;console.log("scrolling up ",s),console.log(n);var l=s&&n.top<0,r=!s&&n.bottom>a;return o&&(l||r)}(e)){console.log("margin ",t);var a=function(e,t){var n=e.currentTarget,a=b(n),o=f(),s=e.deltaY<0,l=t+-10*e.deltaY;if(s)return Math.min(0,l);var r=a.height+50-o;return Math.max(-r,l)}(e,t);console.log(a),n(a)}},v=(n(18),function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&!n.match(/margin/i)&&(t[n]=e[n]);return t}),w=function(e){var t=e.show,n=e.hideCallback,s=e.startAnimation,l=e.className,r=e.body,i=e.backdropStyle,m=e.modalStyle,u=Object(a.useState)(0),d=Object(c.a)(u,2),h=d[0],p=d[1],f=Object(y.a)({},i);f.display=t?"block":"none";var b=v(m);return s&&(b.marginTop=h),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"modal-backdrop "+(t?"show":""),style:f,onClick:n}),o.a.createElement("div",{className:"modal "+(t?"show":""),role:"dialog",style:f},o.a.createElement("div",{className:"modal-dialog "+l,role:"document"},o.a.createElement("div",{className:"modal-content "+(s?"aniamtionActive":""),style:b,onWheel:function(e){return g(e,h,p)}},r))))},k={borderBottom:"none"},E=function(e){var t=e.header,n=e.hideCallback,a=N(t);return o.a.createElement("div",{className:"modal-header",style:a?k:null},a?null:o.a.createElement("h5",{className:"modal-title"},t),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true",onClick:n},"\xd7")))},N=function(e){return 0===e.trim().length};E.defaultProps={header:""};var C=E,O=function(e){var t=e.footer,n=e.hideCallback,a=e.showTopBorder,s=e.showCloseButton,l=e.buttonText,r=e.buttonStyle,i=a?null:{borderTop:"none"};return o.a.createElement("div",{className:"modal-footer",style:i},null!==t?o.a.createElement("div",{className:"flex-fill"},t):null,s?o.a.createElement("button",{style:r,type:"button",className:"btn btn-primary",onClick:n},l):null)};O.defaultProps={footer:null,showTopBorder:!1,showCloseButton:!0,buttonText:"Close",buttonStyle:null};var I=O,S=function(e){var t=e.header,n=e.hideCallback,a=e.content,s=e.footer,l=e.showCloseButton,r=e.showTopBorder;return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,{header:t,hideCallback:n}),o.a.createElement("div",{className:"modal-body"},a),o.a.createElement(I,{footer:s,hideCallback:n,showCloseButton:l,showTopBorder:r}))},L=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this))).state={show:!1,animation:!1},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"setShow",value:function(e){this.setState({animation:this.state.animation,show:e})}},{key:"setAnimation",value:function(e){this.setState({animation:e,show:this.state.show})}},{key:"renderModal",value:function(){var e=this;this.setShow(!0),setTimeout(function(){e.setAnimation(!0)},this.props.delay)}},{key:"closeModal",value:function(){var e=this;this.setAnimation(!1),setTimeout(function(){e.setShow(!1)},this.props.delay)}},{key:"shouldComponentUpdate",value:function(e,t){return!this.props.isOpen&&e.isOpen?(this.renderModal(),!1):!(this.props.isOpen&&!e.isOpen)||(this.closeModal(),!1)}},{key:"render",value:function(){var e=this.props.children||o.a.createElement(S,{header:this.props.header,footer:this.props.footer,content:this.props.content,hideCallback:this.props.closeHandler,showCloseButton:this.props.showCloseButton,showTopBorder:this.props.showTopBorder});return o.a.createElement(w,{show:this.state.show,hideCallback:this.props.closeHandler,startAnimation:this.state.animation,body:e,className:this.props.className,modalStyle:this.props.modalStyle,backdropStyle:this.props.backdropStyle})}},{key:"componentDidMount",value:function(){this.props.isOpen&&this.renderModal()}}]),t}(a.Component);L.defaultProps={isOpen:!1,delay:200,className:"",modalStyle:{},backdropStyle:{}};var x=L,M=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],s=t[1],l=Object(a.useState)(!1),r=Object(c.a)(l,2),i=r[0],m=r[1],u=Object(a.useState)(!1),d=Object(c.a)(u,2),h=d[0],p=d[1],y=Object(a.useState)(!1),f=Object(c.a)(y,2),b=f[0],g=f[1];return o.a.createElement("div",null,o.a.createElement("div",{className:"mb-1 h5"},"* This is simple modal using bootstrap css. Clicking on this button will trigger modal.",o.a.createElement("button",{className:"btn btn-link ",onClick:function(){return s(!0)}},"Show Modal")),o.a.createElement("div",{className:"mb-1 h5"},"* Large modal with ",o.a.createElement("code",null,"modal-lg")," class.",o.a.createElement("button",{className:"btn btn-link",onClick:function(){return m(!0)}},"Show Large Modal")),o.a.createElement("div",{className:"mb-1 h5"},"* bootstrap modal",o.a.createElement("button",{className:"btn btn-link",onClick:function(){return p(!0)}},"Show Old Bootstrap Modal.")),o.a.createElement("div",{className:"mb-1 h5"},"* Customised and scrollable.",o.a.createElement("button",{className:"btn btn-link",onClick:function(){return g(!0)}},"show")),o.a.createElement(x,{isOpen:n,closeHandler:function(){return s(!1)},content:"Hey how are  you guys !!"}),o.a.createElement(x,{className:"modal-lg",isOpen:i,closeHandler:function(){return m(!1)},content:"Hey how are  you guys !!"}),o.a.createElement(x,{header:"Modal Header",isOpen:h,closeHandler:function(){return p(!1)},content:"This is bootstrap style",footer:"Modal footer",showTopBorder:!0,showCloseButton:!0}),o.a.createElement(x,{isOpen:b,closeHandler:function(){return g(!1)},className:"modal-lg"},o.a.createElement("div",null,o.a.createElement("div",{className:"p-2 m-5"},o.a.createElement("h1",null,"Lorem Ipsum"),o.a.createElement("div",{className:"text-muted",style:{fontSize:"0.8rem"}},"*scroll to see full content."),o.a.createElement("a",{href:"#",onClick:function(){return g(!1)}},"close")),o.a.createElement("div",{className:"p-2 text-muted"},o.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),o.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),o.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),o.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))))};var B=function(){return o.a.createElement("div",{className:"App container"},o.a.createElement("div",{className:"d-flex justify-content-around"},o.a.createElement("div",{className:"h1"},"Modal Components")),o.a.createElement("hr",null),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},o.a.createElement(i,{index:1,title:"Modal"},o.a.createElement(M,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.796d2da5.chunk.js.map