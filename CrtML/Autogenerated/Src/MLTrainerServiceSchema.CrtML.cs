﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MLTrainerServiceSchema

	/// <exclude/>
	public class MLTrainerServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MLTrainerServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MLTrainerServiceSchema(MLTrainerServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("7ba4de64-5ce9-47bd-a8ed-22b85d9d1324");
			Name = "MLTrainerService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("73704ec6-562c-4400-8a4a-17477a18625f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,237,89,91,111,34,199,18,126,118,164,252,135,14,137,148,65,66,227,119,99,136,118,189,246,138,8,236,61,134,61,126,176,162,85,51,83,64,39,51,211,108,119,15,54,199,242,127,63,213,183,185,99,236,85,242,176,71,231,5,152,158,174,174,251,87,85,77,70,83,144,91,26,1,89,128,16,84,242,149,10,47,120,182,98,235,92,80,197,120,22,206,166,63,254,240,244,227,15,39,185,100,217,154,204,247,82,65,58,108,60,35,73,146,64,164,247,203,240,35,100,32,88,212,218,51,101,217,215,214,226,109,158,41,150,66,56,71,18,154,176,255,24,158,173,93,248,118,199,34,152,241,24,146,23,95,134,239,80,136,221,241,67,194,59,88,150,27,214,9,95,210,228,236,236,130,167,41,106,60,229,235,53,46,151,239,175,225,65,161,102,218,54,191,203,234,201,85,155,105,210,238,55,2,194,15,239,15,190,186,162,145,226,130,129,236,218,49,155,134,147,76,129,88,161,135,58,55,160,30,37,111,124,255,179,128,53,42,79,46,18,42,229,25,153,77,23,130,50,244,135,83,222,236,57,61,61,37,231,50,79,83,42,246,99,247,140,231,144,20,212,134,199,146,172,184,32,41,141,54,72,71,18,160,34,211,44,149,62,7,127,132,254,128,211,198,9,231,18,128,38,146,147,72,192,106,212,235,18,49,124,79,37,56,73,122,228,84,83,222,187,71,140,57,228,16,169,63,244,218,59,185,189,6,133,52,91,244,228,146,37,76,237,111,225,107,206,4,164,144,41,25,84,31,180,59,201,136,28,33,209,187,66,183,16,247,53,147,109,190,76,88,68,34,109,167,150,153,200,25,169,136,58,240,17,164,53,153,131,148,104,224,185,162,10,194,201,45,208,248,38,75,246,213,85,60,252,201,216,185,233,140,91,204,52,12,35,235,132,150,23,204,194,45,108,5,72,45,177,177,167,179,101,83,188,222,233,152,168,253,22,98,34,220,145,3,242,176,97,209,6,221,182,39,144,69,116,43,243,4,69,33,240,24,193,86,103,3,137,65,81,150,72,207,72,251,88,58,101,163,132,33,199,1,161,59,206,98,237,107,169,104,22,83,17,147,187,139,43,189,171,204,204,176,144,188,234,254,147,251,15,84,209,170,11,235,230,117,136,224,245,63,95,24,34,103,164,194,74,159,4,223,226,54,5,104,170,79,134,220,109,104,89,202,172,124,4,52,146,209,2,191,213,6,208,22,42,23,25,217,209,36,7,194,87,68,230,17,38,141,92,229,73,161,169,141,112,18,209,36,9,203,163,107,170,88,93,102,144,46,65,4,215,136,142,24,92,61,115,102,111,64,38,210,199,16,174,174,48,218,193,196,82,161,238,130,252,219,112,127,34,107,80,67,45,218,144,60,191,77,139,210,99,218,195,36,67,9,222,36,106,65,191,64,242,87,136,44,149,208,46,191,172,146,253,61,242,99,97,145,116,253,141,210,207,44,241,55,40,224,40,59,117,248,25,178,216,70,155,93,112,235,205,229,127,50,111,191,143,140,245,42,159,181,114,215,154,219,39,240,81,19,94,49,72,98,157,208,66,151,101,103,194,173,125,208,82,43,100,41,16,68,57,130,40,153,96,229,37,95,18,252,24,17,252,57,163,25,58,82,96,67,161,116,73,198,48,65,139,246,250,195,234,17,37,237,108,106,42,251,148,211,24,4,249,146,86,30,70,214,147,182,210,238,245,121,231,245,237,227,160,63,60,18,10,168,188,18,185,62,160,1,79,157,241,48,201,152,50,62,0,73,40,201,224,129,176,76,251,40,50,200,164,243,228,72,152,24,55,28,240,157,243,84,147,44,232,147,215,120,164,161,137,224,10,27,55,136,255,113,101,200,3,83,27,18,229,82,241,180,100,85,208,77,28,33,6,151,243,187,166,244,140,14,88,194,172,108,169,160,169,1,202,81,207,120,189,121,206,120,129,34,154,55,182,139,193,136,248,147,47,195,243,83,67,105,77,234,205,208,182,106,91,48,210,197,165,143,61,131,218,48,233,189,112,242,165,107,23,134,98,215,242,240,21,126,179,229,81,49,56,148,77,29,130,118,202,48,60,66,52,235,148,123,252,130,82,191,253,70,130,67,234,118,101,94,99,23,102,223,177,244,155,217,214,244,128,230,46,151,237,220,162,75,82,229,49,248,152,179,216,26,125,18,123,223,212,9,108,104,140,106,152,17,234,47,179,233,138,11,47,111,240,25,161,21,137,50,59,234,12,138,99,141,73,79,216,138,4,238,172,17,201,242,36,241,236,78,212,70,240,7,147,57,19,236,35,175,185,186,226,121,22,23,37,43,248,165,103,88,145,140,43,196,121,124,69,150,123,130,98,63,57,6,207,14,245,116,140,224,167,235,116,82,63,14,29,11,157,210,122,199,112,235,242,17,162,28,59,176,118,255,223,206,159,3,133,229,6,163,212,84,158,90,117,185,199,222,121,146,237,248,95,16,88,105,116,181,255,116,51,95,96,133,127,207,227,253,92,237,19,221,1,224,54,87,192,139,213,240,78,208,45,54,187,3,163,187,110,6,64,162,1,69,74,85,141,192,46,153,9,109,80,20,176,151,247,245,171,149,79,215,82,111,128,50,7,64,252,206,151,69,82,119,229,70,136,153,169,27,205,119,73,98,94,203,70,152,244,171,46,122,163,213,253,212,101,170,191,70,218,53,219,129,243,252,155,48,113,18,247,198,147,24,155,6,182,98,232,63,135,219,206,169,27,180,208,134,98,255,198,201,18,156,143,227,26,62,154,67,109,216,73,3,167,216,198,228,137,50,21,188,168,2,133,176,210,78,67,120,130,39,249,78,35,227,222,202,143,115,180,221,240,73,27,4,84,165,97,53,58,87,167,191,94,45,166,60,51,98,98,198,132,71,39,32,185,199,240,98,3,209,95,239,196,58,215,83,235,101,186,85,251,64,59,145,175,2,79,224,128,96,209,228,235,60,98,126,219,45,74,236,61,254,84,222,161,208,47,5,177,21,241,0,206,13,208,197,57,120,40,194,49,74,97,3,27,76,178,136,11,129,91,107,247,70,5,184,97,71,91,224,160,238,237,194,75,33,184,8,224,49,116,70,117,231,121,84,211,40,89,152,205,209,157,212,199,147,17,113,70,57,194,186,63,104,146,251,225,96,68,74,254,118,207,115,67,171,99,242,255,210,51,223,132,71,81,46,244,112,130,237,124,2,237,155,4,61,107,158,145,167,146,221,51,198,53,30,57,172,84,134,14,108,239,178,130,157,45,71,85,79,135,11,62,55,13,121,208,183,103,28,197,154,127,229,160,47,155,8,166,95,78,147,23,16,199,166,246,247,128,59,216,97,168,255,131,207,11,224,163,125,190,159,162,149,124,210,155,205,127,15,16,237,168,235,135,93,51,53,106,246,95,245,30,201,207,93,46,75,138,134,98,68,234,47,194,11,156,236,234,117,56,168,176,25,144,174,26,219,70,197,251,63,116,79,53,201,16,221,214,24,58,210,44,74,228,230,82,170,69,16,98,115,134,63,4,142,2,3,210,126,251,129,103,208,181,110,176,160,146,129,166,23,252,169,131,181,190,92,199,177,62,147,85,109,194,11,13,33,153,77,233,126,129,54,69,63,233,118,85,217,162,139,38,210,250,165,36,176,206,40,32,206,119,149,69,23,105,146,205,166,206,211,33,246,207,3,178,204,21,169,243,34,76,18,208,204,122,14,182,170,72,152,214,97,188,218,236,102,59,28,27,227,155,229,159,232,37,115,122,217,242,54,168,158,29,28,58,239,127,222,198,222,251,54,86,187,250,223,151,48,242,144,122,223,14,152,44,91,153,12,213,37,129,46,57,218,136,165,91,46,112,60,197,158,29,99,53,71,39,219,171,243,18,220,30,52,184,89,88,35,113,110,238,169,44,144,154,197,2,170,94,9,168,170,230,147,46,92,237,0,193,3,88,122,107,191,139,235,40,59,157,39,60,50,115,126,76,40,206,32,254,30,9,28,74,120,53,11,197,113,46,175,163,172,97,81,222,96,185,201,190,107,228,233,149,183,11,250,222,16,35,38,195,10,218,180,140,149,202,154,140,153,40,44,39,36,220,133,49,66,151,84,86,111,7,10,230,135,229,57,46,195,33,109,107,49,128,194,164,76,154,191,99,208,233,204,134,186,9,0,43,111,219,185,117,217,254,39,43,146,45,207,245,50,212,188,65,156,50,169,206,167,62,210,174,172,149,239,128,173,55,106,60,214,213,195,45,77,10,187,75,91,170,234,241,239,81,175,190,250,66,225,106,144,87,234,151,4,253,231,37,202,31,204,205,175,190,129,22,251,187,57,204,233,191,58,101,208,107,203,136,254,233,185,26,134,201,105,209,229,36,188,18,60,13,252,165,152,99,94,188,188,219,128,128,160,167,183,107,52,255,138,13,89,128,199,231,105,22,150,166,237,22,123,201,121,226,67,236,242,17,45,170,139,154,213,35,116,227,228,28,67,51,129,91,192,22,57,14,132,249,34,163,177,81,205,129,101,91,9,211,93,234,157,250,170,198,138,98,16,213,95,251,118,42,238,219,236,66,251,131,167,104,55,142,131,150,153,176,230,104,60,181,174,48,42,85,110,84,126,170,105,89,212,58,119,237,95,173,118,139,54,116,160,44,191,62,213,45,248,252,107,13,71,124,69,59,92,208,142,93,222,212,183,219,10,101,98,220,150,47,139,232,97,203,110,99,15,48,21,83,182,6,183,246,22,212,84,39,36,70,228,14,132,10,63,64,129,210,182,204,158,191,134,245,56,112,181,218,131,84,219,171,205,41,175,115,30,58,234,132,14,227,215,192,181,94,86,117,123,194,252,72,71,236,250,97,255,180,198,40,227,163,150,95,42,219,158,139,160,106,219,21,19,240,58,79,146,27,209,108,170,190,69,199,152,131,13,177,200,118,123,29,205,67,221,12,111,137,194,151,35,79,39,209,170,138,169,58,98,58,212,117,232,182,98,30,19,186,17,25,55,244,251,216,52,233,168,242,77,152,75,223,203,199,109,66,51,163,211,103,197,18,25,250,19,220,1,205,123,176,65,67,174,65,81,34,11,60,24,184,63,248,134,205,54,239,109,53,228,137,248,54,176,97,137,90,183,215,184,45,181,171,245,69,92,251,47,188,169,110,27,33,35,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("7ba4de64-5ce9-47bd-a8ed-22b85d9d1324"));
		}

		#endregion

	}

	#endregion

}

