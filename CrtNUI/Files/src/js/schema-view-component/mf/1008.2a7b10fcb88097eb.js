(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[1008],{68047:(Ee,j,u)=>{u.r(j),u.d(j,{MarketingEngagementToolsModule:()=>h});var c=u(74742),A=u(31134),i=u(75378),f=u(33177),d=u(8239),M=u(6523),k=u(49475),l=u(21322);let E=class extends i.BaseRequestHandler{constructor(e,t){super(),this.entitySchemaProvider=e,this._queryExecutor=t}_getEistingColumnsEsq(e){var t=this;return(0,d.Z)(function*(){const o=(yield e.getPrimaryDataSchema()).dataSourceConfig.config?.entitySchemaName,a=yield e.getPrimaryModelName(),r=e.getViewModelAttributePath(a,"Landing"),m=new i.EntitySchemaQuery(o),F=yield e[r];return m.addSchemaColumn("ColumnUId"),m.filters.addSchemaColumnFilterWithParameter(i.ComparisonType.Equal,"Landing",F),(0,l.lastValueFrom)(t._queryExecutor.executeSelectQuery(m).pipe((0,l.map)(S=>S.map(L=>L.ColumnUId)),(0,l.catchError)(S=>(0,l.of)([]))))})()}handle(e){var t=this;return(0,d.Z)(function*(){if(!e.entitySchemaUId||!e.attributeToSetColumns){console.warn("Request parameters are incorrect"),e.attributeToSetColumns&&(e.$context[e.attributeToSetColumns]=[]);return}const n=yield(0,l.lastValueFrom)(t.entitySchemaProvider.getSchemaByUId(e.entitySchemaUId).pipe((0,l.catchError)(a=>(0,l.of)(null)))),o=yield t._getEistingColumnsEsq(e.$context);if(n){const a=n.columns.filter(r=>r.usageType===k.EntitySchemaColumnUsageType.General).filter(r=>e.primaryDisplayFilterValue?r.caption.toLowerCase().includes(e.primaryDisplayFilterValue.toLowerCase()):!0).filter(r=>!o.includes(r.uId)).map(r=>({...r,value:r.uId,displayValue:r.caption}));e.$context[e.attributeToSetColumns]=a}else console.warn(`Schema with UId ${e.entitySchemaUId} not found`),e.$context[e.attributeToSetColumns]=[]})()}};E=(0,c.__decorate)([(0,i.CrtRequestHandler)({requestType:"crt.PrepareColumnsBySchemaUIdRequest",type:"crt.PrepareColumnsBySchemaUIdHandler"}),(0,c.__metadata)("design:paramtypes",[k.EntitySchemaProvider,M.QueryExecutor])],E);let w=class extends i.BaseRequest{constructor(){super(...arguments),this.type="crt.PrepareColumnsBySchemaUIdRequest"}};w=(0,c.__decorate)([(0,i.CrtRequest)({type:"crt.PrepareColumnsBySchemaUIdRequest",scopes:["LandingObjectDefaultsMiniPage"]})],w);var D=u(99852),g=u(94450),V=u(77207),q=u(99293),W=u(2876);class y{constructor(e){this._httpClient=e,this.sessionTokenUri="rest/SocialLeadGenService/GenerateSessionToken",this.subscriptionsUri="rest/SocialLeadGenService/GetSubscribtion",this.createAccountUri="rest/SocialLeadGenService/CreateAccount",this.getAccountUri="rest/SocialLeadGenService/GetAccount"}generateSessionToken(){return this._httpClient.post(this.sessionTokenUri,{},{responseType:"json"})}getSubscription(e){const t={subscribtionRequest:{LandingId:e}};return this._httpClient.post(this.subscriptionsUri,t,{responseType:"json"})}getAccount(){return this._httpClient.post(this.getAccountUri,{},{responseType:"json"})}createAccount(e){const t={createAccountRequest:{CreatioDomain:e}};return this._httpClient.post(this.createAccountUri,t,{responseType:"json"})}}y.\u0275fac=function(e){return new(e||y)(g.\u0275\u0275inject(W.HttpClient))},y.\u0275prov=g.\u0275\u0275defineInjectable({token:y,factory:y.\u0275fac});let C=class extends i.BaseRequestHandler{constructor(e,t,n,o,a,r){super(),this.notifyService=e,this.socialLeadGenService=t,this.userInfo=n,this.injector=o,this.translateService=a,this._window=r,this.snackbarDuration=7e3,this.directionality=this.injector.get(D.Directionality)}createIntegrationUrl(e,t){return`${e.AccountServiceUrl}/app?locale=${this.userInfo.cultureInfo.sysCultureName}&dir=${this.directionality?.value||"ltr"}&social_network=facebook&session_token=${e.SessionToken}&web_form_id=${t}&close_window=true&landing_type=lead`}handleWindowClose(e,t,n,o){if(e.closed){if(performance.now()-t<200){const m=this.translate("DefaultSubscriptionError");throw new Error(m)}clearInterval(n),o(!0)}}showIntegrationWindow(e){var t=this;return(0,d.Z)(function*(){const n=performance.now(),o=t._window.open(e);if(!o){const a=t.translate("IntegrationWindowError");throw new Error(a)}yield new Promise(a=>{const r=setInterval(()=>{t.handleWindowClose(o,n,r,a)},100)})})()}findSubscription(e){var t=this;return(0,d.Z)(function*(){return(yield(0,l.lastValueFrom)(t.socialLeadGenService.getSubscription(e))).GetSubscribtionResult})()}createNewLandingRequest(e,t,n,o){const a=e.PageName,r=e.FormName;return{type:"crt.CreateRecordRequest",entityName:"GeneratedWebForm",defaultValues:[{attributeName:"Id",value:t},{attributeName:"Name",value:r},{attributeName:"IsFbWebForm",value:!0},{attributeName:"ExternalURL",value:"*"},{attributeName:"WebPageName",value:a},{attributeName:"Type",value:n}],$context:o}}getIntegrationAccount(){return(0,l.lastValueFrom)(this.socialLeadGenService.getAccount()).catch(()=>(this.showErrorNotification(this.translate("IntegrationSetupError")),null))}createIntegrationAccount(){const e=(0,k.getAppBaseUrl)();return(0,l.lastValueFrom)(this.socialLeadGenService.createAccount(e)).catch(()=>(this.showErrorNotification(this.translate("IntegrationSetupError")),null))}getIntegrationToken(){return(0,l.lastValueFrom)(this.socialLeadGenService.generateSessionToken()).catch(()=>(this.showErrorNotification(this.translate("IntegrationSetupError")),null))}createSubscription(e){var t=this;return(0,d.Z)(function*(){try{yield t.showIntegrationWindow(e)}catch(n){const o=n.message||t.translate("DefaultSubscriptionError");t.showErrorNotification(o);return}})()}translate(e){return this.translateService.instant(`${this.translationPrefix}.${e}`)}showErrorNotification(e){this.notifyService.error({message:e||this.translate("DefaultSubscriptionError"),duration:this.snackbarDuration})}};C=(0,c.__decorate)([(0,c.__param)(5,(0,i.CrtInject)(f.WINDOW_TOKEN)),(0,c.__metadata)("design:paramtypes",[q.NotifyService,y,k.UserInfo,g.Injector,V.TranslateService,Window])],C);let I=class extends C{constructor(){super(...arguments),this.translationPrefix="MarketingEngagementToolsContent.ConnectFacebookForm"}handle(e){var t=this;return(0,d.Z)(function*(){const n=(0,i.generateGuid)(),o=yield t.getIntegrationAccount();if(!o||!o.GetAccountResult?.IsAccountExists&&!(yield t.createIntegrationAccount()))return;const a=yield t.getIntegrationToken();if(!a?.GenerateSessionTokenResult)return;const r=t.createIntegrationUrl(a.GenerateSessionTokenResult,n);yield t.createSubscription(r);const m=yield t.findSubscription(n);if(!m?.IsLeadGenSubscribed){t.showErrorNotification(t.translate("DefaultSubscriptionError"));return}const F=t.createNewLandingRequest(m,n,e.landingTypeId,e.$context);yield t.handlerChain.process(F)})()}};I=(0,c.__decorate)([(0,i.CrtRequestHandler)({type:"crt.ConnectFacebookFormHandler",requestType:"crt.ConnectFacebookFormRequest"})],I);let p=class extends i.BaseRequest{constructor(){super(...arguments),this.type="crt.ConnectFacebookFormRequest"}};p.\u0275fac=function(){let s;return function(t){return(s||(s=g.\u0275\u0275getInheritedFactory(p)))(t||p)}}(),p.\u0275prov=g.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac}),p=(0,c.__decorate)([(0,i.CrtRequest)({type:"crt.ConnectFacebookFormRequest",scopes:["FacebookForms_ListPage","FacebookForm_FormPage","FacebookFormLead_FormPage"]})],p);let v=class extends C{constructor(){super(...arguments),this._facebookFormNameAttribute="Name",this._facebookPageNameAttribute="WebPageName",this.translationPrefix="MarketingEngagementToolsContent.ConnectFacebookForm"}_actualizeAttributeValues(e,t){var n=this;return(0,d.Z)(function*(){const o=yield t.getPrimaryModelName(),a=t.getViewModelAttributePath(o,n._facebookFormNameAttribute),r=t.getViewModelAttributePath(o,n._facebookPageNameAttribute);t[a]=e.FormName,t[r]=e.PageName})()}_saveRecord(e){return(0,d.Z)(function*(){const t={type:"crt.SaveRecordRequest",preventCardClose:!1,$context:e};yield e.executeRequest(t)})()}handle(e){var t=this;return(0,d.Z)(function*(){const n=e.$context,o=n.primaryAttributeName,a=e.landingId||(yield n[o]),r=yield t.getIntegrationAccount();if(!r||!r.GetAccountResult?.IsAccountExists&&!(yield t.createIntegrationAccount()))return;const m=yield t.getIntegrationToken();if(!m?.GenerateSessionTokenResult)return;const F=t.createIntegrationUrl(m.GenerateSessionTokenResult,a);yield t.createSubscription(F);const S=yield t.findSubscription(a);if(!S?.IsLeadGenSubscribed){t.showErrorNotification(t.translate("DefaultSubscriptionError"));return}yield t._actualizeAttributeValues(S,e.$context),yield t._saveRecord(e.$context)})()}};v=(0,c.__decorate)([(0,i.CrtRequestHandler)({type:"crt.ReconnectFacebookFormHandler",requestType:"crt.ReconnectFacebookFormRequest"})],v);let b=class extends i.BaseRequest{constructor(){super(...arguments),this.type="crt.ReconnectFacebookFormRequest"}};b.\u0275fac=function(){let s;return function(t){return(s||(s=g.\u0275\u0275getInheritedFactory(b)))(t||b)}}(),b.\u0275prov=g.\u0275\u0275defineInjectable({token:b,factory:b.\u0275fac}),b=(0,c.__decorate)([(0,i.CrtRequest)({type:"crt.ReconnectFacebookFormRequest",scopes:["FacebookForm_FormPage","FacebookFormLead_FormPage"]})],b);let _=class extends i.BaseRequestHandler{setAttributeByPath(e,t,n,o){const a=e.getViewModelAttributePath(t,n);e[a]=o}handle(e){var t=this;return(0,d.Z)(function*(){const{$context:n}=e,o=yield n.getPrimaryModelName();["BooleanValue","FloatValue","GuidValue","IntegerValue","TextValue","ColumnUId","ColumnCaption"].forEach(m=>{t.setAttributeByPath(n,o,m,null)}),n[e.controlAttributeName]=null;const r=yield n.CrtColumn;if(!r){n.DataValueType=-1;return}n.DataValueType=r.dataValueType,t.setAttributeByPath(n,o,"ColumnUId",r.value),t.setAttributeByPath(n,o,"ColumnCaption",r.displayValue),yield n.executeRequest({type:"crt.LoadDynamicLookupSchemaRequest",$context:n,controlAttributeName:e.controlAttributeName,controlItemsAttributeName:e.controlItemsAttributeName})})()}};_=(0,c.__decorate)([(0,i.CrtRequestHandler)({requestType:"crt.ChangeObjectColumnRequest",type:"crt.ChangeObjectColumnHandler"})],_);let R=class extends i.BaseRequest{constructor(){super(...arguments),this.type="crt.ChangeObjectColumnRequest"}};R=(0,c.__decorate)([(0,i.CrtRequest)({type:"crt.ChangeObjectColumnRequest",scopes:["LandingObjectDefaultsMiniPage"]})],R);let N=class extends i.BaseRequestHandler{constructor(e){super(),this.entitySchemaProvider=e}handle(e){var t=this;return(0,d.Z)(function*(){const{$context:n}=e,o=yield n.CrtColumn;if(!o?.referenceSchemaName||o?.dataValueType!==i.DataValueType.Lookup)return;const a=yield(0,l.lastValueFrom)(t.entitySchemaProvider.getSchemaByName(o.referenceSchemaName).pipe((0,l.catchError)(m=>(0,l.of)(null))));if(!a)return;const r=a.getPrimaryDisplayColumn()?.name;yield e.$context.executeRequest({type:"crt.LoadDataRequest",$context:e.$context,config:{dataSourceName:`${e.controlAttributeName}_List_DS`,dataSourceConfig:{type:"crt.EntityDataSource",scope:"viewElement",config:{entitySchemaName:o.referenceSchemaName,useOriginalAttributesName:!0,attributes:{value:{path:"Id",type:"ForwardReference"},...r&&{displayValue:{path:r,type:"ForwardReference"}}}}},attributeName:e.controlItemsAttributeName}})})()}};N=(0,c.__decorate)([(0,i.CrtRequestHandler)({requestType:"crt.LoadDynamicLookupSchemaRequest",type:"crt.LoadDynamicLookupSchemaHandler"}),(0,c.__metadata)("design:paramtypes",[k.EntitySchemaProvider])],N);let T=class extends i.BaseRequest{constructor(){super(...arguments),this.type="crt.LoadDynamicLookupSchemaRequest"}};T=(0,c.__decorate)([(0,i.CrtRequest)({type:"crt.LoadDynamicLookupSchemaRequest",scopes:["LandingObjectDefaultsMiniPage"]})],T);let P=class extends i.BaseRequestHandler{handle(e){return(0,d.Z)(function*(){const{$context:t}=e,n=yield t[e.lookupValueAttributeName],o=yield t.getPrimaryModelName(),a=t.getViewModelAttributePath(o,e.guidValueAttributeName);n?.value?t[a]=n.value:t[a]=null})()}};P=(0,c.__decorate)([(0,i.CrtRequestHandler)({requestType:"crt.SetGuidValueRequest",type:"crt.SetGuidValueHandler"})],P);let O=class extends i.BaseRequest{constructor(){super(...arguments),this.type="crt.SetGuidValueRequest"}};O=(0,c.__decorate)([(0,i.CrtRequest)({type:"crt.SetGuidValueRequest",scopes:["LandingObjectDefaultsMiniPage"]})],O);const x=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Generiranje Facebook vodi\u010Da trenutno je neaktivno. Sustavni administrator mo\u017Ee omogu\u0107iti integraciju s Facebookom","IntegrationWindowError":"Sko\u010Dni prozori trenutno su blokirani u postavkama va\u0161eg preglednika. Molimo vas omogu\u0107ite sko\u010Dne prozore kako biste nastavili","DefaultSubscriptionError":"Ne\u0161to nije u redu. Molimo poku\u0161ajte ponovno povezati obrazac"}}}'),U=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"\u0413\u0435\u043D\u0435\u0440\u0438\u0440\u0430\u043D\u0435\u0442\u043E \u043D\u0430 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B\u043D\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u0438 \u0432\u044A\u0432 Facebook \u0432 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u0435 \u043D\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u043E. \u0421\u0438\u0441\u0442\u0435\u043C\u043D\u0438\u044F\u0442 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F\u0442\u0430 \u043D\u0430 Facebook","IntegrationWindowError":"\u0412 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u0438\u0437\u0441\u043A\u0430\u0447\u0430\u0449\u0438\u0442\u0435 \u043F\u0440\u043E\u0437\u043E\u0440\u0446\u0438 \u0441\u0430 \u0431\u043B\u043E\u043A\u0438\u0440\u0430\u043D\u0438 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438\u0442\u0435 \u043D\u0430 \u0432\u0430\u0448\u0438\u044F \u0431\u0440\u0430\u0443\u0437\u044A\u0440. \u041C\u043E\u043B\u044F, \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0430\u0439\u0442\u0435 \u0438\u0437\u0441\u043A\u0430\u0447\u0430\u0449\u0438\u0442\u0435 \u043F\u0440\u043E\u0437\u043E\u0440\u0446\u0438, \u0437\u0430 \u0434\u0430 \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435","DefaultSubscriptionError":"\u041D\u0435\u0449\u043E \u0441\u0435 \u043E\u0431\u044A\u0440\u043A\u0430. \u041C\u043E\u043B\u044F, \u043E\u043F\u0438\u0442\u0430\u0439\u0442\u0435 \u043E\u0442\u043D\u043E\u0432\u043E \u0434\u0430 \u0441\u0432\u044A\u0440\u0436\u0435\u0442\u0435 \u0444\u043E\u0440\u043C\u0430\u0442\u0430"}}}'),G=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"A Facebook lead gener\xE1l\xE1sa jelenleg inakt\xEDv. A rendszergazda enged\xE9lyezheti a Facebook integr\xE1ci\xF3t","IntegrationWindowError":"Az el\u0151ugr\xF3 ablakok jelenleg le vannak tiltva a b\xF6ng\xE9sz\u0151 be\xE1ll\xEDt\xE1saiban. A folytat\xE1shoz enged\xE9lyezze az el\u0151ugr\xF3 ablakokat","DefaultSubscriptionError":"Valami elromlott. K\xE9rj\xFCk, pr\xF3b\xE1lja meg \xFAjra csatlakoztatni az \u0171rlapot"}}}'),H=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation is currently inactive. The system administrator can enable the Facebook integration","IntegrationWindowError":"Pop-up windows are currently blocked in your browser settings. Please enable pop-ups to proceed","DefaultSubscriptionError":"Something went wrong. Please try connecting the form again"}}}'),J=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation is currently inactive. The system administrator can enable the Facebook integration","IntegrationWindowError":"Pop-up windows are currently blocked in your browser settings. Please enable pop-ups to proceed","DefaultSubscriptionError":"Something went wrong. Please try connecting the form again"}}}'),B=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook-Leadgenerierung ist derzeit inaktiv. Der Systemadministrator kann die Facebook-Integration aktivieren","IntegrationWindowError":"Popup-Fenster sind derzeit in Ihren Browsereinstellungen blockiert. Bitte aktivieren Sie Pop-ups um fortzufahren","DefaultSubscriptionError":"Etwas ist schiefgelaufen. Bitte versuchen Sie, das Formular erneut zu verbinden"}}}'),z=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation is currently inactive. The system administrator can enable the Facebook integration","IntegrationWindowError":"Pop-up windows are currently blocked in your browser settings. Please enable pop-ups to proceed","DefaultSubscriptionError":"Something went wrong. Please try connecting the form again"}}}'),$=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"La generaci\xF3n de clientes potenciales de Facebook est\xE1 actualmente inactiva. El administrador del sistema puede habilitar la integraci\xF3n con Facebook","IntegrationWindowError":"Las ventanas emergentes est\xE1n bloqueadas en la configuraci\xF3n de su navegador. Por favor, habilite los ventanas emergentes para continuar","DefaultSubscriptionError":"Algo sali\xF3 mal. Intenta conectar el formulario de nuevo"}}}'),Z=JSON.parse('{"MarketingEngagementToolsContent":{}}'),K=JSON.parse('{"MarketingEngagementToolsContent":{}}'),Q=JSON.parse(`{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"La remont\xE9e des leads Facebook n'est pas active. L'administrateur syst\xE8me peut activer l'int\xE9gration Facebook","IntegrationWindowError":"Les fen\xEAtres pop-up sont actuellement bloqu\xE9es dans les param\xE8tres de votre navigateur. Veuillez activer les pop-up pour continuer","DefaultSubscriptionError":"Une erreur est survenue. Veuillez r\xE9essayer de connecter le formulaire"}}}`),X=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation is currently inactive. The system administrator can enable the Facebook integration","IntegrationWindowError":"Pop-up windows are currently blocked in your browser settings. Please enable pop-ups to proceed","DefaultSubscriptionError":"Something went wrong. Please try connecting the form again"}}}'),Y=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation is currently inactive. The system administrator can enable the Facebook integration","IntegrationWindowError":"Pop-up windows are currently blocked in your browser settings. Please enable pop-ups to proceed","DefaultSubscriptionError":"Something went wrong. Please try connecting the form again"}}}'),ee=JSON.parse(`{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"La generazione di lead di Facebook \xE8 attualmente inattiva. L'amministratore di sistema pu\xF2 abilitare l'integrazione di Facebook","IntegrationWindowError":"Le finestre pop-up sono attualmente bloccate dalle impostazioni del browser. Si prega di abilitare i pop-up per procedere","DefaultSubscriptionError":"Qualcosa \xE8 andato storto. Riprova a collegare il modulo"}}}`),te=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook\u306E\u30EA\u30FC\u30C9\u751F\u6210\u306F\u73FE\u5728\u7121\u52B9\u3067\u3059\u3002\u30B7\u30B9\u30C6\u30E0\u7BA1\u7406\u8005\u306FFacebook\u3068\u306E\u7D71\u5408\u3092\u6709\u52B9\u306B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002","IntegrationWindowError":"\u30D6\u30E9\u30A6\u30B6\u30FC\u306E\u8A2D\u5B9A\u3067\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u30A6\u30A3\u30F3\u30C9\u30A6\u304C\u30D6\u30ED\u30C3\u30AF\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u7D9A\u884C\u3059\u308B\u306B\u306F\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u3092\u6709\u52B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044","DefaultSubscriptionError":"\u554F\u984C\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u3082\u3046\u4E00\u5EA6\u30D5\u30A9\u30FC\u30E0\u306B\u63A5\u7D9A\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}}}'),ne=JSON.parse('{"MarketingEngagementToolsContent":{}}'),oe=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook \uB9AC\uB4DC \uC0DD\uC131\uC774 \uD604\uC7AC \uBE44\uD65C\uC131 \uC0C1\uD0DC\uC785\uB2C8\uB2E4. \uC2DC\uC2A4\uD15C \uAD00\uB9AC\uC790\uB294 Facebook \uD1B5\uD569\uC744 \uD65C\uC131\uD654\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4","IntegrationWindowError":"\uD604\uC7AC \uBE0C\uB77C\uC6B0\uC800 \uC124\uC815\uC5D0\uC11C \uD31D\uC5C5 \uCC3D\uC774 \uCC28\uB2E8\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uD31D\uC5C5\uC744 \uACC4\uC18D\uD560 \uC218 \uC788\uB3C4\uB85D \uD574\uC8FC\uC138\uC694","DefaultSubscriptionError":"\uBB38\uC81C\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uC591\uC2DD\uC744 \uB2E4\uC2DC \uC5F0\uACB0\uD574 \uBCF4\uC2ED\uC2DC\uC624"}}}'),re=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation is currently inactive. The system administrator can enable the Facebook integration","IntegrationWindowError":"Pop-up windows are currently blocked in your browser settings. Please enable pop-ups to proceed","DefaultSubscriptionError":"Something went wrong. Please try connecting the form again"}}}'),ae=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation is currently inactive. The system administrator can enable the Facebook integration","IntegrationWindowError":"Pop-up windows are currently blocked in your browser settings. Please enable pop-ups to proceed","DefaultSubscriptionError":"Something went wrong. Please try connecting the form again"}}}'),ie=JSON.parse('{"MarketingEngagementToolsContent":{}}'),se=JSON.parse('{"MarketingEngagementToolsContent":{}}'),ce=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation is currently inactive. The system administrator can enable the Facebook integration","IntegrationWindowError":"Pop-up windows are currently blocked in your browser settings. Please enable pop-ups to proceed","DefaultSubscriptionError":"Something went wrong. Please try connecting the form again"}}}'),ue=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"A gera\xE7\xE3o de Leads a partir do Facebook est\xE1 atualmente inativa. O administrador do sistema poder\xE1 ativar a integra\xE7\xE3o com o Facebook","IntegrationWindowError":"As janelas de popup est\xE3o atualmente bloqueadas nas configura\xE7\xF5es de seu navegador. Favor, ativar os popups para prosseguir","DefaultSubscriptionError":"Ocorreu um erro. Favor, tentar conectar-se ao formul\xE1rio novamente"}}}'),le=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation is currently inactive. The system administrator can enable the Facebook integration","IntegrationWindowError":"Pop-up windows are currently blocked in your browser settings. Please enable pop-ups to proceed","DefaultSubscriptionError":"Something went wrong. Please try connecting the form again"}}}'),me=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation este \xEEn prezent inactiv. Administratorul de sistem poate activa integrarea Facebook","IntegrationWindowError":"Ferestrele pop-up sunt blocate \xEEn prezent \xEEn set\u0103rile browser-ului. V\u0103 rug\u0103m s\u0103 activa\u021Bi pop-up-urile pentru a continua","DefaultSubscriptionError":"Ceva nu a mers bine. V\u0103 rug\u0103m s\u0103 \xEEncerca\u0163i s\u0103 conecta\u0163i formularul din nou"}}}'),de=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"\u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043B\u0438\u0434\u043E\u0432 Facebook \u0432 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043D\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u0430. \u0421\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u043C\u043E\u0436\u0435\u0442 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044E \u0441 Facebook","IntegrationWindowError":"\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0431\u043B\u043E\u043A\u0438\u0440\u0443\u0435\u0442 \u0432\u0441\u043F\u043B\u044B\u0432\u0430\u044E\u0449\u0438\u0435 \u043E\u043A\u043D\u0430. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0438\u0445, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443","DefaultSubscriptionError":"\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0443 \u0441\u043D\u043E\u0432\u0430"}}}'),ge=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation is currently inactive. The system administrator can enable the Facebook integration","IntegrationWindowError":"Pop-up windows are currently blocked in your browser settings. Please enable pop-ups to proceed","DefaultSubscriptionError":"Something went wrong. Please try connecting the form again"}}}'),pe=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation is currently inactive. The system administrator can enable the Facebook integration","IntegrationWindowError":"Pop-up windows are currently blocked in your browser settings. Please enable pop-ups to proceed","DefaultSubscriptionError":"Something went wrong. Please try connecting the form again"}}}'),be=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation is currently inactive. The system administrator can enable the Facebook integration","IntegrationWindowError":"Pop-up windows are currently blocked in your browser settings. Please enable pop-ups to proceed","DefaultSubscriptionError":"Something went wrong. Please try connecting the form again"}}}'),he=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation is currently inactive. The system administrator can enable the Facebook integration","IntegrationWindowError":"Pop-up windows are currently blocked in your browser settings. Please enable pop-ups to proceed","DefaultSubscriptionError":"Something went wrong. Please try connecting the form again"}}}'),ye=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"\u041B\u0456\u0434\u043E\u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0456\u044F \u0437 Facebook \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u0430. \u0421\u0438\u0441\u0442\u0435\u043C\u043D\u0438\u0439 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440 \u043C\u043E\u0436\u0435 \u0432\u0432\u0456\u043C\u043A\u043D\u0443\u0442\u0438 \u0456\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0456\u044E \u0437 Facebook","IntegrationWindowError":"\u0421\u043F\u043B\u0438\u0432\u0430\u044E\u0447\u0456 \u0432\u0456\u043A\u043D\u0430 \u0432 \u0434\u0430\u043D\u0438\u0439 \u0447\u0430\u0441 \u0437\u0430\u0431\u043B\u043E\u043A\u043E\u0432\u0430\u043D\u0456 \u0432 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445 \u0432\u0430\u0448\u043E\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0430\u043A\u0442\u0438\u0432\u0443\u0439\u0442\u0435 \u0441\u043F\u043B\u0438\u0432\u0430\u044E\u0447\u0456 \u0432\u0456\u043A\u043D\u0430 \u0434\u043B\u044F \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0435\u043D\u043D\u044F","DefaultSubscriptionError":"\u0429\u043E\u0441\u044C \u043F\u0456\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437 \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0438 \u0444\u043E\u0440\u043C\u0443"}}}'),Se=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation is currently inactive. The system administrator can enable the Facebook integration","IntegrationWindowError":"Pop-up windows are currently blocked in your browser settings. Please enable pop-ups to proceed","DefaultSubscriptionError":"Something went wrong. Please try connecting the form again"}}}'),ke=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation is currently inactive. The system administrator can enable the Facebook integration","IntegrationWindowError":"Pop-up windows are currently blocked in your browser settings. Please enable pop-ups to proceed","DefaultSubscriptionError":"Something went wrong. Please try connecting the form again"}}}'),Fe=JSON.parse('{"MarketingEngagementToolsContent":{"ConnectFacebookForm":{"IntegrationSetupError":"Facebook lead generation is currently inactive. The system administrator can enable the Facebook integration","IntegrationWindowError":"Pop-up windows are currently blocked in your browser settings. Please enable pop-ups to proceed","DefaultSubscriptionError":"Something went wrong. Please try connecting the form again"}}}'),fe=JSON.parse('{"MarketingEngagementToolsContent":{}}'),Ce={"hr-HR":x,"bg-BG":U,"hu-HU":G,"zh-CN":ke,"uk-UA":ye,"sq-AL":ge,"zh-TW":Fe,"no-NO":ie,zh:fe,"vi-VN":Se,"tr-TR":he,"th-TH":be,"sv-SE":pe,"ro-RO":me,"pt-PT":le,"pt-BR":ue,"pl-PL":ce,no:se,"nl-NL":ae,"lv-LV":re,"ko-KR":oe,"kk-KZ":ne,"ja-JP":te,"it-IT":ee,"id-ID":Y,"he-IL":X,"fr-FR":Q,"fr-CA":K,"fa-IR":Z,"es-ES":$,"de-DE":B,"cs-CZ":J,"ar-SA":H,"en-US":z,"ru-RU":de};let h=class{};h.\u0275fac=function(e){return new(e||h)},h.\u0275mod=g.\u0275\u0275defineNgModule({type:h}),h.\u0275inj=g.\u0275\u0275defineInjector({providers:[w,p,b,R,T,O,y,f.WINDOW_PROVIDER],imports:[A.CommonModule,f.CrtLibTranslateModule.forRoot({i18n:Ce})]}),h=(0,c.__decorate)([(0,i.CrtModule)({viewElements:[],requestHandlers:[I,v,E,_,N,P]})],h),function(){(typeof ngJitMode>"u"||ngJitMode)&&g.\u0275\u0275setNgModuleScope(h,{imports:[A.CommonModule,f.CrtLibTranslateModule]})}()}}]);
