export interface FabricFields {
    "Brand / Source": string;
    "Description": string;
    "Print": string;
    "Contents": string;
    "Width (in)": number;
    "Yards": number;
    "Main color": string;
    "Weight": string;
    "Type": string;
  }
  
  export interface FabricRecord {
    id: string;
    createdTime: string;
    fields: FabricFields;
  }
  