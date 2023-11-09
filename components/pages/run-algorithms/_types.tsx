import { IAlgorithm } from '../algorithms/_types';

export interface IRunAlgorithmRequest {
  datasetId: number;
  algorithmsIds: number[];
  isRealDataset: boolean;
}

export interface IRunAlgorithm {
  algorithmId: number;
  simulatorId?: number;
  realDatasetId?: number;
}

export interface IRunAlgorithmVariables {
  algorithm_settings: IRunAlgorithm[];
}

export interface IGroupedDataset {
  id: number | string;
  simulatorName?: string;
  datasetName?: string;
  __typename?: string;
}
export interface IDatasets {
  simulators: IGroupedDataset[];
  real_datasets: IGroupedDataset[];
}

export interface IGetAlgorithm {
  algorithms: IAlgorithm[];
}
