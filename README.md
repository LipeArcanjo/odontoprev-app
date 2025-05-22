
# OdontoPrev App

# Nome do Grupo: **ByteRGF**

## Integrantes
- Felipe Arcanjo - RM554018  
- Rebeca Silva Lopes - RM553764  
- Giovanna Giantomaso - RM553369

## Explicação do Projeto

O **OdontoPrev App** é uma aplicação mobile desenvolvida com React Native e Expo, com foco em fornecer uma experiência digital eficiente para profissionais odontológicos. Através do aplicativo, é possível acessar informações sobre seus beneficiarios e tratamentos de suas respectivas clínicas.

O projeto utiliza autenticação via Firebase Auth e navegação entre telas com React Navigation. Ele também incorpora integração com armazenamento via API com Firestore online, e assíncrona local, garantindo uma experiência fluida mesmo em contextos offline.

## Tabela de Conteúdos
- [Instalação](#instalação)
- [Uso](#uso)
- [Funcionalidades](#funcionalidades)
- [Diagrama de Arquitetura](#diagrama-de-arquitetura)
- [Dependências](#dependências)
- [Configuração](#configuração)
- [Contribuidores](#contribuidores)
- [Licença](#licença)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/LipeArcanjo/odontoprev-app
   cd odontoprev-app
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o projeto com o Expo:
   ```bash
   npx expo start
   ```

## Uso

Execute o app em um emulador Android/iOS ou leia o QR code com o app do Expo Go para testar em um dispositivo físico.

## Funcionalidades

O projeto ByteRGF é uma solução voltada à previsão de risco de sinistro odontológico, integrada a um aplicativo mobile. Seu principal propósito é apoiar profissionais da saúde bucal na identificação proativa de pacientes com maior probabilidade de ocorrência de sinistros, otimizando decisões clínicas e operacionais.

## Diagrama de Arquitetura

```
odontoprev-app/
└── odontoprev-app-main/
    ├── .gitignore
    ├── App.tsx
    ├── app.json
    ├── index.ts
    ├── metro.config.js
    ├── package-lock.json
    ├── package.json
    ├── tsconfig.json
    └── src/
        ├── assets/
        │
        ├── components/
        │   └── BottomNav/
        │
        ├── navigation/
        │   └── AppNavigator.tsx
        │
        ├── screens/
        │   ├── Beneficiarios/
        │   │   ├── BeneficiariosCadastro/
        │   │   └── BeneficiariosData/
        │   │
        │   ├── DataVision/
        │   │
        │   ├── Home/
        │   │
        │   ├── Login/
        │   │
        │   ├── Members/
        │   │
        │   └── Tratamentos/
        │       ├── index.tsx
        │       ├── TratamentosCadastro/
        │       └── TratamentosData/
        │           
        │
        ├── services/
        │   └── firebaseConfig.ts
        │
        └── utils/
```

## Dependências Principais

- React Native 0.79.2
- Expo ~53.0.9
- Firebase
- React Navigation
- AsyncStorage
- Vector Icons

## Contribuidores

- Felipe Arcanjo
- Rebeca Silva Lopes
- Giovanna Giantomaso

## Licença

Este projeto é privado e desenvolvido exclusivamente para fins educacionais.

### 📢 Este README.md foi gerado com o auxílio de inteligência artificial, com o objetivo de oferecer maior clareza na escrita e aprimorar a experiência dos usuários que acessam e utilizam este repositório. 🚨