﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MacrosValueFormatterSchema

	/// <exclude/>
	public class MacrosValueFormatterSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MacrosValueFormatterSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MacrosValueFormatterSchema(MacrosValueFormatterSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9e7e89dd-f5d2-4d34-a996-84b7bea8bd6f");
			Name = "MacrosValueFormatter";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d9c4378b-4458-41ff-9d84-e4b071fcce18");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,83,77,111,218,64,16,61,59,82,254,195,212,149,34,144,42,251,222,96,95,128,86,28,210,70,130,36,231,197,25,195,86,182,215,154,221,69,66,36,255,189,251,97,19,219,64,194,197,242,206,206,188,55,251,230,77,197,74,148,53,203,16,86,72,196,164,200,85,52,21,85,206,55,154,152,226,162,138,158,20,47,228,237,205,225,246,38,208,146,87,27,88,238,165,194,242,254,120,238,22,18,94,138,71,243,74,113,197,81,154,4,147,242,157,112,99,208,97,90,48,41,127,194,3,203,72,200,103,86,104,252,37,168,100,74,33,185,188,56,142,97,34,117,89,50,218,167,205,121,134,50,35,190,70,9,104,49,247,144,137,66,151,21,236,108,57,228,109,125,212,150,199,157,250,90,175,11,158,65,102,105,47,176,6,7,199,252,209,162,168,164,34,157,41,65,166,211,71,7,224,51,134,205,185,64,39,221,246,98,18,16,33,35,204,147,240,28,95,24,167,209,17,43,30,130,77,106,70,172,132,202,76,41,9,181,68,50,232,21,102,118,48,97,186,48,68,172,50,163,19,121,151,229,169,159,102,240,39,177,131,113,168,141,0,231,90,25,245,43,161,207,55,6,107,129,32,24,36,37,131,52,59,255,224,189,81,16,171,87,47,98,95,209,71,18,53,146,53,195,53,122,106,34,51,103,71,99,38,221,242,92,16,173,121,222,160,201,193,241,0,27,84,247,32,237,231,139,86,31,80,109,197,171,237,147,248,142,41,244,183,181,63,192,90,136,2,22,114,94,214,106,239,180,28,137,245,63,67,226,173,216,42,70,168,52,181,246,76,18,168,116,81,192,219,27,140,124,132,75,48,134,177,27,115,119,215,252,69,11,249,199,36,253,165,151,45,87,184,180,251,57,26,249,171,177,135,30,95,163,243,71,243,95,137,60,195,156,233,66,1,47,235,2,75,35,183,219,125,107,172,79,86,204,54,122,165,117,93,93,152,46,133,38,227,215,51,152,61,143,158,148,251,204,48,157,251,66,153,109,177,100,77,253,105,165,215,91,166,147,184,253,235,56,99,199,73,105,86,180,146,255,70,181,116,127,126,124,158,96,234,128,93,164,33,121,238,206,115,199,168,237,61,233,222,71,190,206,77,38,224,57,140,122,206,232,38,122,184,22,175,53,72,51,123,87,227,65,222,143,80,13,223,183,198,61,198,41,205,235,103,76,49,7,183,218,215,206,75,38,128,43,94,98,239,98,72,117,174,56,50,90,248,23,204,184,172,11,214,235,251,7,156,246,223,237,177,193,53,75,182,51,155,29,173,132,87,245,204,171,63,49,174,143,246,131,38,246,31,5,130,32,247,164,6,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9e7e89dd-f5d2-4d34-a996-84b7bea8bd6f"));
		}

		#endregion

	}

	#endregion

}

