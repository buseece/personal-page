(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{38:function(e,t,a){e.exports=a(53)},44:function(e,t,a){},45:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),o=a.n(i),c=(a(43),a(44),a(24)),l=a(14),s=(a(45),a(4)),m=a(5),u=a(7),p=a(8),d=a(56),h=a(57),g=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleScroll=function(){0===window.scrollY?n.setState({navbarStyle:{}}):0===window.scrollY||n.state.navbarStyle.backgroundImage||n.setState({navbarStyle:{backgroundImage:"url(https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"}})},n.state={navbarStyle:{},navLinkStyle:{fontWeight:"600",color:"rgba(255, 255, 255, 0.8)"}},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.a,{bg:"lg",expand:"lg",variant:"dark",fixed:"top",style:this.state.navbarStyle},r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(d.a.Collapse,{className:"justify-content-center",id:"basic-navbar-nav"},r.a.createElement(h.a,null,r.a.createElement(h.a.Link,{href:"/",style:this.state.navLinkStyle},"HOME"),r.a.createElement(h.a.Link,{href:"/about",style:this.state.navLinkStyle},"ABOUT"),r.a.createElement(h.a.Link,{href:"/blog",style:this.state.navLinkStyle},"BLOG"),r.a.createElement(h.a.Link,{href:"/art",style:this.state.navLinkStyle},"ART")))))}}]),a}(r.a.Component),E=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-lg-4 mb-4 grid-margin dark-text"},r.a.createElement("div",{className:"card h-100"},r.a.createElement("div",{className:"card-body text-left"},r.a.createElement("div",{className:"card-body-text"},r.a.createElement("div",{className:"card-logo pb-4"},r.a.createElement("img",{style:{height:"60px"},src:""+this.props.imgLink,alt:""})),r.a.createElement("h5",null,this.props.title),r.a.createElement("p",{className:"card-text"},this.props.text)))))}}]),a}(r.a.Component),v=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"component-container"},r.a.createElement("section",{id:"interest",className:"pt-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"section-title"},"My Interests")),r.a.createElement("div",{className:"row pt-5"},r.a.createElement(E,{imgLink:"laptop-coding.png",title:"Development",text:"Coding makes everything possible! I like Frontend development, because I like creating something that user can see."}),r.a.createElement(E,{imgLink:"cloud.png",title:"Cloud Technology",text:"It is fascinating to see how the world evolves around the Cloud Technologies!"}),r.a.createElement(E,{imgLink:"freedom.png",title:"Entrepreneurship",text:"I like the motivation behind the entrepreneurial mindset. Creating something new is indeed hard and requires lots of effort and determination."})))))}}]),a}(r.a.Component),b=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row pt-2"},r.a.createElement("div",null,r.a.createElement("img",{style:{height:"60px"},src:""+this.props.imgLink,alt:"logo"})),r.a.createElement("div",{className:"col-lg-8 mb-2 dark-text"},r.a.createElement("span",{className:"time"},this.props.time),r.a.createElement("h6",{className:"resume-item-title",style:{fontWeight:"600"}},this.props.title),this.props.subInfo1?r.a.createElement("p",{style:{fontWeight:"600"}},this.props.subInfo1):"",r.a.createElement("p",null,this.props.subInfo2?r.a.createElement("span",{style:{fontWeight:"600"}},this.props.subInfo2):"",this.props.text)))}}]),a}(r.a.Component),f=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"component-container about-background"},r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-6 about-text"},r.a.createElement("div",{className:"about-title"},"Hello!"),"It's Buse, computer engineer with prior experience in web development and project management."))))),r.a.createElement(v,null))}}]),a}(r.a.Component),k=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"about-background header-part"}),r.a.createElement("div",{className:"component-container"},r.a.createElement("section",{id:"education",className:"pt-5 text-left"},r.a.createElement("div",{className:"container mb-2"},r.a.createElement("div",{className:"row mb-4"},r.a.createElement("div",{className:"section-title"},"Education")),r.a.createElement(b,{time:"2015-2019",imgLink:"/edu.png",title:"Bachelor of Computer Engineering, BOGAZICI UNIVERSITY",subInfo1:"3.53/4.00",subInfo2:"Courses:",text:"Introduction to OOP, Data Structures & Algorithms, Analysis of Algorithms, Fundamentals of Software Engineering, Principles of Programming Languages, Digital Systems, Introduction to Database, Operating Systems, Computer Organization"}),r.a.createElement(b,{time:"2017-2018/2",imgLink:"/edu.png",title:"Bachelor of Computer Science (Erasmus), UTRECHT UNIVERSITY",subInfo2:"Courses:",text:"Software Testing and Verification, Interaction Technology, Entrepreneurship, Information Security"})))),r.a.createElement("div",{className:"component-container"},r.a.createElement("section",{id:"experience",className:"pt-5 text-left"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mb-4"},r.a.createElement("div",{className:"section-title"},"Experience")),r.a.createElement(b,{time:"04/2020-Present",imgLink:"/hard-work.png",title:"Associate Cloud Technical Solutions Engineer",subInfo1:"Google, Ireland",text:""}),r.a.createElement(b,{time:"10/2019-03/2020",imgLink:"/hard-work.png",title:"Digital CVM Solutions Pega Developer",subInfo1:"Vodafone, Turkey",text:"Decision architect in a cross-functional team, using Pega to design and develop the solution logic. Contributing to Customer Value Management by offering customer specific propositions."}),r.a.createElement(b,{time:"02/2019-08/2019",imgLink:"/hard-work.png",title:"JavaScript Developer Intern",subInfo1:"Insider, Turkey",text:"Worked with account managers to implement company specific solutions. Used JavaScript, jQuery, HTML & CSS for product customizations and feature optimizations."}),r.a.createElement(b,{time:"07/2018-09/2018",imgLink:"/hard-work.png",title:"Student Researcher",subInfo1:"The von Karman Institute, Belgium",text:"Implemented a module to read customized terrain profile for open source software WRF Implemented Mars Solar Time Calculator using JavaScript"}),r.a.createElement(b,{time:"05/2017-09/2017",imgLink:"/hard-work.png",title:"Information Systems Intern",subInfo1:"Reckitt Benckiser, Turkey",text:"Took part in Business software projects, reported bugs found in the system, taking part in communication with software development companies"})))))}}]),a}(r.a.Component),y=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"about-background header-part"},r.a.createElement("div",{className:"component-container container",id:"coming-next"},r.a.createElement("h2",{className:"section-heading"},"404 NOT FOUND"),r.a.createElement("p",null,"Navigate to the ",r.a.createElement("a",{href:"/"},"main page")))))}}]),a}(r.a.Component),w=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement("div",{className:"footer-line"},"Developed by ",r.a.createElement("a",{href:"https://www.linkedin.com/in/buseeceguldiken/"}," Buse Ece G\xfcldiken ")),r.a.createElement("div",{className:"footer-line"},r.a.createElement("a",{href:"https://github.com/buseece/cvblog"},r.a.createElement("i",{class:"fa fa-github"}),"View on Github"))))}}]),a}(r.a.Component);var N=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:f}),r.a.createElement(l.a,{path:"/about",component:k}),r.a.createElement(l.a,{component:y})),r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.eb94d207.chunk.js.map