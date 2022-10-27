"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[1044],{35318:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var i=t(27378);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,i,a=function(e,r){if(null==e)return{};var t,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),c=function(e){var r=i.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return i.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},d=i.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=a,m=d["".concat(p,".").concat(h)]||d[h]||l[h]||n;return t?i.createElement(m,o(o({ref:r},u),{},{components:t})):i.createElement(m,o({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,o=new Array(n);o[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<n;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88835:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(25773),a=t(30808),n=(t(27378),t(35318)),o=["components"],s={id:"1_authorizer",title:"Custom User Authorizers",sidebar_label:"Custom Authorizers"},p=void 0,c={unversionedId:"3_tasks/2_security/2_authorization/1_authorizer",id:"version-v0.11.0/3_tasks/2_security/2_authorization/1_authorizer",title:"Custom User Authorizers",description:"This is an advanced configuration topic. In most cases, the default NiFi authorizer configuration is sufficient.",source:"@site/versioned_docs/version-v0.11.0/3_tasks/2_security/2_authorization/1_custom_authorizer.md",sourceDirName:"3_tasks/2_security/2_authorization",slug:"/3_tasks/2_security/2_authorization/1_authorizer",permalink:"/nifikop/docs/v0.11.0/3_tasks/2_security/2_authorization/1_authorizer",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.11.0/3_tasks/2_security/2_authorization/1_custom_authorizer.md",tags:[],version:"v0.11.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1655925825,formattedLastUpdatedAt:"Jun 22, 2022",frontMatter:{id:"1_authorizer",title:"Custom User Authorizers",sidebar_label:"Custom Authorizers"}},u={},l=[],d={toc:l};function h(e){var r=e.components,t=(0,a.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This is an advanced configuration topic. In most cases, the default NiFi authorizer configuration is sufficient.")),(0,n.kt)("p",null,"According to the NiFi Admin Guide, an ",(0,n.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#authorizer-configuration"},"Authorizer")," grants users the privileges to manage users and policies by creating preliminary authorizations at startup. By default, the ",(0,n.kt)("inlineCode",{parentName:"p"},"StandardManagedAuthorizer")," leverages a ",(0,n.kt)("inlineCode",{parentName:"p"},"FileUserGroupProvider")," and a ",(0,n.kt)("inlineCode",{parentName:"p"},"FileAccessPolicyProvider")," which are file-based rules for each user you allow to interact with your NiFi cluster."),(0,n.kt)("p",null,"In many cases, the default authorizer configuration is enough to control access to a NiFi cluster. However, there may be advanced cases where the default ",(0,n.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#standardmanagedauthorizer"},(0,n.kt)("inlineCode",{parentName:"a"},"managed-authorizer"))," isn't sufficient to make every authorization decision you need. In this case, you can provide a custom authorizer extension and use that instead."),(0,n.kt)("p",null,"Suppose a custom Authorizer is written and deployed with NiFi that reads the rules from a remote database rather than a local file. We'll call this ",(0,n.kt)("inlineCode",{parentName:"p"},"DatabaseAuthorizer"),". Also suppose it is composed of a ",(0,n.kt)("inlineCode",{parentName:"p"},"DatabaseUserGroupProvider")," and a ",(0,n.kt)("inlineCode",{parentName:"p"},"DatabaseAccessPolicyProvider"),". In order to leverage these, they must end up on NiFi's classpath."),(0,n.kt)("p",null,"In order to use this authorizer, you need to update NiFi's ",(0,n.kt)("inlineCode",{parentName:"p"},"authorizers.xml")," configuration. This can be done through NiFiKOp by setting either the ",(0,n.kt)("inlineCode",{parentName:"p"},"Spec.readOnlyConfig.authorizerConfig.replaceTemplateConfigMap")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Spec.readOnlyConfig.authorizerConfig.replaceTemplateSecretConfig"),". The NiFiKOp deployment is dynamic in that node identities are determined at deploy time, so the authorizer configuration is templated to account for this. This means that the replacement ConfigMap or Secret must also be templated."),(0,n.kt)("p",null,"Following the example, the below would be a sufficient authorizer template replacement:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'{{- $nodeList := .NodeList }}\n{{- $clusterName := .ClusterName }}\n{{- $namespace := .Namespace }}<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<authorizers>\n    <userGroupProvider>\n        <identifier>file-user-group-provider</identifier>\n        <class>org.apache.nifi.authorization.FileUserGroupProvider</class>\n        <property name="Users File">../data/users.xml</property>\n        <property name="Legacy Authorized Users File"></property>\n        <property name="Initial User Identity admin">{{ .ControllerUser }}</property>\n{{- range $i, $host := .NodeList }}\n        <property name="Initial User Identity {{ $i }}">{{ $host }}</property>\n{{- end }}\n    </userGroupProvider>\n    <userGroupProvider>\n        <identifier>database-user-group-provider</identifier>\n        <class>my.custom.DatabaseUserGroupProvider</class>\n        \x3c!-- Any extra configuration for this provider goes here --\x3e\n{{- range $i, $host := .NodeList }}\n        <property name="Initial User Identity {{ $i }}">{{ $host }}</property>\n{{- end }}\n    </userGroupProvider>\n    <accessPolicyProvider>\n        <identifier>file-access-policy-provider</identifier>\n        <class>org.apache.nifi.authorization.FileAccessPolicyProvider</class>\n        <property name="User Group Provider">file-user-group-provider</property>\n        <property name="Authorizations File">../data/authorizations.xml</property>\n        <property name="Initial Admin Identity">{{ .ControllerUser }}</property>\n        <property name="Legacy Authorized Users File"></property>\n{{- range $i, $host := .NodeList }}\n        <property name="Node Identity {{ $i }}">{{ $host }}</property>\n{{- end }}\n        <property name="Node Group"></property>\n    </accessPolicyProvider>\n    <accessPolicyProvider>\n        <identifier>database-access-policy-provider</identifier>\n        <class>my.custom.DatabaseAccessPolicyProvider</class>\n        \x3c!-- Any extra configuration for this provider goes here --\x3e\n{{- range $i, $host := .NodeList }}\n        <property name="Node Identity {{ $i }}">{{ $host }}</property>\n{{- end }}\n        <property name="Node Group"></property>\n    </accessPolicyProvider>\n    <authorizer>\n        <identifier>managed-authorizer</identifier>\n        <class>org.apache.nifi.authorization.StandardManagedAuthorizer</class>\n        <property name="Access Policy Provider">file-access-policy-provider</property>\n    </authorizer>\n    <authorizer>\n        <identifier>custom-database-authorizer</identifier>\n        <class>my.custom.DatabaseAuthorizer</class>\n        <property name="Access Policy Provider">database-access-policy-provider</property>\n    </authorizer>\n</authorizers>\n')),(0,n.kt)("p",null,"And finally, the NiFi property ",(0,n.kt)("inlineCode",{parentName:"p"},"nifi.security.user.authorizer")," indicates which of the configured authorizers in the authorizers.xml file to use. Following the example, we'd set the property to:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"nifi.security.user.authorizer=custom-database-authorizer\n")))}h.isMDXComponent=!0}}]);