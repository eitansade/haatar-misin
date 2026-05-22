export type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  categorySlug: string;
  status: "details" | "soon";
  ageRange?: string;
  emotionalBenefit?: string;
};

export type Category = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  points: string[];
};

export const categories: Category[] = [
  {
    slug: "nebulizers-asthma",
    title: "אינהלציות ואסטמה לילדים",
    subtitle: "להפוך נשימה לקצת פחות מפחידה",
    intro:
      "ילדים רבים מפחדים מאינהלציה ומציוד נשימה. הרעש, המסכה והמראה הרפואי יכולים לגרום ללחץ עוד לפני שהטיפול מתחיל.",
    points: ["מסכות מעוצבות", "צבעים מרגיעים", "דמויות אהובות", "אביזרים שהופכים את החוויה לנעימה יותר"],
  },
  {
    slug: "thermometers",
    title: "מדחומים לילדים",
    subtitle: "מד חום שלא מרגיש כמו בדיקה רפואית",
    intro:
      "מדידת חום יכולה להיות רגע מלחיץ עבור ילדים קטנים. לכן בחרנו מדחומים שנועדו להפוך את החוויה לידידותית יותר.",
    points: ["עיצובים צבעוניים", "דמויות חמודות", "צלילים נעימים", "תפעול פשוט ומהיר"],
  },
  {
    slug: "braces-supports",
    title: "קיבועים ומקבעים לילדים",
    subtitle: "לא עוד שחור, אפור ומבאס",
    intro:
      "קיבוע רפואי לא צריך לגרום לילד להרגיש שונה. בחרנו מוצרים שעוזרים לילדים להרגיש בטוחים בעצמם גם בזמן החלמה.",
    points: ["צבעים שמחים", "עיצובים מיוחדים", "דמויות וציורים", "חומרים נוחים יותר ליום יום"],
  },
  {
    slug: "wheelchairs",
    title: "כיסאות גלגלים לילדים",
    subtitle: "יותר צבע. יותר דמיון. יותר ביטחון.",
    intro:
      "כיסא גלגלים הוא חלק מהחיים של הילד, ולכן הוא לא צריך להרגיש קר ומבוגר. הקולקציה נועדה להפוך את החוויה לשמחה ואישית יותר.",
    points: ["עיצובים צבעוניים", "השראות מעולמות של ילדים", "אביזרים מותאמים", "מראה פחות רפואי ויותר חי"],
  },
  {
    slug: "bandages-plasters",
    title: "פלסטרים וחבישות לילדים",
    subtitle: "להפוך איי קטן לחיוך קטן",
    intro:
      "פלסטרים הם אולי הדבר הראשון שילד פוגש בעולם הטיפולים. בחרנו פלסטרים וחבישות עם צבעים, ציורים וחומרים נעימים יותר לעור.",
    points: ["צבעים כיפיים", "ציורים ודמויות", "עיצובים שמרגיעים ילדים", "חומרים נעימים יותר לעור"],
  },
  {
    slug: "mobility-support",
    title: "ציוד עזר ותנועה לילדים",
    subtitle: "לעזור לילדים לזוז בביטחון",
    intro:
      "הליכונים, קביים ואביזרי תמיכה לא צריכים להרגיש כבדים ומפחידים. בחרנו מוצרים שנועדו לתת לילדים יותר נוחות, ביטחון וצבע.",
    points: ["יותר נוחות", "יותר ביטחון", "יותר צבע ושמחה", "תחושה טבעית ונעימה יותר"],
  },
  {
    slug: "breathing-masks",
    title: "מסכות נשימה לילדים",
    subtitle: "מסכה שמרגישה פחות מאיימת",
    intro:
      "מסכות נשימה לילדים צריכות להיות רכות, ברורות ופחות מלחיצות, במיוחד ברגעים שבהם הילד כבר מתמודד עם פחד או קושי נשימתי.",
    points: ["התאמה לפנים קטנות", "צבעים רגועים", "תחושה רכה", "שימוש ביתי פשוט"],
  },
  {
    slug: "pulse-oximeters",
    title: "מד סטורציה לילדים",
    subtitle: "בדיקה קטנה, תחושה רגועה יותר",
    intro:
      "מד סטורציה יכול להרגיש כמו בדיקה מלחיצה. עיצוב ידידותי ותפעול פשוט יכולים לעזור לילדים לשתף פעולה מהר יותר.",
    points: ["תצוגה ברורה", "עיצוב קטן ונעים", "הפחתת לחץ", "שימוש מהיר להורים"],
  },
  {
    slug: "kids-crutches",
    title: "קביים לילדים",
    subtitle: "תמיכה שלא מרגישה כמו מגבלה",
    intro:
      "קביים לילדים יכולים להיות חלק מביך מהיום. צבע, התאמה ונוחות יכולים להפוך אותם לכלי שמחזיר ביטחון במקום לקחת אותו.",
    points: ["ידיות נוחות", "גובה מותאם", "אפשרות לצבעים", "תחושת עצמאות"],
  },
  {
    slug: "medicine-kits",
    title: "ערכות תרופות לילדים",
    subtitle: "להפוך טיפול יומיומי לברור ופחות מתיש",
    intro:
      "ערכות מסודרות יכולות לעזור להורים להפחית בלבול ולילדים להרגיש שהטיפול הוא חלק מנוהל רגוע ולא מאבק.",
    points: ["סדר ברור", "סימון ידידותי", "מקום לשמות", "מתאים לשגרת בית"],
  },
  {
    slug: "physio-equipment",
    title: "ציוד פיזיותרפיה לילדים",
    subtitle: "תרגול שיכול להרגיש כמו משחק",
    intro:
      "ציוד פיזיותרפיה לילדים צריך לעודד תנועה, התמדה וביטחון, בלי להרגיש כמו משימה רפואית כבדה.",
    points: ["צבעים מעודדים", "עיצוב משחקי עדין", "תרגול יומיומי", "חיזוק ביטחון"],
  },
  {
    slug: "color-back-supports",
    title: "מקבעי גב צבעוניים",
    subtitle: "גב זקוף יותר, ראש מורם יותר",
    intro:
      "מקבע גב יכול להיות מוצר מאוד רגיש חברתית. עיצוב צבעוני ואישי יכול לעזור לילד להרגיש פחות חשוף ויותר בטוח.",
    points: ["התאמה אישית", "עיצוב פחות רפואי", "נוחות לאורך היום", "תחושת גאווה"],
  },
  {
    slug: "walkers",
    title: "הליכונים לילדים",
    subtitle: "יותר עצמאות, פחות מבוכה",
    intro:
      "הליכון לילדים צריך לתמוך בתנועה, אבל גם בתחושת העצמאות של הילד. המראה והתחושה חשובים לא פחות מהיציבות.",
    points: ["יציבות", "גובה מותאם", "מראה ידידותי", "תנועה בטוחה"],
  },
  {
    slug: "rehab-equipment",
    title: "ציוד שיקום לילדים",
    subtitle: "שיקום עם יותר תקווה וצבע",
    intro:
      "ציוד שיקום פוגש ילדים בתקופות רגישות. לכן הוא צריך לשדר תקווה, רוך והתקדמות, לא רק פונקציונליות.",
    points: ["תחושת התקדמות", "עיצוב מרגיע", "שימוש חוזר", "חיזוק התמדה"],
  },
];

