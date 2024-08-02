"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[24625],{1191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(62540),a=n(43023);n(78296),n(22491);const s={id:"1_quick_start",title:"Quick start",sidebar_label:"Quick start"},i=void 0,o={id:"3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start",title:"Quick start",description:"Create custom storage class",source:"@site/versioned_docs/version-v0.15.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start.md",sourceDirName:"3_manage_nifi/1_manage_clusters/1_deploy_cluster",slug:"/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start",permalink:"/nifikop/docs/v0.15.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.15.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start.md",tags:[],version:"v0.15.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1694775175e3,frontMatter:{id:"1_quick_start",title:"Quick start",sidebar_label:"Quick start"},sidebar:"docs",previous:{title:"Design Principles",permalink:"/nifikop/docs/v0.15.0/3_manage_nifi/1_manage_clusters/0_design_principles"},next:{title:"Nodes configuration",permalink:"/nifikop/docs/v0.15.0/3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration"}},l={},u=[{value:"Create custom storage class",id:"create-custom-storage-class",level:2},{value:"Install Zookeeper",id:"install-zookeeper",level:2},{value:"Deploy NiFi cluster",id:"deploy-nifi-cluster",level:2}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"create-custom-storage-class",children:"Create custom storage class"}),"\n",(0,r.jsxs)(t.p,{children:["We recommend to use a ",(0,r.jsx)(t.strong,{children:"custom StorageClass"})," to leverage the volume binding mode ",(0,r.jsx)(t.code,{children:"WaitForFirstConsumer"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: exampleStorageclass\nparameters:\n  type: pd-standard\nprovisioner: kubernetes.io/gce-pd\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"Remember to set your NiFiCluster CR properly to use the newly created StorageClass."})}),"\n",(0,r.jsx)(t.p,{children:"As a pre-requisite NiFi requires Zookeeper so you need to first have a Zookeeper cluster if you don't already have one."}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["We believe in the ",(0,r.jsx)(t.code,{children:"separation of concerns"})," principle, thus the NiFi operator does not install nor manage Zookeeper."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"install-zookeeper",children:"Install Zookeeper"}),"\n",(0,r.jsxs)(t.p,{children:["To install Zookeeper we recommend using the ",(0,r.jsx)(t.a,{href:"https://github.com/bitnami/charts/tree/master/bitnami/zookeeper",children:"Bitnami's Zookeeper chart"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"helm repo add bitnami https://charts.bitnami.com/bitnami\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"helm install zookeeper bitnami/zookeeper \\\n    --namespace=zookeeper \\\n    --set resources.requests.memory=256Mi \\\n    --set resources.requests.cpu=250m \\\n    --set resources.limits.memory=256Mi \\\n    --set resources.limits.cpu=250m \\\n    --set global.storageClass=standard \\\n    --set networkPolicy.enabled=true \\\n    --set replicaCount=3 \\\n    --create-namespace\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:["Replace the ",(0,r.jsx)(t.code,{children:"storageClass"})," parameter value with your own."]})}),"\n",(0,r.jsx)(t.h2,{id:"deploy-nifi-cluster",children:"Deploy NiFi cluster"}),"\n",(0,r.jsx)(t.p,{children:"And after you can deploy a simple NiFi cluster."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# Add your zookeeper svc name to the configuration\nkubectl create -n nifi -f config/samples/simplenificluster.yaml\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},22491:(e,t,n)=>{n.d(t,{A:()=>i});n(63696);var r=n(11750);const a={tabItem:"tabItem_wHwb"};var s=n(62540);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},78296:(e,t,n)=>{n.d(t,{A:()=>x});var r=n(63696),a=n(11750),s=n(90766),i=n(49519),o=n(14395),l=n(35043),u=n(44544),c=n(94243);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function p(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,u.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,i.W6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l.aZ)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(s.location.search);t.set(o,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[o,s])]}function h(e){var t,n,a,s,i=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,h=p(e),v=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:h})})),b=v[0],g=v[1],_=f({queryString:u,groupId:d}),k=_[0],y=_[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Dv)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),j=x[0],w=x[1],q=function(){var e=null!=k?k:j;return m({value:e,tabValues:h})?e:null}();return(0,o.A)((function(){q&&g(q)}),[q]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),w(e)}),[y,w,h]),tabValues:h}}var v=n(86681);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var g=n(62540);function _(e){var t=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],u=(0,s.a_)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(u(t),i(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;n=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;n=null!=(s=l[i])?s:l[l.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},s,{className:(0,a.A)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function k(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=s.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=h(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(_,Object.assign({},t,e)),(0,g.jsx)(k,Object.assign({},t,e))]})}function x(e){var t=(0,v.A)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},43023:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(63696);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);