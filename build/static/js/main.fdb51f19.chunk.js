(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{42:function(e,t,s){},49:function(e,t,s){},75:function(e,t,s){"use strict";s.r(t);var o=s(1),r=s.n(o),a=s(13),c=s.n(a),i=s(12),n=(s(42),s(4)),l=s(11),u=(s(48),s(49),s(10)),h=s.n(u),d=s(15),p=s(14),m=s(20),b=s.n(m),f=(s(69),s(34)),j=s.n(f),g=s(0),y="https://defineyourspec.com";function x(){var e,t=Object(o.useRef)(""),s=Object(o.useRef)(""),r=Object(o.useRef)(""),a=Object(o.useRef)(""),c=Object(o.useRef)(""),n=Object(o.useRef)(""),u=Object(o.useState)(""),m=Object(p.a)(u,2),f=m[0],x=m[1],v=Object(o.useState)(""),w=Object(p.a)(v,2),O=w[0],k=w[1],S=Object(o.useState)(!1),N=Object(p.a)(S,2),I=N[0],C=N[1],P=Object(o.useState)(!1),T=Object(p.a)(P,2),E=T[0],L=T[1],R=Object(o.useState)(!1),F=Object(p.a)(R,2),G=F[0],M=F[1],q=Object(o.useState)(0),W=Object(p.a)(q,2),A=(W[0],W[1]),D=Object(o.useState)(0),B=Object(p.a)(D,2),_=(B[0],B[1]),z=function(){var e=Object(d.a)(h.a.mark((function e(t,s,o,r,a){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.crossOrigin="*",t.onload=Object(d.a)(h.a.mark((function e(){var c,i,n,l,u,d;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=document.getElementById("canvas")).width=t.width,_(t.width),c.height=t.height,A(t.height),(i=c.getContext("2d")).drawImage(t,0,0,600,600),i.globalAlpha=.4,i.fillStyle="green",i.fillRect(0,0,600,600),i.strokeStyle="#2fa703",i.strokeRect(15,15,570,570),i.globalAlpha=1,i.fillStyle="white",i.strokeStyle="green",i.fillRect(40,175,72,27),i.fillStyle="green",i.font="16px Futura",i.fillText("I AM A",46,193),i.fillStyle="white",i.font="80px GothamCond-Black",i.fillText("S",39,270),i.font="40px Futura",i.fillText(s,80,260),i.font="80px GothamCond-Black",i.fillText("P",39,355),i.font="40px Futura",i.fillText(o,80,350),i.font="80px GothamCond-Black",i.fillText("E",39,442),i.font="40px Futura",i.fillText(r,80,436),i.font="80px GothamCond-Black",i.fillText("C",39,525),i.font="40px Futura",i.fillText(a,80,515),i.font="20px Futura",i.fillText("@2Sureng",480,555),(n=new Image).src="images/2sure-logo.png",i.drawImage(n,502,492,54,40),l=c.toDataURL("image/jpeg",1),(u=new FormData).append("picture",l),e.next=46,U(u);case 46:d=e.sent,C(!0),x(d.data);case 49:case"end":return e.stop()}}),e)})));case 2:case"end":return e.stop()}}),e)})));return function(t,s,o,r,a){return e.apply(this,arguments)}}(),Y=function(){var e=Object(d.a)(h.a.mark((function e(t){var s,o,r,a,c,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=t,(o=new Image).src=s,r=localStorage.getItem("s"),a=localStorage.getItem("p"),c=localStorage.getItem("e"),i=localStorage.getItem("c"),r="s"===r[0].toLowerCase()?r.slice(1).toLowerCase():r.toLowerCase(),a="p"===a[0].toLowerCase()?a.slice(1).toLowerCase():a.toLowerCase(),c="e"===c[0].toLowerCase()?c.slice(1).toLowerCase():c.toLowerCase(),i="c"===i[0].toLowerCase()?i.slice(1).toLowerCase():i.toLowerCase(),z(o,r,a,c,i);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(h.a.mark((function e(t){var s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.patch("".concat(y,"/api/v1/image/finish"),t);case 3:return s=e.sent,e.abrupt("return",s.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(d.a)(h.a.mark((function e(o){var i,u;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.current.value){e.next=3;break}return c.current.value="",e.abrupt("return",l.NotificationManager.error("Please enter your S value","Error"));case 3:if(""!==s.current.value){e.next=6;break}return c.current.value="",e.abrupt("return",l.NotificationManager.error("Please enter your P value","Error"));case 6:if(""!==r.current.value){e.next=9;break}return c.current.value="",e.abrupt("return",l.NotificationManager.error("Please enter your E value","Error"));case 9:if(""!==a.current.value){e.next=12;break}return c.current.value="",e.abrupt("return",l.NotificationManager.error("Please enter your C value","Error"));case 12:if(""!==n.current.value){e.next=14;break}return e.abrupt("return",l.NotificationManager.error("Please enter your email","Error"));case 14:return localStorage.removeItem("s"),localStorage.removeItem("p"),localStorage.removeItem("e"),localStorage.removeItem("c"),localStorage.setItem("s",t.current.value),localStorage.setItem("p",s.current.value),localStorage.setItem("e",r.current.value),localStorage.setItem("c",a.current.value),e.prev=22,e.next=25,b.a.post("".concat(y,"/api/v1/detail"),{social:n.current.value,number:""});case 25:e.sent,e.next=31;break;case 28:e.prev=28,e.t0=e.catch(22),console.log(e.t0);case 31:5242880,c.current.files[0].size>5242880&&(l.NotificationManager.error("Image size greater than 5mb","Error"),c.current.value=""),l.NotificationManager.info("Image Upload in progress","Info"),o.preventDefault(),i=c.current.files[0],(new FormData).append("picture",i),L(!0),u=URL.createObjectURL(i),k(u);case 41:case"end":return e.stop()}}),e,null,[[22,28]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){O.length>0&&(e=new j.a(document.getElementById("image"),{viewMode:0,aspectRatio:1,zoomable:!0,center:!0,modal:!0,autoCropArea:.8,autoCrop:!0,preview:".preview",crop:function(e){console.log(e.detail.x),console.log(e.detail.y),console.log(e.detail.width),console.log(e.detail.height),console.log(e.detail.rotate),console.log(e.detail.scaleX),console.log(e.detail.scaleY)}}))}),[O]);var V=function(){var t=Object(d.a)(h.a.mark((function t(){var s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.NotificationManager.info("Generating Meme","Info"),s=e.getCroppedCanvas({imageSmoothingEnabled:!1,imageSmoothingQuality:"high",width:600,height:600}).toDataURL(),M(!0),Y(s);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"wrapper-home",style:{backgroundImage:"url(images/bg-new-2.jpg)"},children:[Object(g.jsx)("header",{className:"header",children:Object(g.jsx)("div",{class:"container",children:Object(g.jsxs)("div",{class:"row",children:[Object(g.jsx)("div",{class:"col-6",children:Object(g.jsx)("a",{href:"/",className:"logo",children:Object(g.jsx)("img",{src:"images/2sure-logo.png",style:{height:"80px"}})})}),Object(g.jsx)("div",{class:"col-6 text-right"})]})})}),Object(g.jsxs)("div",{className:"box",children:[Object(g.jsx)("h3",{className:"spec-header",children:"Spec Meme Generator"}),!0===E||!0===I?null:Object(g.jsxs)("div",{className:"form-box",children:[Object(g.jsx)("p",{className:"spec-sub-header",children:"Enter your Details to generate your Spec Meme"}),Object(g.jsxs)("div",{className:"flex form-group",children:[Object(g.jsx)("div",{className:"text",children:"S"}),Object(g.jsx)("input",{className:"meme-input form-control",ref:t,type:"text"})]}),Object(g.jsxs)("div",{className:"flex form-group",children:[Object(g.jsx)("div",{className:"text",children:"P"}),Object(g.jsx)("input",{className:"meme-input form-control",ref:s,type:"text"})]}),Object(g.jsxs)("div",{className:"flex form-group",children:[Object(g.jsx)("div",{className:"text",children:"E"}),Object(g.jsx)("input",{className:"meme-input form-control",ref:r,type:"text"})]}),Object(g.jsxs)("div",{className:"flex form-group",children:[Object(g.jsx)("div",{className:"text",children:"C"}),Object(g.jsx)("input",{className:"meme-input form-control",ref:a,type:"text"})]}),Object(g.jsxs)("div",{className:"flex form-group",children:[Object(g.jsx)("div",{className:"text",children:"Email"}),Object(g.jsx)("input",{className:"meme-input form-control",ref:n,type:"text"})]}),Object(g.jsxs)("div",{className:"upload-btn-wrapper",children:[Object(g.jsxs)("button",{class:"btn",children:[Object(g.jsx)("i",{class:"fas fa-camera"})," Upload your photo"]}),Object(g.jsx)("input",{type:"file",onInput:J,name:"file",accept:"image/png, image/jpeg",id:"file",ref:c,class:"input-file"})]}),Object(g.jsx)("span",{style:{fontFamily:"GothamCond-Black",color:"#000"},children:"G"})]}),0===f.length&&!0===G?Object(g.jsx)("img",{src:"images/loading.gif",style:{marginLeft:"auto",marginRight:"auto",width:"150px",display:"block"}}):null,Object(g.jsx)("canvas",{id:"canvas"}),!0===I?Object(g.jsxs)("div",{className:"meme",children:[Object(g.jsx)("img",{src:f,style:{maxWidth:"100%",display:"block"}}),Object(g.jsxs)("button",{className:"btn btn-block download-button px-2 mt-3",onClick:function(){l.NotificationManager.info("Downloading Meme","info");var e=document.createElement("a");e.download="meme.png",e.href=f,e.target="_blank",document.body.appendChild(e),e.click()},children:[Object(g.jsx)("i",{class:"fas fa-download"})," Download Meme"]}),Object(g.jsxs)("div",{class:"share-button text-center mt-4",children:[Object(g.jsx)("div",{class:"share-text mt-3 mb-1",children:"Share on:"}),Object(g.jsx)("a",{target:"_blank",style:{color:"white"},rel:"noopener noreferrer",className:"share-button mr-3",href:"https://www.facebook.com/sharer.php?u=".concat(f),children:Object(g.jsx)("i",{class:"fab fa-facebook-square"})}),Object(g.jsx)("a",{target:"_blank",style:{color:"white"},rel:"noopener noreferrer",className:"share-button mr-3",href:"https://twitter.com/share?text=I just checked generated my spec meme. You can generate yours at at https://meme.checkspecstatus.com, check it out - ".concat(f),children:Object(g.jsx)("i",{class:"fab fa-twitter-square"})}),Object(g.jsx)("a",{target:"_blank",style:{color:"white"},rel:"noopener noreferrer",className:"share-button mr-3",href:"whatsapp://send?text=I just checked generated my spec meme. You can generate yours at at https://meme.checkspecstatus.com, check it out - ".concat(f),children:Object(g.jsx)("i",{class:"fab fa-whatsapp"})}),Object(g.jsx)("a",{target:"_blank",style:{color:"white"},rel:"noopener noreferrer",className:"share-button mr-3",href:"https://www.instagram.com",children:Object(g.jsx)("i",{class:"fab fa-instagram"})})]})]}):null,O.length>0&&!1===I?Object(g.jsx)("p",{className:"spec-sub-header",children:"Adjust your photo within the crop area. You can pinch to zoom or expand crop area as required"}):null,0===O.length&&!0===E?Object(g.jsx)("img",{src:"images/loading.gif",style:{marginLeft:"auto",marginRight:"auto",width:"150px",display:"block"}}):null,!0===G?null:Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:Object(g.jsx)("img",{style:{maxWidth:"100%",display:"block"},id:"image",src:O})}),Object(g.jsx)("div",{children:O.length>0?Object(g.jsx)("button",{className:"btn btn-block download-button px-2 mt-3",onClick:V,children:"Done"}):null})]})]}),Object(g.jsx)("div",{class:"footer",children:Object(g.jsx)("div",{class:"container",children:Object(g.jsxs)("div",{class:"row",children:[Object(g.jsx)("div",{class:"col-6",children:Object(g.jsx)(i.b,{to:"/privacy",style:{color:"white"},children:Object(g.jsx)("span",{children:"TERMS OF USE/ PRIVACY"})})}),Object(g.jsxs)("div",{class:"col-6 text-right",children:[Object(g.jsx)("a",{target:"_blank",style:{color:"white"},rel:"noopener noreferrer",className:"share-button mr-3",href:"https://www.facebook.com/2SureNigeria/",children:Object(g.jsx)("i",{class:"fab fa-facebook-square"})}),Object(g.jsx)("a",{target:"_blank",style:{color:"white"},rel:"noopener noreferrer",className:"share-button mr-3",href:"https://www.instagram.com/2sureng/",children:Object(g.jsx)("i",{class:"fab fa-instagram"})}),Object(g.jsx)("a",{target:"_blank",style:{color:"white"},rel:"noopener noreferrer",className:"share-button mr-3",href:"https://www.twitter.com/2SureNG/",children:Object(g.jsx)("i",{class:"fab fa-twitter-square"})})]})]})})})]})}function v(e){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:"wrapper-home",style:{backgroundImage:"url(images/bg-new-2.jpg)"},children:[Object(g.jsx)("header",{className:"header",children:Object(g.jsx)("div",{class:"container",children:Object(g.jsxs)("div",{class:"row",children:[Object(g.jsx)("div",{class:"col-6",children:Object(g.jsx)(i.b,{to:"/",className:"logo",children:Object(g.jsx)("img",{src:"images/2sure-logo.png",style:{height:"80px"}})})}),Object(g.jsx)("div",{class:"col-6 text-right"})]})})}),Object(g.jsx)("div",{class:"main",children:Object(g.jsx)("div",{class:"container",children:Object(g.jsx)("div",{class:"row justify-content-center",children:Object(g.jsx)("div",{class:"col-md-8 mt-5",children:Object(g.jsxs)("div",{class:"home-spec-info",style:{textAlign:"justify"},children:[Object(g.jsx)("h2",{children:"Welcome to our Privacy Policy"}),Object(g.jsx)("p",{children:"Your privacy is critically important to us."}),Object(g.jsx)("p",{children:'It is checkspectstatus.com\'s policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to https://CheckStatus.com (hereinafter, "us", "we", or "https://CheckStatus.com"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.'}),Object(g.jsx)("p",{children:"This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions."}),Object(g.jsx)("h5",{children:"Website Visitors"}),Object(g.jsx)("p",{children:"Like most website operators, checkspectstatus.com collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. checkspectstatus.com's purpose in collecting non-personally identifying information is to better understand how checkspectstatus.com's visitors use its website. From time to time, checkspectstatus.com may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website."}),Object(g.jsx)("p",{children:"checkspectstatus.com also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on https://CheckStatus.com blog posts. checkspectstatus.com only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below."}),Object(g.jsx)("h5",{children:"Gathering of Personally-Identifying Information"}),Object(g.jsx)("p",{children:"To provide you with quality service as Job seekers and employers, checkspectstatus.com requires certain personally-identifying information which includes (but not limited to); email addresses, full names, biodata, etc. By using the Spec Status website CheckStatus.com you agree that the information provided is solely and wholly of your volition, and you understand that this is to offer you the best of our service."}),Object(g.jsx)("h5",{children:"Security"}),Object(g.jsx)("p",{children:"The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security."}),Object(g.jsx)("h5",{children:"Advertisements"}),Object(g.jsx)("p",{children:"Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by checkspectstatus.com and does not cover the use of cookies by any advertisers."}),Object(g.jsx)("h5",{children:"Links To External Sites"}),Object(g.jsx)("p",{children:"Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and the terms and conditions of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services."}),Object(g.jsx)("h5",{children:"https://SpecStatus.ng uses Google AdWords & Facebook for remarketing"}),Object(g.jsx)("p",{children:"Https://CheckStatus.com uses the remarketing services to advertise on third party websites (including Google) to previous visitors to our site. It could mean that we advertise to previous visitors who haven't completed a task on our site, for example using the contact form to make an enquiry. This could be in the form of an advertisement on the Google search results page, or a site in the Google & Facebook Display Network. Third-party vendors, including Google, use cookies to serve ads based on someone's past visits. Of course, any data collected will be used in accordance with our own privacy policy and Google's privacy policy."}),Object(g.jsx)("p",{children:"You can set preferences for how Google advertises to you using the Google Ad Preferences page, and if you want to you can opt-out of interest-based advertising entirely by cookie settings or permanently using a browser plugin."}),Object(g.jsx)("h5",{children:"Protection of Certain Personally-Identifying Information"}),Object(g.jsx)("p",{children:"checkspectstatus.com discloses potentially personally identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on checkspectstatus.com's behalf or to provide services available at checkspectstatus.com's website, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using checkspectstatus.com's website, you consent to the transfer of such information to them. checkspectstatus.com will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, checkspectstatus.com discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental requests, or when checkspectstatus.com believes in good faith that disclosure is reasonably necessary to protect the property or rights of checkspectstatus.com, third parties or the public at large."}),Object(g.jsx)("p",{children:"If you are a registered user of https://CheckStatus.com and have supplied your email address, checkspectstatus.com may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what's going on with checkspectstatus.com and our products. We primarily use our blog to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. checkspectstatus.com takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information."}),Object(g.jsx)("h5",{children:"Aggregated Statistics"}),Object(g.jsx)("p",{children:"checkspectstatus.com may collect statistics about the behaviour of visitors to its website. checkspectstatus.com may display this information publicly or provide it to others. However, checkspectstatus.com does not disclose your personally-identifying information."}),Object(g.jsx)("h5",{children:"Cookies"}),Object(g.jsx)("p",{children:'To enrich and perfect your online experience, checkspectstatus.com uses "Cookies", similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.'}),Object(g.jsx)("p",{children:"A cookie is a string of information that a website stores on a visitor's computer, and that the visitor's browser provides to the website each time the visitor returns. checkspectstatus.com uses cookies to help checkspectstatus.com identify and track visitors, their usage of https://CheckStatus.com, and their website access preferences. checkspectstatus.com visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using checkspectstatus.com's websites, with the drawback that certain features of checkspectstatus.com's websites may not function properly without the aid of cookies."}),Object(g.jsx)("p",{children:"By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to checkspectstatus.com's use of cookies."}),Object(g.jsx)("h5",{children:"Privacy Policy Changes"}),Object(g.jsx)("p",{children:"Although most changes are likely to be minor, checkspectstatus.com may change its Privacy Policy from time to time, and at checkspectstatus.com's sole discretion. checkspectstatus.com encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change."}),Object(g.jsx)("h5",{children:"Contact Information"}),Object(g.jsx)("p",{children:"If you have any questions about this Privacy Policy, please contact us via"})]})})})})}),Object(g.jsx)("div",{class:"footer",children:Object(g.jsx)("div",{class:"container",children:Object(g.jsxs)("div",{class:"row",children:[Object(g.jsx)("div",{class:"col-md-6",children:Object(g.jsx)(i.b,{to:"/privacy",style:{color:"white"},children:Object(g.jsx)("div",{class:"col-md-12",children:Object(g.jsx)("span",{children:"TERMS OF USE/ PRIVACY"})})})}),Object(g.jsxs)("div",{class:"col-md-6 text-right",children:[Object(g.jsx)("a",{target:"_blank",style:{color:"white"},rel:"noopener noreferrer",className:"share-button mr-3",href:"https://www.facebook.com/2SureNigeria/",children:Object(g.jsx)("i",{class:"fab fa-facebook-square"})}),Object(g.jsx)("a",{target:"_blank",style:{color:"white"},rel:"noopener noreferrer",className:"share-button mr-3",href:"https://www.instagram.com/2sureng/",children:Object(g.jsx)("i",{class:"fab fa-instagram"})}),Object(g.jsx)("a",{target:"_blank",style:{color:"white"},rel:"noopener noreferrer",className:"share-button mr-3",href:"https://www.twitter.com/2SureNG/",children:Object(g.jsx)("i",{class:"fab fa-twitter-square"})})]})]})})})]})})}var w=function(){return Object(g.jsxs)("div",{className:"back",children:[Object(g.jsx)(n.c,{children:Object(g.jsx)(n.a,{exact:!0,path:"/",component:x})}),Object(g.jsx)(n.c,{children:Object(g.jsx)(n.a,{exact:!0,path:"/privacy",component:v})}),Object(g.jsx)(l.NotificationContainer,{})]})},O=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,76)).then((function(t){var s=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),o(e),r(e),a(e),c(e)}))};c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(i.a,{children:Object(g.jsx)(w,{})})}),document.getElementById("root")),O()}},[[75,1,2]]]);
//# sourceMappingURL=main.fdb51f19.chunk.js.map