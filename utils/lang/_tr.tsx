import { IDynamic } from '../../models';

export const tr: IDynamic = {
  footer: {
    description: '2023 DLBAD Project'
  },
  header: {
    title1: 'DLBAD',
    title2: 'AI',
    simulator: 'Simulator',
    dataList: 'Data List',
    algorithmResult: 'Algorithm Result',
    fauilureTypes: 'Fauilure Types',
    userSettings: 'User Settings',
    logout: 'Logout',
    changePassword: 'Change Password'
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
    pageTitle: 'Failure Types',
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
    pageTitle: 'Simulator',
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
  },
  userSettings: {
    pageTitle: 'User Settings',
    firstName: 'First Name',
    lastName: 'Last Name',
    emailAddress: 'Email Address',
    successMessage: 'User information has been successfully updated!',
    errorMessage: 'A problem occurred while updating user information!'
  },
  changePassword: {
    modalTitle: 'Change Password',
    password: 'Password',
    newPassword: 'New Password',
    successMessage: 'Password updated successfully!',
    errorMessage: 'There was a problem updating the password!'
  }
};
