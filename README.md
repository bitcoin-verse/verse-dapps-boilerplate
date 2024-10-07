# 🌐 Verse Dapps Boilerplate

📱 NextJS + TypeScript + Tailwind Web3 Client App

This boilerplate provides a solid foundation for building decentralized applications (dApps) using NextJS, TypeScript, and Tailwind CSS, with a focus on Bitcoin.com's VERSE token ecosystem. It's configured as a client-side application, optimized for Web3 interactions.

## ✨ Features

- 🚀 [NextJS 13+](https://nextjs.org/docs) with App Router
- 🦾 [TypeScript](https://www.typescriptlang.org/docs/) for type safety
- 🎨 [Tailwind CSS](https://tailwindcss.com/docs) for styling
- 🌍 Web3 integration with [Wagmi](https://wagmi.sh/)
- 🧶 [Yarn v1](https://classic.yarnpkg.com/en/docs) as package manager
- 🖥️ Client-side rendering with `output: export`
- 🪙 Integration with Bitcoin.com VERSE token ecosystem

## 🚀 Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   yarn install
   ```
3. Run the development server:
   ```
   yarn dev
   ```

## 📁 Project Structure

The project follows a modular structure to organize different dApps:

```
app/
  (dapp)/
    YOUR-DAPP/
      page.tsx
      layout.tsx
  page.tsx
  layout.tsx
```

To add a new dApp, create a new folder inside `app/(dapp)/` with your dApp's name. This folder should contain at least a `page.tsx` file.

## 🏠 Homepage and Examples

The homepage (`app/page.tsx`) includes examples of contract interactions using Wagmi, specifically tailored for the VERSE token ecosystem. These examples demonstrate how to connect to Web3 wallets and interact with VERSE-related smart contracts.

## 🔌 Automatic Wallet Connection

Each dApp is configured to automatically attempt to connect to the user's Web3 wallet. This functionality is implemented in the layout files to ensure consistent behavior across all pages.

## 🤝 Contract Interactions

All contract interactions must be implemented using [Wagmi](https://wagmi.sh/). This ensures consistent and reliable communication with blockchain networks, including interactions with VERSE token contracts. Refer to the Wagmi documentation for detailed usage instructions.

## 🖥️ Client-Side Rendering

This NextJS app is configured to export as a client-side application using the `output: export` option in the Next.js configuration. This means that the app will be rendered entirely on the client-side, which is ideal for Web3 applications that require frequent interactions with blockchain networks.

To build the app for production:

```
yarn build
```

This will generate a static export in the `out` directory, which can be deployed to any static hosting service.

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
- 🚀 [NextJS Documentation](https://nextjs.org/docs)
- 🦾 [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- 🎨 [Tailwind CSS Documentation](https://tailwindcss.com/docs)
