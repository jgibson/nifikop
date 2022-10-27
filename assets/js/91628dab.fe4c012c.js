"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[6354],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39798:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(27378),r=a(38944);const o="tabItem_wHwb";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},33337:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(25773),r=a(27378),o=a(38944),i=a(76457),l=a(70784),s=a(49947),u=a(83457);const c="tabList_J5MA",p="tabItem_l0OV";function m(e){var t,a,i=e.lazy,m=e.block,d=e.defaultValue,f=e.values,k=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?t:g[0].props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,_=w.setTabGroupChoices,T=(0,r.useState)(y),C=T[0],O=T[1],x=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var j=N[k];null!=j&&j!==C&&b.some((function(e){return e.value===j}))&&O(j)}var I=function(e){var t=e.currentTarget,a=x.indexOf(t),n=b[a].value;n!==C&&(E(t),O(n),null!=k&&_(k,String(n)))},Z=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n,r=x.indexOf(e.currentTarget)+1;a=null!=(n=x[r])?n:x[0];break;case"ArrowLeft":var o,i=x.indexOf(e.currentTarget)-1;a=null!=(o=x[i])?o:x[x.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},h)},b.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return x.push(e)},onKeyDown:Z,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,i.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},59199:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>k,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var n=a(25773),r=a(30808),o=(a(27378),a(35318)),i=a(33337),l=a(39798),s=["components"],u={id:"1_getting_started",title:"Getting Started",sidebar_label:"Getting Started"},c=void 0,p={unversionedId:"2_setup/1_getting_started",id:"version-v0.13.0/2_setup/1_getting_started",title:"Getting Started",description:"The operator installs the 1.12.1 version of Apache NiFi, can run on Minikube v0.33.1+ and Kubernetes 1.21.0+, and require Helm 3.",source:"@site/versioned_docs/version-v0.13.0/2_setup/1_getting_started.md",sourceDirName:"2_setup",slug:"/2_setup/1_getting_started",permalink:"/nifikop/docs/v0.13.0/2_setup/1_getting_started",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.13.0/2_setup/1_getting_started.md",tags:[],version:"v0.13.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1660941078,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{id:"1_getting_started",title:"Getting Started",sidebar_label:"Getting Started"},sidebar:"version-v0.13.0/docs",previous:{title:"Roadmap",permalink:"/nifikop/docs/v0.13.0/1_concepts/4_roadmap"},next:{title:"Google Kubernetes Engine",permalink:"/nifikop/docs/v0.13.0/2_setup/2_platform_setup/1_gke"}},m={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Zookeeper",id:"install-zookeeper",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:3},{value:"Installation",id:"installation",level:2},{value:"Installing with Helm",id:"installing-with-helm",level:2},{value:"Create custom storage class",id:"create-custom-storage-class",level:2},{value:"Deploy NiFi cluster",id:"deploy-nifi-cluster",level:2}],f={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The operator installs the 1.12.1 version of Apache NiFi, can run on Minikube v0.33.1+ and ",(0,o.kt)("strong",{parentName:"p"},"Kubernetes 1.21.0+"),", and require ",(0,o.kt)("strong",{parentName:"p"},"Helm 3"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The operator supports NiFi 1.11.0+")),(0,o.kt)("p",null,"As a pre-requisite it needs a Kubernetes cluster. Also, NiFi requires Zookeeper so you need to first have a Zookeeper cluster if you don't already have one."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"We believe in the ",(0,o.kt)("inlineCode",{parentName:"p"},"separation of concerns")," principle, thus the NiFi operator does not install nor manage Zookeeper.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h3",{id:"install-zookeeper"},"Install Zookeeper"),(0,o.kt)("p",null,"To install Zookeeper we recommend using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bitnami/charts/tree/master/bitnami/zookeeper"},"Bitnami's Zookeeper chart"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add bitnami https://charts.bitnami.com/bitnami\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# You have to create the namespace before executing following command\nhelm install zookeeper bitnami/zookeeper \\\n    --set resources.requests.memory=256Mi \\\n    --set resources.requests.cpu=250m \\\n    --set resources.limits.memory=256Mi \\\n    --set resources.limits.cpu=250m \\\n    --set global.storageClass=standard \\\n    --set networkPolicy.enabled=true \\\n    --set replicaCount=3\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"storageClass")," parameter value with your own.")),(0,o.kt)("h3",{id:"install-cert-manager"},"Install cert-manager"),(0,o.kt)("p",null,"The NiFiKop operator uses ",(0,o.kt)("inlineCode",{parentName:"p"},"cert-manager")," for issuing certificates to users and and nodes, so you'll need to have it setup in case you want to deploy a secured cluster with authentication enabled. The minimum supported cert-manager version is v1.0."),(0,o.kt)(i.Z,{defaultValue:"directly",values:[{label:"Directly",value:"directly"},{label:"helm 3",value:"helm3"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"directly",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the CustomResourceDefinitions and cert-manager itself\nkubectl apply -f \\\n    https://github.com/jetstack/cert-manager/releases/download/v1.7.2/cert-manager.yaml\n"))),(0,o.kt)(l.Z,{value:"helm3",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Install CustomResourceDefinitions first\nkubectl apply --validate=false -f \\\n   https://github.com/jetstack/cert-manager/releases/download/v1.7.2/cert-manager.crds.yaml\n\n# Add the jetstack helm repo\nhelm repo add jetstack https://charts.jetstack.io\nhelm repo update\n\n# You have to create the namespace before executing following command\nhelm install cert-manager \\\n    --namespace cert-manager \\\n    --version v1.7.2 jetstack/cert-manager\n")))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"installing-with-helm"},"Installing with Helm"),(0,o.kt)("p",null,"You can deploy the operator using a Helm chart ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/konpyutaika/nifikop/tree/master/helm"},"Helm chart"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To install an other version of the operator use ",(0,o.kt)("inlineCode",{parentName:"p"},"helm install --name=nifikop --namespace=nifi --set operator.image.tag=x.y.z konpyutaika-incubator/nifikop"))),(0,o.kt)("p",null,"In the case where you don't want to deploy the crds using helm (",(0,o.kt)("inlineCode",{parentName:"p"},"--skip-crds"),"), you have to deploy manually the crds :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nificlusters.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusers.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusergroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifidataflows.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiparametercontexts.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiregistryclients.yaml\n")),(0,o.kt)("p",null,"Now deploy the helm chart :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# You have to create the namespace before executing following command\nhelm install nifikop \\\n    oci://ghcr.io/konpyutaika/helm-charts/nifikop \\\n    --namespace=nifi \\\n    --version 0.13.0 \\\n    --set image.tag=v0.13.0-release \\\n    --set resources.requests.memory=256Mi \\\n    --set resources.requests.cpu=250m \\\n    --set resources.limits.memory=256Mi \\\n    --set resources.limits.cpu=250m \\\n    --set namespaces={"nifi"}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Add the following parameter if you are using this instance to only deploy unsecured clusters : ",(0,o.kt)("inlineCode",{parentName:"p"},"--set certManager.enabled=false"))),(0,o.kt)("h2",{id:"create-custom-storage-class"},"Create custom storage class"),(0,o.kt)("p",null,"We recommend to use a ",(0,o.kt)("strong",{parentName:"p"},"custom StorageClass")," to leverage the volume binding mode ",(0,o.kt)("inlineCode",{parentName:"p"},"WaitForFirstConsumer")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: exampleStorageclass\nparameters:\n  type: pd-standard\nprovisioner: kubernetes.io/gce-pd\nreclaimPolicy: Delete\nvolumeBindingMode: WaitForFirstConsumer\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Remember to set your NiFiCluster CR properly to use the newly created StorageClass.")),(0,o.kt)("h2",{id:"deploy-nifi-cluster"},"Deploy NiFi cluster"),(0,o.kt)("p",null,"And after you can deploy a simple NiFi cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Add your zookeeper svc name to the configuration\nkubectl create -n nifi -f config/samples/simplenificluster.yaml\n")))}k.isMDXComponent=!0}}]);