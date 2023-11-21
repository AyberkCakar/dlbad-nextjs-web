import { IDynamic } from '../../models';

export const tr: IDynamic = {
  footer: {
    description: 'DLBAD AI © 2023 - All Rights Reserved.',
    version: 'Versiyon'
  },
  header: {
    title1: 'DLBAD',
    title2: 'AI',
    mergeTitle: 'DLBAD AI',
    home: 'Anasayfa',
    simulator: 'Simülator',
    addSimulator: 'Simülator Ekle',
    realDataset: 'Gerçek Veriseti',
    algorithms: 'Algoritmalar',
    algorithmResult: 'Algoritma Karşılaştırma',
    failureTypes: 'Hata Tipleri',
    userSettings: 'Kullanıcı Ayarları',
    logout: 'Çıkış Yap',
    changePassword: 'Şifre Değiştir',
    runAlgorithm: 'Algoritma Koş'
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
    pageTitle: 'Hata Tipleri',
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
    sound: 'Sound',
    vibration: 'Vibration',
    temperature: 'Temperature',
    tag: 'Tag',
    time: 'Time',
    expectedTemperatureValue: 'Expected Temperature Value',
    expectedSoundValue: 'Expected Sound Value',
    expectedVibrationValue: 'Expected Vibration Value'
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
    pageTitle: 'Kullanıcı Ayarları',
    firstName: 'First Name',
    lastName: 'Last Name',
    emailAddress: 'Email Address',
    successMessage: 'User information has been successfully updated!',
    errorMessage: 'A problem occurred while updating user information!'
  },
  changePassword: {
    modalTitle: 'Şifre Değiştir',
    password: 'Password',
    newPassword: 'New Password',
    successMessage: 'Password updated successfully!',
    errorMessage: 'There was a problem updating the password!'
  },
  realDataset: {
    pageTitle: 'Gerçek Veriseti',
    datasetName: 'Dataset Name',
    addRealDataset: 'Add Real Dataset',
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
    pageTitle: 'Algoritmalar',
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
  }
};
