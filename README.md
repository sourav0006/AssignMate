# 📚 AssignMate – Assignment & Notes Exchange Platform

**AssignMate** is a full-stack, peer-to-peer web application that connects students who need help completing their assignments or notes with those who are looking to earn money by doing them.  

🧠 Whether you're looking to **get your work done** or **make money writing** — AssignMate is your ultimate study partner.

---

## 🚀 Live Demo

🌐 [Live Website](https://assignmate-ea5ad.web.app)  
🔗 [GitHub Repository](https://github.com/sourav0006/AssignMate.git)

---

## ✨ Features

### 👥 Two-Mode System
- **Mode 1** – Pay & Get Assignments/Notes Done  
- **Mode 2** – Write & Earn by Doing Assignments  
- 🔄 Seamless toggle between modes

### 🗺️ Location-Based Matching
- Auto or manual location input  
- Only providers within a **20–30km radius** can see relevant assignments

### 📝 Assignment Posting
- Add title, description, and deadline picker  
- Upload attachments (PDF/images)  
- Enter budget (💰 INR)  
- ⚡ Skeleton loaders & graceful error boundaries

### 📩 Application & Assignment Flow
- Providers can apply to posted tasks  
- Requesters assign to **one selected provider**  
- Assignment must be completed within the given deadline

### 💬 Real-Time Chat
- Bargaining & negotiation made easy  
- File and media sharing supported  
- 📎 Image/PDF previews before sending

### 📊 Dashboard with Insights
- Track **total assignments posted/done**  
- View **earnings/spending analytics**  
- 📈 Monthly breakdowns using interactive charts

### 💸 Secure Escrow Payments
- Requesters pay upfront into escrow  
- Funds released only after task confirmation  
- 🛡️ Dispute resolution handled by admin panel

### 🧑‍💼 User Features
- Google/Email login via **Firebase Auth**  
- Profile with location, role, and KYC status  
- ⭐ Ratings & reviews system

### ⚙️ Admin Tools
- Task moderation & user banning  
- Manual override on payments  
- 📊 Global platform statistics

---

## 🛠️ Tech Stack

| Tech | Usage |
|------|-------|
| **React.js** | Frontend SPA framework |
| **Tailwind CSS** | Utility-first responsive UI styling |
| **Framer Motion** | UI animations and transitions |
| **Jest + React Testing Library** | Unit & integration testing |
| **Firebase** | Full backend – Auth, Firestore, Hosting |
| **Firebase Storage** | File uploads (images, PDFs) |
| **Firebase Cloud Functions** | Backend logic & payment handling |
| **GeoFire / Firestore GeoQueries** | Location-based radius matching |
| **Razorpay** | INR-based escrow payment system |
| **Chart.js** | Graphs & dashboard analytics |

---

## 📂 Getting Started

### Prerequisites
- Node.js & npm installed  
- Firebase project configured with **Auth, Firestore, Storage, Functions**  
- Razorpay account & API keys  

### Installation
```bash
# Clone repo
git clone https://github.com/sourav0006/AssignMate.git
cd AssignMate

# Install dependencies
npm install

# Run
npm run dev

Visit: http://localhost:5173
```
---

### Deployment

- Frontend → Firebase Hosting
- Backend → Firebase Cloud Functions
- Payments → Razorpay live integration

---

### 🔮 Future Enhancements

- 🔔 Real-time notifications (push/SMS/email)
- 📌 In-app task progress tracking
- 📂 Multi-file uploads & rich text editor
- 👥 Group assignments (collaborative work)
- 🌍 Multi-currency & payment gateway support
- 📝 Detailed audit logs for admins

---

### 🤝 Contributing

Contributions are welcome!
Fork the repo
1. Create a branch (git checkout -b feature/new-feature)
2. Commit your changes (git commit -m 'Add new feature')
3. Push to branch (git push origin feature/new-feature)
4. Open a Pull Request 🎉

---

### 📜 License

This project is currently unlicensed. Add a license (MIT/GPL/Apache) if needed.

---

### 💡 Summary

AssignMate is a React + Firebase powered platform where students can post assignments, earn money, and collaborate securely with escrow payments, analytics, and location-based task matching — all in a smooth, modern UI 🚀
