(self.webpackChunkapp_studio_enterprise_analytics_dashboard=self.webpackChunkapp_studio_enterprise_analytics_dashboard||[]).push([[9443,982],{59443:(A,f,M)=>{var T;M.r(f),M.d(f,{MAT_MOMENT_DATETIME_FORMATS:()=>E,MatMomentDatetimeModule:()=>d,MomentDatetimeAdapter:()=>r,MomentDatetimeModule:()=>o});var n=M(94450),i=M(93784),_=M(38182),u=M(66385),h=M(42378);const D=h;function p(s,e){const t=Array(s);for(let a=0;a<s;a++)t[a]=e(a);return t}class r extends _.DatetimeAdapter{constructor(e,t,a){super(a),this._useUtc=!1,this.setLocale(e||D.locale()),this._useUtc=t.useUtc}setLocale(e){super.setLocale(e);const t=D.localeData();this._localeData={firstDayOfWeek:t.firstDayOfWeek(),longMonths:t.months(),shortMonths:t.monthsShort(),dates:p(31,a=>super.createDate(2017,0,a+1).format("D")),hours:p(24,a=>this.createDatetime(2017,0,1,a,0).format("H")),minutes:p(60,a=>this.createDatetime(2017,0,1,1,a).format("m")),longDaysOfWeek:t.weekdays(),shortDaysOfWeek:t.weekdaysShort(),narrowDaysOfWeek:t.weekdaysMin()}}getHour(e){return super.clone(e).hour()}getMinute(e){return super.clone(e).minute()}isInNextMonth(e,t){const a=this.getDateInNextMonth(e);return super.sameMonthAndYear(a,t)}createDatetime(e,t,a,l,m){if(t<0||t>11)throw Error(`Invalid month index "${t}". Month index has to be between 0 and 11.`);if(a<1)throw Error(`Invalid date "${a}". Date has to be greater than 0.`);if(l<0||l>23)throw Error(`Invalid hour "${l}". Hour has to be between 0 and 23.`);if(m<0||m>59)throw Error(`Invalid minute "${m}". Minute has to be between 0 and 59.`);let c=D({year:e,month:t,date:a,hour:l,minute:m});if(this._useUtc&&(c=c.utc()),!c.isValid())throw Error(`Invalid date "${a}" for month with index "${t}".`);return c}getFirstDateOfMonth(e){return super.clone(e).startOf("month")}getHourNames(){return this._localeData.hours}getMinuteNames(){return this._localeData.minutes}addCalendarHours(e,t){return super.clone(e).add({hours:t})}addCalendarMinutes(e,t){return super.clone(e).add({minutes:t})}deserialize(e){return this._delegate.deserialize(e)}getDateInNextMonth(e){return super.clone(e).date(1).add({month:1})}}r.\u0275fac=function(e){return new(e||r)(n.\u0275\u0275inject(u.MAT_DATE_LOCALE,8),n.\u0275\u0275inject(i.MAT_MOMENT_DATE_ADAPTER_OPTIONS,8),n.\u0275\u0275inject(u.DateAdapter))},r.\u0275prov=n.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(r,[{type:n.Injectable}],function(){return[{type:void 0,decorators:[{type:n.Optional},{type:n.Inject,args:[u.MAT_DATE_LOCALE]}]},{type:void 0,decorators:[{type:n.Optional},{type:n.Inject,args:[i.MAT_MOMENT_DATE_ADAPTER_OPTIONS]}]},{type:u.DateAdapter}]},null)}();const E={parse:{dateInput:"L",monthInput:"MMMM",timeInput:"LT",datetimeInput:"L LT"},display:{dateInput:"L",monthInput:"MMMM",datetimeInput:"L LT",timeInput:"LT",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY",popupHeaderDateLabel:"ddd, DD MMM"}};class o{}o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=n.\u0275\u0275defineInjector({providers:[{provide:_.DatetimeAdapter,useClass:r}],imports:[i.MomentDateModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(o,[{type:n.NgModule,args:[{imports:[i.MomentDateModule],providers:[{provide:_.DatetimeAdapter,useClass:r}]}]}],null,null)}();class d{}d.\u0275fac=function(e){return new(e||d)},d.\u0275mod=n.\u0275\u0275defineNgModule({type:d}),d.\u0275inj=n.\u0275\u0275defineInjector({providers:[{provide:_.MAT_DATETIME_FORMATS,useValue:E}],imports:[o,i.MatMomentDateModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(d,[{type:n.NgModule,args:[{imports:[o,i.MatMomentDateModule],providers:[{provide:_.MAT_DATETIME_FORMATS,useValue:E}]}]}],null,null)}()}}]);
