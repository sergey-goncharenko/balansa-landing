# 📘 **REQUIREMENT SPECIFICATION — Ambient Financial AI Landing Page**

## 1. **Project Goal**
Build a modern, scroll‑driven landing page that explains the concept of a multimodal Ambient Financial AI Consultant. The page must visually communicate:
- Real‑time financial reactions  
- Daily/weekly advisory summaries  
- ChatGPT/Copilot integrations  
- n8n automations  
- Vision + trust + early access signup  

The landing page must be:
- Fast  
- Responsive  
- Easy to maintain  
- Built with a modern frontend stack  

---

## 2. **Tech Stack Requirements**
**Frontend Framework:**  
- Next.js (preferred) or React with Vite  
- TypeScript required  

**Styling:**  
- TailwindCSS (preferred)  
- Optional: Framer Motion for animations  

**Deployment:**  
- Vercel (preferred)  

**Forms:**  
- Email signup via:  
  - Supabase  
  - Airtable  
  - or simple API route + JSON file (MVP)  

**Analytics:**  
- Plausible or Vercel Analytics  

---

## 3. **Page Structure Requirements**

### **Section 1 — Hero**
**Purpose:** Communicate the vision immediately.  
**Requirements:**
- Large headline + subheadline  
- Background animation (subtle)  
- CTA button → scroll to signup  
- Secondary CTA → scroll to modalities  

---

### **Section 2 — Real‑Time Reactions (Guardian Mode)**
**Purpose:** Show the premium, high‑value modality first.  
**Requirements:**
- Animated timeline of transactions  
- AI reaction bubbles appearing next to each  
- Examples:  
  - Fraud alert  
  - Duplicate charge  
  - Overspending warning  
  - Salary arrival  

**Animation:**  
- Scroll-triggered fade/slide  
- Framer Motion recommended  

---

### **Section 3 — Daily & Weekly Briefings (Coach Mode)**
**Purpose:** Show scheduled insights.  
**Requirements:**
- Morning briefing card  
- Weekly summary card  
- Goal progress bar  
- Cashflow projection mini‑chart  

**Animation:**  
- Cards slide in sequentially  

---

### **Section 4 — ChatGPT & Copilot Integrations (Advisor Mode)**
**Purpose:** Show conversational intelligence.  
**Requirements:**
- Mock ChatGPT window  
- Mock Copilot sidebar  
- Example queries:  
  - “Explain this transaction”  
  - “Can I afford this?”  
  - “How am I doing this month?”  

**Animation:**  
- Typing effect for AI responses  

---

### **Section 5 — n8n Automations (Builder Mode)**
**Purpose:** Appeal to power users.  
**Requirements:**
- Visual mock of n8n workflow  
- Example nodes:  
  - Trigger: “New transaction”  
  - Condition: “Category = Subscriptions”  
  - Action: “Notify me”  

**Animation:**  
- Node connections animate on scroll  

---

### **Section 6 — Privacy & Security**
**Purpose:** Build trust.  
**Requirements:**
- Icons + short text  
- “Bank‑grade encryption”  
- “You control your data”  
- “We never see your credentials”  
- “Powered by licensed AISP partners”  

---

### **Section 7 — Vision / Why Now**
**Purpose:** Sell the long‑term ambition.  
**Requirements:**
- Short paragraph  
- Visual timeline:  
  - PSD2 standardization  
  - AI agent ecosystems  
  - Fragmented accounts → unified intelligence  

---

### **Section 8 — Early Access Signup**
**Purpose:** Convert.  
**Requirements:**
- Email form  
- Optional: one question (“What would you use this for?”)  
- Success message  
- GDPR checkbox  

---

## 4. **Functional Requirements**

### **4.1 Animations**
- Must be smooth and GPU‑accelerated  
- Must not block scroll  
- Must degrade gracefully on mobile  

### **4.2 Responsiveness**
- Mobile-first  
- Tablet and desktop breakpoints  
- Touch-friendly scroll animations  

### **4.3 Accessibility**
- Semantic HTML  
- ARIA labels  
- High contrast mode  

### **4.4 Performance**
- Lighthouse score > 90  
- Lazy-load heavy assets  
- Use Next.js Image component  

---

## 5. **Non-Functional Requirements**
- Code must be modular and component-based  
- All text content must be editable via a single config file  
- Animations must be reusable components  
- No backend dependencies except signup endpoint  

---

# 🛠 **IMPLEMENTATION PLAN — Step-by-Step**

## **Phase 1 — Project Setup (1 day)**
- Initialize Next.js + TypeScript  
- Install TailwindCSS  
- Install Framer Motion  
- Set up basic folder structure  
- Add global layout + fonts  

---

## **Phase 2 — Core Sections (3–5 days)**

### **2.1 Hero Section**
- Build layout  
- Add CTA scroll anchors  
- Add subtle background animation  

### **2.2 Real-Time Reactions**
- Create transaction timeline component  
- Add AI reaction bubbles  
- Add scroll-triggered animations  

### **2.3 Daily/Weekly Briefings**
- Build card components  
- Add mini charts (static SVGs for MVP)  
- Add staggered animations  

### **2.4 ChatGPT & Copilot**
- Build mock chat windows  
- Add typing animation  
- Add scroll-triggered reveal  

### **2.5 n8n Automations**
- Build node components  
- Animate connections  
- Add scroll-triggered flow  

---

## **Phase 3 — Supporting Sections (1–2 days)**

### **3.1 Privacy & Security**
- Icons + text grid  

### **3.2 Vision / Why Now**
- Timeline component  

### **3.3 Signup Form**
- Build form  
- Connect to backend endpoint  
- Add success state  

---

## **Phase 4 — Backend (0.5–1 day)**
- Create `/api/signup` route  
- Store emails in:  
  - Supabase table  
  - or Airtable  
  - or JSON file (MVP)  

---

## **Phase 5 — Polish (1–2 days)**
- Add smooth scrolling  
- Add SEO metadata  
- Add OpenGraph image  
- Add analytics  
- Optimize images  
- Test on mobile  

---

## **Phase 6 — Deployment (0.5 day)**
- Deploy to Vercel  
- Test production build  
- Fix any layout issues  

---

# 🎯 **Deliverables for Coding Models**
You can now feed this specification into premium coding models in VSCode and ask them to:

- scaffold the project  
- generate components  
- implement animations  
- build the signup backend  
- optimize performance  
- produce the final landing page  