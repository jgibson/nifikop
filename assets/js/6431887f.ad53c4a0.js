"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[81726],{87490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(62540),o=n(43023);const i={id:"1_v0.7.x_to_v0.8.0",title:"v0.7.x to v0.8.0",sidebar_label:"v0.7.x to v0.8.0"},r=void 0,a={id:"7_upgrade_guides/1_v0.7.x_to_v0.8.0",title:"v0.7.x to v0.8.0",description:"Guide to migrate operator resources built using nifi.orange.com/v1alpha1 to nifi.konpyutaika/v1alpha1.",source:"@site/versioned_docs/version-v1.5.0/7_upgrade_guides/1_v0.7.x_to_v0.8.0.md",sourceDirName:"7_upgrade_guides",slug:"/7_upgrade_guides/1_v0.7.x_to_v0.8.0",permalink:"/nifikop/docs/v1.5.0/7_upgrade_guides/1_v0.7.x_to_v0.8.0",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.5.0/7_upgrade_guides/1_v0.7.x_to_v0.8.0.md",tags:[],version:"v1.5.0",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1700234926e3,frontMatter:{id:"1_v0.7.x_to_v0.8.0",title:"v0.7.x to v0.8.0",sidebar_label:"v0.7.x to v0.8.0"},sidebar:"docs",previous:{title:"Credits",permalink:"/nifikop/docs/v1.5.0/6_contributing/3_credits"},next:{title:"v0.14.1 to v0.15.0",permalink:"/nifikop/docs/v1.5.0/7_upgrade_guides/2_v0.14.1_to_v0.15.0"}},c={},d=[{value:"Getting started",id:"getting-started",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initial setup",id:"initial-setup",level:2},{value:"Script setup",id:"script-setup",level:2},{value:"Run script",id:"run-script",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Guide to migrate operator resources built using ",(0,s.jsx)(t.code,{children:"nifi.orange.com/v1alpha1"})," to ",(0,s.jsx)(t.code,{children:"nifi.konpyutaika/v1alpha1"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsx)(t.p,{children:"The goal is to migrate your NiFiKop resources from the old CRDs to the new ones without any service interruption."}),"\n",(0,s.jsx)(t.p,{children:"To do this, it is necessary to have both versions of CRDs available on Kubernetes and to have the old operator stopped (to prevent any manipulation on the resources).\nThen launch the script developed in nodejs presented in the following. The script will copy the resources in the old CRDs to the new CRDs keeping only the relevant fields (labels, annotations, name and spec) and then copy the status."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://nodejs.org/en/download/",children:"nodejs"})," version 15.3.0+"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://docs.npmjs.com/cli/v7/configuring-npm/install",children:"npm"})," version 7.0.14+"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"initial-setup",children:"Initial setup"}),"\n",(0,s.jsx)(t.p,{children:"Create a nodejs project and download the required dependencies:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm init -y\nnpm install @kubernetes/client-node@0.16.3 minimist@1.2.6\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.code,{children:"package.json"})," add the following script:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"start": "node --no-warnings index.js"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Your ",(0,s.jsx)(t.code,{children:"package.json"})," should look like that:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "name": "nifikop_crd_migration",\n  "version": "1.0.0",\n  "description": "Script to migrate from the old CRDs to the new CRDs.",\n  "main": "index.js",\n  "scripts": {\n    "start": "node --no-warnings index.js",\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [\n    "K8S",\n    "NiFiKop",\n    "CRDs"\n  ],\n  "license": "ISC",\n  "dependencies": {\n    "@kubernetes/client-node": "^0.16.3",\n    "minimist": "^1.2.6"\n  }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"script-setup",children:"Script setup"}),"\n",(0,s.jsxs)(t.p,{children:["Create the file ",(0,s.jsx)(t.code,{children:"index.js"})," with the following content:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;\nconst k8s = require('@kubernetes/client-node');\n\nconst kc = new k8s.KubeConfig();\nkc.loadFromDefault();\n\nconst k8sApi = kc.makeApiClient(k8s.CustomObjectsApi);\n\nconst KONPYUTAIKA_GROUP = 'nifi.konpyutaika.com';\nconst KONPYUTAIKA_GROUP_VERSION = 'v1alpha1';\nconst ORANGE_GROUP = 'nifi.orange.com';\nconst ORANGE_GROUP_VERSION = 'v1alpha1';\n\nconst call = async (SRC_GRP, SRC_GRP_VER, DST_GRP, DST_GRP_VER, KIND_PLURAL, NAMESPACE) => {\n\tconsole.log(`Listing ${KIND_PLURAL} of ${SRC_GRP}/${SRC_GRP_VER} in ${NAMESPACE}...`);\n\tconst listResources = (await k8sApi.listNamespacedCustomObject(SRC_GRP, SRC_GRP_VER, NAMESPACE, KIND_PLURAL)).body.items;\n\treturn Promise.all(listResources.map(async (resource) => {\n\t\ttry {\n\t\t\tconsole.log(`Found ${resource.kind} \"${resource.metadata.name}\" of ${resource.apiVersion} in ${NAMESPACE}`);\n\n\t\t\tif (resource.metadata.ownerReferences) {\n\t\t\t\tconsole.log(`${resource.kind} ${resource.metadata.name} mananged by something else (ownerRefereces is set).`);\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tconst bodyResource = {\n\t\t\t\tapiVersion: `${DST_GRP}/${DST_GRP_VER}`,\n\t\t\t\tkind: resource.kind,\n\t\t\t\tmetadata: {\n\t\t\t\t\tname: resource.metadata.name,\n\t\t\t\t\tannotations: resource.metadata.annotations,\n\t\t\t\t\tlabels: resource.metadata.labels\n\t\t\t\t},\n\t\t\t\tspec: resource.spec\n\t\t\t};\n\n\t\t\tconsole.log(`Creating ${bodyResource.kind} \"${bodyResource.metadata.name}\" of ${bodyResource.apiVersion} in ${NAMESPACE}...`);\n\t\t\tconst newResource = (await k8sApi.createNamespacedCustomObject(DST_GRP, DST_GRP_VER, NAMESPACE, KIND_PLURAL, bodyResource)).body;\n\t\t\tconsole.log('...done creating.');\n\n\t\t\tconst bodyStatus = {\n\t\t\t\tapiVersion: newResource.apiVersion,\n\t\t\t\tkind: newResource.kind,\n\t\t\t\tmetadata: {\n\t\t\t\t\tname: newResource.metadata.name,\n\t\t\t\t\tresourceVersion: newResource.metadata.resourceVersion\n\t\t\t\t},\n\t\t\t\tstatus: resource.status\n\t\t\t};\n\n\t\t\tconsole.log(`Copying status from ${resource.kind} \"${resource.metadata.name}\" of ${newResource.apiVersion} to ${newResource.kind} \"${newResource.metadata.name}\" of ${newResource.apiVersion} in ${NAMESPACE}...`);\n\t\t\tconst newResourceWithStatus = (await k8sApi.replaceNamespacedCustomObjectStatus(DST_GRP, DST_GRP_VER, NAMESPACE, KIND_PLURAL, bodyStatus.metadata.name, bodyStatus)).body;\n\t\t\tconsole.log('...done copying.');\n\t\t\treturn newResourceWithStatus;\n\t\t}\n\t\tcatch (e) {\n\t\t\tconsole.error(e.body ? e.body.message ? e.body.message : e.body : e);\n\t\t}\n\t}));\n};\n\nconst argv = require('minimist')(process.argv.slice(2));\n\nlet NAMESPACE = argv.namespace ? argv.namespace.length > 0 ? argv.namespace : 'default' : 'default';\nlet KIND_PLURAL = {\n\tcluster: 'nificlusters',\n\tdataflow: 'nifidataflows',\n\tparametercontext: 'nifiparametercontexts',\n\tregistryclient: 'nifiregistryclients',\n\tuser: 'nifiusers',\n\tusergroup: 'nifiusergroups',\n};\n\nif (!argv.type) {\n\tconsole.error('Type not provided');\n\tprocess.exit(1);\n}\n\nif (!KIND_PLURAL[argv.type]) {\n\tconsole.error(`Type ${argv.type} is not one of the following types: ${Object.keys(KIND_PLURAL)}`);\n\tprocess.exit(1);\n}\n\nconsole.log(`########### START: ${KIND_PLURAL[argv.type]} ###########`);\ncall( ORANGE_GROUP, ORANGE_GROUP_VERSION, KONPYUTAIKA_GROUP, KONPYUTAIKA_GROUP_VERSION, KIND_PLURAL[argv.type], NAMESPACE)\n\t.then(r => console.log('############ END ############'))\n\t.catch(e => console.error(e));\n"})}),"\n",(0,s.jsx)(t.h2,{id:"run-script",children:"Run script"}),"\n",(0,s.jsx)(t.p,{children:"To migrate the resources, run the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm start -- --type=<NIFIKOP_RESOURCE> --namespace=<K8S_NAMESPACE>\n"})}),"\n",(0,s.jsx)(t.p,{children:"with"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"<NIFIKOP_RESOURCE>"}),": NiFiKop resource type (cluster, dataflow, user, usergroup, parametercontext or registryclient)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"<K8S_NAMESPACE>:"})," Kubernetes namespace where the resources will be migrated"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},43023:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(63696);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);