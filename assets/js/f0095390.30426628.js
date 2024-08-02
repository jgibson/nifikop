"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[79543],{1109:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=i(62540),t=i(43023);const r={id:"2_nodes_configuration",title:"Nodes configuration",sidebar_label:"Nodes configuration"},s=void 0,a={id:"3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration",title:"Nodes configuration",description:"In the quick start section, you deployed a simple NifiCluster resource, which deploys a NiFi cluster. But in many cases, you may need to tune the cluster nodes to match your needs.",source:"@site/versioned_docs/version-v1.3.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration.md",sourceDirName:"3_manage_nifi/1_manage_clusters/1_deploy_cluster",slug:"/3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration",permalink:"/nifikop/docs/v1.3.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/konpyutaika/nifikop/edit/master/site/website/versioned_docs/version-v1.3.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/2_nodes_configuration.md",tags:[],version:"v1.3.1",lastUpdatedBy:"Juldrixx",lastUpdatedAt:1707144987e3,frontMatter:{id:"2_nodes_configuration",title:"Nodes configuration",sidebar_label:"Nodes configuration"},sidebar:"docs",previous:{title:"Quick start",permalink:"/nifikop/docs/v1.3.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/1_quick_start"},next:{title:"Kubernetes service",permalink:"/nifikop/docs/v1.3.1/3_manage_nifi/1_manage_clusters/1_deploy_cluster/3_expose_cluster/1_kubernetes_service"}},c={},d=[{value:"ReadOnlyConfig and NodeConfigGroups",id:"readonlyconfig-and-nodeconfiggroups",level:2},{value:"Configure multiple node groups",id:"configure-multiple-node-groups",level:3},{value:"Storage management",id:"storage-management",level:4},{value:"Data persistence",id:"data-persistence",level:5},{value:"External volumes",id:"external-volumes",level:5},{value:"NiFi configurations",id:"nifi-configurations",level:2},{value:"ConfigMap, Secret, Inline",id:"configmap-secret-inline",level:3},{value:"Overridable configurations",id:"overridable-configurations",level:3},{value:"Advanced configuration",id:"advanced-configuration",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In the quick start section, you deployed a simple ",(0,o.jsx)(n.code,{children:"NifiCluster"})," resource, which deploys a NiFi cluster. But in many cases, you may need to tune the cluster nodes to match your needs.\nIn this section, we'll try to cover the various things that can be specified for cluster node configuration."]}),"\n",(0,o.jsx)(n.h2,{id:"readonlyconfig-and-nodeconfiggroups",children:"ReadOnlyConfig and NodeConfigGroups"}),"\n",(0,o.jsxs)(n.p,{children:["To set up your ",(0,o.jsx)(n.code,{children:"NiFi"})," cluster with ",(0,o.jsx)(n.code,{children:"NiFiKop"}),", the first thing to understand is the difference between ",(0,o.jsx)(n.code,{children:"readOnlyConfig"})," and ",(0,o.jsx)(n.code,{children:"nodeConfigGroups"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"configure-multiple-node-groups",children:"Configure multiple node groups"}),"\n",(0,o.jsxs)(n.p,{children:["In NiFiKop you can define different types of nodes using the ",(0,o.jsx)(n.code,{children:"Spec.NodeConfigGroups"})," field. This field allows you to define as many node configurations as you want.\nOnce a ",(0,o.jsx)(n.code,{children:"NodeConfigGroup"}),' has been defined, you can define it with your node declaration to say "I want to add a new node with this type of configuration".']}),"\n",(0,o.jsxs)(n.p,{children:["The main purpose of a ",(0,o.jsx)(n.a,{href:"../../../5_references/1_nifi_cluster/3_node_config",children:"NodeConfigGroup"})," is to define the purely technical requirements for the pod that will be deployed (storage configurations, resource requirements, docker image, pod location, etc)."]}),"\n",(0,o.jsx)(n.p,{children:"For example, you can have this node group configuration:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'  # nodeConfigGroups specifies multiple node configs with unique name\n  nodeConfigGroups:\n    default_group:\n      # provenanceStorage allow to specify the maximum amount of data provenance information to store at a time\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties\n      provenanceStorage: "10 GB"\n      #RunAsUser define the id of the user to run in the Nifi image\n      # +kubebuilder:validation:Minimum=1\n      runAsUser: 1000\n      serviceAccountName: "default"\n      # resourceRequirements works exactly like Container resources, the user can specify the limit and the requests\n      # through this property\n      # https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/\n      resourcesRequirements:\n        limits:\n          cpu: "2"\n          memory: 3Gi\n        requests:\n          cpu: "1"\n          memory: 3Gi\n    high_mem_group:\n      # provenanceStorage allow to specify the maximum amount of data provenance information to store at a time\n      # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties\n      provenanceStorage: "10 GB"\n      #RunAsUser define the id of the user to run in the Nifi image\n      # +kubebuilder:validation:Minimum=1\n      runAsUser: 1000\n      serviceAccountName: "default"\n      # resourceRequirements works exactly like Container resources, the user can specify the limit and the requests\n      # through this property\n      # https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/\n      resourcesRequirements:\n        limits:\n          cpu: "2"\n          memory: 30Gi\n        requests:\n          cpu: "1"\n          memory: 30Gi\n'})}),"\n",(0,o.jsx)(n.p,{children:"In this example, we have defined two different node configurations:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"default_group"}),": Saying that we want ",(0,o.jsx)(n.strong,{children:"3Gi"})," of RAM for a node using this configuration."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"high_mem_group"}),": Saying that we want ",(0,o.jsx)(n.strong,{children:"30Gi"})," of RAM for a node using this configuration."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Now we can declare the nodes of our cluster using this configuration:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'- id: 0\n  nodeConfigGroup: "default_group"\n- id: 2\n  nodeConfigGroup: "high_mem_group"\n- id: 3\n  nodeConfigGroup: "high_mem_group"\n- id: 5\n  nodeConfig:\n    resourcesRequirements:\n      limits:\n        cpu: "2"\n        memory: 3Gi\n      requests:\n        cpu: "1"\n        memory: 1Gi\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, you can see that we have defined one node using the node configuration ",(0,o.jsx)(n.code,{children:"default_group"})," (id = 0), 2 nodes using ",(0,o.jsx)(n.code,{children:"high_mem_group"})," (id = 2 and 3) and you also have the possibility to define the node configuration group directly at the node level (not reusable by another node) like for node 5."]}),"\n",(0,o.jsx)(n.h4,{id:"storage-management",children:"Storage management"}),"\n",(0,o.jsxs)(n.p,{children:["One of the most important configurations for a node in the case of a NiFi cluster is data persistence. As we run on kubernetes, whenever a pod is deleted, all data that is not stored on persistent storage will be lost, which is really bad for a statefull application like NiFi.\nTo avoid this, you can define how and what you want to persist in NiFi in the ",(0,o.jsx)(n.a,{href:"../../../5_references/1_nifi_cluster/3_node_config",children:"NodeConfigGroup"}),"."]}),"\n",(0,o.jsx)(n.h5,{id:"data-persistence",children:"Data persistence"}),"\n",(0,o.jsxs)(n.p,{children:["The first way to define data persistence is to use the ",(0,o.jsx)(n.a,{href:"../../../5_references/1_nifi_cluster/3_node_config#storageconfig",children:"Spec.NodeConfigGroup.StorageConfig"})," field."]}),"\n",(0,o.jsx)(n.p,{children:"This field allows you to define a storage set giving:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"name"}),": a unique name to identify the storage config"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"metadata"}),": labels and annotations to attach to the PVC getting created."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"pvcSpec"}),": a Kubernetes PVC spec definition"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"mountPath"}),": the path where the volume will be mounted into the main nifi container inside the pod (i.e the path were you want the data to be persisted)."]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["If you don't replace them in the ",(0,o.jsx)(n.code,{children:"nifi.properties"})," file using ",(0,o.jsx)(n.a,{href:"#nifi-configurations",children:"NiFi-configurations"}),", here is a list of paths that should be associated with a storage configuration:"]}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/opt/nifi/data"}),": contains","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/opt/nifi/data/flow.xml.gz"}),": flow configuration files"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/opt/nifi/data/archive"}),": NiFi archive"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/opt/nifi/data/templates"}),": templates directory"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/opt/nifi/data/database_repository"}),": Database persistence"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/opt/nifi/nifi-current/logs"}),": NiFi logs files"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/opt/nifi/flowfile_repository"}),": flowfiles repository"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/opt/nifi/content_repository"}),": NiFi content repository"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/opt/nifi/provenance_repository"}),": NiFi provenance repository"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"/opt/nifi/nifi-current/conf"}),": NiFi configurations"]}),"\n"]})]}),"\n",(0,o.jsx)(n.p,{children:"Here is an example we use in production for to persist data:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"...\nstorageConfigs:\n  - mountPath: /opt/nifi/nifi-current/logs\n    name: logs\n    metadata:\n      labels:\n        my-label: my-value\n      annotations:\n        my-annotation: my-value\n    pvcSpec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 100Gi\n      storageClassName: ssd-wait\n  - mountPath: /opt/nifi/data\n    name: data\n    metadata:\n      labels:\n        my-label: my-value\n      annotations:\n        my-annotation: my-value\n    pvcSpec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 50Gi\n      storageClassName: ssd-wait\n  - mountPath: /opt/nifi/extensions\n    name: extensions-repository\n    metadata:\n      labels:\n        my-label: my-value\n      annotations:\n        my-annotation: my-value\n    pvcSpec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 5Gi\n      storageClassName: ssd-wait\n  - mountPath: /opt/nifi/flowfile_repository\n    name: flowfile-repository\n    metadata:\n      labels:\n        my-label: my-value\n      annotations:\n        my-annotation: my-value\n    pvcSpec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 100Gi\n      storageClassName: ssd-wait\n  - mountPath: /opt/nifi/nifi-current/conf\n    name: conf\n    metadata:\n      labels:\n        my-label: my-value\n      annotations:\n        my-annotation: my-value\n    pvcSpec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 5Gi\n      storageClassName: ssd-wait\n  - mountPath: /opt/nifi/content_repository\n    name: content-repository\n    metadata:\n      labels:\n        my-label: my-value\n      annotations:\n        my-annotation: my-value\n    pvcSpec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 500Gi\n      storageClassName: ssd-wait\n  - mountPath: /opt/nifi/provenance_repository\n    name: provenance-repository\n    metadata:\n      labels:\n        my-label: my-value\n      annotations:\n        my-annotation: my-value\n    pvcSpec:\n      accessModes:\n        - ReadWriteOnce\n      resources:\n        requests:\n          storage: 500Gi\n"})}),"\n",(0,o.jsx)(n.h5,{id:"external-volumes",children:"External volumes"}),"\n",(0,o.jsxs)(n.p,{children:["In some cases, you may want to mount a volume that is not managed by the operator to add a configuration or persist data using an existing volume. To do this, use the ",(0,o.jsx)(n.a,{href:"../../../5_references/1_nifi_cluster/3_node_config#externalvolumeconfig",children:"Spec.NodeConfigGroup.StorageConfig"})," field."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["For a complete overview of node configuration possibilities, please refer to the reference page ",(0,o.jsx)(n.a,{href:"../../../5_references/1_nifi_cluster/3_node_config",children:"NodeConfigGroup"})]})}),"\n",(0,o.jsx)(n.h2,{id:"nifi-configurations",children:"NiFi configurations"}),"\n",(0,o.jsxs)(n.p,{children:["Once you have correctly defined the pods that will be deployed for your NiFi cluster, you may still have some configuration to do but at the NiFi level this time!\nFor this, the field to configure is ",(0,o.jsx)(n.a,{href:"../../../5_references/1_nifi_cluster/2_read_only_config",children:"ReadOnlyConfig"})," which can be used at the global level ",(0,o.jsx)(n.code,{children:"Spec.ReadOnlyConfig"})," or at the node level like for ",(0,o.jsx)(n.code,{children:"NodeConfigGroup"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"There is some configuration that can be passed directly into this field like:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"maximumTimerDrivenThreadCount"}),": define the maximum number of threads for timer driven processors available to the system."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"maximumEventDrivenThreadCount"}),": define the maximum number of threads for event driven processors available to the system."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["And other configurations (e.g. configuration files) that can be defined using ",(0,o.jsx)(n.code,{children:"kubernetes Secret"}),", ",(0,o.jsx)(n.code,{children:"ConfigMap"})," or directly using the ",(0,o.jsx)(n.code,{children:"override"})," field."]}),"\n",(0,o.jsx)(n.h3,{id:"configmap-secret-inline",children:"ConfigMap, Secret, Inline"}),"\n",(0,o.jsx)(n.p,{children:"For most of the configuration files that can be overwritten (see section below), there are 4 ways to define the configuration:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"default"}),": if nothing is specified, a default configuration is defined by the operator and will be used as is."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"kubernetes secret"}),": you reference a data key in a secret that will contain your configuration (used to define sensitive configurations like client secret, password, etc.)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"kubernetes configMap"}),": you reference a data key in a configMap that will contain your configuration."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"override field"}),": you define the configuration directly in the ",(0,o.jsx)(n.code,{children:"NiFiCluster"})," object using a string."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["When more than one configuration type is defined, the following priority is applied when the same configuration field is defined more than once: ",(0,o.jsx)(n.code,{children:"Secret"})," > ",(0,o.jsx)(n.code,{children:"ConfigMap"})," > ",(0,o.jsx)(n.code,{children:"Override"})," > ",(0,o.jsx)(n.code,{children:"Default"}),", which follow the security priority."]}),"\n",(0,o.jsx)(n.p,{children:"Let's take an example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:" nifiProperties:\n      # Additionnal nifi.properties configuration that will override the one produced based on template and\n      # configuration\n      overrideConfigMap:\n        # The key of the value,in data content, that we want use.\n        data: nifi.properties\n        # Name of the configmap that we want to refer.\n        name: raw\n        # Namespace where is located the secret that we want to refer.\n        namespace: nifikop\n      # Additionnal nifi.properties configuration that will override the one produced based\n      #\ton template, configurations, overrideConfigMap and overrideConfigs.\n      overrideSecretConfig:\n        # The key of the value,in data content, that we want use.\n        data: nifi.properties\n        # Name of the configmap that we want to refer.\n        name: raw\n        # Namespace where is located the secret that we want to refer.\n        namespace: nifikop\n      # Additionnal nifi.properties configuration that will override the one produced based\n      #\ton template, configurations and overrideConfigMap\n      overrideConfigs: |\n        nifi.ui.banner.text=NiFiKop\n        nifi.sensitive.props.key=thisIsABadSensitiveKeyPassword\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In this example if we have the ",(0,o.jsx)(n.code,{children:"nifi.sensitive.props.key"})," key defined in the secret ",(0,o.jsx)(n.code,{children:"raw"}),", it will override the one defined in ",(0,o.jsx)(n.code,{children:"overrideConfigs"})," field."]}),"\n",(0,o.jsx)(n.h3,{id:"overridable-configurations",children:"Overridable configurations"}),"\n",(0,o.jsx)(n.p,{children:"Here is the list of configuration that you can override for NiFi:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/konpyutaika/nifikop/blob/master/pkg/resources/templates/config/nifi_properties.go",children:"nifi.properties"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/konpyutaika/nifikop/blob/master/pkg/resources/templates/config/zookeeper_properties.go",children:"zookeeper.properties"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/konpyutaika/nifikop/blob/master/pkg/resources/templates/config/bootstrap_properties.go",children:"bootstrap.properties"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/konpyutaika/nifikop/blob/master/pkg/resources/templates/config/logback.xml.go",children:"logback.xml"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/konpyutaika/nifikop/blob/master/pkg/resources/templates/config/authorizers.go",children:"authorizers.xml"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://github.com/konpyutaika/nifikop/blob/master/pkg/resources/templates/config/bootstrap_notifications_services.go",children:"bootstrap_notification_services.xml"})}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsx)(n.p,{children:"Keep in mind that some changes to the default configuration may cause the operator's behavior to break, so keep that in mind!\nJust because it's allowed doesn't mean it works \ud83d\ude04."})}),"\n",(0,o.jsx)(n.h2,{id:"advanced-configuration",children:"Advanced configuration"}),"\n",(0,o.jsxs)(n.p,{children:["In some cases, using the default content or provenance configuration for storage may not be sufficient, for example you may need to create multiple directories for your content or provenance repository in order to ",(0,o.jsx)(n.a,{href:"https://community.cloudera.com/t5/Community-Articles/HDF-CFM-NIFI-Best-practices-for-setting-up-a-high/ta-p/244999",children:"set up a high performance installation"}),".\nAs described in the NiFi Administration Guide, you can do this by using the ",(0,o.jsx)(n.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#file-system-content-repository-properties",children:"nifi.content.repository.directory.default*"})," and ",(0,o.jsx)(n.a,{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#write-ahead-provenance-repository-properties",children:"nifi.provenance.repository.directory.default*"})," properties."]}),"\n",(0,o.jsxs)(n.p,{children:["Here is an example of how to do this in the ",(0,o.jsx)(n.code,{children:"NiFiCluster"})," configuration:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'...\n  readOnlyConfig:\n    nifiProperties:\n      overrideConfigs: |\n        nifi.content.repository.directory.dir1=../content-additional/dir1\n        nifi.content.repository.directory.dir2=../content-additional/dir2\n        nifi.content.repository.directory.dir3=../content-additional/dir3\n        nifi.provenance.repository.directory.dir1=../provenance-additional/dir1\n        nifi.provenance.repository.directory.dir2=../provenance-additional/dir2\n...\n  nodeConfigGroups:\n    default_group:\n      ...\n      storageConfigs:\n      - mountPath: "/opt/nifi/content-additional/dir1"\n        name: content-repository-dir1\n        metadata:\n          labels:\n            my-label: my-value\n          annotations:\n            my-annotation: my-value\n        pvcSpec:\n          accessModes:\n            - ReadWriteOnce\n          storageClassName: {{ storageClassName }}\n          resources:\n            requests:\n              storage: 100G\n      - mountPath: "/opt/nifi/content-additional/dir2"\n        name: content-repository-dir2\n        metadata:\n          labels:\n            my-label: my-value\n          annotations:\n            my-annotation: my-value\n        pvcSpec:\n          accessModes:\n            - ReadWriteOnce\n          storageClassName: {{ storageClassName }}\n          resources:\n            requests:\n              storage: 100G\n      - mountPath: "/opt/nifi/content-additional/dir3"\n        name: content-repository-dir3\n        metadata:\n          labels:\n            my-label: my-value\n          annotations:\n            my-annotation: my-value\n        pvcSpec:\n          accessModes:\n            - ReadWriteOnce\n          storageClassName: {{ storageClassName }}\n          resources:\n            requests:\n              storage: 100G\n      - mountPath: "/opt/nifi/provenance-additional/dir1"\n        name: provenance-repository-dir1\n        metadata:\n          labels:\n            my-label: my-value\n          annotations:\n            my-annotation: my-value\n        pvcSpec:\n          accessModes:\n            - ReadWriteOnce\n          storageClassName: {{ storageClassName }}\n          resources:\n            requests:\n              storage: 100G\n      - mountPath: "/opt/nifi/provenance-additional/dir2"\n        name: provenance-repository-dir2\n        metadata:\n          labels:\n            my-label: my-value\n          annotations:\n            my-annotation: my-value\n        pvcSpec:\n          accessModes:\n            - ReadWriteOnce\n          storageClassName: {{ storageClassName }}\n          resources:\n            requests:\n              storage: 100G\n      ...\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var o=i(63696);const t={},r=o.createContext(t);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);