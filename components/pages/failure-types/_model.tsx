import { GridSortDirection } from '@mui/x-data-grid';

export interface IFailureType {
  id?: number;
  failureName?: string;
  period?: number;
  timeInterval?: number;
  soundAnomalyMultiplier?: number;
  vibrationAnomalyMultiplier?: number;
  temperatureAnomalyMultiplier?: number;
}

export interface IFailureVarieble {
  offset?: number;
  limit?: number;
  where?: Record<string, any>;
  order_by?: [{ [x: string]: GridSortDirection }];
}

export interface IResultData {
  failure_types: IFailureType[];
  failure_types_aggregate: {
    aggregate: { count: number };
  };
}
