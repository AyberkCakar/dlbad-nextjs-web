import { IDynamic } from '../../models';

export const tr: IDynamic = {
  footer: {
    description: 'DLBAD AI © 2023 - Tüm Hakları Saklıdır.',
    version: 'Versiyon'
  },
  header: {
    title1: 'DLBAD',
    title2: 'AI',
    mergeTitle: 'DLBAD AI',
    home: 'Ana Sayfa',
    simulators: 'Simülatörler',
    addSimulator: 'Simülatör Ekle',
    realDataset: 'Gerçek Veri Seti',
    algorithms: 'Algoritmalar',
    algorithmResult: 'Algoritma Karşılaştırması',
    failureTypes: 'Arıza Tipleri',
    userSettings: 'Kullanıcı Ayarları',
    logout: 'Çıkış Yap',
    changePassword: 'Şifre Değiştir',
    runAlgorithm: 'Algoritma Çalıştır'
  },
  general: {
    save: 'Kaydet',
    delete: 'Sil',
    cancel: 'İptal',
    search: 'Ara',
    saveChanges: 'Değişiklikleri Kaydet',
    actions: 'Eylemler',
    id: 'ID',
    signIn: 'Giriş Yap',
    signUp: 'Kayıt Ol'
  },
  failureTypes: {
    pageTitle: 'Arıza Tipleri',
    id: 'ID',
    failureName: 'Arıza Adı',
    period: 'Periyot',
    soundAnomalyMultiplier: 'Ses Anomali Çarpanı',
    temperatureAnomalyMultiplier: 'Sıcaklık Anomali Çarpanı',
    vibrationAnomalyMultiplier: 'Titreşim Anomali Çarpanı',
    timeInterval: 'Zaman Aralığı',
    addFailureType: 'Arıza Tipi Ekle',
    deleteModal: {
      description: 'Seçilen Arıza Tipi silinecek. Emin misiniz?',
      title: 'Arıza Tipi Sil'
    }
  },
  simulator: {
    pageTitle: 'Simülatör',
    editSimulator: 'Simülatör Düzenle',
    addSimulator: 'Simülatör Ekle',
    simulatorName: 'Simülatör Adı',
    checkBoxListTitle: 'Arıza Tipleri',
    generateSimulatorData: 'Simülatör Verisi Oluştur',
    editSuccessMessage: 'Simülatör Başarıyla Düzenlendi',
    editErrorMessage: 'Simülatör Düzenlenirken Hata Oluştu',
    addSuccessMessage: 'Simülatör Başarıyla Eklendi',
    addErrorMessage: 'Simülatör Eklenirken Hata Oluştu',
    result: 'Sonuç',
    parameters: 'Parametreler',
    deleteModalTitle: 'Simülatör Sil',
    deleteModalDescription: 'Simülatör Silme Açıklaması',
    deleteSuccessMessage: 'Simülatör Başarıyla Silindi',
    deleteErrorMessage: 'Simülatör Silinirken Hata Oluştu',
    showParameters: 'Parametreleri Göster',
    showResult: 'Sonucu Göster',
    simulatorParameters: 'Simülatör Parametreleri',
    simulatorResult: 'Simülatör Sonucu',
    sound: 'Ses',
    vibration: 'Titreşim',
    temperature: 'Sıcaklık',
    tag: 'Etiket',
    time: 'Zaman',
    minExpectedTemperatureValue: 'Beklenen Min. Sıcaklık Değeri',
    maxExpectedTemperatureValue: 'Beklenen Maks. Sıcaklık Değeri',
    minExpectedSoundValue: 'Beklenen Min. Ses Değeri',
    maxExpectedSoundValue: 'Beklenen Maks. Ses Değeri',
    minExpectedVibrationValue: 'Beklenen Min. Titreşim Değeri',
    maxExpectedVibrationValue: 'Beklenen Maks. Titreşim Değeri'
  },
  login: {
    emailAddress: 'E-posta Adresi',
    password: 'Şifre',
    wouldYouLikeToRegister: 'Kayıt olmak ister misiniz?',
    successMessage: 'Başarıyla Giriş Yapıldı!',
    errorMessage:
      'Giriş yapılırken bir sorun oluştu. Lütfen bilgilerinizi kontrol edin!',
    validations: {
      emailAddress: {
        required: 'E-postanızı girin',
        email: 'Geçerli bir e-posta girin'
      },
      password: {
        required: 'Parola gerekli',
        minCharacters: 'Parola en az 8 karakter uzunluğunda olmalıdır'
      }
    }
  },
  signUp: {
    emailAddress: 'E-posta Adresi',
    password: 'Şifre',
    firstName: 'İsim',
    lastName: 'Soyisim',
    alreadyHaveRegister: 'Zaten bir kaydınız var mı?',
    successMessage: 'Başarıyla Kayıt Olundu!',
    errorMessage:
      'Kayıt olunurken bir sorun oluştu. Lütfen bilgilerinizi kontrol edin!'
  },
  userSettings: {
    pageTitle: 'Kullanıcı Ayarları',
    firstName: 'İsim',
    lastName: 'Soyisim',
    emailAddress: 'E-posta Adresi',
    successMessage: 'Kullanıcı bilgileri başarıyla güncellendi!',
    errorMessage: 'Kullanıcı bilgileri güncellenirken bir sorun oluştu!'
  },
  changePassword: {
    modalTitle: 'Şifre Değiştir',
    password: 'Şifre',
    newPassword: 'Yeni Şifre',
    successMessage: 'Şifre başarıyla güncellendi!',
    errorMessage: 'Şifre güncellenirken bir sorun oluştu!'
  },
  realDataset: {
    pageTitle: 'Gerçek Veri Seti',
    datasetName: 'Veri Seti Adı',
    addRealDataset: 'Gerçek Veri Seti Ekle',
    deleteModal: {
      title: 'Gerçek Veri Seti Sil',
      description:
        'Seçilen Gerçek Veri Seti silinecek. Devam etmek istediğinize emin misiniz?',
      successMessage: 'Gerçek Veri Seti başarıyla silindi!',
      errorMessage: 'Gerçek Veri Seti silinirken bir hata oluştu!'
    },
    uploadFile: 'Dosya Yükle',
    addModal: {
      title: 'Gerçek Veri Seti Ekle',
      successMessage: 'Gerçek Veri Seti başarıyla eklendi!',
      errorMessage: 'Gerçek Veri Seti eklenirken bir hata oluştu!'
    },
    editModal: {
      title: 'Gerçek Veri Seti Düzenle',
      successMessage: 'Gerçek Veri Seti başarıyla güncellendi!',
      errorMessage: 'Gerçek Veri Seti güncellenirken bir hata oluştu!'
    }
  },
  algorithms: {
    algorithmName: 'Algoritma Adı',
    pageTitle: 'Algoritmalar',
    addAlgorithm: 'Algoritma Ekle',
    deleteModal: {
      title: 'Algoritma Sil',
      description:
        'Seçilen Algoritma silinecek. Devam etmek istediğinize emin misiniz?',
      successMessage: 'Algoritma başarıyla silindi!',
      errorMessage: 'Algoritma silinirken bir hata oluştu!'
    },
    addModal: {
      title: 'Algoritma Ekle',
      successMessage: 'Algoritma başarıyla eklendi!',
      errorMessage: 'Algoritma eklenirken bir hata oluştu!'
    },
    editModal: {
      title: 'Algoritma Düzenle',
      successMessage: 'Algoritma başarıyla güncellendi!',
      errorMessage: 'Algoritma güncellenirken bir hata oluştu!'
    }
  },
  runAlgorithms: {
    pageTitle: 'Algoritmaları Çalıştır',
    dataset: 'Veri Seti',
    algorithms: 'Algoritmalar',
    runAlgorithms: {
      button: 'Algoritmaları Çalıştır',
      successMessage: 'Algoritmalar başarıyla çalıştırıldı!',
      errorMessage: 'Algoritmaları çalıştırırken bir hata oluştu!'
    },
    algorithmSettingName: 'Algoritma Ayar Adı',
    sensorTypes: 'Sensör Tipleri'
  },
  algorithmCard: {
    accuracy: 'Doğruluk',
    f1: 'F1',
    recall: 'Gerçallama',
    precision: 'Kesinlik'
  },
  compareAlgorithms: {
    pageTitle: 'Algoritmaları Karşılaştır',
    getAlgorithmResults: 'Algoritma Sonuçlarını Al',
    algorithm1: 'Algoritma 1',
    algorithm2: 'Algoritma 2'
  }
};
