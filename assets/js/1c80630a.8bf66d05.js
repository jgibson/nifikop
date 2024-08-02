"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[5659],{3211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=n(62540),r=n(43023);const o={id:"1_gke",title:"Google Kubernetes Engine",sidebar_label:"Google Kubernetes Engine"},i=void 0,l={id:"2_setup/2_platform_setup/1_gke",title:"Google Kubernetes Engine",description:"Follow these instructions to prepare a GKE cluster for NiFiKop",source:"@site/versioned_docs/version-v0.12.0/2_setup/2_platform_setup/1_gke.md",sourceDirName:"2_setup/2_platform_setup",slug:"/2_setup/2_platform_setup/1_gke",permalink:"/nifikop/docs/v0.12.0/2_setup/2_platform_setup/1_gke",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v0.12.0/2_setup/2_platform_setup/1_gke.md",tags:[],version:"v0.12.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1660940064e3,frontMatter:{id:"1_gke",title:"Google Kubernetes Engine",sidebar_label:"Google Kubernetes Engine"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/nifikop/docs/v0.12.0/2_setup/1_getting_started"},next:{title:"K3D",permalink:"/nifikop/docs/v0.12.0/2_setup/2_platform_setup/2_k3d"}},c={},a=[];function u(e){const t={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Follow these instructions to prepare a GKE cluster for NiFiKop"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Setup environment variables."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"export GCP_PROJECT=<project_id>\nexport GCP_ZONE=<zone>\nexport CLUSTER_NAME=<cluster-name>\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Create a new cluster."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"gcloud container clusters create $CLUSTER_NAME \\\n  --cluster-version latest \\\n  --machine-type=n1-standard-1 \\\n  --num-nodes 4 \\\n  --zone $GCP_ZONE \\\n  --project $GCP_PROJECT\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["Retrieve your credentials for ",(0,s.jsx)(t.code,{children:"kubectl"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"cloud container clusters get-credentials $CLUSTER_NAME \\\n    --zone $GCP_ZONE \\\n    --project $GCP_PROJECT\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsx)(t.li,{children:"Grant cluster administrator (admin) permissions to the current user. To create the necessary RBAC rules for NiFiKop, the current user requires admin permissions."}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"kubectl create clusterrolebinding cluster-admin-binding \\\n    --clusterrole=cluster-admin \\\n    --user=$(gcloud config get-value core/account)\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},43023:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(63696);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);