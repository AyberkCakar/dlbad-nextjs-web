import { IDynamic } from '../../models';

export const en: IDynamic = {
  footer: {
    description: '2023 DLBAD Project'
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
    search: 'Search',
    saveChanges: 'Save Changes',
    actions: 'Actions',
    id: 'ID',
    signIn: 'Sign In',
    signUp: 'Sign Up'
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
  },
  simulator: {
    editSimulator: 'Edit Simulator',
    addSimulator: 'Add Simulator',
    simulatorName: 'Simulator Name',
    checkBoxListTitle: 'Failure Types',
    generateSimulatorData: 'Generate Simulator Data',
    editSuccessMessage: 'Simulatorzed Successfully',
    editErrorMessage: 'Simulatorzed Errorfully',
    addSuccessMessage: 'Simulator Added Successfully',
    addErrorMessage: 'Simulator Added Error',
    result: 'Result',
    parameters: 'Parameters',
    deleteModalTitle: 'Delete Simulator',
    deleteModalDescription: 'Delete Simulator Description',
    deleteSuccessMessage: 'Simulator Delete Successfully',
    deleteErrorMessage: 'Simulator Delete Error',
    showParameters: 'Show Parameters',
    showResult: 'Show Result',
    simulatorParameters: 'Simulator Parameters',
    simulatorResult: 'Simulator Result',
    amplitude: 'Amplitude',
    vibration: 'Vibration',
    temperature: 'Temperature',
    tag: 'Tag',
    time: 'Time'
  },
  login: {
    emailAddress: 'Email Address',
    password: 'Password',
    wouldYouLikeToRegister: 'Would you like to register?',
    successMessage: 'Sign In Successfully!',
    errorMessage:
      'There was a problem while signing in. Please check your information!'
  },
  signUp: {
    emailAddress: 'Email Address',
    password: 'Password',
    firstName: 'First Name',
    lastName: 'Last Name',
    alreadyHaveRegister: 'Do you already have a register?',
    successMessage: 'Sign Up Successfully!',
    errorMessage:
      'There was a problem while signing up. Please check your information!'
  }
};
