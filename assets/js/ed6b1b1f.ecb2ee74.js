"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[8951],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},l=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=p(n),f=r,m=l["".concat(s,".").concat(f)]||l[f]||u[f]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}l.displayName="MDXCreateElement"},22819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var i=n(25773),r=n(30808),o=(n(27378),n(35318)),a=["components"],c={id:"1_oidc",title:"OpenId Connect",sidebar_label:"OpenId Connect"},s=void 0,p={unversionedId:"3_tasks/2_security/2_authentication/1_oidc",id:"version-v0.11.0/3_tasks/2_security/2_authentication/1_oidc",title:"OpenId Connect",description:"To enable authentication via OpenId Connect refering to NiFi Administration guide required some configuration into nifi.properties.",source:"@site/versioned_docs/version-v0.11.0/3_tasks/2_security/2_authentication/1_oidc.md",sourceDirName:"3_tasks/2_security/2_authentication",slug:"/3_tasks/2_security/2_authentication/1_oidc",permalink:"/nifikop/docs/v0.11.0/3_tasks/2_security/2_authentication/1_oidc",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.11.0/3_tasks/2_security/2_authentication/1_oidc.md",tags:[],version:"v0.11.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1655925825,formattedLastUpdatedAt:"Jun 22, 2022",frontMatter:{id:"1_oidc",title:"OpenId Connect",sidebar_label:"OpenId Connect"},sidebar:"version-v0.11.0/docs",previous:{title:"SSL",permalink:"/nifikop/docs/v0.11.0/3_tasks/2_security/1_ssl"},next:{title:"NiFi Dataflows",permalink:"/nifikop/docs/v0.11.0/3_tasks/3_nifi_dataflow"}},d={},u=[],l={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To enable authentication via OpenId Connect refering to ",(0,o.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html"},"NiFi Administration guide")," required some configuration into ",(0,o.kt)("inlineCode",{parentName:"p"},"nifi.properties"),"."),(0,o.kt)("p",null,"In addition and to ensure multiple identity provider support, we recommended to add the following configuration to your ",(0,o.kt)("inlineCode",{parentName:"p"},"nifi.properties")," : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"nifi.security.identity.mapping.pattern.dn=CN=([^,]*)(?:, (?:O|OU)=.*)?\nnifi.security.identity.mapping.value.dn=$1\nnifi.security.identity.mapping.transform.dn=NONE\n")),(0,o.kt)("p",null,"To perform this with ",(0,o.kt)("inlineCode",{parentName:"p"},"NiFiKop")," you just have to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec.NifiProperties.OverrideConfigs")," field with your OIDC configuration, for example :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\n...\nspec:\n  ...\n  readOnlyConfig:\n    # NifiProperties configuration that will be applied to the node.\n    nifiProperties:\n      webProxyHosts:\n        - nifistandard2.trycatchlearn.fr:8443\n      # Additionnals nifi.properties configuration that will override the one produced based\n      # on template and configurations.\n      overrideConfigs: |\n        nifi.security.user.oidc.discovery.url=<oidc server discovery url>\n        nifi.security.user.oidc.client.id=<oidc client's id>\n        nifi.security.user.oidc.client.secret=<oidc client's secret>\n        nifi.security.identity.mapping.pattern.dn=CN=([^,]*)(?:, (?:O|OU)=.*)?\n        nifi.security.identity.mapping.value.dn=$1\n        nifi.security.identity.mapping.transform.dn=NONE\n      ...\n   ...\n...\n")))}f.isMDXComponent=!0}}]);