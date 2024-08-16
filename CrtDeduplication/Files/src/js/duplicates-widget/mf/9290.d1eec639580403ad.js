(self.webpackChunkapp_studio_enterprise_duplicates_widget=self.webpackChunkapp_studio_enterprise_duplicates_widget||[]).push([[9290,6288],{89290:(C,x,o)=>{o.r(x),o.d(x,{EntityRecordColumnType:()=>g,EntityRecordPrimaryValueType:()=>u,ExpressionEngineType:()=>l,ExpressionSchema:()=>f,ExpressionSchemaEntityRecordPrimaryValueConfig:()=>m,ExpressionSchemaModule:()=>n,ExpressionSchemaParameter:()=>d,ExpressionSchemaRecordVariableConfig:()=>h,ExpressionSchemaVariable:()=>y,ExpressionSchemaVariableConfig:()=>i,ExpressionVariableAggregationType:()=>T,ExpressionVariableType:()=>p,RecordExpressionVariableType:()=>c});var E=o(31134),V=o(94450);class n{}n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=V.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=V.\u0275\u0275defineInjector({imports:[E.CommonModule]}),function(){(typeof ngJitMode>"u"||ngJitMode)&&V.\u0275\u0275setNgModuleScope(n,{imports:[E.CommonModule]})}();var s=o(75378);class M{constructor(e){this.uId=e?.uId??(0,s.generateGuid)(),this.name=e?.name??this.getDefaultName()}getDefaultName(){return this._defaultName}fromMetadata(e){const a=e??{};this.uId=a.uId??(0,s.generateGuid)(),this.name=a.name??this.getDefaultName()}toMetadata(){return{typeName:this._typeName,uId:this.uId,name:this.name}}}class d extends M{get _typeName(){return"Terrasoft.Core.ExpressionEngine.Schema.Parameters.ExpressionSchemaParameter"}get _defaultName(){return"Parameter"}constructor(e){super(e),this.dataValueType=e?.dataValueType??s.DataValueType.Text}fromMetadata(e){const a=e??{};super.fromMetadata(a),this.dataValueType=s.DataValueType[a.dataValueType??"Text"]}clone(){return new d(this)}toMetadata(){if(this.dataValueType==null)throw new Error("Data value type not specified");return{...super.toMetadata(),dataValueType:s.DataValueType[this.dataValueType]}}}class S{static create(e){switch(e){case"Terrasoft.Core.ExpressionEngine.Schema.Parameters.ExpressionSchemaParameter":return new d;default:throw new Error(`ExpressionSchemaParameter with type '${e}' not found`)}}static createFromMetadata(e){const a=e.typeName,r=this.create(a);return r.fromMetadata(e),r}}class i extends M{get _typeName(){return"Terrasoft.Core.ExpressionEngine.Schema.Variables.ExpressionSchemaVariableConfig"}get _defaultName(){return"VariableConfig"}constructor(e){super(e),this.value=e?.value??""}fromMetadata(e){const a=e??{};super.fromMetadata(a),this.value=a.value??""}clone(){return new i(this)}toMetadata(){return{...super.toMetadata(),value:this.value}}}var g;(function(t){t.Column="Column",t.AggregationColumn="AggregationColumn"})(g||(g={}));var u;(function(t){t.Constant="Constant",t.Parameter="Parameter",t.SysSetting="SysSetting",t.SysValue="SysValue"})(u||(u={}));var l;(function(t){t.PowerFx="PowerFx"})(l||(l={}));var p;(function(t){t.SysSetting="SysSetting",t.SysValue="SysValue",t.Parameter="Parameter",t.Record="Record",t.Collection="Collection",t.EsqAggregation="EsqAggregation"})(p||(p={}));var c;(function(t){t.Entity="Entity",t.Custom="Custom"})(c||(c={}));var T;(function(t){t.None="None",t.Count="Count",t.Sum="Sum",t.Avg="Avg",t.Min="Min",t.Max="Max",t.TopOne="TopOne"})(T||(T={}));class m{constructor(e){this.type=e?.type??u.Constant,this.value=e?.value??""}fromMetadata(e){const a=e??{};this.type=a.type??u.Constant,this.value=a.value??""}clone(){return new m(this)}toMetadata(){if(!this.type)throw new Error("Type not specified");return{type:this.type,value:this.value}}}class h extends i{get _typeName(){return"Terrasoft.Core.ExpressionEngine.Schema.Variables.ExpressionSchemaRecordVariableConfig"}get _defaultName(){return"VariableConfig"}constructor(e){super(e),this.recordType=e?.recordType??c.Entity,this.primaryValue=e?.primaryValue.clone()??new m,this.fieldValues=e?.fieldValues,this.columns=e?.columns??[]}fromMetadata(e){const a=e??{};super.fromMetadata(a),this.columns=a.columns??[],this.recordType=a.recordType??c.Entity;const r=new m;a.primaryValue&&r.fromMetadata(a.primaryValue),this.primaryValue=r,this.fieldValues=a.fieldValues}clone(){return new h(this)}toMetadata(){if(!this.recordType)throw new Error("Record type not specified");return{...super.toMetadata(),recordType:this.recordType,primaryValue:this.primaryValue.toMetadata(),fieldValues:this.fieldValues,columns:this.columns}}}class w{static create(e){switch(e){case"Terrasoft.Core.ExpressionEngine.Schema.Variables.ExpressionSchemaVariableConfig":return new i;case"Terrasoft.Core.ExpressionEngine.Schema.Variables.ExpressionSchemaRecordVariableConfig":return new h;default:throw new Error(`ExpressionSchemaVariableConfig with type '${e}' not found`)}}static createFromMetadata(e){const a=e.typeName,r=this.create(a);return r.fromMetadata(e),r}}class y extends M{get _typeName(){return"Terrasoft.Core.ExpressionEngine.Schema.Variables.ExpressionSchemaVariable"}get _defaultName(){return"Variable"}constructor(e){super(e),this.dataValueType=e?.dataValueType??s.DataValueType.Text,this.variableType=e?.variableType??p.Parameter,this.config=e?.config.clone()??new i}fromMetadata(e){const a=e??{};super.fromMetadata(a),this.dataValueType=s.DataValueType[a.dataValueType??"Text"],this.variableType=a.variableType??p.Parameter,this.config=a.config==null?new i:w.createFromMetadata(a.config)}clone(){return new y(this)}toMetadata(){if(this.dataValueType==null)throw new Error("Data value type not specified");if(!this.variableType)throw new Error("Variable type not specified");return{...super.toMetadata(),dataValueType:s.DataValueType[this.dataValueType],variableType:this.variableType,config:this.config.toMetadata()}}}class b{static create(e){switch(e){case"Terrasoft.Core.ExpressionEngine.Schema.Variables.ExpressionSchemaVariable":return new y;default:throw new Error(`ExpressionSchemaVariable with type '${e}' not found`)}}static createFromMetadata(e){const a=e.typeName,r=this.create(a);return r.fromMetadata(e),r}}class f{constructor(e){this.uId=e?.uId??(0,s.generateGuid)(),this.engineType=e?.engineType??l.PowerFx,this.expression=e?.expression??"",this.resultDataValueType=e?.resultDataValueType??s.DataValueType.Text,this.expressionVariables=(e?.expressionVariables??[]).map(a=>a.clone()),this.parameters=(e?.parameters??[]).map(a=>a.clone())}static fromMetadata(e){const a=new f;return a.fromMetadata(e),a}fromMetadata(e){const a=e??{};this.uId=a.uId??(0,s.generateGuid)(),this.engineType=a.engineType??l.PowerFx,this.expression=a.expression??"",this.resultDataValueType=s.DataValueType[a.resultDataValueType??"Text"],this.expressionVariables=(a.expressionVariables??[]).map(r=>b.createFromMetadata(r)),this.parameters=(a.parameters??[]).map(r=>S.createFromMetadata(r))}clone(){return new f(this)}toMetadata(){const e=this.expressionVariables.map(r=>r.toMetadata()),a=this.parameters.map(r=>r.toMetadata());return{uId:this.uId,name:this.name,engineType:this.engineType,expression:this.expression,resultDataValueType:s.DataValueType[this.resultDataValueType],expressionVariables:e,parameters:a}}}}}]);
