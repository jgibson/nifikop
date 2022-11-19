"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[6990],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},74250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(25773),a=r(30808),i=(r(27378),r(35318)),o=["components"],l={id:"1_start_here",title:"Start here",sidebar_label:"Start here"},p=void 0,s={unversionedId:"1_concepts/1_start_here",id:"1_concepts/1_start_here",title:"Start here",description:"The Konpy\u016bt\u0101ika NiFi operator is a Kubernetes operator to automate provisioning, management, autoscaling and operations of Apache NiFi clusters deployed to K8s.",source:"@site/../docs/1_concepts/1_start_here.md",sourceDirName:"1_concepts",slug:"/1_concepts/1_start_here",permalink:"/nifikop/docs/next/1_concepts/1_start_here",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/../docs/1_concepts/1_start_here.md",tags:[],version:"current",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1664046775,formattedLastUpdatedAt:"Sep 24, 2022",frontMatter:{id:"1_start_here",title:"Start here",sidebar_label:"Start here"},sidebar:"docs",next:{title:"Design Principles",permalink:"/nifikop/docs/next/1_concepts/2_design_principles"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Motivation",id:"motivation",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Konpy\u016bt\u0101ika NiFi operator is a Kubernetes operator to automate provisioning, management, autoscaling and operations of ",(0,i.kt)("a",{parentName:"p",href:"https://nifi.apache.org/"},"Apache NiFi")," clusters deployed to K8s."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Apache NiFi is an open-source solution that support powerful and scalable directed graphs of data routing, transformation, and system mediation logic.\nSome of the high-level capabilities and objectives of Apache NiFi include, and some of the main features of the ",(0,i.kt)("strong",{parentName:"p"},"NiFiKop")," are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fine grained")," node configuration support"),(0,i.kt)("li",{parentName:"ul"},"Graceful rolling upgrade"),(0,i.kt)("li",{parentName:"ul"},"graceful NiFi cluster ",(0,i.kt)("strong",{parentName:"li"},"scaling")),(0,i.kt)("li",{parentName:"ul"},"NiFi cluster ",(0,i.kt)("strong",{parentName:"li"},"auto-scaling")," "),(0,i.kt)("li",{parentName:"ul"},"Encrypted communication using SSL"),(0,i.kt)("li",{parentName:"ul"},"the provisioning of secure NiFi clusters"),(0,i.kt)("li",{parentName:"ul"},"Advanced Dataflow and user management via CRD")),(0,i.kt)("p",null,"Some of the roadmap features :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Automatic reaction and self healing based on alerts (plugin system, with meaningful default alert plugins)"),(0,i.kt)("li",{parentName:"ul"},"graceful NiFi cluster ",(0,i.kt)("strong",{parentName:"li"},"rebalancing"))),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"There are already some approaches to operating NiFi on Kubernetes, however, we did not find them appropriate for use in a highly dynamic environment, nor capable of meeting our needs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cetic/helm-nifi"},"Helm chart")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.cloudera.com/cloudera-flow-management-goes-cloud-native-with-apache-nifi-on-red-hat-openshift-kubernetes-platform/"},"Cloudera Nifi Operator"))),(0,i.kt)("p",null,"Finally, our motivation is to build an open source solution and a community which drives the innovation and features of this operator."))}d.isMDXComponent=!0}}]);