(self.webpackChunkapp_studio_enterprise_error_list_dialog=self.webpackChunkapp_studio_enterprise_error_list_dialog||[]).push([[4667,4846],{54667:(U,I,n)=>{n.r(I),n.d(I,{COPILOT_INTENT_REPOSITORY_TOKEN:()=>m,CopilotActionCodeGeneratorService:()=>a,CopilotIntentManagerService:()=>p,CopilotUtilsModule:()=>c,copilotIntentMock:()=>C});var i=n(94450),s=n(75378),f=n(97600),o=n(21322);const m=new i.InjectionToken("COPILOT_INTENT_REPOSITORY_TOKEN");var u=n(33177);class a{constructor(){this._defaultNewActionCode="Action",this._sysSettingsService=(0,i.inject)(s.SysSettingsService)}_checkCodeIsUnique(e,t){return!e?.includes(t)}generate(e=null){return(0,o.from)(this._sysSettingsService.getByCode("SchemaNamePrefix")).pipe((0,o.map)(t=>t.value),(0,o.repeat)(),(0,o.map)(t=>u.NameGenerator.generateUnique(this._defaultNewActionCode,t)),(0,o.filter)(t=>this._checkCodeIsUnique(e,t)),(0,o.take)(1))}}a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=i.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac});class p{constructor(){this._repository=(0,i.inject)(m),this._actionCodeGenerator=(0,i.inject)(a)}_loadIntentUIdByActionUId(e){return(0,o.from)(s.Model.create("CopilotAction")).pipe((0,o.switchMap)(t=>t.load({attributes:["Intent"],parameters:[{type:s.ModelParameterType.Filter,value:new s.CompareFilter(s.ComparisonType.Equal,new s.ColumnExpression({columnPath:"Id"}),new s.ParameterExpression({value:e}))}]})),(0,o.map)(t=>{const r=t[0]||{};return(0,f.isEmpty)(r)?null:r.Intent?.value}))}_applyActionToIntent(e,t){const l=(e.Actions||[]).findIndex(T=>T.Id===t.Id);if(l===-1)return!1;const _=e.Actions[l];return e.Actions.splice(l,1,{..._,...t}),!0}getIntent(e){return this._repository.get(e)}createIntent(e){return this._repository.create(e.UId).pipe((0,o.map)(t=>(t.UId=e.UId,t.Title=e.Title,t.Code=e.Code,t.Status=e.Status,t.Description=e.Description,t.Prompt=e.Prompt,t)),(0,o.switchMap)(t=>this._repository.update(t)))}updateIntent(e){return this._repository.get(e.UId).pipe((0,o.map)(t=>({...t,...e})),(0,o.switchMap)(t=>this._repository.update(t)))}createAction(e){return this._repository.get(e.Intent).pipe((0,o.map)(t=>(t.Actions.push(e),t)),(0,o.switchMap)(t=>this._repository.update(t)))}getActionByUId(e){return this._loadIntentUIdByActionUId(e).pipe((0,o.switchMap)(t=>t?this._repository.get(t).pipe((0,o.map)(r=>r.Actions.filter(l=>l.Id===e)),(0,o.map)(r=>r[0])):(0,o.of)({})))}getIntentByActionUId(e){return this.getActionByUId(e).pipe((0,o.switchMap)(t=>t?.Intent?this.getIntent(t.Intent):(0,o.of)({})))}updateAction(e){return this._loadIntentUIdByActionUId(e.Id).pipe((0,o.switchMap)(t=>this._repository.get(t).pipe((0,o.switchMap)(r=>this._applyActionToIntent(r,e)?this._repository.update(r):(0,o.of)({})))))}generateActionCode(e=null){return this._actionCodeGenerator.generate(e)}}p.\u0275fac=function(e){return new(e||p)},p.\u0275prov=i.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac});const C={UId:"uid",Title:"Test intent",Code:"CopilotIntent_test",Prompt:null,Status:"InDevelopment",Actions:[{Code:"ActionCode",Id:"ActionIdentifier",UId:"ActionUid",Name:"ActionName",Description:"ActionDescription",Intent:"uid",ActionType:"actionSchemaTypeUIdA",Params:'{"processSchemaUId":"ProcessSchemaUId"}'}],ExtendParent:!1};var h=n(31134);const y=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"The process schema saved successfully, but validation errors prevent it from running."}}'),S=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"\u0421\u0445\u0435\u043C\u0430 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0430, \u043E\u0434\u043D\u0430\u043A\u043E \u043E\u0448\u0438\u0431\u043A\u0438 \u0432\u0430\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0443\u044E\u0442 \u0435\u0433\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0443."}}'),A=JSON.parse('{"Dialog":{"ProcessSchemaSavedWithValidationError":"\u0421\u0445\u0435\u043C\u0443 \u043F\u0440\u043E\u0446\u0435\u0441\u0443 \u0443\u0441\u043F\u0456\u0448\u043D\u043E \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E, \u0430\u043B\u0435 \u043F\u043E\u043C\u0438\u043B\u043A\u0438 \u0432\u0430\u043B\u0456\u0434\u0430\u0446\u0456\u0457 \u043F\u0435\u0440\u0435\u0448\u043A\u043E\u0434\u0436\u0430\u044E\u0442\u044C \u0439\u043E\u0433\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0443."}}'),g={"en-US":y,"uk-UA":A,"ru-RU":S};class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=i.\u0275\u0275defineNgModule({type:c}),c.\u0275inj=i.\u0275\u0275defineInjector({imports:[h.CommonModule,u.CrtLibTranslateModule.forRoot({i18n:g})]}),function(){(typeof ngJitMode>"u"||ngJitMode)&&i.\u0275\u0275setNgModuleScope(c,{imports:[h.CommonModule,u.CrtLibTranslateModule]})}()}}]);
