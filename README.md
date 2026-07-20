# Abdullah Games Platform 🎮

منصة ألعاب ويب متكاملة مع واجهة أمامية احترافية وخادم Backend قوي.

## 🎯 الألعاب المتاحة

### 1️⃣ **X-O Ultimate** (`xo-ultimate.html`)
- لعبة إكس أو الكلاسيكية محسّنة
- دعم لوحات بأحجام مختلفة (3×3 إلى 10×10)
- ساعات شطرنج للاعبين
- نظام نقاط متقدم

### 2️⃣ **Chess 1** (`chess-1.html`)
- لعبة شطرنج كلاسيكية
- قواعس احترافية
- لوحة تفاعلية كاملة
- مناسبة للمبتدئين

### 3️⃣ **Chess 2** (`chess-2.html`)
- لعبة شطرنج متقدمة
- عرض الحركات الممكنة
- تاريخ الحركات
- خصائص إضافية متقدمة

### 4️⃣ **Racing 3D** (`racing-3d.html`)
- لعبة سباق سيارات ثلاثية الأبعاد
- محرك فيزياء واقعي
- عرض معلومات السباق الفورية (HUD)
- تحكم سلس وسريع الاستجابة

---

## 🚀 Backend API (Node.js + Express)

### المتطلبات
```bash
npm install
```

### تشغيل الخادم
```bash
npm start
```

الخادم سيعمل على: `http://localhost:5000`

### API Endpoints

#### 👤 المستخدمين
- `GET /api/users` - جميع المستخدمين
- `GET /api/users/:id` - مستخدم محدد
- `POST /api/users` - إنشاء مستخدم جديد
- `PUT /api/users/:id` - تحديث البيانات

#### 🎮 النقاط والتصنيفات
- `POST /api/scores` - حفظ نتيجة لعبة
- `GET /api/scores/:gameType` - نقاط لعبة محددة
- `GET /api/leaderboard/:gameType` - أفضل اللاعبين
- `GET /api/scores/:userId/:gameType` - أفضل نتيجة للاعب

#### 🏆 الإنجازات
- `GET /api/achievements/:userId` - إنجازات اللاعب
- `POST /api/achievements` - منح إنجاز جديد

#### 📊 الإحصائيات
- `GET /api/stats/:userId` - إحصائيات اللاعب
- `GET /api/game-stats/:gameType` - إحصائيات اللعبة

#### 🧪 الاختبارات
- `GET /api/tests/:gameType` - اختبارات لعبة محددة
- `POST /api/tests` - إنشاء اختبار جديد

---

## 📂 هيكل المشروع

```
/
├── index.html              # الصفحة الرئيسية
├── xo-ultimate.html        # لعبة X-O
├── chess-1.html            # الشطرنج النسخة الأولى
├── chess-2.html            # الشطرنج النسخة المتقدمة
├── racing-3d.html          # لعبة السباق
├── server.js               # خادم Express
├── database.js             # نظام إدارة قاعدة البيانات
├── api-client.js           # عميل API للواجهة الأمامية
└── package.json            # معلومات المشروع والمكتبات
```

---

## 💡 الميزات

✅ واجهة مستخدم حديثة وجذابة (Neon Theme)
✅ ألعاب متنوعة وممتعة
✅ نظام تصنيف عام (Leaderboard)
✅ نظام إنجازات (Achievements)
✅ إحصائيات تفصيلية للاعبين
✅ واجهة Backend قوية وقابلة للتوسع
✅ API مفتوح للتكامل
✅ دعم اللغة العربية كاملة

---

## 🔧 تقنيات التطوير

### Frontend
- HTML5
- CSS3 (Animations & Gradients)
- JavaScript (ES6+)
- Canvas API

### Backend
- Node.js
- Express.js
- CORS Support
- Body Parser

---

## 👨‍💻 المطور

**Abdullah** - Web Developer & Game Designer

---

## 📝 الترخيص

MIT License - استخدم بحرية

---

## 🤝 المساهمة

لديك فكرة لتحسين اللعبة؟ شارك بها معنا!

---

**آخر تحديث:** 2026
