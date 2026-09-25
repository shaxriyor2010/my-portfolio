# Shaxriyorbek Usmonov - Zamonaviy Shaxsiy Portfolio

Next.js (App Router), React.js, Tailwind CSS va JavaScript asosida yaratilgan zamonaviy, to'liq responsive va ishlab chiqarishga tayyor (production-ready) shaxsiy portfolio veb-sayti.

---

## 🌟 Asosiy Imkoniyatlar

1. **3 Tilda To'liq Lokalizatsiya (i18n):**
   - 🇺🇿 **O'zbekcha** (Asosiy / Default)
   - 🇬🇧 **English**
   - 🇷🇺 **Русский**
   - Saytni qayta yuklamasdan (reload-siz) bir zumda barcha matnlarni tarjima qiladi.
   - Tanlangan til `localStorage` da avtomatik saqlanib qoladi.

2. **Dark & Light Rejim (Tungi va Kunduzgi):**
   - Sarlavhadagi (Header) chiroyli quyosh/oy tugmasi orqali almashtiriladi.
   - Silliq animatsiya (smooth transition) bilan ishlaydi.
   - Foydalanuvchi tanlovi eslab qolinadi.

3. **Glassmorphism & Premium UI:**
   - Shaffof va xiralashtirilgan fonlar (`backdrop-blur-xl`).
   - Neon va gradient nurlar (ambient floating glow & cursor spotlight).
   - Har bir tugma va kartada mikro-interaksiya (bosilganda shrink/bounce, sichqoncha kelganda lift & glow).

4. **"Asosiy" (Hero) Qismi:**
   - Dasturchi ismi va jonli status belgisi ("Yangi loyihalar uchun ochiq").
   - Typewriter (mashinkada yozilish) animatsiyasi (tanlangan tilga mos almashinadi).
   - Interaktiv profil kartasi va texnologiya orbit belgilari (React, Next.js, Tailwind).
   - Tezkor statistika: 2+ yil tajriba, 15+ loyihalar, 100% sifat.
   - "Loyihalarim" va "Bog'lanish" tugmalari orqali silliq scroll.

5. **"Men haqimda" (About Me) Qismi:**
   - HTML5, CSS3, Tailwind CSS, JavaScript, React.js va Next.js ko'nikmalarini batafsil yorituvchi blok.
   - Toza kod, moslashuvchan dizayn, yuqori unumdorlik va animatsiyalar kartalari.

6. **"Texnologiyalar & Bulutli Platformalar" (Tech Stack):**
   - Haqiqiy rangli piktogrammalar (icons): HTML5, CSS3, Tailwind CSS, JavaScript, React.js, Next.js, Git, GitHub, Vercel.
   - Har bir kartada hover-lift, neon glow va qisqa tushuntirish.
   - Kategoriyalar bo'yicha filtrlash (Frontend, Styling, Ecosystem).

7. **"Mening Loyihalarim" (My Projects):**
   - Filtrlash: Barchasi, Next.js, React.js, Fullstack.
   - Kartalarda brauzer ko'rinishidagi chiroyli mockup dizayn.
   - "Ko'rish" tugmasi bosilganda to'liq interaktiv tafsilotlar modal oynasi ochiladi.
   - GitHub repozitoriy tugmasi.
   - Barcha loyiha ma'lumotlari `data/projects.js` faylida alohida konfiguratsiya qilingan (xohlagan payt osongina o'zgartirish mumkin).

8. **"Bog'lanish" (Contact) Qismi:**
   - **Telegram:** `@usmonov_o26` (to'g'ridan-to'g'ri `https://t.me/usmonov_o26` manzilini yangi oynada ochadi).
   - **Gmail:** `usmonovshaxriyorbekh@gmail.com` (`mailto:` orqali pochta dasturini ochadi).
   - **Telefon:** `+998996908616` (`tel:` orqali qo'ng'iroq qilish oynasini ochadi).
   - **Nusxa olish (Copy) tugmasi:** har bir kontakt yonidagi tugma bosilganda matn nusxalanadi, bayramona konfetti (confetti) otiladi va "Nusxalandi!" bildirishi chiqadi.
   - **Interaktiv xabar yuborish formasi:** Ism, Email, Xabar maydonlari va yuborilgandan so'ng muvaffaqiyatli xabar animatsiyasi.

