"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[18100],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),f=r,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||a;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},53222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var i=n(25773),r=n(30808),a=(n(27378),n(35318)),o=["components"],s={id:"2_minikube",title:"MiniKube",sidebar_label:"MiniKube"},l=void 0,u={unversionedId:"2_setup/2_platform_setup/2_minikube",id:"version-v0.7.5/2_setup/2_platform_setup/2_minikube",title:"MiniKube",description:"Follow these instructions to prepare minikube for NiFiKop installation with sufficient resources to run NiFiKop and some basic applications.",source:"@site/versioned_docs/version-v0.7.5/2_setup/2_platform_setup/2_minikube.md",sourceDirName:"2_setup/2_platform_setup",slug:"/2_setup/2_platform_setup/2_minikube",permalink:"/nifikop/docs/v0.7.5/2_setup/2_platform_setup/2_minikube",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.7.5/2_setup/2_platform_setup/2_minikube.md",tags:[],version:"v0.7.5",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1637577530,formattedLastUpdatedAt:"Nov 22, 2021",frontMatter:{id:"2_minikube",title:"MiniKube",sidebar_label:"MiniKube"},sidebar:"version-v0.7.5/docs",previous:{title:"Google Kubernetes Engine",permalink:"/nifikop/docs/v0.7.5/2_setup/2_platform_setup/1_gke"},next:{title:"Customizable install with Helm",permalink:"/nifikop/docs/v0.7.5/2_setup/3_install/1_customizable_install_with_helm"}},p={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation steps",id:"installation-steps",level:2}],c={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Follow these instructions to prepare minikube for NiFiKop installation with sufficient resources to run NiFiKop and some basic applications."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Administrative privileges are required to run minikube.")),(0,a.kt)("h2",{id:"installation-steps"},"Installation steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the latest version of ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/learning-environment/minikube/"},"minikube"),", version 1.1.1 or later, and a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-minikube/#install-a-hypervisor"},"minikube hypervisor driver"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you\u2019re not using the default driver, set your minikube hypervisor driver.\nFor example, if you installed the KVM hypervisor, set the vm-driver within the minikube configuration using the following command:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"minikube config set vm-driver kvm2\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start minikube with 16384 MB of memory and 4 CPUs. This example uses Kubernetes version 1.14.2. You can change the version to any Kubernetes version supported by NiFiKop by altering the --kubernetes-version value:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ minikube start --memory=16384 --cpus=4 --kubernetes-version=v1.14.2\n")))),(0,a.kt)("p",null,"Depending on the hypervisor you use and the platform on which the hypervisor is run, minimum memory requirements vary. 16384 MB is sufficent to run NiFiKop."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you don\u2019t have enough RAM allocated to the minikube virtual machine, the following errors could occur:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Image pull failures"),(0,a.kt)("li",{parentName:"ul"},"Healthcheck timeout failures"),(0,a.kt)("li",{parentName:"ul"},"Kubectl failures on the host"),(0,a.kt)("li",{parentName:"ul"},"General network instability of the virtual machine and the host"),(0,a.kt)("li",{parentName:"ul"},"Complete lock-up of the virtual machine"),(0,a.kt)("li",{parentName:"ul"},"Host NMI watchdog reboots"),(0,a.kt)("li",{parentName:"ul"},"One effective way to monitor memory usage in minikube:")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"minikube ssh\ntop\n"))))}f.isMDXComponent=!0}}]);