"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64],{1793:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l="stringControl()",d={unversionedId:"controls/stringControl",id:"controls/stringControl",isDocsHomePage:!1,title:"stringControl()",description:"The most basic of controls, the string control is just a normal input field where some text can go.",source:"@site/docs/controls/stringControl.md",sourceDirName:"controls",slug:"/controls/stringControl",permalink:"/relive/docs/controls/stringControl",editUrl:"https://github.com/ehne/relive/edit/master/packages/docs/docs/controls/stringControl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fundamentals",permalink:"/relive/docs/quickstart/fundamentals"}},p=[{value:"Arguments",id:"arguments",children:[{value:"<code>name</code>",id:"name",children:[]},{value:"<code>defaultString</code> (optional)",id:"defaultstring-optional",children:[]}]},{value:"What it returns in <code>useRelive()</code>",id:"what-it-returns-in-userelive",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stringcontrol"},"stringControl()"),(0,r.kt)("p",null,"The most basic of controls, the string control is just a normal input field where some text can go."),(0,r.kt)("pre",{className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"stringControl"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," (")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  name"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"string"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},", ")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  defaultString"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"?:"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"string")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},") "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=>"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"Record"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"string"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"StringControl"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">"))))),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("h3",{id:"name"},(0,r.kt)("inlineCode",{parentName:"h3"},"name")),(0,r.kt)("p",null,"This is the name of field, it is what shows up next to it in the control UI."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Each name for every control must be unique, otherwise you will run into issues"))),(0,r.kt)("h3",{id:"defaultstring-optional"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultString")," (optional)"),(0,r.kt)("p",null,"An optional field that sets the default value of the stringControl. It prefills the control UI, but does not automatically push it to render on the scene. You still have to press send."),(0,r.kt)("h2",{id:"what-it-returns-in-userelive"},"What it returns in ",(0,r.kt)("inlineCode",{parentName:"h2"},"useRelive()")),(0,r.kt)("p",null,"The string value can be found under ",(0,r.kt)("inlineCode",{parentName:"p"},"data.name"),". So if there was a control that had a name of ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," and a value of ",(0,r.kt)("inlineCode",{parentName:"p"},'"hi"'),", the result would be ",(0,r.kt)("inlineCode",{parentName:"p"},'data.hello === "hi"'),"."),(0,r.kt)("pre",{className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"type"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"Record"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"<"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"string"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},", "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"string"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},">"))))))}m.isMDXComponent=!0}}]);