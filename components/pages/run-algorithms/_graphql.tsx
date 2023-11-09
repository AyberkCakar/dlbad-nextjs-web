import { gql } from '@apollo/client';

export const GET_DATASETS = gql`
  query GET_DATASETS {
    simulators {
      simulatorName
      id
    }
    real_datasets {
      datasetName
      id
    }
  }
`;

export const GET_ALGORITHMS = gql`
  query GET_ALGORITHMS {
    algorithms(order_by: { algorithmName: asc }) {
      id
      algorithmName
    }
  }
`;

export const INSERT_RUN_ALGORITHMS = gql`
  mutation INSERT_RUN_ALGORITHMS(
    $algorithm_settings: [algorithm_settings_insert_input!]!
  ) {
    insert_algorithm_settings(objects: $algorithm_settings) {
      affected_rows
    }
  }
`;
