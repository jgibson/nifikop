"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[2750],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,d=m["".concat(s,".").concat(k)]||m[k]||p[k]||i;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(27378),r=n(38944);const i="tabItem_wHwb";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},33337:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(25773),r=n(27378),i=n(38944),l=n(76457),o=n(70784),s=n(49947),u=n(83457);const c="tabList_J5MA",p="tabItem_l0OV";function m(e){var t,n,l=e.lazy,m=e.block,k=e.defaultValue,d=e.values,f=e.groupId,h=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=d?d:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(g,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===k?k:null!=(t=null!=k?k:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==v&&!g.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,_=N.setTabGroupChoices,C=(0,r.useState)(v),E=C[0],x=C[1],O=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=w[f];null!=j&&j!==E&&g.some((function(e){return e.value===j}))&&x(j)}var I=function(e){var t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==E&&(T(t),x(a),null!=f&&_(f,String(a)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;n=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var i,l=O.indexOf(e.currentTarget)-1;n=null!=(i=O[l])?i:O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},h)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:I,onClick:I},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(b.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function k(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},4513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>k});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),l=n(33337),o=n(39798),s=["components"],u={id:"1_quick_start",title:"Quick start",sidebar_label:"Quick start"},c=void 0,p={unversionedId:"2_deploy_nifikop/1_quick_start",id:"version-v0.14.1/2_deploy_nifikop/1_quick_start",title:"Quick start",description:"For information about versions compatibilty of the operator features with Kubernetes and Apache NiFi, let's have look of the version compatibility page",source:"@site/versioned_docs/version-v0.14.1/2_deploy_nifikop/1_quick_start.md",sourceDirName:"2_deploy_nifikop",slug:"/2_deploy_nifikop/1_quick_start",permalink:"/nifikop/docs/v0.14.1/2_deploy_nifikop/1_quick_start",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.14.1/2_deploy_nifikop/1_quick_start.md",tags:[],version:"v0.14.1",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1664176632,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{id:"1_quick_start",title:"Quick start",sidebar_label:"Quick start"},sidebar:"docs",previous:{title:"Roadmap",permalink:"/nifikop/docs/v0.14.1/1_concepts/4_roadmap"},next:{title:"Customizable install with Helm",permalink:"/nifikop/docs/v0.14.1/2_deploy_nifikop/2_customizable_install_with_helm"}},m={},k=[{value:"Getting Started",id:"getting-started",level:2},{value:"Cluster Setup",id:"cluster-setup",level:3},{value:"Install kubectl",id:"install-kubectl",level:3},{value:"Configure kubectl",id:"configure-kubectl",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:2},{value:"Deploy NiFiKop",id:"deploy-nifikop",level:2}],d={toc:k};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For information about versions compatibilty of the operator features with Kubernetes and Apache NiFi, let's have look of the ",(0,i.kt)("a",{parentName:"p",href:"../4_compatibility_versions"},"version compatibility page")),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"cluster-setup"},"Cluster Setup"),(0,i.kt)("p",null,"For local testing we recommend following one of the following setup guides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/kubernetes"},"Docker Desktop (Mac)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start"},"Minikube"),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Start Minikube with at least 4gb RAM with ",(0,i.kt)("inlineCode",{parentName:"p"},"minikube start --memory=4000")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"Kind")),(0,i.kt)("li",{parentName:"ul"},"For testing on GKE you can ",(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster"},"create a cluster with the command line or the Cloud Console UI"),"."),(0,i.kt)("li",{parentName:"ul"},"For testing on EKS you can ",(0,i.kt)("a",{parentName:"li",href:"https://eksctl.io/introduction/"},"install eksctl")," and run ",(0,i.kt)("inlineCode",{parentName:"li"},"eksctl create cluster")," to create an EKS cluster/VPC/subnets/etc. This process should take 10-15 minutes.")),(0,i.kt)("h3",{id:"install-kubectl"},"Install kubectl"),(0,i.kt)("p",null,"If you do not already have the CLI tool ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," installed, please follow ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},"these instructions to install"),"."),(0,i.kt)("h3",{id:"configure-kubectl"},"Configure kubectl"),(0,i.kt)("p",null,"Configure ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to connect to your cluster by using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl use-context my-cluster-name"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For GKE",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Configure ",(0,i.kt)("inlineCode",{parentName:"li"},"gcloud")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"gcloud auth login"),"."),(0,i.kt)("li",{parentName:"ul"},"On the Google Cloud Console, the cluster page will have a ",(0,i.kt)("inlineCode",{parentName:"li"},"Connect")," button, which will give a command to run locally that looks like")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-console"},"gcloud container clusters get-credentials CLUSTER_NAME --zone ZONE_NAME --project PROJECT_NAME.\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl config get-contexts")," to show the contexts available."),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl config use-context ${gke context}")," to access the cluster from ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl"),"."))),(0,i.kt)("li",{parentName:"ul"},"For EKS ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html"},"Configure your AWS CLI")," to connect to your project. "),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://eksctl.io/introduction/"},"eksctl")," "),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"eksctl utils write-kubeconfig --cluster=${CLUSTER NAME}")," to make the context available to ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl")," "),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl config get-context"),"s to show the contexts available. "),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl config use-context ${eks context}")," to access the cluster with ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl"),".")))),(0,i.kt)("h2",{id:"install-cert-manager"},"Install cert-manager"),(0,i.kt)("p",null,"The NiFiKop operator uses ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager")," for issuing certificates to users and and nodes, so you'll need to have it setup in case you want to deploy a secured cluster with authentication enabled. The minimum supported cert-manager version is v1.0."),(0,i.kt)(l.Z,{defaultValue:"directly",values:[{label:"Directly",value:"directly"},{label:"helm 3",value:"helm3"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"directly",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Install the CustomResourceDefinitions and cert-manager itself\nkubectl apply -f \\\n    https://github.com/jetstack/cert-manager/releases/download/v1.7.2/cert-manager.yaml\n"))),(0,i.kt)(o.Z,{value:"helm3",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Install CustomResourceDefinitions first\nkubectl apply --validate=false -f \\\n   https://github.com/jetstack/cert-manager/releases/download/v1.7.2/cert-manager.crds.yaml\n\n# Add the jetstack helm repo\nhelm repo add jetstack https://charts.jetstack.io\nhelm repo update\n\n# You have to create the namespace before executing following command\nhelm install cert-manager \\\n    --namespace cert-manager \\\n    --version v1.7.2 jetstack/cert-manager\n")))),(0,i.kt)("h2",{id:"deploy-nifikop"},"Deploy NiFiKop"),(0,i.kt)("p",null,"You can deploy the operator using a Helm chart ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/konpyutaika/nifikop/tree/master/helm"},"Helm chart"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To install an other version of the operator use ",(0,i.kt)("inlineCode",{parentName:"p"},"helm install --name=nifikop --namespace=nifi --set operator.image.tag=x.y.z konpyutaika-incubator/nifikop"))),(0,i.kt)("p",null,"In the case where you don't want to deploy the crds using helm (",(0,i.kt)("inlineCode",{parentName:"p"},"--skip-crds"),"), you have to deploy manually the crds :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nificlusters.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusers.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusergroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifidataflows.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiparametercontexts.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiregistryclients.yaml\n")),(0,i.kt)("p",null,"Now deploy the helm chart :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# You have to create the namespace before executing following command\nhelm install nifikop \\\n    oci://ghcr.io/konpyutaika/helm-charts/nifikop \\\n    --namespace=nifi \\\n    --version 0.14.1 \\\n    --set image.tag=v0.14.1-release \\\n    --set resources.requests.memory=256Mi \\\n    --set resources.requests.cpu=250m \\\n    --set resources.limits.memory=256Mi \\\n    --set resources.limits.cpu=250m \\\n    --set namespaces={"nifi"}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Add the following parameter if you are using this instance to only deploy unsecured clusters : ",(0,i.kt)("inlineCode",{parentName:"p"},"--set certManager.enabled=false"))))}f.isMDXComponent=!0}}]);