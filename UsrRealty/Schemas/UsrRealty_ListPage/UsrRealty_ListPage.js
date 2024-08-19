define("UsrRealty_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealty"
						}
					}
				}
			},
			{
				"operation": "remove",
				"name": "SearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_Items",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"Items"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_SearchValue",
							"SearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1,
							"width": 128.00001525878906
						},
						{
							"id": "5497f2ad-2908-fe74-9a59-3eb53143b084",
							"code": "PDS_UsrType",
							"caption": "#ResourceString(PDS_UsrType)#",
							"dataValueType": 10,
							"width": 114
						},
						{
							"id": "dee237e4-0a6a-1052-99e8-cc39a3dd9316",
							"code": "PDS_UsrPriceUSD",
							"caption": "#ResourceString(PDS_UsrPriceUSD)#",
							"dataValueType": 32
						},
						{
							"id": "24901612-52b0-48ec-e6cf-85e42880613d",
							"code": "PDS_UsrArea",
							"caption": "#ResourceString(PDS_UsrArea)#",
							"dataValueType": 32,
							"width": 119.00000762939453
						},
						{
							"id": "e1b6bc8f-d8dd-390a-7387-0caad9037180",
							"code": "PDS_UsrManager",
							"caption": "#ResourceString(PDS_UsrManager)#",
							"dataValueType": 10,
							"width": 142.00001525878906
						},
						{
							"id": "0a6cc5b5-7713-3a8f-a200-43c04e657168",
							"code": "PDS_UsrCommissionUSD",
							"caption": "#ResourceString(PDS_UsrCommissionUSD)#",
							"dataValueType": 32,
							"width": 166.99305725097656
						}
					]
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrType": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrPriceUSD": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						}
					},
					"PDS_UsrArea": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						}
					},
					"PDS_UsrManager": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrCommissionUSD": {
						"modelConfig": {
							"path": "PDS.UsrCommissionUSD"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						}
					]
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "asc",
							"columnName": "UsrPriceUSD"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrRealty",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrType": {
							"path": "UsrType"
						},
						"UsrPriceUSD": {
							"path": "UsrPriceUSD"
						},
						"UsrArea": {
							"path": "UsrArea"
						},
						"UsrManager": {
							"path": "UsrManager"
						},
						"UsrCommissionUSD": {
							"path": "UsrCommissionUSD"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});