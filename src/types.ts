export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      as_groups: {
        Row: {
          created_at: string | null;
          created_by: string | null;
          id: string;
          name: string;
        };
        Insert: {
          created_at?: string | null;
          created_by?: string | null;
          id?: string;
          name: string;
        };
        Update: {
          created_at?: string | null;
          created_by?: string | null;
          id?: string;
          name?: string;
        };
        Relationships: [];
      };
      as_members: {
        Row: {
          group_id: string | null;
          id: string;
          name: string;
          selected_by: string | null;
        };
        Insert: {
          group_id?: string | null;
          id?: string;
          name: string;
          selected_by?: string | null;
        };
        Update: {
          group_id?: string | null;
          id?: string;
          name?: string;
          selected_by?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "as_members_group_id_fkey";
            columns: ["group_id"];
            referencedRelation: "as_groups";
            referencedColumns: ["id"];
          },
        ];
      };
      pf_visits: {
        Row: {
          created_at: string;
          id: number;
          ip: string | null;
          url: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          ip?: string | null;
          url?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          ip?: string | null;
          url?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      count_visits: {
        Args: {
          url: string;
        };
        Returns: undefined;
      };
      draw_name: {
        Args: {
          groupid: string;
          username: string;
        };
        Returns: string;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
