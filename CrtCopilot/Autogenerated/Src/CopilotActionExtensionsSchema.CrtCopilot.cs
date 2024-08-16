﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotActionExtensionsSchema

	/// <exclude/>
	public class CopilotActionExtensionsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotActionExtensionsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotActionExtensionsSchema(CopilotActionExtensionsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("86e8b718-e7d5-4838-919a-598767358602");
			Name = "CopilotActionExtensions";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,213,87,223,111,219,54,16,126,86,129,254,15,132,87,32,10,234,42,67,49,236,33,157,59,180,73,19,24,200,210,32,118,215,135,97,8,24,233,28,113,144,73,149,164,210,24,65,254,247,221,81,148,68,217,178,147,20,123,25,144,216,210,241,120,63,63,126,60,75,190,4,83,242,20,216,28,180,230,70,45,108,114,164,228,66,220,84,154,91,161,36,190,149,162,80,246,229,139,251,151,47,162,202,8,121,195,102,43,99,97,249,110,237,29,53,139,2,82,218,100,146,83,144,160,69,186,161,115,38,228,183,78,24,250,92,46,149,28,94,113,254,119,44,37,127,128,229,25,183,124,88,71,195,144,252,147,196,240,242,37,72,155,76,165,5,189,192,26,152,228,40,231,22,67,41,11,160,52,112,31,238,20,180,44,121,193,140,197,138,164,44,45,184,49,204,251,254,224,242,253,116,103,65,26,74,28,245,239,221,174,232,39,13,55,40,65,69,137,27,165,53,135,236,66,139,91,110,161,94,47,235,23,150,210,58,67,39,108,150,43,109,103,86,99,160,103,32,111,108,206,38,236,237,219,119,222,28,200,172,182,216,55,127,34,160,200,182,217,246,17,107,224,153,146,197,138,157,9,99,127,51,206,195,123,118,101,92,75,234,12,206,9,7,232,79,194,247,190,22,117,61,138,70,151,96,84,113,11,152,140,133,59,59,26,179,209,49,58,56,22,139,5,61,159,130,61,170,180,198,98,126,49,160,167,114,161,250,82,210,157,139,37,140,200,216,195,35,25,97,55,115,245,88,74,117,120,108,174,130,162,197,167,149,200,216,13,126,236,251,176,111,185,102,215,220,192,175,191,184,165,9,53,227,22,180,77,230,234,163,19,251,141,180,135,100,43,11,31,16,32,171,120,127,223,7,25,29,28,176,75,40,11,58,33,95,46,207,88,37,23,90,96,224,88,204,52,231,154,167,136,13,227,20,123,126,186,151,196,239,142,247,94,239,141,217,222,155,189,253,78,114,64,146,171,189,190,175,165,186,5,102,115,252,215,92,20,148,228,100,226,86,53,216,74,203,208,244,172,186,174,235,16,255,60,14,229,30,61,111,216,91,50,141,21,31,44,161,11,245,68,171,101,88,66,95,87,252,106,106,136,143,152,16,126,118,113,95,81,220,7,97,38,111,72,242,122,175,118,87,151,189,169,101,80,117,114,214,171,59,217,126,205,70,147,201,200,239,244,57,18,10,41,188,184,181,178,43,17,31,243,137,210,75,110,231,74,21,4,230,38,19,137,207,227,58,215,0,24,222,207,230,17,32,242,179,92,72,19,211,198,125,246,187,51,192,14,217,171,209,61,61,61,92,221,247,49,71,70,31,70,77,116,81,180,173,208,120,24,190,76,51,170,192,122,132,214,191,135,160,197,29,129,19,44,97,163,20,244,188,21,181,237,222,32,144,126,85,215,123,221,119,178,171,194,23,90,149,216,192,213,49,44,132,20,84,44,230,30,129,184,82,25,97,225,243,245,63,72,253,196,28,148,94,167,23,187,0,162,169,167,203,11,60,50,75,192,51,67,148,77,60,193,202,117,73,88,134,178,246,43,90,106,58,22,174,85,92,175,60,65,141,7,98,123,31,251,188,23,200,253,60,205,89,188,221,125,67,238,67,43,155,177,37,83,68,203,69,27,84,19,106,212,197,249,215,86,131,9,245,234,111,204,99,187,198,92,81,241,156,188,73,193,97,42,234,49,178,134,111,149,208,144,93,132,197,121,44,212,228,107,14,26,98,167,198,38,239,107,253,100,106,46,189,177,253,58,145,100,6,116,133,175,235,57,120,98,120,20,71,28,28,114,229,186,30,160,98,50,208,142,164,134,74,141,144,184,43,213,120,32,147,49,243,5,221,72,231,24,76,170,69,73,6,199,76,86,69,209,199,246,86,183,53,159,175,7,250,76,176,135,141,177,185,48,236,7,240,108,190,11,75,88,28,72,13,71,151,63,121,81,193,124,85,182,44,16,165,72,148,56,175,220,217,222,50,187,58,12,150,137,89,118,44,55,215,238,176,202,163,165,243,52,177,179,23,190,11,181,191,147,66,241,45,225,62,234,236,188,90,94,131,126,134,51,154,218,110,64,255,160,59,191,251,25,254,62,34,2,128,203,31,244,231,119,63,195,31,97,252,233,197,43,138,103,152,30,96,237,221,105,61,149,236,55,193,239,221,102,176,224,85,97,27,179,54,215,234,187,35,244,115,101,167,52,110,211,32,14,217,167,187,20,202,224,218,136,162,87,163,126,100,247,143,28,31,71,85,15,12,143,168,84,150,153,170,44,241,130,131,140,173,192,142,66,74,125,120,234,12,90,93,23,34,245,60,225,158,27,154,232,167,238,41,162,102,7,79,14,132,49,105,103,105,14,75,238,88,191,121,9,70,171,112,0,64,246,92,155,97,194,77,46,179,113,207,78,130,19,133,79,202,155,202,186,142,251,155,166,213,13,192,80,111,17,11,22,7,250,120,25,16,140,62,235,175,57,182,120,70,191,9,113,12,110,216,104,135,225,35,30,24,125,104,239,134,69,37,221,93,221,213,232,99,37,138,12,180,191,202,79,182,173,183,131,205,56,76,199,231,185,185,107,192,17,122,216,234,61,65,168,8,252,177,136,201,37,78,20,222,103,228,217,135,183,214,94,95,134,198,253,160,135,186,0,189,107,137,12,246,174,154,103,66,168,158,76,29,212,241,58,103,188,247,218,52,167,167,219,180,89,105,175,29,8,38,107,6,146,110,237,221,211,0,185,110,210,131,114,67,220,1,243,191,130,194,134,139,77,114,115,19,99,67,15,166,205,54,216,211,94,215,91,230,161,99,156,70,124,127,113,146,105,148,91,105,50,149,101,101,159,62,92,110,112,85,111,168,236,198,199,93,245,217,14,228,15,89,214,186,28,32,127,87,54,79,163,155,171,189,81,115,60,52,62,118,163,97,120,178,255,231,231,111,141,239,81,138,127,255,2,0,86,44,80,4,19,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("86e8b718-e7d5-4838-919a-598767358602"));
		}

		#endregion

	}

	#endregion

}

