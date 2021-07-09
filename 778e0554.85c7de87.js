(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{180:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return u}));var r=a(2),n=a(6),b=(a(0),a(322)),c={id:"6_nifi_usergroup",title:"NiFi UserGroup",sidebar_label:"NiFi UserGroup"},l={unversionedId:"5_references/6_nifi_usergroup",id:"version-v0.6.3/5_references/6_nifi_usergroup",isDocsHomePage:!1,title:"NiFi UserGroup",description:"NifiUserGroup is the Schema for the nifi user groups API.",source:"@site/versioned_docs/version-v0.6.3/5_references/6_nifi_usergroup.md",slug:"/5_references/6_nifi_usergroup",permalink:"/nifikop/docs/5_references/6_nifi_usergroup",editUrl:"https://github.com/Orange-OpenSource/nifikop/edit/master/site/website/versioned_docs/version-v0.6.3/5_references/6_nifi_usergroup.md",version:"v0.6.3",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1625866397,sidebar_label:"NiFi UserGroup",sidebar:"version-v0.6.3/docs",previous:{title:"NiFi Dataflow",permalink:"/nifikop/docs/5_references/5_nifi_dataflow"},next:{title:"Developer guide",permalink:"/nifikop/docs/6_contributing/1_developer_guide"}},i=[{value:"NifiUser",id:"nifiuser",children:[]},{value:"NifiUserGroupSpec",id:"nifiusergroupspec",children:[]},{value:"NifiUserGroupStatus",id:"nifiusergroupstatus",children:[]},{value:"UserReference",id:"userreference",children:[]}],p={rightToc:i};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"NifiUserGroup")," is the Schema for the nifi user groups API."),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"apiVersion: nifi.orange.com/v1alpha1\nkind: NifiUserGroup\nmetadata:\n  name: group-test\nspec:\n  clusterRef:\n    name: nc\n    namespace: nifikop\n  usersRef:\n    - name: nc-0-node.nc-headless.nifikop.svc.cluster.local\n    - name: nc-controller.nifikop.mgt.cluster.local\n  accessPolicies:\n    - type: global\n      action: read\n      resource: /counters\n")),Object(b.b)("h2",{id:"nifiuser"},"NifiUser"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"metadata"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"https://godoc.org/k8s.io/apimachinery/pkg/apis/meta/v1#ObjectMeta"}),"ObjectMetadata")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"is metadata that all persisted resources must have, which includes all objects usergroups must create."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nil")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"spec"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#nifiusergroupspec"}),"NifiUserGroupSpec")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"defines the desired state of NifiUserGroup."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nil")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"status"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#nifiusergroupstatus"}),"NifiUserGroupStatus")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"defines the observed state of NifiUserGroup."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nil")))),Object(b.b)("h2",{id:"nifiusergroupspec"},"NifiUserGroupSpec"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"clusterRef"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/nifikop/docs/5_references/2_nifi_user#clusterreference"}),"ClusterReference")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"contains the reference to the NifiCluster with the one the user is linked."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"usersRef"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"["," ","]",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"#userref"}),"UserReference")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"contains the list of reference to NifiUsers that are part to the group."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[]")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"accessPolicies"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"["," ","]",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/nifikop/docs/5_references/2_nifi_user#accesspolicy"}),"AccessPolicy")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"defines the list of access policies that will be granted to the group."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[]")))),Object(b.b)("h2",{id:"nifiusergroupstatus"},"NifiUserGroupStatus"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"the nifi usergroup's node id."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"version"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"the last nifi usergroup's node revision version catched."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(b.b)("h2",{id:"userreference"},"UserReference"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"name of the NifiUser."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"namespace"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"the NifiUser namespace location."),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))))}u.isMDXComponent=!0},322:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},o=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=u(a),O=r,j=o["".concat(c,".").concat(O)]||o[O]||s[O]||b;return a?n.a.createElement(j,l(l({ref:t},p),{},{components:a})):n.a.createElement(j,l({ref:t},p))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=O;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<b;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);