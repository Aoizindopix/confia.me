import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

const resources = {
  'pt-BR': {
    translation: {
      onboarding: {
        title: 'Confia.me',
        subtitle: 'Descubra se a conta da pessoa está ativa nos principais apps de namoro.',
        cta: 'Verifique agora'
      },
      check: {
        title: 'Verificação segura',
        placeholder: 'Digite o usuário ou e-mail',
        selectApp: 'Selecione o aplicativo',
        button: 'Verificar',
        hint: 'Nós nunca salvamos senhas. Apenas verificamos disponibilidade pública.'
      },
      result: {
        title: 'Resultado',
        active: 'Ativa',
        inactive: 'Não encontrada',
        tryAgain: 'Verificar outro usuário',
        timestamp: 'Verificado em {{date}}'
      },
      history: {
        title: 'Histórico',
        empty: 'Você ainda não realizou verificações.',
        clear: 'Limpar'
      },
      apps: {
        tinder: 'Tinder',
        bumble: 'Bumble',
        badoo: 'Badoo',
        eden: 'Eden',
        salt: 'SALT',
        quimicaCrista: 'Química Cristã'
      },
      status: {
        loading: 'Buscando informações...',
        error: 'Não foi possível completar a verificação.'
      }
    }
  },
  'en-US': {
    translation: {
      onboarding: {
        title: 'Confia.me',
        subtitle: 'Find out if someone is active on the top dating apps.',
        cta: 'Check now'
      },
      check: {
        title: 'Secure verification',
        placeholder: 'Enter username or email',
        selectApp: 'Choose the app',
        button: 'Verify',
        hint: 'We never store passwords. Only public availability is checked.'
      },
      result: {
        title: 'Result',
        active: 'Active',
        inactive: 'Not found',
        tryAgain: 'Check another user',
        timestamp: 'Checked on {{date}}'
      },
      history: {
        title: 'History',
        empty: 'No verifications performed yet.',
        clear: 'Clear'
      },
      apps: {
        tinder: 'Tinder',
        bumble: 'Bumble',
        badoo: 'Badoo',
        eden: 'Eden',
        salt: 'SALT',
        quimicaCrista: 'Christian Chemistry'
      },
      status: {
        loading: 'Looking for information...',
        error: 'We were unable to complete the verification.'
      }
    }
  }
};

const fallback = Localization.locale.startsWith('pt') ? 'pt-BR' : 'en-US';

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources,
    lng: fallback,
    fallbackLng: fallback,
    interpolation: {
      escapeValue: false
    }
  });
}

export default i18n;
export type AvailableLanguage = keyof typeof resources;
