(self.webpackChunkapp_studio_enterprise_pivot_table=self.webpackChunkapp_studio_enterprise_pivot_table||[]).push([[5999],{55999:(E,m,e)=>{e.r(m);var f=e(54514),C=e(31134),l=e(2876),r=e(94450),s=e(49475);const p={production:!0,workspaceBaseUrl:(0,s.getWorkspaceBaseUrl)(),csrfCookieName:"BPMCSRF"};var i=e(77207),v=e(33177),o=e(88042),c=e(21322),u=e(27049);function M(n,a){return()=>(0,c.lastValueFrom)(n.loadCurrentUserInfo().pipe((0,u.map)(d=>d?.userInfo?.cultureInfo?.sysCultureName),(0,u.switchMap)(d=>a.use(d).pipe((0,u.catchError)(()=>(0,c.of)(null))))),{defaultValue:null})}class t{constructor(a){this._customElementsBootstrapService=a}ngDoBootstrap(){this._customElementsBootstrapService.defineComponent("ts-pivot-table",o.PivotTableComponent),this._customElementsBootstrapService.defineComponent("ts-pivot-table-designer",o.PivotTableDesignerComponent)}}t.\u0275fac=function(a){return new(a||t)(r.\u0275\u0275inject(v.CustomElementsBootstrapService))},t.\u0275mod=r.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=r.\u0275\u0275defineInjector({providers:[{provide:r.APP_INITIALIZER,useFactory:M,deps:[s.UserInfoService,i.TranslateService],multi:!0},s.USER_INFO_PROVIDER,s.DATA_SERVICE_URI_PROVIDER,v.CustomEventService,{provide:s.GET_TRANSLATIONS_EVENT_NAME,useValue:"getPivotTableResources"},{provide:C.APP_BASE_HREF,useFactory:()=>p.workspaceBaseUrl},{provide:o.CSRF_COOKIE_NAME,useValue:p.csrfCookieName}],imports:[o.PivotTableDesignerModule,o.PivotTableModule,l.HttpClientModule,l.HttpClientXsrfModule.withOptions({cookieName:"BPMCSRF",headerName:"BPMCSRF"}),i.TranslateModule.forRoot({defaultLanguage:"en-US",loader:{provide:i.TranslateLoader,useClass:s.CustomEventTranslateLoader}})]}),function(){(typeof ngJitMode>"u"||ngJitMode)&&r.\u0275\u0275setNgModuleScope(t,{imports:[o.PivotTableDesignerModule,o.PivotTableModule,l.HttpClientModule,l.HttpClientXsrfModule,i.TranslateModule]})}(),f.platformBrowser().bootstrapModule(t).catch(n=>console.error(n))}}]);
