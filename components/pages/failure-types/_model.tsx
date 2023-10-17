export interface IFailureType {
  id?: number;
  failureName?: string;
  period?: number;
  timeInterval?: number;
  soundAnomalyMultiplier?: number;
  vibrationAnomalyMultiplier?: number;
  temperatureAnomalyMultiplier?: number;
}

export interface IFailureTypesResult {
  failure_types: IFailureType[];
  failure_types_aggregate: {
    aggregate: { count: number };
  };
}
