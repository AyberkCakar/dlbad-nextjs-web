import { IDynamic } from '../../models';

export const en: IDynamic = {
  footer: {
    description: 'DLBAD AI © 2023 - All Rights Reserved.',
    version: 'Version'
  },
  header: {
    title1: 'DLBAD',
    title2: 'AI',
    mergeTitle: 'DLBAD AI',
    home: 'Home',
    simulators: 'Simulators',
    addSimulator: 'Add Simulator',
    realDataset: 'Real Dataset',
    algorithms: 'Algorithms',
    algorithmResult: 'Compare Algorithms',
    failureTypes: 'Anomaly Types',
    userSettings: 'User Settings',
    logout: 'Logout',
    changePassword: 'Change Password',
    runAlgorithm: 'Run Algorithm'
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
    pageTitle: 'Anomaly Types',
    id: 'ID',
    failureName: 'Anomaly Name',
    period: 'Period',
    soundAnomalyMultiplier: 'Sound Anomaly Multiplier',
    temperatureAnomalyMultiplier: 'Temperature Anomaly Multiplier',
    vibrationAnomalyMultiplier: 'Vibration Anomaly Multiplier',
    timeInterval: 'Time Interval',
    addFailureType: 'Add Anomaly Type',
    deleteModal: {
      description: 'The selected Anomaly Type will be deleted. Are you sure?',
      title: 'Delete Anomaly Type',
      successMessage: 'Deletion of Anomaly Type was successful!',
      errorMessage: 'An error occurred while deleting Anomaly Type!'
    },
    addModal: {
      successMessage: 'Anomaly Type added successfully!',
      errorMessage: 'An error occurred while adding Anomaly Type!'
    },
    editModal: {
      successMessage: 'Anomaly Type was successfully updated!',
      errorMessage: 'An error occurred while updating Anomaly Type!'
    }
  },
  simulator: {
    pageTitle: 'Simulator',
    editSimulator: 'Edit Simulator',
    addSimulator: 'Add Simulator',
    simulatorName: 'Simulator Name',
    checkBoxListTitle: 'Anomaly Types',
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
    sound: 'Sound',
    vibration: 'Vibration',
    temperature: 'Temperature',
    tag: 'Tag',
    time: 'Time',
    minExpectedTemperatureValue: 'Min Expected Temperature Value',
    maxExpectedTemperatureValue: 'Max Expected Temperature Value',
    minExpectedSoundValue: 'Min Expected Sound Value',
    maxExpectedSoundValue: 'Max Expected Sound Value',
    minExpectedVibrationValue: 'Min Expected Vibration Value',
    maxExpectedVibrationValue: 'Max Expected Vibration Value'
  },
  login: {
    emailAddress: 'Email Address',
    password: 'Password',
    wouldYouLikeToRegister: 'Would you like to register?',
    successMessage: 'Sign In Successfully!',
    errorMessage:
      'There was a problem while signing in. Please check your information!',
    validations: {
      emailAddress: {
        required: 'Enter your email',
        email: 'Enter a valid email'
      },
      password: {
        required: 'Password is required',
        minCharacters: 'Password should be of minimum 8 characters length'
      }
    }
  },
  signUp: {
    emailAddress: 'Email Address',
    password: 'Password',
    firstName: 'First Name',
    lastName: 'Last Name',
    alreadyHaveRegister: 'Do you already have a register?',
    successMessage: 'Sign Up Successfully!',
    errorMessage:
      'There was a problem while signing up. Please check your information!',
    validations: {
      firstName: {
        required: 'Enter your first name',
      },
      lastName: {
        required: 'Enter your last name',
      },
      emailAddress: {
        required: 'Enter your email',
        email: 'Enter a valid email'
      },
      password: {
        required: 'Password is required',
        minCharacters: 'Password should be of minimum 8 characters length'
      }
    }
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
  },
  realDataset: {
    pageTitle: 'Real Dataset',
    addRealDataset: 'Add Real Dataset',
    datasetName: 'Dataset Name',
    deleteModal: {
      title: 'Delete Real Dataset',
      description:
        'The selected Real Dataset will be deleted. Are you sure you want to continue?',
      successMessage: 'Deletion of Real Dataset was successful!',
      errorMessage: 'An error occurred while deleting Real Dataset!'
    },
    uploadFile: 'Upload File',
    addModal: {
      title: 'Add Real Dataset',
      successMessage: 'Real Dataset added successfully!',
      errorMessage: 'An error occurred while adding Real Dataset!'
    },
    editModal: {
      title: 'Edit Real Dataset',
      successMessage: 'Real Dataset was successfully updated!',
      errorMessage: 'An error occurred while updating Real Dataset!'
    }
  },
  algorithms: {
    algorithmName: 'Algorithm Name',
    pageTitle: 'Algorithms',
    addAlgorithm: 'Add Algorithm',
    deleteModal: {
      title: 'Delete Algorithm',
      description:
        'The selected Algorithm will be deleted. Are you sure you want to continue?',
      successMessage: 'Deletion of Algorithm was successful!',
      errorMessage: 'An error occurred while deleting Algorithm!'
    },
    addModal: {
      title: 'Add Algorithm',
      successMessage: 'Algorithm added successfully!',
      errorMessage: 'An error occurred while adding Algorithm!'
    },
    editModal: {
      title: 'Edit Algorithm',
      successMessage: 'Algorithm was successfully updated!',
      errorMessage: 'An error occurred while updating Algorithm!'
    }
  },
  runAlgorithms: {
    pageTitle: 'Run Algorithms',
    dataset: 'Dataset',
    algortihms: 'Algorithms',
    runAlgorithms: {
      button: 'Run Algorithms',
      successMessage: 'Run Algorithms successfully!',
      errorMessage: 'An error occurred while Run Algorithms!'
    },
    algorithmSettingName: 'Algorithm Setting Name',
    sensorTypes: 'Sensor Types'
  },
  algorithmCard: {
    accuracy: 'Accurary',
    f1: 'F1',
    recall: 'Recall',
    precision: 'Precision'
  },
  compareAlgorithms: {
    pageTitle: 'Compare Algorithms',
    getAlgorithmResults: 'Get Algorithm Results',
    algorithm1: 'Algorithm 1',
    algorithm2: 'Algorithm 2'
  }
};
