(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[9650,7125],{39650:(d,i,e)=>{e.r(i),e.d(i,{EntitySchemaStructureExplorerDataProviderService:()=>r});var m=e(49475),c=e(41156),o=e(27049),s=e(94450);class r extends c.BaseEntitySchemaStructureExplorerDataProvider{constructor(t){super(),this._entitySchemaService=t,this.name=c.StructureExplorerConst.Providers.ENTITY_SCHEMA}getEntitySchema(t){return this._entitySchemaService.getEntitySchemaByUId(t).pipe((0,o.map)(n=>n.entitySchema))}getColumnsInformationByMetaPath(t,n){return this._entitySchemaService.getEntitySchemaColumnsInformationByMetaPath(t,n).pipe((0,o.map)(S=>S.map(({column:u,columnMetaPath:p,columnPath:v,columnCaptionPath:y})=>{const a=this.mapFunction(u);return a.metaPath=p,a.columnPath=v,a.metaPathCaption=y,a})))}}r.\u0275fac=function(t){return new(t||r)(s.\u0275\u0275inject(m.EntitySchemaService))},r.\u0275prov=s.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac})}}]);
