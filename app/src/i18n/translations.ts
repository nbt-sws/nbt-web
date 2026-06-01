export interface Translations {
  nav: { home: string; about: string; services: string; products: string; contact: string; cta: string };
  hero: { label: string; title1: string; title2: string; subtitle: string; btnPrimary: string; btnSecondary: string };
  about: { label: string; title: string; p1: string; highlight1: string; highlight2: string; highlight3: string; p1end: string; p2: string; statReg: string; statRegVal: string; statCat: string; statCatVal: string; statLoc: string; statLocVal: string };
  services: { label: string; title: string; subtitle: string; items: { title: string; desc: string }[] };
  products: { label: string; title: string; subtitle: string; items: { image: string; category: string; name: string; desc: string }[] };
  contact: { label: string; title: string; subtitle: string; formTitle: string; name: string; namePlaceholder: string; email: string; emailPlaceholder: string; message: string; messagePlaceholder: string; submit: string; submitting: string; success: string; error: string; info: { icon: string; title: string; detail: string }[] };
  footer: { tagline: string; quickLinks: string; contactInfo: string; copyright: string };
  lang: string;
}

export type Lang = 'th' | 'en';

export const translations: Record<Lang, Translations> = {
  th: {
    nav: {
      home: 'หน้าหลัก',
      about: 'เกี่ยวกับเรา',
      services: 'บริการ',
      products: 'ผลิตภัณฑ์',
      contact: 'ติดต่อ',
      cta: 'สอบถามราคา',
    },
    hero: {
      label: 'NBT COLLECTIBLES CO., LTD.',
      title1: 'ปกป้องของสะสมทรงคุณค่า',
      title2: 'ด้วยมาตรฐานระดับพรีเมียม',
      subtitle: 'ออกแบบ ผลิต พัฒนา และจำหน่ายอุปกรณ์จัดเก็บ จัดแสดง และปกป้องของสะสมทุกรูปแบบ พระเครื่อง การ์ดเกม โมเดลฟิกเกอร์ และของสะสมทุกประเภท',
      btnPrimary: 'ดูผลิตภัณฑ์',
      btnSecondary: 'ติดต่อเรา',
    },
    about: {
      label: 'เกี่ยวกับเรา',
      title: 'NBT Collectibles Co., Ltd.',
      p1: 'บริษัท เอ็นบีที คอลเลคทิเบิลส์ จำกัด เป็นผู้เชี่ยวชาญในการออกแบบ ผลิต พัฒนา และจำหน่ายอุปกรณ์สำหรับการจัดเก็บ จัดแสดง และปกป้องของสะสมทุกประเภท ไม่ว่าจะเป็น ',
      highlight1: 'พระเครื่อง',
      highlight2: 'การ์ดเกม',
      highlight3: 'โมเดลฟิกเกอร์',
      p1end: ' หรือของสะสมอื่นๆ เรามุ่งมั่นสร้างสรรค์ผลิตภัณฑ์ที่ผสมผสานระหว่างความสวยงามและการปกป้องที่สมบูรณ์แบบ',
      p2: 'ด้วยประสบการณ์และความเข้าใจในความต้องการของนักสะสมทุกกลุ่ม เราพัฒนาอุปกรณ์ที่ตอบโจทย์ทุกรูปแบบ ตั้งแต่กล่องอะคริลิคใสสำหรับโมเดล ซองใส่การ์ดกันรังสี UV กล่องพระเครื่องบุกำมะหยี่ ไปจนถึงระบบจัดเก็บที่ป้องกันความชื้น',
      statReg: 'เลขทะเบียน',
      statRegVal: '0835569007655',
      statCat: 'หมวดธุรกิจ',
      statCatVal: 'กิจกรรมการออกแบบเฉพาะด้าน',
      statLoc: 'ที่ตั้ง',
      statLocVal: 'ภูเก็ต ประเทศไทย',
    },
    services: {
      label: 'บริการของเรา',
      title: 'ครบวงจร ตั้งแต่ออกแบบจัดส่ง',
      subtitle: 'เราให้บริการครอบคลุมทุกขั้นตอน เพื่อมอบสิ่งที่ดีที่สุดสำหรับของสะสมอันมีค่าของคุณ',
      items: [
        { title: 'ออกแบบเฉพาะทาง', desc: 'ออกแบบอุปกรณ์จัดเก็บและจัดแสดงตามความต้องการเฉพาะของแต่ละประเภทของสะสม' },
        { title: 'ผลิตด้วยคุณภาพ', desc: 'ผลิตด้วยวัสดุเกรดพรีเมียมและกระบวนการควบคุมคุณภาพเข้มงวด' },
        { title: 'พัฒนานวัตกรรม', desc: 'คิดค้นและพัฒนาเทคโนโลยีใหม่ๆ เพื่อการปกป้องที่เหนือกว่า' },
        { title: 'จำหน่ายทั่วโลก', desc: 'จัดส่งผลิตภัณฑ์คุณภาพสู่นักสะสมทุกภูมิภาค' },
      ],
    },
    products: {
      label: 'ผลิตภัณฑ์',
      title: 'อุปกรณ์จัดเก็บและจัดแสดง',
      subtitle: 'ผลิตภัณฑ์หลากหลายสำหรับนักสะสม พระเครื่อง การ์ดเกม โมเดลฟิกเกอร์ และของสะสมทุกประเภท',
      items: [
        { image: '/product-amulet.jpg', category: 'กล่องพระเครื่อง', name: 'กล่องโชว์พระเครื่องบุกำมะหยี่', desc: 'กล่องจัดเก็บและโชว์พระเครื่องคุณภาพสูง บุกำมะหยี่แท้ ป้องกันรอยขีดข่วนและความชื้น' },
        { image: '/product-sleeve.jpg', category: 'ซองใส่การ์ด', name: 'ซองปกป้องการ์ดเกม', desc: 'ซองใส่การ์ดกันรังสี UV ความหนาพิเศษ รองรับการ์ดเกมทุกขนาดมาตรฐาน' },
        { image: '/product-acrylic.jpg', category: 'กล่องอะคริลิค', name: 'กล่องโชว์อะคริลิคใส', desc: 'กล่องใสคุณภาพสูงสำหรับฟิกเกอร์ โมเดล และของสะสมขนาดต่างๆ' },
        { image: '/product-display.jpg', category: 'ชั้นวาง / ตู้โชว์', name: 'ตู้โชว์อะคริลิคพรีเมียม', desc: 'ตู้โชว์แบบพิเศษสำหรับจัดแสดงพระเครื่อง การ์ด และโมเดล' },
        { image: '/product-uv.jpg', category: 'ฟิล์มกัน UV', name: 'ฟิล์มกันรังสี UV', desc: 'ฟิล์มเคลือบพิเศษกันรังสี UV ถึง 99% ปกป้องสีและรายละเอียด' },
        { image: '/product-humidity.jpg', category: 'ควบคุมความชื้น', name: 'ชุดดูดซับความชื้น', desc: 'แผ่นซิลิก้าเจลพรีเมียมและเครื่องวัดความชื้น ควบคุมสภาพแวดล้อมภายในกล่อง' },
      ],
    },
    contact: {
      label: 'ติดต่อเรา',
      title: 'พร้อมให้คำปรึกษา',
      subtitle: 'ติดต่อเราเพื่อสอบถามข้อมูล ขอใบเสนอราคา หรือปรึกษาเกี่ยวกับอุปกรณ์จัดเก็บของสะสม',
      formTitle: 'ส่งข้อความถึงเรา',
      name: 'ชื่อ',
      namePlaceholder: 'ชื่อของคุณ',
      email: 'อีเมล',
      emailPlaceholder: 'email@example.com',
      message: 'ข้อความ',
      messagePlaceholder: 'รายละเอียดที่ต้องการสอบถาม...',
      submit: 'ส่งข้อความ',
      submitting: 'กำลังส่ง...',
      success: 'ข้อความของคุณถูกส่งเรียบร้อยแล้ว',
      error: 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง',
      info: [
        { icon: 'MapPin', title: 'ที่อยู่', detail: '20/50 หมู่ที่ 3 ซอยทรงคุณอุทิศ ถนนเจ้าฟ้าตะวันออก ตำบลวิชิต อำเภอเมืองภูเก็ต จังหวัดภูเก็ต 83000' },
        { icon: 'Phone', title: 'โทรศัพท์', detail: 'สอบถามผ่านแบบฟอร์มหรืออีเมล' },
        { icon: 'Mail', title: 'อีเมล', detail: 'info@nbt.co.th' },
        { icon: 'Clock', title: 'เวลาทำการ', detail: 'จันทร์ - ศุกร์: 08:30 - 17:30 น.' },
      ],
    },
    footer: {
      tagline: 'ออกแบบ ผลิต พัฒนา และจำหน่ายอุปกรณ์สำหรับของสะสม',
      quickLinks: 'ลิงก์ด่วน',
      contactInfo: 'ข้อมูลติดต่อ',
      copyright: '© 2025 NBT Collectibles Co., Ltd. — เลขทะเบียน 0835569007655',
    },
    lang: 'ไทย / EN',
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      products: 'Products',
      contact: 'Contact',
      cta: 'Get a Quote',
    },
    hero: {
      label: 'NBT COLLECTIBLES CO., LTD.',
      title1: 'Protect Your Treasured Collectibles',
      title2: 'With Premium-Grade Standards',
      subtitle: 'Design, manufacture, develop, and distribute storage, display, and protection equipment for all types of collectibles — Buddha amulets, trading cards, figurines, and more.',
      btnPrimary: 'View Products',
      btnSecondary: 'Contact Us',
    },
    about: {
      label: 'ABOUT US',
      title: 'NBT Collectibles Co., Ltd.',
      p1: 'NBT Collectibles Co., Ltd. is an expert in designing, manufacturing, developing, and distributing storage, display, and protection equipment for all types of collectibles. Whether it is ',
      highlight1: 'Buddha amulets',
      highlight2: 'trading cards',
      highlight3: 'model figurines',
      p1end: ', or other collectibles, we are dedicated to creating products that blend beauty with perfect protection.',
      p2: 'With experience and understanding of collectors\' needs across all groups, we develop equipment that meets every requirement — from clear acrylic boxes for models, UV-resistant card sleeves, velvet-lined Buddha amulet cases, to humidity-controlled storage systems.',
      statReg: 'Registration No.',
      statRegVal: '0835569007655',
      statCat: 'Business Category',
      statCatVal: 'Specialized Design Activities',
      statLoc: 'Location',
      statLocVal: 'Phuket, Thailand',
    },
    services: {
      label: 'OUR SERVICES',
      title: 'End-to-End, From Design to Delivery',
      subtitle: 'We provide comprehensive services to deliver the very best for your precious collectibles.',
      items: [
        { title: 'Custom Design', desc: 'Designing storage and display equipment tailored to the specific needs of each collectible type.' },
        { title: 'Quality Manufacturing', desc: 'Produced with premium materials and rigorous quality control processes.' },
        { title: 'Innovation & Development', desc: 'Inventing and developing new technologies for superior protection.' },
        { title: 'Worldwide Distribution', desc: 'Delivering quality products to collectors across all regions.' },
      ],
    },
    products: {
      label: 'PRODUCTS',
      title: 'Storage & Display Equipment',
      subtitle: 'A wide range of products for collectors of Buddha amulets, trading cards, model figurines, and all types of collectibles.',
      items: [
        { image: '/product-amulet.jpg', category: 'Amulet Case', name: 'Velvet-Lined Buddha Amulet Display Case', desc: 'Premium velvet-lined display and storage case for Buddha amulets, prevents scratches and humidity.' },
        { image: '/product-sleeve.jpg', category: 'Card Sleeves', name: 'Trading Card Protective Sleeves', desc: 'UV-resistant card sleeves with extra thickness, fits all standard trading card sizes.' },
        { image: '/product-acrylic.jpg', category: 'Acrylic Case', name: 'Clear Acrylic Display Case', desc: 'High-quality clear case for figurines, models, and collectibles of all sizes.' },
        { image: '/product-display.jpg', category: 'Display Stand', name: 'Premium Acrylic Display Cabinet', desc: 'Special display cabinet for showcasing Buddha amulets, cards, and figurines.' },
        { image: '/product-uv.jpg', category: 'UV Film', name: 'UV Protection Film', desc: 'Special coating film that blocks 99% of UV rays, protecting colors and details.' },
        { image: '/product-humidity.jpg', category: 'Humidity Control', name: 'Premium Humidity Absorber Set', desc: 'Premium silica gel sheets and humidity meter for controlling storage environment.' },
      ],
    },
    contact: {
      label: 'CONTACT US',
      title: 'Ready to Assist You',
      subtitle: 'Contact us for inquiries, quotations, or consultation about collectible storage equipment.',
      formTitle: 'Send us a message',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'email@example.com',
      message: 'Message',
      messagePlaceholder: 'What would you like to inquire about...',
      submit: 'Send Message',
      submitting: 'Sending...',
      success: 'Your message has been sent successfully.',
      error: 'An error occurred. Please try again.',
      info: [
        { icon: 'MapPin', title: 'Address', detail: '20/50 Moo 3, Songkhun Uthit Alley, Chao Fa Tawan Tok Road, Vichit Subdistrict, Mueang Phuket District, Phuket 83000, Thailand' },
        { icon: 'Phone', title: 'Phone', detail: 'Contact us via form or email' },
        { icon: 'Mail', title: 'Email', detail: 'info@nbt.co.th' },
        { icon: 'Clock', title: 'Business Hours', detail: 'Mon - Fri: 08:30 - 17:30' },
      ],
    },
    footer: {
      tagline: 'Design, Manufacture, Develop, and Distribute Equipment for Collectibles',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      copyright: '© 2025 NBT Collectibles Co., Ltd. — Registration No. 0835569007655',
    },
    lang: 'EN / ไทย',
  },
};
