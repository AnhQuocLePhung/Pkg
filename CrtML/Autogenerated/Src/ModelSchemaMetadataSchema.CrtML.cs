﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ModelSchemaMetadataSchema

	/// <exclude/>
	public class ModelSchemaMetadataSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ModelSchemaMetadataSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ModelSchemaMetadataSchema(ModelSchemaMetadataSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("3aafb1e4-7ef7-46d3-9a1c-bf938d74b695");
			Name = "ModelSchemaMetadata";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("73704ec6-562c-4400-8a4a-17477a18625f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,213,88,91,111,219,54,20,126,78,129,254,7,194,125,88,7,100,206,123,147,186,200,226,166,115,231,56,94,108,116,15,195,96,208,210,177,205,133,34,85,94,146,184,65,254,251,14,73,89,190,41,177,104,7,3,246,36,137,226,57,252,190,115,227,33,5,205,64,231,52,1,50,4,165,168,150,19,211,188,144,98,194,166,86,81,195,164,104,94,117,223,190,121,124,251,230,200,106,38,166,100,48,215,6,50,156,194,57,36,238,191,110,126,1,1,138,37,167,155,115,218,140,78,133,212,134,37,122,235,223,141,21,134,101,208,28,160,36,229,236,135,95,106,57,171,7,247,6,85,59,48,95,53,98,232,50,241,29,255,226,255,119,10,166,56,149,92,112,170,245,7,114,37,83,224,131,100,6,25,69,72,54,19,126,210,201,201,9,57,211,54,203,168,154,183,138,239,54,232,68,177,49,104,66,73,226,167,146,123,102,102,76,224,119,74,13,213,96,154,11,209,147,21,217,191,218,248,19,45,98,20,77,204,223,126,0,198,118,58,5,213,102,58,231,116,254,190,241,216,67,35,62,53,126,118,127,115,59,230,44,33,137,131,87,133,238,232,209,35,44,121,244,149,204,65,25,6,72,166,239,101,195,255,77,10,126,224,11,24,77,164,34,218,61,11,18,2,215,110,150,18,171,200,3,244,43,200,198,160,222,59,136,228,35,105,184,233,141,99,210,209,55,240,221,50,5,41,14,26,101,193,131,95,160,215,70,121,47,56,153,71,50,5,115,234,150,60,37,79,145,216,210,96,161,117,140,195,25,43,39,224,27,60,228,24,72,136,195,72,50,6,98,102,64,180,91,151,106,92,3,128,36,10,38,31,27,14,74,227,164,85,200,29,147,177,53,222,125,100,102,51,42,126,81,64,83,58,230,224,87,210,235,75,101,8,64,10,62,199,151,91,212,13,66,3,153,32,208,160,10,49,79,136,153,231,64,26,93,41,111,109,222,32,84,164,164,241,171,148,28,168,104,68,152,182,96,219,171,176,240,132,114,93,105,226,246,82,230,16,75,255,132,47,52,247,233,90,31,111,33,81,27,235,69,152,127,32,78,116,39,40,16,88,112,180,79,140,216,0,46,229,67,94,69,89,251,102,91,118,63,54,46,74,177,32,8,141,129,148,17,151,193,52,212,194,106,30,126,228,142,114,11,173,101,104,174,104,216,18,94,206,173,50,193,134,220,110,250,93,166,205,217,86,49,26,174,169,105,145,245,111,93,101,153,119,32,210,80,184,252,119,24,221,24,220,85,161,215,151,137,169,215,222,42,85,118,175,87,184,95,46,205,155,176,234,21,234,250,225,178,6,182,126,140,84,137,189,28,29,165,68,221,50,127,189,16,216,246,248,62,217,64,213,212,102,32,76,100,50,84,137,189,76,180,148,168,153,0,129,110,139,156,47,228,94,63,194,59,34,183,230,144,22,164,216,5,173,70,34,184,3,102,78,53,97,78,235,190,205,73,97,173,208,163,156,146,161,219,234,240,211,61,119,180,44,158,12,169,236,177,94,189,139,113,244,253,54,92,122,255,156,115,121,143,86,240,49,128,22,83,240,97,185,43,31,147,70,15,125,136,93,167,123,29,194,131,113,207,98,3,199,55,52,11,12,177,191,140,217,190,221,234,181,119,18,111,198,186,91,71,71,164,44,65,68,154,220,207,0,147,69,21,126,213,51,105,121,90,116,64,152,69,203,190,200,245,44,24,6,103,73,75,88,206,207,78,146,150,51,216,74,63,148,74,132,3,205,30,237,97,87,84,146,188,176,10,183,55,195,231,199,65,91,78,21,146,51,184,32,126,48,108,198,145,85,132,69,88,105,138,221,118,25,163,103,86,231,196,219,198,204,168,241,165,36,9,44,66,216,59,228,66,186,15,151,20,81,224,59,129,112,109,236,197,252,215,175,10,215,214,28,88,22,142,49,114,88,50,91,68,204,74,133,200,17,49,115,253,243,97,123,96,128,248,127,72,246,34,201,255,235,196,174,19,1,47,59,183,76,70,127,228,40,42,128,55,244,97,174,235,59,189,122,233,166,74,55,244,43,22,71,205,76,56,206,148,79,165,194,136,203,34,140,58,97,102,183,77,191,94,143,255,113,165,237,146,153,77,155,30,29,61,139,245,18,168,177,10,8,203,114,169,12,117,71,5,111,187,231,26,138,74,120,65,199,104,169,163,18,237,49,249,156,49,211,134,9,181,220,124,243,237,101,21,143,2,81,167,84,22,108,78,150,3,91,244,158,162,35,66,65,34,51,236,75,210,208,139,189,228,163,200,96,185,89,211,236,67,7,61,82,43,110,190,81,197,138,227,0,66,156,160,118,137,104,133,117,198,110,146,207,20,107,18,112,112,221,148,63,94,235,37,206,133,6,44,84,68,227,6,199,38,12,237,30,36,87,116,197,248,52,72,236,14,187,223,168,158,13,192,156,49,97,90,228,178,192,92,119,67,26,108,95,62,20,42,220,253,131,187,119,112,151,7,152,245,150,163,109,194,197,85,240,100,212,33,118,85,60,130,82,216,247,91,232,210,53,5,181,217,253,97,41,103,102,78,48,236,176,158,174,23,225,221,176,131,212,40,170,160,94,121,153,170,178,186,79,142,208,233,171,38,6,157,70,101,195,246,161,238,14,20,167,57,209,236,71,184,84,74,101,226,207,22,36,153,89,113,27,19,221,94,96,84,40,220,109,93,140,237,79,164,93,172,118,225,100,7,136,225,186,192,179,247,165,70,70,31,88,102,179,215,35,228,20,69,178,185,162,15,37,161,253,153,228,74,102,185,41,238,12,28,19,42,72,183,123,21,194,39,130,70,208,83,59,220,187,60,243,33,213,15,203,239,127,187,4,153,63,150,187,141,240,96,14,43,202,118,19,9,37,230,83,201,100,184,130,100,111,58,231,253,14,185,133,185,39,113,157,131,56,239,224,63,117,199,18,136,9,41,236,59,5,101,35,154,179,17,42,171,237,147,107,47,118,158,179,223,17,65,93,10,219,28,220,69,165,191,45,198,247,125,188,192,121,54,242,50,163,170,75,248,157,17,85,117,91,185,71,9,221,40,159,147,173,102,107,143,58,250,76,127,180,163,154,246,202,94,192,200,188,4,96,200,189,84,169,246,145,98,240,96,191,64,24,19,39,168,175,236,252,204,200,235,27,37,210,138,234,52,174,217,4,98,141,34,67,153,47,72,154,63,157,218,11,167,245,25,175,60,127,32,196,61,145,186,67,80,13,231,185,96,243,231,37,119,57,228,108,82,248,207,95,19,97,19,126,240,201,111,137,229,181,207,121,58,226,118,43,198,187,65,32,254,214,219,223,103,181,136,127,212,239,152,214,136,29,122,64,175,91,231,252,105,124,55,195,237,3,124,241,168,32,87,185,183,249,52,141,90,167,56,249,20,143,253,14,202,56,246,47,189,73,9,56,119,30,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("3aafb1e4-7ef7-46d3-9a1c-bf938d74b695"));
		}

		#endregion

	}

	#endregion

}

