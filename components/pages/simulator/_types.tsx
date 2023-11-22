import { IDataset } from './information-modal/_types';

export interface ISimulator {
  id?: number;
  simulatorName: string;
  minExpectedTemperatureValue?: number | string;
  maxExpectedTemperatureValue?: number | string;
  minExpectedSoundValue?: number | string;
  maxExpectedSoundValue?: number | string;
  minExpectedVibrationValue?: number | string;
  maxExpectedVibrationValue?: number | string;
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
