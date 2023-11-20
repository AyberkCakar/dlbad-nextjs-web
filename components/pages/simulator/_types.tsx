import { IDataset } from './information-modal/_types';

export interface ISimulator {
  id?: number;
  simulatorName: string;
  expectedTemperatureValue?: number | string;
  expectedSoundValue?: number | string;
  expectedVibrationValue?: number | string;
  dataset?: IDataset;
  simulator_parameters?: ISimulatorParameters[];
}

export interface ISimulatorResult {
  simulators: ISimulator[];
  simulators_aggregate: {
    aggregate: { count: number };
  };
}

export interface ISimulatorParameters {
  simulatorId?: number;
  failureTypeId: number;
}

export interface ISimulatorRequest {
  simulator: ISimulator;
  id?: number;
}
