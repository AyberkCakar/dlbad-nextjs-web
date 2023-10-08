import { IDynamic } from '../../models';

export const en: IDynamic = {
  footer: {
    description: '&copy; 2023 DLBAD Project'
  },
  header: {
    title: 'DLBAD Project',
    simulator: 'Simulator',
    dataList: 'Data List',
    algorithmResult: 'Algorithm Result',
    fauilureTypes: 'Fauilure Types',
    userSettings: 'User Settings',
    logout: 'Logout'
  },
  general: {
    save: 'Save',
    delete: 'Delete',
    cancel: 'Cancel',
    search: 'Search'
  },
  failureTypes: {
    id: 'ID',
    failureName: 'Failure Name',
    period: 'Period',
    soundAnomalyMultiplier: 'Sound Anomaly Multiplier',
    temperatureAnomalyMultiplier: 'Temperature Anomaly Multiplier',
    vibrationAnomalyMultiplier: 'Vibration Anomaly Multiplier',
    timeInterval: 'Time Interval',
    addFailureType: 'Add Failure Type',
    deleteModal: {
      description: 'The selected Fault Type will be deleted. Are you sure?',
      title: 'Delete Failure Type'
    }
  }
};
