"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[6887],{35318:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(27378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),u=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),N=u(a),m=r,c=N["".concat(d,".").concat(m)]||N[m]||s[m]||l;return a?n.createElement(c,i(i({ref:e},p),{},{components:a})):n.createElement(c,i({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},24093:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=a(25773),r=a(30808),l=(a(27378),a(35318)),i=["components"],o={id:"5_node_state",title:"Node state",sidebar_label:"Node state"},d=void 0,u={unversionedId:"5_references/1_nifi_cluster/5_node_state",id:"version-v0.11.0/5_references/1_nifi_cluster/5_node_state",title:"Node state",description:"Holds information about nifi state",source:"@site/versioned_docs/version-v0.11.0/5_references/1_nifi_cluster/5_node_state.md",sourceDirName:"5_references/1_nifi_cluster",slug:"/5_references/1_nifi_cluster/5_node_state",permalink:"/nifikop/docs/v0.11.0/5_references/1_nifi_cluster/5_node_state",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.11.0/5_references/1_nifi_cluster/5_node_state.md",tags:[],version:"v0.11.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1655925825,formattedLastUpdatedAt:"Jun 22, 2022",frontMatter:{id:"5_node_state",title:"Node state",sidebar_label:"Node state"},sidebar:"version-v0.11.0/docs",previous:{title:"Node",permalink:"/nifikop/docs/v0.11.0/5_references/1_nifi_cluster/4_node"},next:{title:"Listeners Config",permalink:"/nifikop/docs/v0.11.0/5_references/1_nifi_cluster/6_listeners_config"}},p={},s=[{value:"NodeState",id:"nodestate",level:2},{value:"GracefulActionState",id:"gracefulactionstate",level:2},{value:"ConfigurationState",id:"configurationstate",level:2},{value:"InitClusterNode",id:"initclusternode",level:2},{value:"State",id:"state",level:2},{value:"Upscale",id:"upscale",level:3},{value:"Downscale",id:"downscale",level:3},{value:"ActionStep",id:"actionstep",level:2}],N={toc:s};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},N,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Holds information about nifi state"),(0,l.kt)("h2",{id:"nodestate"},"NodeState"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gracefulActionState"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#gracefulactionstate"},"GracefulActionState")),(0,l.kt)("td",{parentName:"tr",align:null},"holds info about nifi cluster action status."),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"configurationState"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#configurationstate"},"ConfigurationState")),(0,l.kt)("td",{parentName:"tr",align:null},"holds info about the config."),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initClusterNode"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#initclusternode"},"InitClusterNode")),(0,l.kt)("td",{parentName:"tr",align:null},"contains if this nodes was part of the initial cluster."),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h2",{id:"gracefulactionstate"},"GracefulActionState"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errorMessage"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"holds the information what happened with Nifi Cluster."),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"actionStep"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#actionstep"},"ActionStep")),(0,l.kt)("td",{parentName:"tr",align:null},"holds info about the action step ran."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"taskStarted"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"hold the time when the execution started."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"actionState"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#state"},"State")),(0,l.kt)("td",{parentName:"tr",align:null},"holds the information about Action state."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"nil")))),(0,l.kt)("h2",{id:"configurationstate"},"ConfigurationState"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConfigInSync"),(0,l.kt)("td",{parentName:"tr",align:null},"ConfigInSync"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the generated nodeConfig is in sync with the Node")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConfigOutOfSync"),(0,l.kt)("td",{parentName:"tr",align:null},"ConfigOutOfSync"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the generated nodeConfig is out of sync with the Node")))),(0,l.kt)("h2",{id:"initclusternode"},"InitClusterNode"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IsInitClusterNode"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"states the node is part of initial cluster setup")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NotInitClusterNode"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"states the node is not part of initial cluster setup")))),(0,l.kt)("h2",{id:"state"},"State"),(0,l.kt)("h3",{id:"upscale"},"Upscale"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GracefulUpscaleRequired"),(0,l.kt)("td",{parentName:"tr",align:null},"GracefulUpscaleRequired"),(0,l.kt)("td",{parentName:"tr",align:null},"states that a node upscale is required.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GracefulUpscaleRunning"),(0,l.kt)("td",{parentName:"tr",align:null},"GracefulUpscaleRunning"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the node upscale task is still running.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GracefulUpscaleSucceeded"),(0,l.kt)("td",{parentName:"tr",align:null},"GracefulUpscaleSucceeded"),(0,l.kt)("td",{parentName:"tr",align:null},"states the node is updated gracefully.")))),(0,l.kt)("h3",{id:"downscale"},"Downscale"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GracefulDownscaleRequired"),(0,l.kt)("td",{parentName:"tr",align:null},"GracefulDownscaleRequired"),(0,l.kt)("td",{parentName:"tr",align:null},"states that a node downscale is required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GracefulDownscaleRunning"),(0,l.kt)("td",{parentName:"tr",align:null},"GracefulDownscaleRunning"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the node downscale is still running in")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GracefulUpscaleSucceeded"),(0,l.kt)("td",{parentName:"tr",align:null},"GracefulUpscaleSucceeded"),(0,l.kt)("td",{parentName:"tr",align:null},"states the node is updated gracefully")))),(0,l.kt)("h2",{id:"actionstep"},"ActionStep"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DisconnectNodeAction"),(0,l.kt)("td",{parentName:"tr",align:null},"DISCONNECTING"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the NiFi node is disconnecting from NiFi Cluster.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DisconnectStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"DISCONNECTED"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the NiFi node is disconnected from NiFi Cluster.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OffloadNodeAction"),(0,l.kt)("td",{parentName:"tr",align:null},"OFFLOADING"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the NiFi node is offloading data to NiFi Cluster.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OffloadStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"OFFLOADED"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the NiFi node offloaded data to NiFi Cluster.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RemovePodAction"),(0,l.kt)("td",{parentName:"tr",align:null},"POD_REMOVING"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the NiFi node pod and object related are removing by operator.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RemovePodStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"POD_REMOVED"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the NiFi node pod and object related have been removed by operator.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RemoveNodeAction"),(0,l.kt)("td",{parentName:"tr",align:null},"REMOVING"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the NiFi node is removing from NiFi Cluster.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RemoveStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"REMOVED"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the NiFi node is removed from NiFi Cluster.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConnectNodeAction"),(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTING"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the NiFi node is connecting to the NiFi Cluster.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ConnectStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"CONNECTED"),(0,l.kt)("td",{parentName:"tr",align:null},"states that the NiFi node is connected to the NiFi Cluster.")))))}m.isMDXComponent=!0}}]);