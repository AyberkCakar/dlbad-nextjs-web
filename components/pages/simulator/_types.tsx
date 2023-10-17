export interface ISimulator {
  id?: number;
  simulatorName: string;
  result?: string;
}

export interface ISimulatorResult {
  simulators: ISimulator[];
  simulators_aggregate: {
    aggregate: { count: number };
  };
}

export interface ISimulatorParameters {
  simulatorId: number;
  failureTypeId: number;
}

export interface ISimulatorRequest {
  simulator: ISimulator;
  id?: number;
}