9. **Footer:**
   - Shaxriyorbek Usmonov mualliflik huquqi, ijtimoiy tarmoq piktogrammalari va "Tepaga qaytish" (Back to top) silliq scroll tugmasi.

---

## 📁 Loyiha Tuzilishi

```text
portfolio/
├── app/
│   ├── globals.css          # Tailwind CSS v4, dark mode va shisha effektlar
│   ├── layout.js            # Asosiy layout, shriftlar, SEO metadata, kontekstlar
│   └── page.js              # Bosh sahifa montaji
├── components/
│   ├── About.jsx            # Men haqimda bloki
│   ├── BackgroundEffects.jsx# Kursor yorug'ligi va suzuvchi gradient orblar
│   ├── ContactSection.jsx   # Aloqa kartalari, nusxa olish va xabar formasi
│   ├── Footer.jsx           # Pastki qism va tepaga qaytish tugmasi
│   ├── Hero.jsx             # Hero qismi, typewriter va profil kartasi
│   ├── LanguageSwitcher.jsx # 3 tildagi til tanlash tugmasi
│   ├── Navbar.jsx           # Fixed sarlavha, menyu va mobil panel
│   ├── ProjectModal.jsx     # Loyihalar tafsilotlari modal oynasi
│   ├── ProjectsSection.jsx  # Loyihalar ro'yxati va filtrlash
│   ├── TechStack.jsx        # Texnologiyalar & Bulutli Platformalar
│   └── ThemeToggle.jsx      # Dark / Light rejim tugmasi
├── context/
│   ├── LanguageContext.jsx  # Til konteksti va saqlash
│   └── ThemeContext.jsx     # Rejim (dark/light) konteksti
└── data/
    ├── projects.js          # Loyihalar ma'lumotlari (oson tahrirlanadi)
    ├── techStack.js         # Texnologiyalar ro'yxati va ta'riflari
    └── translations.js      # O'zbek, Ingliz, Rus tillaridagi barcha matnlar
```

---

## 🚀 Ishga Tushirish

Loyihani kompyuteringizda ishga tushirish uchun:

```bash
# 1. Loyiha papkasiga o'ting
cd C:\Users\Pro\.gemini\antigravity\scratch\portfolio

# 2. Ishlab chiqish serverini ishga tushiring
npm run dev

# Sayt http://localhost:3000 manzilida ochiladi
```

Ishlab chiqarishga tayyorlash (Production Build):

```bash
npm run build
npm run start
```

---

## ✏️ Loyihalarni O'zingiz Tahrirlash

Yangi loyihalar qo'shish yoki mavjudlarini o'zgartirish uchun `data/projects.js` faylini oching va quyidagi strukturada ma'lumotlarni kiriting:

```javascript
{
  id: "loyihangiz-nomi",
  category: "nextjs", // "nextjs", "react", yoki "fullstack"
  title: {
    uz: "Loyiha nomi",
    en: "Project Title",
    ru: "Название проекта"
  },
  shortDescription: {
    uz: "Qisqa ta'rif...",
    en: "Short description...",
    ru: "Краткое описание..."
  },
  tags: ["Next.js", "React.js", "Tailwind CSS"],
  liveUrl: "https://sizning-saytingiz.uz",
  githubUrl: "https://github.com/...",
  ...
}
```

---

## 🌐 Matnlarni Tahrirlash

Barcha sahifadagi matnlar, sarlavhalar va bo'limlar `data/translations.js` faylida jamlangan. U yerdan istalgan so'zni o'zbekcha, inglizcha yoki ruscha variantida tahrirlashingiz mumkin.
