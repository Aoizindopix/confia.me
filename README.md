# Confia.me

Aplicativo mobile construído com React Native, Expo e TypeScript para verificar rapidamente se perfis estão ativos em aplicativos de namoro populares.

## Estrutura

```
/confia.me
├─ app/                # Aplicativo Expo
│  └─ src/
│     ├─ components/   # UI reutilizável e microinterações
│     ├─ screens/      # Telas principais (Onboarding, CheckAccount, Result, History)
│     ├─ services/     # Serviços de verificação com mock backend
│     ├─ factories/    # Factory Pattern para instanciar checkers
│     ├─ hooks/        # Lógica reutilizável (estado, histórico)
│     ├─ stores/       # Zustand store com persistência
│     ├─ utils/        # i18n, tipos, constantes
│     └─ assets/       # Lottie animations e mídias leves
├─ backend/            # Pasta reservada para futuras functions
├─ infra/              # Infraestrutura e configurações de backend
├─ docs/openapi.yaml   # Contrato da mock API
└─ README.md
```

## Requisitos

- Node.js >= 18
- Expo CLI (`npm install -g expo-cli`) opcionalmente para rodar localmente

## Rodando o aplicativo

```bash
cd app
npm install
npm run start
```

Utilize o aplicativo Expo Go no Android/iOS ou um emulador para visualizar o projeto.

## Testando animações e UI

As animações Lottie de onboarding, loading, sucesso e erro estão na pasta `src/assets/lottie`. O tema utiliza gradientes neon, tipografia Inter e microinterações em botões com Reanimated.

## Gerando build

Para gerar um APK com EAS Build:

```bash
npm install --global eas-cli
cd app
eas build --platform android
```

Configure as credenciais e o projeto conforme a [documentação da Expo](https://docs.expo.dev/eas/). O mesmo processo vale para builds iOS (`--platform ios`).

## Internacionalização

O app suporta PT-BR e EN-US com auto detecção via `expo-localization`. Traduções ficam em `src/utils/i18n.ts`.

## Mock backend

A verificação utiliza `mockCheckAccount` (`src/services/mockBackend.ts`) que simula respostas assíncronas. O contrato HTTP planejado está em `docs/openapi.yaml`.