export const products: Product[] = [
  {
    id: "dino-nebulizer",
    title: "אינהלציה דינוזאור לילדים",
    description: "מכשיר נשימה ידידותי שמרגיש פחות רפואי ויותר מוכר לילדים.",
    price: "₪249",
    categorySlug: "nebulizers-asthma",
    status: "details",
    ageRange: "גילאי 3-10",
    emotionalBenefit: "מפחית פחד לפני טיפול נשימתי",
  },
  {
    id: "calm-mask",
    title: "מסכת אינהלציה צבעונית",
    description: "מסכת ילדים רכה עם צבעים מרגיעים לחוויית טיפול נעימה יותר.",
    price: "₪59",
    categorySlug: "nebulizers-asthma",
    status: "soon",
    ageRange: "גילאי 2-8",
    emotionalBenefit: "עוזרת לילד לשתף פעולה",
  },
  {
    id: "happy-thermometer",
    title: "מדחום מהיר בעיצוב חייכני",
    description: "מד חום פשוט, ברור ומהיר שמפחית לחץ בזמן מדידה.",
    price: "₪119",
    categorySlug: "thermometers",
    status: "details",
    ageRange: "גילאי 2-12",
    emotionalBenefit: "הופך מדידה לרגע פחות מלחיץ",
  },
  {
    id: "night-thermometer",
    title: "מדחום לילה ללא מגע",
    description: "מדידה עדינה לילדים ישנים עם תצוגה ברורה להורים.",
    price: "₪149",
    categorySlug: "thermometers",
    status: "soon",
    ageRange: "לכל המשפחה",
    emotionalBenefit: "פחות הפרעה ופחות לחץ בלילה",
  },
  {
    id: "color-brace",
    title: "מקבע צבעוני ליד",
    description: "מקבע נוח עם עיצוב שילדים יכולים להרגיש גאים ללבוש.",
    price: "₪179",
    categorySlug: "braces-supports",
    status: "details",
    ageRange: "גילאי 5-14",
    emotionalBenefit: "פחות מבוכה מול חברים",
  },
  {
    id: "back-support",
    title: "מקבע גב לילדים",
    description: "תמיכה יומיומית רכה יותר עם מקום לעיצובים וצבעים אישיים.",
    price: "₪289",
    categorySlug: "braces-supports",
    status: "soon",
    ageRange: "גילאי 7-14",
    emotionalBenefit: "יותר ביטחון בבית הספר",
  },
  {
    id: "space-wheelchair",
    title: "כיסא גלגלים בעיצוב חללית",
    description: "קונספט לכיסא גלגלים שמרגיש יותר אישי ופחות מגביל.",
    price: "₪1,490",
    categorySlug: "wheelchairs",
    status: "soon",
    ageRange: "בהתאמה אישית",
    emotionalBenefit: "מחזק תחושת בעלות וגאווה",
  },
  {
    id: "wheelchair-kit",
    title: "ערכת אביזרים לכיסא גלגלים",
    description: "אביזרים צבעוניים שמוסיפים תחושת בעלות ושמחה ביום יום.",
    price: "₪189",
    categorySlug: "wheelchairs",
    status: "details",
    ageRange: "גילאי 4-14",
    emotionalBenefit: "מוסיף צבע למוצר יומיומי",
  },
  {
    id: "smile-plasters",
    title: "פלסטרים עם ציורים",
    description: "פלסטרים צבעוניים שהופכים רגע קטן של כאב לקצת יותר קל.",
    price: "₪29",
    categorySlug: "bandages-plasters",
    status: "details",
    ageRange: "גילאי 2-10",
    emotionalBenefit: "הופך איי קטן לחיוך קטן",
  },
  {
    id: "soft-bandage",
    title: "חבישה רכה לילדים",
    description: "חבישה נעימה לעור עם מראה פחות רפואי ויותר ידידותי.",
    price: "₪39",
    categorySlug: "bandages-plasters",
    status: "soon",
    ageRange: "גילאי 3-12",
    emotionalBenefit: "מפחיתה תחושת טיפול קר",
  },
  {
    id: "color-crutches",
    title: "קביים צבעוניים לילדים",
    description: "ציוד תמיכה שנועד לעזור לילדים לזוז בביטחון ובנוחות.",
    price: "₪219",
    categorySlug: "kids-crutches",
    status: "details",
    ageRange: "גילאי 6-14",
    emotionalBenefit: "תומך בעצמאות בלי מבוכה",
  },
  {
    id: "play-care-kit",
    title: "ערכת טיפול משחקית",
    description: "ערכת עזר שמכניסה צבע ודמיון לרגעים רפואיים רגישים.",
    price: "₪89",
    categorySlug: "medicine-kits",
    status: "soon",
    ageRange: "גילאי 3-9",
    emotionalBenefit: "נותנת לילד תחושת שליטה",
  },
  {
    id: "friendly-oximeter",
    title: "מד סטורציה ידידותי לילדים",
    description: "בדיקה קטנה עם עיצוב רגוע ותצוגה ברורה להורים.",
    price: "₪139",
    categorySlug: "pulse-oximeters",
    status: "soon",
    ageRange: "גילאי 4-12",
    emotionalBenefit: "בדיקה קצרה שמרגישה פחות מאיימת",
  },
  {
    id: "physio-balance-kit",
    title: "ערכת תרגול פיזיותרפיה צבעונית",
    description: "אביזרי תרגול ביתיים שעוזרים להפוך התמדה למשהו נעים יותר.",
    price: "₪169",
    categorySlug: "physio-equipment",
    status: "details",
    ageRange: "גילאי 5-14",
    emotionalBenefit: "מעודד תנועה דרך משחק עדין",
  },
  {
    id: "walker-starter",
    title: "הליכון ילדים בעיצוב רך",
    description: "הליכון עם תחושה פחות כבדה ויותר מותאמת לעולם של ילדים.",
    price: "₪590",
    categorySlug: "walkers",
    status: "soon",
    ageRange: "בהתאמה אישית",
    emotionalBenefit: "יותר עצמאות ופחות מבוכה",
  },
  {
    id: "rehab-hope-kit",
    title: "ערכת שיקום ביתית לילדים",
    description: "קונספט לערכת שיקום שמכניסה תקווה, צבע וסדר לתהליך.",
    price: "₪249",
    categorySlug: "rehab-equipment",
    status: "soon",
    ageRange: "גילאי 6-14",
    emotionalBenefit: "מחזק התמדה וביטחון בתהליך",
  },
];

export const getCategoryProducts = (slug: string) =>
  products.filter((product) => product.categorySlug === slug);

export const featuredProducts = products.slice(0, 4);

export const lovedByParents = products.filter((product) =>
  ["dino-nebulizer", "color-brace", "smile-plasters", "physio-balance-kit"].includes(product.id),
);
