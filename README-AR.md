# بركات نت — النسخة المصححة بصور فعلية داخل المشروع (v3)

موقع عربي ثابت (HTML/CSS/JavaScript)، قابل للنشر عبر GitHub + Vercel، بدون أوامر وبدون قاعدة بيانات. الحجز يفتح رسالة واتساب جاهزة ولا يؤكد الحجز تلقائيًا.

## أهم إصلاح

النسخة المنشورة كانت تفتقد مجلد `assets` داخل مستودع GitHub، مع إن `index.html` يشير إلى صور داخله. ولهذا كانت الصور مكسورة. **لا ترفع ملف ZIP نفسه على GitHub**: فك الضغط أولًا وارفع الملفات ومجلد `assets` بمحتوياته وبنفس المسارات.

## رفع النسخة الجديدة إلى GitHub

1. على الكمبيوتر، نزّل `BarakatNet-Website-Images-Fixed.zip` وفك ضغطه.
2. افتح مستودعك: https://github.com/erth46yt/barakat-net (تأكد أن هذا هو المستودع المرتبط بـVercel).
3. من تبويب **Code** اضغط **Add file → Upload files**، أو افتح مباشرة: https://github.com/erth46yt/barakat-net/upload/main
4. اسحب **محتويات المجلد بعد فك الضغط** إلى منطقة الرفع؛ تحديدًا `index.html` و`style.css` و`script.js` و`favicon.svg` و`vercel.json` و`robots.txt` و**مجلد `assets` كاملًا**.
5. هيظهر أن الملفات الموجودة هتتبدل بنسخ أحدث، ومجلد `assets` هيتضاف. راجع القائمة ثم اضغط **Commit changes**.
6. افتح المستودع بعد الحفظ وتأكد من ظهور مجلد `assets`. افتحه وتأكد إن فيه `hero.webp` و`mof.webp` ومجلدي `games` و`products`.
7. بما إن GitHub مربوط بـVercel عندك، هيبدأ نشر النسخة الجديدة تلقائيًا من الفرع `main`. راجع **Vercel → Project → Deployments** إلى أن ينجح النشر.
8. افتح https://barakat-net.vercel.app واضغط **Ctrl+F5** لتحديث الصفحة بدون الكاش.

## تأكد بنفسك من حل الصور

افتح الروابط دي بعد اكتمال النشر:

- https://barakat-net.vercel.app/assets/mof.webp
- https://barakat-net.vercel.app/assets/store.webp
- https://barakat-net.vercel.app/assets/games/blur.webp
- https://barakat-net.vercel.app/assets/games/pubg.webp
- https://barakat-net.vercel.app/assets/products/rtx3060ti.webp

لو رابط صورة فتح مباشرة، يبقى السيرفر بيوصل لها. لو ظهر 404: إما ما اترفعتش على GitHub، أو مجلد `assets` داخل مجلد إضافي بالخطأ، أو نشر Vercel بيستخدم مستودع/فرع تاني.

## هيكل المشروع

```
barakat-net/
├─ index.html
├─ style.css
├─ script.js
├─ favicon.svg
├─ robots.txt
├─ vercel.json
├─ README-AR.md
└─ assets/
   ├─ hero.webp
   ├─ mof.webp
   ├─ store.webp
   ├─ gaming.webp
   ├─ snacks.webp
   ├─ ...
   ├─ games/
   │  ├─ blur.webp
   │  ├─ pubg.webp
   │  ├─ gtav.webp
   │  └─ ...
   └─ products/
      ├─ rtx3060ti.webp
      ├─ rtx3060.webp
      └─ ...
```

## تعديل الألعاب والأسعار

- `script.js`: قائمة `GAMES` (الألعاب) وقائمة `PRODUCTS` (القطع/الأسعار) وقائمة `GAME_ART` (الصورة لكل لعبة).
- `index.html`: نصوص الخدمات والواجهة والعروض والموقع والحجز.
- `style.css`: الألوان والشكل وأبعاد البطاقات.
- `assets/`: الصور، بأسماء بسيطة وأحرف صغيرة.

**ملاحظة مهمة:** صور الألعاب في `assets/games` هي اقتطاعات ترويجية من تصميمات بركات نت السابقة؛ لبعض الألعاب صور عامة حسب التصنيف بدل غلافها الرسمي. وصور بطاقات الرسومات والصور الداخلية تمثيلية وليست تصويرًا مضمونًا لنفس الموديل/حالته أو لهيئة المحل الفعلية. لا يثبت وجود لعبة في الموقع أنها متاحة على كل جهاز، ويجب تأكيد التوفر قبل الحجز. لا توجد شراكة رسمية مع ناشري الألعاب.

الصور كلها محلية ومرفقة داخل الـZIP، وليست معتمدة على خدمة صور خارجية. واتساب: 01043554348. الموقع: الإسكندرية — المندرة قبلي.
