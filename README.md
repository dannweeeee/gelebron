# Gelebron - Chat & Pay

<div align="center">
<img 
  src="https://github.com/gelebron/gelebron/blob/82edc9b1a3c13930ee0be06bca143c82dcb5e6f6/public/assets/gelebron-rect.png" 
  style="width:50%; height:50%;"
/>
</div>

<p align="center">•
  <a href="#setup">Setup</a> •
  <a href="#demo">Demo</a> •
  <a href="#team">Team</a> •
  <a href="#features">Features</a> •
  <a href="#license">License</a> •
</p>

## Project Summary
Encrypted instant messaging protocol powered by decentralized identities using XMTP and NES.TECH. Gelebron is a decentralized messaging application leveraging blockchain technology to provide secure and seamless communication between users. The platform integrates the Volary Naming Service (VNS) for registering unique names and resolving valid VNS addresses, making it easy for users to identify and connect with each other.

### XMTP
XMTP functions as a messaging and transport protocol, facilitating the exchange of messages and status information within decentralized Web3 environments. It utilizes a decentralized network structure based on nodes distributed across the network, ensuring messages are routed securely and efficiently.

### NES.TECH
Software Development Kits (SDKs) designed to streamline the development processes for real-world blockchain applications.


## Setup
Install node >= 14 and npm. Run the command:

```bash
$ npm install
```
To start the project, run the command:
```bash
$ npm run dev
```
### 1. Get cUSD from CELO Alfajores Testnet
- Network Name: Alfajores Testnet
- New RPC URL: https://alfajores-forno.celo-testnet.org
- Chain ID: 44787
- Currency symbol: A-CELO
- Get cUSD and A-CELO from Faucet: https://faucet.celo.org/alfajores

### 2. Get XETA testnet tokens for VNS service
- Network Name: Volary Testnet
- New RPC URL: https://nestrpc.sandbox.volary.tech/
- Chain ID: 8888
- Currency symbol: XETA

## Demo
Walkthrough: https://www.youtube.com/insertlinkhere

## Team

### Dann
Email: dannweezj@gmail.com <br/>
Github: https://github.com/dannweeeee <br/>

### Wayne
Email: devchain7890@gmail.com <br/>
Github: https://github.com/hougangdev <br/>

## Features
- Registration of a name with the Volary Naming Service (VNS) (e.g. superidoldexiaorong.vlry)
- Search and resolve valid VNS addresses to message
- XMTP protocol to facilitate messaging between wallet addresses
- Send cUSD in chat using /pay command

## License
The MIT License (MIT)
