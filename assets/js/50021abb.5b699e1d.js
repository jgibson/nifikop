"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4743],{35318:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var i=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||o;return t?i.createElement(m,a(a({ref:n},u),{},{components:t})):i.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72043:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var i=t(25773),r=t(30808),o=(t(27378),t(35318)),a=["components"],s={id:"1_oidc",title:"OpenId Connect",sidebar_label:"OpenId Connect"},c=void 0,p={unversionedId:"3_manage_nifi/1_manage_clusters/1_deploy_cluster/5_users_authentication/1_oidc",id:"version-v0.16.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/5_users_authentication/1_oidc",title:"OpenId Connect",description:"To enable authentication via OpenId Connect refering to NiFi Administration guide required some configuration into nifi.properties.",source:"@site/versioned_docs/version-v0.16.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/5_users_authentication/1_oidc.md",sourceDirName:"3_manage_nifi/1_manage_clusters/1_deploy_cluster/5_users_authentication",slug:"/3_manage_nifi/1_manage_clusters/1_deploy_cluster/5_users_authentication/1_oidc",permalink:"/nifikop/docs/3_manage_nifi/1_manage_clusters/1_deploy_cluster/5_users_authentication/1_oidc",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.16.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/5_users_authentication/1_oidc.md",tags:[],version:"v0.16.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1668697208,formattedLastUpdatedAt:"Nov 17, 2022",frontMatter:{id:"1_oidc",title:"OpenId Connect",sidebar_label:"OpenId Connect"},sidebar:"docs",previous:{title:"SSL configuration",permalink:"/nifikop/docs/3_manage_nifi/1_manage_clusters/1_deploy_cluster/4_ssl_configuration"},next:{title:"Custom User Authorizers",permalink:"/nifikop/docs/3_manage_nifi/1_manage_clusters/1_deploy_cluster/6_users_authorization/1_custom_user_authorizer"}},u={},l=[],d={toc:l};function f(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To enable authentication via OpenId Connect refering to ",(0,o.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html"},"NiFi Administration guide")," required some configuration into ",(0,o.kt)("inlineCode",{parentName:"p"},"nifi.properties"),"."),(0,o.kt)("p",null,"In addition and to ensure multiple identity provider support, we recommended to add the following configuration to your ",(0,o.kt)("inlineCode",{parentName:"p"},"nifi.properties")," : "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"nifi.security.identity.mapping.pattern.dn=CN=([^,]*)(?:, (?:O|OU)=.*)?\nnifi.security.identity.mapping.value.dn=$1\nnifi.security.identity.mapping.transform.dn=NONE\n")),(0,o.kt)("p",null,"To perform this with ",(0,o.kt)("inlineCode",{parentName:"p"},"NiFiKop")," you just have to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"Spec.NifiProperties.OverrideConfigs")," field with your OIDC configuration, for example :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\n...\nspec:\n  ...\n  readOnlyConfig:\n    # NifiProperties configuration that will be applied to the node.\n    nifiProperties:\n      webProxyHosts:\n        - nifistandard2.trycatchlearn.fr:8443\n      # Additionnals nifi.properties configuration that will override the one produced based\n      # on template and configurations.\n      overrideConfigs: |\n        nifi.security.user.oidc.discovery.url=<oidc server discovery url>\n        nifi.security.user.oidc.client.id=<oidc client's id>\n        nifi.security.user.oidc.client.secret=<oidc client's secret>\n        nifi.security.identity.mapping.pattern.dn=CN=([^,]*)(?:, (?:O|OU)=.*)?\n        nifi.security.identity.mapping.value.dn=$1\n        nifi.security.identity.mapping.transform.dn=NONE\n      ...\n   ...\n...\n")))}f.isMDXComponent=!0}}]);