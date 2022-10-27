"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[6644],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=n(25773),a=n(30808),o=(n(27378),n(35318)),r=["components"],l={id:"2_cluster_scaling",title:"Cluster Scaling",sidebar_label:"Cluster Scaling"},s=void 0,c={unversionedId:"3_tasks/1_nifi_cluster/2_cluster_scaling",id:"version-v0.13.0/3_tasks/1_nifi_cluster/2_cluster_scaling",title:"Cluster Scaling",description:"This tasks shows you how to perform a gracefull cluster scale up and scale down.",source:"@site/versioned_docs/version-v0.13.0/3_tasks/1_nifi_cluster/2_cluster_scaling.md",sourceDirName:"3_tasks/1_nifi_cluster",slug:"/3_tasks/1_nifi_cluster/2_cluster_scaling",permalink:"/nifikop/docs/v0.13.0/3_tasks/1_nifi_cluster/2_cluster_scaling",draft:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.13.0/3_tasks/1_nifi_cluster/2_cluster_scaling.md",tags:[],version:"v0.13.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1660941078,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{id:"2_cluster_scaling",title:"Cluster Scaling",sidebar_label:"Cluster Scaling"},sidebar:"version-v0.13.0/docs",previous:{title:"Customizable install with Helm",permalink:"/nifikop/docs/v0.13.0/2_setup/3_install/1_customizable_install_with_helm"},next:{title:"External cluster",permalink:"/nifikop/docs/v0.13.0/3_tasks/1_nifi_cluster/4_external_cluster"}},p={},d=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"About this task",id:"about-this-task",level:2},{value:"Scale up : Add a new node",id:"scale-up--add-a-new-node",level:2},{value:"Scaledown : Gracefully remove node",id:"scaledown--gracefully-remove-node",level:2}],u={toc:d};function m(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tasks shows you how to perform a gracefull cluster scale up and scale down."),(0,o.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setup NiFiKop by following the instructions in the ",(0,o.kt)("a",{parentName:"li",href:"/nifikop/docs/v0.13.0/2_setup/1_getting_started"},"Installation guide"),"."),(0,o.kt)("li",{parentName:"ul"},"Deploy the ",(0,o.kt)("a",{parentName:"li",href:"/nifikop/docs/v0.13.0/2_setup/1_getting_started#easy-way-installing-with-helm"},"Simple NiFi")," sample cluster."),(0,o.kt)("li",{parentName:"ul"},"Review the ",(0,o.kt)("a",{parentName:"li",href:"/nifikop/docs/v0.13.0/5_references/1_nifi_cluster/4_node"},"Node")," references doc. ")),(0,o.kt)("h2",{id:"about-this-task"},"About this task"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/2_setup/1_getting_started#easy-way-installing-with-helm"},"Simple NiFi")," example consists of a three nodes NiFi cluster.\nA node decommission must follow a strict procedure, described in the ",(0,o.kt)("a",{parentName:"p",href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#decommission-nodes"},"NiFi documentation")," : "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Disconnect the node"),(0,o.kt)("li",{parentName:"ol"},"Once disconnect completes, offload the node."),(0,o.kt)("li",{parentName:"ol"},"Once offload completes, delete the node."),(0,o.kt)("li",{parentName:"ol"},"Once the delete request has finished, stop/remove the NiFi service on the host.")),(0,o.kt)("p",null,"For the moment, we have implemented it as follows in the operator :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Disconnect the node"),(0,o.kt)("li",{parentName:"ol"},"Once disconnect completes, offload the node."),(0,o.kt)("li",{parentName:"ol"},"Once offload completes, delete the pod."),(0,o.kt)("li",{parentName:"ol"},"Once the pod deletion completes, delete the node."),(0,o.kt)("li",{parentName:"ol"},"Once the delete request has finished, remove the node from the NifiCluster status.")),(0,o.kt)("p",null,"In addition, we have a regular check that ensure that all nodes have been removed."),(0,o.kt)("p",null,"In this task, you will first perform a scale up, in adding an new node. Then, you will remove another node that the one created, and observe the decommission's steps."),(0,o.kt)("h2",{id:"scale-up--add-a-new-node"},"Scale up : Add a new node"),(0,o.kt)("p",null,"For this task, we will simply add a node with the same configuration than the other ones, if you want to know more about how to add a node with an other configuration let's have a look to the ",(0,o.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/3_tasks/1_nifi_cluster/1_nodes_configuration"},"Node configuration")," documentation page."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add and run a dataflow as the example : ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scaling dataflow",src:n(90192).Z,width:"832",height:"660"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add a new node to the list of ",(0,o.kt)("inlineCode",{parentName:"li"},"NifiCluster.Spec.Nodes")," field, by following the ",(0,o.kt)("a",{parentName:"li",href:"/nifikop/docs/v0.13.0/5_references/1_nifi_cluster/4_node"},"Node object definition")," documentation:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: simplenifi\nspec:\n  service:\n    headlessEnabled: true\n  zkAddress: "zookeepercluster-client.zookeeper:2181"\n  zkPath: "/simplenifi"\n  clusterImage: "apache/nifi:1.12.1"\n  oneNifiNodePerNode: false\n  nodeConfigGroups:\n    default_group:\n      isNode: true\n      storageConfigs:\n        - mountPath: "/opt/nifi/nifi-current/logs"\n          name: logs\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n      serviceAccountName: "default"\n      resourcesRequirements:\n        limits:\n          cpu: "2"\n          memory: 3Gi\n        requests:\n          cpu: "1"\n          memory: 1Gi\n  nodes:\n    - id: 0\n      nodeConfigGroup: "default_group"\n    - id: 1\n      nodeConfigGroup: "default_group"\n    - id: 2\n      nodeConfigGroup: "default_group"\n# >>>> START: The new node\n    - id: 25\n      nodeConfigGroup: "default_group"\n# <<<< END\n  propagateLabels: true\n  nifiClusterTaskSpec:\n    retryDurationMinutes: 10\n  listenersConfig:\n    internalListeners:\n      - type: "http"\n        name: "http"\n        containerPort: 8080\n      - type: "cluster"\n        name: "cluster"\n        containerPort: 6007\n      - type: "s2s"\n        name: "s2s"\n        containerPort: 10000\n')),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Note :")," The ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.Id")," field must be unique in the ",(0,o.kt)("inlineCode",{parentName:"p"},"NifiCluster.Spec.Nodes")," list.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Apply the new ",(0,o.kt)("inlineCode",{parentName:"li"},"NifiCluster")," configuration : ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl -n nifi apply -f config/samples/simplenificluster.yaml\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"You should now have the following resources into kubernetes : ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get pods,configmap,pvc -l nodeId=25\nNAME                          READY   STATUS    RESTARTS   AGE\npod/simplenifi-25-nodem5jh4   1/1     Running   0          11m\n\nNAME                             DATA   AGE\nconfigmap/simplenifi-config-25   7      11m\n\nNAME                                               STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE\npersistentvolumeclaim/simplenifi-25-storagehwn24   Bound    pvc-7da86076-728e-11ea-846d-42010a8400f2   10Gi       RWO            standard       11m\n")),(0,o.kt)("p",null,"And if you go on the NiFi UI, in the cluster administration page : "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scale up, cluster list",src:n(17530).Z,width:"1880",height:"357"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"You now have data on the new node : ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scale up, cluster distribution",src:n(70486).Z,width:"766",height:"568"})),(0,o.kt)("h2",{id:"scaledown--gracefully-remove-node"},"Scaledown : Gracefully remove node"),(0,o.kt)("p",null,"For this task, we will simply remove a node and look at that the decommission's steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Remove the node from the list of ",(0,o.kt)("inlineCode",{parentName:"li"},"NifiCluster.Spec.Nodes")," field :")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: nifi.konpyutaika.com/v1alpha1\nkind: NifiCluster\nmetadata:\n  name: simplenifi\nspec:\n  headlessServiceEnabled: true\n  zkAddresse: "zookeepercluster-client.zookeeper:2181"\n  zkPath: "/simplenifi"\n  clusterImage: "apache/nifi:1.11.3"\n  oneNifiNodePerNode: false\n  nodeConfigGroups:\n    default_group:\n      isNode: true\n      storageConfigs:\n        - mountPath: "/opt/nifi/nifi-current/logs"\n          name: logs\n          pvcSpec:\n            accessModes:\n              - ReadWriteOnce\n            storageClassName: "standard"\n            resources:\n              requests:\n                storage: 10Gi\n      serviceAccountName: "default"\n      resourcesRequirements:\n        limits:\n          cpu: "2"\n          memory: 3Gi\n        requests:\n          cpu: "1"\n          memory: 1Gi\n  nodes:\n    - id: 0\n      nodeConfigGroup: "default_group"\n    - id: 1\n      nodeConfigGroup: "default_group"\n# >>>> START: node removed\n#    - id: 2\n#      nodeConfigGroup: "default_group"\n# <<<< END\n    - id: 25\n      nodeConfigGroup: "default_group"\n  propagateLabels: true\n  nifiClusterTaskSpec:\n    retryDurationMinutes: 10\n  listenersConfig:\n    internalListeners:\n      - type: "http"\n        name: "http"\n        containerPort: 8080\n      - type: "cluster"\n        name: "cluster"\n        containerPort: 6007\n      - type: "s2s"\n        name: "s2s"\n        containerPort: 10000\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Apply the new ",(0,o.kt)("inlineCode",{parentName:"li"},"NifiCluster")," configuration : ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl -n nifi apply -f config/samples/simplenificluster.yaml\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"You can follow the node's action step status in the ",(0,o.kt)("inlineCode",{parentName:"li"},"NifiCluster.Status")," description : ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"kubectl describe nificluster simplenifi\n\n...\nStatus:\n  Nodes State:\n    ...\n    2:\n      Configuration State:  ConfigInSync\n      Graceful Action State:\n        Action State:   GracefulDownscaleRequired\n        Error Message:\n    ...\n...\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The list of decommision's step and their corresponding value for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Nifi Cluster.Status.Node State.Graceful ActionState.ActionStep")," field is described into the ",(0,o.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/5_references/1_nifi_cluster/5_node_state#actionstep"},"Node State page"))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Once the scaledown successfully performed, you should have the data offloaded on the other nodes, and the node state removed from the ",(0,o.kt)("inlineCode",{parentName:"li"},"NifiCluster.Status.NodesState")," list :")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Keep in mind that the ",(0,o.kt)("a",{parentName:"p",href:"/nifikop/docs/v0.13.0/5_references/1_nifi_cluster/#nificlustertaskspec"},(0,o.kt)("inlineCode",{parentName:"a"},"NifiCluster.Spec.nifiClusterTaskSpec.retryDurationMinutes"))," should be long enough to perform the whole procedure, or you will have some rollback and retry loop.")))}m.isMDXComponent=!0},17530:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/scaleup_cluster_list-35ad91fb8c072c4235a969eb9acfcdae.png"},70486:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/scaleup_distribution-e8a1d9e0e4ce70f4fe16965ebeee7a32.png"},90192:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/scaling_dataflow-5966160565dedb1d2c691ae255bae15c.png"}}]);