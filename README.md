# 🚀 ENSO-AUTOMATION-BOT

Automate Zealy quests for the Enso Protocol campaign like a pro. This bot helps you complete tasks faster using your wallet and Zealy ID – optionally with proxy support.

---

## 🔧 Features

* Fully automated Zealy bot for ENSO Protocol.
* Multi-account support via `accounts.txt`.
* Optional proxy rotation support.
* Easy setup and run with Node.js.

---

## 📦 Setup Instructions

Follow these simple steps to run the bot on your machine:

---

### 1. Clone the Repo

```bash
git clone https://github.com/cryptodai3/ENSO-AUTOMATION-BOT.git
cd ENSO-AUTOMATION-BOT
```

---

### 2. Install Dependencies

Make sure you have Node.js installed.

```bash
npm install
```

---

### 3. Add Your Accounts

Edit the `accounts.txt` file and input your private key and Zealy ID in the format shown below:

```bash
nano accounts.txt
```

**Format (One account per line):**

```
YOUR_PRIVATE_KEY,YOUR_ZEALY_ID
```

> ⚠️ Keep this file secure. Do NOT share it. Use a fresh wallet for safety.

---
### how to find userid and zealyid

![photo_2025-06-03_17-47-38](https://github.com/user-attachments/assets/dfa095af-c65d-4856-812c-b2fda6e743d9)

click on apps - F12 - Network - Click one time on any app list, look for track-campaign

---

### 4. (Optional) Use Proxy

If you want to use rotating proxies for extra privacy:

```bash
nano proxy.txt
```

**Format (One proxy per line):**

```
http://username:password@ip:port
```

> Proxies will be applied in the order of accounts.

---

### 5. Run the Bot 🚀

```bash
npm start
```

---

## 🛠 Example:

Your `accounts.txt` might look like:

```
0xabc123...,zealy_user1
0xdef456...,zealy_user2
```

Your `proxy.txt` might look like:

```
http://user1:pass1@12.34.56.78:8080
http://user2:pass2@98.76.54.32:8000
```

---

## ⚠️ Important Notes

* Always use test wallets or wallets with minimal funds.
* This is for **educational purposes only**.
* Using automation on Zealy may violate their TOS – use at your own risk.

---

## ✍️ Author & Credits

**Happy Farming!** 🚀🌾

*Brought to you by [CryptoDai3](https://t.me/cryptodai3) X [YetiDAO](https://t.me/YetiDAO)*

---

## 🔒 Safety & Support

### ⚠️ Important Disclaimer

* **Testnet Only** – This tool is designed for testnet environments only
* **No Liability** – Use at your own risk. Developers assume no responsibility
* **DYOR** – Always do your own research before using any automation tools

### 🛡️ Security Best Practices

* 🔐 Never use Main wallets
* 🚫 Never expose sensitive credentials
* 📜 Always review code before execution
* 💸 Use burner wallets with test tokens only

---

### 💬 Need Help?

* 🐛 **Bug Reports**: [Open a GitHub Issue](https://github.com/cryptodai3/ENSO-AUTOMATION-BOT/issues)
* 💡 **Channel**: Join [@cryptodai3](https://t.me/cryptodai3)
* 🌐 **Community**: Join [YetiDAO Telegram](https://t.me/YetiDAO)

---

### 🙌 Support Our Work

Love this tool? Help us improve:

* ⭐ Star the repository
* 🔗 Share with your farming community
* 💎 Use our referral codes (where applicable)
* 💡 Contribute ideas and code

---

## 📝 License

This project is licensed under the MIT License.

---
