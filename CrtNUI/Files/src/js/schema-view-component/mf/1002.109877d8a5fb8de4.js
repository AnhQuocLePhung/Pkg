(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[1002,1057],{61002:(g,v,i)=>{i.r(v),i.d(v,{AVAILABLE_ENTITY_SCHEMAS:()=>A,PackageType:()=>p,WORKSPACE_EXPLORER_RELOAD_CHANNEL_NAME:()=>_,WorkspaceCompilationService:()=>c,WorkspaceConfigurationStatusService:()=>u,WorkspaceDbStructureService:()=>s,WorkspaceEntityApiService:()=>a,WorkspaceExplorerCommonApiModule:()=>r,WorkspaceFeatureService:()=>l,WorkspaceItemType:()=>S,WorkspaceRestartService:()=>d});var m=i(31134),n=i(94450);class r{}r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=n.\u0275\u0275defineNgModule({type:r}),r.\u0275inj=n.\u0275\u0275defineInjector({imports:[m.CommonModule]}),function(){(typeof ngJitMode>"u"||ngJitMode)&&n.\u0275\u0275setNgModuleScope(r,{imports:[m.CommonModule]})}();var o=i(2876);class c{constructor(e){this._httpClient=e,this._serviceUrl="ServiceModel/WorkspaceExplorerService.svc/"}buildPackage(e){const h=this._serviceUrl+"BuildPackage",E=JSON.stringify({packageName:e}),b={"content-type":"application/json"};return this._httpClient.post(h,E,{headers:b})}compile(){const e=this._serviceUrl+"Build";return this._httpClient.post(e,null)}compileAll(){const e=this._serviceUrl+"Rebuild";return this._httpClient.post(e,null)}buildConfiguration(){const e=this._serviceUrl+"BuildConfiguration";return this._httpClient.post(e,null)}runODataBuild(){const e=this._serviceUrl+"RunODataBuild";return this._httpClient.post(e,null)}}c.\u0275fac=function(e){return new(e||c)(n.\u0275\u0275inject(o.HttpClient))},c.\u0275prov=n.\u0275\u0275defineInjectable({token:c,factory:c.\u0275fac,providedIn:"root"});class a{constructor(e){this._httpClient=e,this._serviceUrl="ServiceModel/SchemaDataDesignerService.svc/"}getAvailableEntitySchemas(e){const h=this._serviceUrl+"GetAvailableEntitySchemas";return this._httpClient.post(h,{packageUId:e})}}a.\u0275fac=function(e){return new(e||a)(n.\u0275\u0275inject(o.HttpClient))},a.\u0275prov=n.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac});class s{constructor(e){this._httpClient=e,this._serviceUrl="ServiceModel/WorkspaceExplorerService.svc/"}updateDBStructure(e){const h=this._serviceUrl+"UpdateDBStructure";return this._httpClient.post(h,e)}}s.\u0275fac=function(e){return new(e||s)(n.\u0275\u0275inject(o.HttpClient))},s.\u0275prov=n.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"});var C=i(27049);class l{constructor(e){this._httpClient=e}getAllowStandaloneAssembly(){return this._allowStandaloneAssemblyEnabled$||(this._allowStandaloneAssemblyEnabled$=this._httpClient.post("/ServiceModel/PackageService.svc/GetAllowStandaloneAssembly",null).pipe((0,C.shareReplay)(1)),this._allowStandaloneAssemblyEnabled$.subscribe()),this._allowStandaloneAssemblyEnabled$}}l.\u0275fac=function(e){return new(e||l)(n.\u0275\u0275inject(o.HttpClient))},l.\u0275prov=n.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac,providedIn:"root"});class d{constructor(e){this._httpClient=e,this._appInstallerServiceUrl="ServiceModel/AppInstallerService.svc/",this._restartApplication="RestartApp"}restartApp(){const e=`${this._appInstallerServiceUrl}${this._restartApplication}`;return this._httpClient.post(e,null)}}d.\u0275fac=function(e){return new(e||d)(n.\u0275\u0275inject(o.HttpClient))},d.\u0275prov=n.\u0275\u0275defineInjectable({token:d,factory:d.\u0275fac,providedIn:"root"});class u{constructor(e){this._httpClient=e,this._serviceUrl="api/ConfigurationStatus/"}getConfigurationStatusReport(){const e=this._serviceUrl+"GetConfigurationStatusReport";return this._httpClient.get(e)}getLastCompilationResult(){const e=this._serviceUrl+"GetLastCompilationResult";return this._httpClient.get(e)}}u.\u0275fac=function(e){return new(e||u)(n.\u0275\u0275inject(o.HttpClient))},u.\u0275prov=n.\u0275\u0275defineInjectable({token:u,factory:u.\u0275fac,providedIn:"root"});var f=i(75378);const A=[{name:"AcademyURL",uId:"2db09028-bfa5-4314-929d-0f149f348452"},{name:"Account",uId:"25d7c1ab-1de0-4501-b402-02e0e5a72d6e"},{name:"Contact",uId:"16be3651-8fe2-4159-8dd0-a803d4683dd3"},{name:"SysImage",uId:(0,f.generateGuid)()}];var p;(function(t){t[t.General=0]="General",t[t.Assembly=1]="Assembly"})(p||(p={}));var S;(function(t){t[t.SqlScript=0]="SqlScript",t[t.SchemaData=1]="SchemaData",t[t.Assembly=2]="Assembly",t[t.EntitySchema=3]="EntitySchema",t[t.ClientUnitSchema=4]="ClientUnitSchema",t[t.SourceCodeSchema=5]="SourceCodeSchema",t[t.ProcessSchema=6]="ProcessSchema",t[t.DcmSchema=7]="DcmSchema",t[t.ProcessUserTaskSchema=8]="ProcessUserTaskSchema",t[t.CampaignSchema=9]="CampaignSchema",t[t.ServiceSchema=10]="ServiceSchema",t[t.AddonSchema=11]="AddonSchema",t[t.CopilotIntentSchema=12]="CopilotIntentSchema"})(S||(S={}));const _="workspace-explorer-items-reload"}}]);
