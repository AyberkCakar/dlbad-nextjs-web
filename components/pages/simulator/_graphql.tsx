import { gql } from '@apollo/client';

export const GET_SIMULATORS = gql`
  query GET_SIMULATORS(
    $limit: Int
    $offset: Int
    $where: simulators_bool_exp
    $order_by: [simulators_order_by!]
  ) {
    simulators(
      limit: $limit
      offset: $offset
      where: $where
      order_by: $order_by
    ) {
      simulator_parameters {
        failure_type {
          failureName
          id
          period
          soundAnomalyMultiplier
          temperatureAnomalyMultiplier
          vibrationAnomalyMultiplier
          timeInterval
        }
      }
      datasets {
        id
      }
      expectedTemperatureValue
      expectedSoundValue
      expectedVibrationValue
      simulatorName
      id
    }
    simulators_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export const DELETE_SIMULATOR = gql`
  mutation deleteSimulator($id: Int!) {
    delete_simulators_by_pk(id: $id) {
      id
    }
  }
`;
