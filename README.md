# 🌐 Verse Dapps Boilerplate

📱 NextJS + TypeScript + Tailwind Web3 Client App

This boilerplate provides a solid foundation for building decentralized applications (dApps) using NextJS, TypeScript, and Tailwind CSS, with a focus on Bitcoin.com's VERSE token ecosystem. It's configured as a client-side application, optimized for Web3 interactions.

## ✨ Features

- 🚀 [NextJS 13+](https://nextjs.org/docs) with Pages Router
- 🦾 [TypeScript](https://www.typescriptlang.org/docs/) for type safety
- 🎨 [Tailwind CSS](https://tailwindcss.com/docs) for styling
- 🌍 Web3 integration with [Wagmi](https://wagmi.sh/) and [Reown] (https://docs.reown.com/overview)
- 🧶 [Yarn v1](https://classic.yarnpkg.com/en/docs) as package manager
- 🖥️ Client-side rendering with `output: export`
- 🪙 Integration with Bitcoin.com VERSE token ecosystem

## 🚀 Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   yarn install
   ```
3. Create .env.development (or .env depending on environment), edit to add your projectId:
   ```
   cp .env.sample .env.development
   ```
4. Run the development server:
   ```
   yarn dev
   ```

## 📁 Project Structure

The project follows a modular structure to organize different dApps:

```
pages/
  (dapp)/
    YOUR-DAPP/
      index.tsx
  index.tsx
```

To add a new dApp, create a new folder inside `pages/(dapp)/` with your dApp's name. This folder should contain at least a `index.tsx` file.

## 🏠 Homepage and Examples

The homepage (`pages/index.tsx`) includes examples of contract interactions using Wagmi, specifically tailored for the VERSE token ecosystem. These examples demonstrate how to connect to Web3 wallets and interact with VERSE-related smart contracts.

## 🔌 Automatic Wallet Connection

Each dApp is configured to automatically attempt to connect to the user's Web3 wallet. This functionality is implemented in the _app.tsx files to ensure consistent behavior across all pages.

## 🌐 dApp Routing

Your dApp should behave as if it is on the route `/your-dapp`. You may also pass `?origin=wallet` as a URL parameter to indicate the origin of the request.

## 📱 Local Network Access

If you want to access your app through a local network IP (e.g., `192.168.x.x`) while developing, you may need to whitelist your local network IP in WalletConnect site. This is necessary to allow your phone or other devices on the same network be able to get the connection options from WalletConnect.

## 🤝 Contract Interactions

All contract interactions must be implemented using [Wagmi](https://wagmi.sh/). This ensures consistent and reliable communication with blockchain networks, including interactions with VERSE token contracts. Refer to the Wagmi documentation for detailed usage instructions.

## 📦 Package Management

This project uses [Yarn v1](https://classic.yarnpkg.com/en/docs) as its package manager. To add new dependencies:

```
yarn add package-name
```

To add a development dependency:

```
yarn add -D package-name
```

## 🪙 VERSE Token Integration

This boilerplate is specifically designed to work with Bitcoin.com's VERSE token. It includes examples and utilities for interacting with VERSE token contracts and participating in the VERSE ecosystem.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📜 License

This project is licensed under the MIT License.

## 📚 Additional Resources

- 🪙 [Bitcoin.com VERSE Token](https://verse.bitcoin.com/)
- 🌐 [Wagmi Documentation](https://wagmi.sh/)
- 🔗 [Reown Documentation](https://docs.reown.com/overview)
- 🚀 [NextJS Documentation](https://nextjs.org/docs)
- 🦾 [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- 🎨 [Tailwind CSS Documentation](https://tailwindcss.com/docs)
