"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[9317],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(27378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(27378),l=n(38944);const i="tabItem_wHwb";function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:n},t)}},33337:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(25773),l=n(27378),i=n(38944),r=n(76457),o=n(70784),s=n(49947),p=n(83457);const u="tabList_J5MA",c="tabItem_l0OV";function m(e){var t,n,r=e.lazy,m=e.block,d=e.defaultValue,k=e.values,f=e.groupId,h=e.className,b=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:b[0].props.value;if(null!==v&&!y.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),C=N.tabGroupChoices,_=N.setTabGroupChoices,w=(0,l.useState)(v),T=w[0],O=w[1],I=[],D=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=C[f];null!=E&&E!==T&&y.some((function(e){return e.value===E}))&&O(E)}var x=function(e){var t=e.currentTarget,n=I.indexOf(t),a=y[n].value;a!==T&&(D(t),O(a),null!=f&&_(f,String(a)))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,l=I.indexOf(e.currentTarget)+1;n=null!=(a=I[l])?a:I[0];break;case"ArrowLeft":var i,r=I.indexOf(e.currentTarget)-1;n=null!=(i=I[r])?i:I[I.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},h)},y.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:x,onClick:x},r,{className:(0,i.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),r?(0,l.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,r.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},17233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var a=n(25773),l=n(30808),i=(n(27378),n(35318)),r=n(33337),o=n(39798),s=["components"],p={id:"1_customizable_install_with_helm",title:"Customizable install with Helm",sidebar_label:"Customizable install with Helm"},u=void 0,c={unversionedId:"2_setup/3_install/1_customizable_install_with_helm",id:"version-v0.13.0/2_setup/3_install/1_customizable_install_with_helm",title:"Customizable install with Helm",description:"Prerequisites",source:"@site/versioned_docs/version-v0.13.0/2_setup/3_install/1_customizable_install_with_helm.md",sourceDirName:"2_setup/3_install",slug:"/2_setup/3_install/1_customizable_install_with_helm",permalink:"/nifikop/docs/v0.13.0/2_setup/3_install/1_customizable_install_with_helm",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.13.0/2_setup/3_install/1_customizable_install_with_helm.md",tags:[],version:"v0.13.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1660941078,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{id:"1_customizable_install_with_helm",title:"Customizable install with Helm",sidebar_label:"Customizable install with Helm"},sidebar:"version-v0.13.0/docs",previous:{title:"K3D",permalink:"/nifikop/docs/v0.13.0/2_setup/2_platform_setup/2_k3d"},next:{title:"Cluster Scaling",permalink:"/nifikop/docs/v0.13.0/3_tasks/1_nifi_cluster/2_cluster_scaling"}},m={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Installing the Chart",id:"installing-the-chart",level:3},{value:"Listing deployed charts",id:"listing-deployed-charts",level:3},{value:"Get Status for the helm deployment",id:"get-status-for-the-helm-deployment",level:3},{value:"Uninstaling the Charts",id:"uninstaling-the-charts",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Install of the CRD",id:"install-of-the-crd",level:3}],k={toc:d};function f(e){var t=e.components,n=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Perform any necessary ",(0,i.kt)("a",{parentName:"li",href:"/nifikop/docs/v0.13.0/2_setup/2_platform_setup/1_gke"},"plateform-specific setup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/helm/helm#install"},"Install a Helm client")," with a version higher than 3")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This Helm chart install NiFiKop the Nifi Kubernetes operator to create/configure/manage NiFi\nclusters in a Kubernetes Namespace."),(0,i.kt)("p",null,"It will use Custom Ressources Definition CRDs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nificlusters.nifi.konpyutaika.com"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nifiusers.nifi.konpyutaika.com"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nifiusergroups.nifi.konpyutaika.com"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nifiregistryclients.nifi.konpyutaika.com"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nifiparametercontexts.nifi.konpyutaika.com"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nifidataflows.nifi.konpyutaika.com"),",")),(0,i.kt)("h3",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The following tables lists the configurable parameters of the NiFi Operator Helm chart and their default values.\n| Parameter                        | Description                                                                                                                                                                          | Default                                     |\n|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"image.repository"),"               | Image                                                                                                                                                                                | ",(0,i.kt)("inlineCode",{parentName:"p"},"ghcr.io/konpyutaika/docker-images/nifikop")," |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"image.tag"),"                      | Image tag                                                                                                                                                                            | ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.13.0-release"),"                           |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"image.pullPolicy"),"               | Image pull policy                                                                                                                                                                    | ",(0,i.kt)("inlineCode",{parentName:"p"},"Always"),"                                    |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"image.imagePullSecrets.enabled")," | Enable tue use of secret for docker image                                                                                                                                            | ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"                                     |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"image.imagePullSecrets.name"),"    | Name of the secret to connect to docker registry                                                                                                                                     | -                                           |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"certManager.enabled"),"            | Enable cert-manager integration                                                                                                                                                      | ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"                                      |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"rbacEnable"),"                     | If true, create & use RBAC resources                                                                                                                                                 | ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"                                      |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"resources"),"                      | Pod resource requests & limits                                                                                                                                                       | ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),"                                        |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics.enabled"),"                | deploy service for metrics                                                                                                                                                           | ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"                                     |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics.port"),"                   | Set port for operator metrics                                                                                                                                                        | ",(0,i.kt)("inlineCode",{parentName:"p"},"8081"),"                                      |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"logLevel"),"                       | Log level to output                                                                                                                                                                  | ",(0,i.kt)("inlineCode",{parentName:"p"},"Info"),"                                      |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"logEncoding"),"                    | Log encoding to use. Either ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"console"),"                                                                                                                                      | ",(0,i.kt)("inlineCode",{parentName:"p"},"json"),"                                      |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"certManager.clusterScoped"),"      | If true setup cluster scoped resources                                                                                                                                               | ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"                                     |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"namespaces"),"                     | List of namespaces where Operator watches for custom resources. Make sure the operator ServiceAccount is granted ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," permissions on this ",(0,i.kt)("inlineCode",{parentName:"p"},"Node")," resource when using limited RBACs. | ",(0,i.kt)("inlineCode",{parentName:"p"},'""')," i.e. all namespaces                    |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeSelector"),"                   | Node selector configuration for operator pod                                                                                                                                         | ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),"                                        |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"affinity"),"                       | Node affinity configuration for operator pod                                                                                                                                         | ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),"                                        |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"tolerations"),"                    | Toleration configuration for operator pod                                                                                                                                            | ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),"                                        |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceAccount.create"),"          | Whether the SA creation is delegated to the chart or not                                                                                                                             | ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"                                      |\n| ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceAccount.name"),"            | Name of the SA used for NiFiKop deployment                                                                                                                                           | release name                                |"),(0,i.kt)("p",null,"Specify each parameter using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,i.kt)("inlineCode",{parentName:"p"},"helm install"),". For example,"),(0,i.kt)("p",null,"Alternatively, a YAML file that specifies the values for the above parameters can be provided while installing the chart. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ helm install nifikop \\\n      konpyutaika/nifikop \\\n      -f values.yaml\n")),(0,i.kt)("h3",{id:"installing-the-chart"},"Installing the Chart"),(0,i.kt)("admonition",{title:"Skip CRDs",type:"important"},(0,i.kt)("p",{parentName:"admonition"},"In the case where you don't want to deploy the crds using helm (",(0,i.kt)("inlineCode",{parentName:"p"},"--skip-crds"),") you need to deploy manually the crds beforehand:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nificlusters.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusers.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiusergroups.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifidataflows.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiparametercontexts.yaml\nkubectl apply -f https://raw.githubusercontent.com/konpyutaika/nifikop/master/config/crd/bases/nifi.konpyutaika.com_nifiregistryclients.yaml\n"))),(0,i.kt)(r.Z,{defaultValue:"dryrun",values:[{label:"dry run",value:"dryrun"},{label:"release name",value:"rn"},{label:"set parameters",value:"set-params"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"dryrun",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'helm install nifikop konpyutaika/nifikop \\\n    --dry-run \\\n    --set logLevel=Debug \\\n    --set namespaces={"nifikop"}\n'))),(0,i.kt)(o.Z,{value:"rn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm install <release name> konpyutaika/nifikop\n"))),(0,i.kt)(o.Z,{value:"set-params",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'helm install nifikop konpyutaika/nifikop --set namespaces={"nifikop"}\n')))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"the ",(0,i.kt)("inlineCode",{parentName:"p"},"--replace")," flag allow you to reuses a charts release name")),(0,i.kt)("h3",{id:"listing-deployed-charts"},"Listing deployed charts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm list\n")),(0,i.kt)("h3",{id:"get-status-for-the-helm-deployment"},"Get Status for the helm deployment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm status nifikop\n")),(0,i.kt)("h2",{id:"uninstaling-the-charts"},"Uninstaling the Charts"),(0,i.kt)("p",null,"If you want to delete the operator from your Kubernetes cluster, the operator deployment\nshould be deleted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm del nifikop\n")),(0,i.kt)("p",null,"The command removes all the Kubernetes components associated with the chart and deletes the helm release."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The CRD created by the chart are not removed by default and should be manually cleaned up (if required)")),(0,i.kt)("p",null,"Manually delete the CRD:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete crd nificlusters.nifi.konpyutaika.com\nkubectl delete crd nifiusers.nifi.konpyutaika.com\nkubectl delete crd nifiusergroups.nifi.konpyutaika.com\nkubectl delete crd nifiregistryclients.nifi.konpyutaika.com\nkubectl delete crd nifiparametercontexts.nifi.konpyutaika.com\nkubectl delete crd nifidataflows.nifi.konpyutaika.com\n")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"If you delete the CRD then\nIt will delete ",(0,i.kt)("strong",{parentName:"p"},"ALL")," Clusters that has been created using this CRD!!!\nPlease never delete a CRD without very good care")),(0,i.kt)("p",null,"Helm always keeps records of what releases happened. Need to see the deleted releases ?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm list --deleted\n")),(0,i.kt)("p",null,"Need to see all of the releases (deleted and currently deployed, as well as releases that\nfailed) ?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm list --all\n")),(0,i.kt)("p",null,"Because Helm keeps records of deleted releases, a release name cannot be re-used. (If you really need to re-use a\nrelease name, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--replace")," flag, but it will simply re-use the existing release and replace its\nresources.)"),(0,i.kt)("p",null,"Note that because releases are preserved in this way, you can rollback a deleted resource, and have it re-activate."),(0,i.kt)("p",null,"To purge a release"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete --purge nifikop\n")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"install-of-the-crd"},"Install of the CRD"),(0,i.kt)("p",null,"By default, the chart will install the CRDs, but this installation is global for the whole\ncluster, and you may want to not modify the already deployed CRDs."),(0,i.kt)("p",null,"In this case there is a parameter to say to not install the CRDs :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ helm install --name nifikop ./helm/nifikop --set namespaces={"nifikop"} --skip-crds\n')))}f.isMDXComponent=!0}}]);