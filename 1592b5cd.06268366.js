(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),r=(n(0),n(184)),o={id:"2_design_principes",title:"Design Principes",sidebar_label:"Design Principes"},l={id:"1_concepts/2_design_principes",title:"Design Principes",description:"## Pod level management",source:"@site/docs/1_concepts/2_design_principes.md",permalink:"/nifikop/docs/1_concepts/2_design_principes",editUrl:"https://github.com/Orange-OpenSource/nifikop/edit/master/website/docs/1_concepts/2_design_principes.md",sidebar_label:"Design Principes",sidebar:"docs",previous:{title:"Introduction",permalink:"/nifikop/docs/1_concepts/1_introduction"},next:{title:"Features",permalink:"/nifikop/docs/1_concepts/3_features"}},c=[{value:"Pod level management",id:"pod-level-management",children:[]},{value:"Dataflow Lifecycle management",id:"dataflow-lifecycle-management",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"pod-level-management"},"Pod level management"),Object(r.b)("p",null,"NiFi is a stateful application. The first piece of the puzzle is the Node, which is a simple server capable of createing/forming a cluster with other Nodes. Every Node has his own ",Object(r.b)("strong",{parentName:"p"},"unique")," configuration which differs slightly from all others."),Object(r.b)("p",null,"All NiFi on Kubernetes setup use ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"}),"StatefulSet")," to create a NiFi Cluster. Just to quickly recap from the K8s docs:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"StatefulSet manages the deployment and scaling of a set of Pods, and provide guarantees about their ordering and uniqueness. Like a Deployment, a StatefulSet manages Pods that are based on an identical container spec. Unlike a Deployment, a StatefulSet maintains sticky identities for each of its Pods. These pods are created from the same spec, but are not interchangeable: each has a persistent identifier that is maintained across any rescheduling.")),Object(r.b)("p",null,"How does this looks from the perspective of Apache NiFi ?"),Object(r.b)("p",null,"With StatefulSet we get:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"unique Node IDs generated during Pod startup"),Object(r.b)("li",{parentName:"ul"},"networking between Nodes with headless services"),Object(r.b)("li",{parentName:"ul"},"unique Persistent Volumes for Nodes")),Object(r.b)("p",null,"Using StatefulSet we ",Object(r.b)("strong",{parentName:"p"},"lose:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"the ability to modify the configuration of unique Nodes"),Object(r.b)("li",{parentName:"ul"},"to remove a specific Node from a cluster (StatefulSet always removes the most recently created Node)"),Object(r.b)("li",{parentName:"ul"},"to use multiple, different Persistent Volumes for each Node")),Object(r.b)("p",null,"The Orange NiFi Operator uses ",Object(r.b)("inlineCode",{parentName:"p"},"simple")," Pods, ConfigMaps, and PersistentVolumeClaims, instead of StatefulSet (based on the design used by ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/banzaicloud/kafka-operator"}),"Banzai Cloud Kafka Operator"),").\nUsing these resources allows us to build an Operator which is better suited to NiFi."),Object(r.b)("p",null,"With the Orange NiFi operator we can:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"modify the configuration of unique Nodes"),Object(r.b)("li",{parentName:"ul"},"remove specific Nodes from clusters"),Object(r.b)("li",{parentName:"ul"},"use multiple Persistent Volumes for each Node")),Object(r.b)("h2",{id:"dataflow-lifecycle-management"},"Dataflow Lifecycle management"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/nifikop/docs/1_concepts/3_features#dataflow-lifecycle-management-via-crd"}),"Dataflow Lifecycle management feature")," introduces 3 new CRDs :"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"NiFiRegistryClient :")," Allowing you to declare a registry client."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"NiFiParameterContext :")," Allowing you to create parameter context, with two kinds of parameters, a simple ",Object(r.b)("inlineCode",{parentName:"li"},"map[string]string")," for non-sensitive parameters and a ",Object(r.b)("inlineCode",{parentName:"li"},"list of secrets")," which contains sensitive parameters."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"NiFiDataflow :")," Allowing you to declare a Dataflow based on a ",Object(r.b)("inlineCode",{parentName:"li"},"NiFiRegistryClient")," and optionally a ",Object(r.b)("inlineCode",{parentName:"li"},"ParameterContext"),", which will be deployed and managed by the operator on the ",Object(r.b)("inlineCode",{parentName:"li"},"targeted NiFi cluster"),".")),Object(r.b)("p",null,"The following diagram shows the interactions between all the components : "),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/nifikop/img/1_concepts/2_design_principes/dataflow_lifecycle_management_schema.jpg",alt:"dataflow lifecycle managmenet schema"}))),Object(r.b)("p",null,"With each CRD comes a new controller, with a reconcile loop : "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"NiFiRegistryClient's controller :")," ")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/nifikop/img/1_concepts/2_design_principes/registry_client_reconcile_loop.jpeg",alt:"NiFi registry client's reconcile loop"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"NiFiParameterContext's controller :")," ")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/nifikop/img/1_concepts/2_design_principes/parameter_context_reconcile_loop.jpeg",alt:"NiFi parameter context's reconcile loop"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"NiFiDataflow's controller :")," ")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/nifikop/img/1_concepts/2_design_principes/dataflow_reconcile_loop.jpeg",alt:"NiFi dataflow's reconcile loop"}))))}p.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||r;return n?i.a.createElement(d,l({ref:t},s,{components:n})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);