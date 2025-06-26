// Types for Airtable Patterns API Response

export interface Thumbnail {
    url: string;
    width: number;
    height: number;
  }
  
  export interface LineDrawingImage {
    id: string;
    width: number;
    height: number;
    url: string;
    filename: string;
    size: number;
    type: string;
    thumbnails: {
      small: Thumbnail;
      large: Thumbnail;
      full: Thumbnail;
    };
  }
  
  export interface PatternFields {
    Name: string;
    Type?: string;
    Brand?: string;
    Size?: string;
    Notes?: string;
    Yardage?: string;
    Yardage_narrow?: number;
    Yardage_wide?: number;
    Supplies?: string;
    Fabric_type?: string;
    'Line drawing'?: LineDrawingImage[];
  }
  
  export interface PatternRecord {
    id: string;
    createdTime: string;
    fields: PatternFields;
  }
