// Mock data. Replace with API calls when you connect a backend.
export const me = { name: 'Amina Rahman', title: 'Founder, Noor Bakery', city: 'Manchester, UK', email: 'amina@example.com' }

export const posts = [
  { id: 1, author: 'MBO Moderators', role: 'Announcement', time: '2h', text: 'Networking evening this Thursday at the Manchester hub. Bring a card, leave with three new contacts.', likes: 42 },
  { id: 2, author: 'Yusuf Khan', role: 'Khan Logistics', time: '5h', text: 'We now offer next-day pallet delivery across the North West. Community members get 10% off the first booking.', likes: 18 },
  { id: 3, author: 'Maryam Ali', role: 'Halal Eats Co.', time: '1d', text: 'Looking for a reliable packaging supplier in Birmingham. Recommendations welcome.', likes: 9 },
]

export const people = [
  { id: 1, name: 'Yusuf Khan', title: 'Khan Logistics', city: 'Leeds' },
  { id: 2, name: 'Maryam Ali', title: 'Halal Eats Co.', city: 'Birmingham' },
  { id: 3, name: 'Hamza Sheikh', title: 'Sheikh & Partners, Accountants', city: 'London' },
  { id: 4, name: 'Zainab Malik', title: 'Modest Studio', city: 'Bradford' },
  { id: 5, name: 'Ibrahim Noor', title: 'Noor Digital', city: 'Dubai' },
  { id: 6, name: 'Sara Ahmed', title: 'Ahmed Legal', city: 'Manchester' },
]

export const categories = ['All', 'Food', 'Finance', 'Retail', 'Tech', 'Services']
export const businesses = [
  { id: 1, name: 'Noor Bakery', cat: 'Food', city: 'Manchester', phone: '+44 161 000 0001', about: 'Fresh bread, baklava and celebration cakes. Fully halal kitchen.' },
  { id: 2, name: 'Sheikh & Partners', cat: 'Finance', city: 'London', phone: '+44 20 0000 0002', about: 'Accounting, tax and Islamic finance advisory for small business.' },
  { id: 3, name: 'Modest Studio', cat: 'Retail', city: 'Bradford', phone: '+44 1274 000003', about: 'Contemporary modest fashion, designed and made in the UK.' },
  { id: 4, name: 'Noor Digital', cat: 'Tech', city: 'Dubai', phone: '+971 4 000 0004', about: 'Websites, apps and branding for values-led companies.' },
  { id: 5, name: 'Khan Logistics', cat: 'Services', city: 'Leeds', phone: '+44 113 000 0005', about: 'Pallet and parcel delivery across the North West.' },
  { id: 6, name: 'Halal Eats Co.', cat: 'Food', city: 'Birmingham', phone: '+44 121 000 0006', about: 'Catering for weddings, corporate events and Eid gatherings.' },
]

export const cars = [
  { id: 1, title: '2019 Toyota Corolla Hybrid', price: 14500, city: 'Manchester', meta: '42,000 mi · Automatic · Hybrid', seller: 'Bilal H.' },
  { id: 2, title: '2021 Tesla Model 3', price: 24900, city: 'London', meta: '18,000 mi · Automatic · Electric', seller: 'Omar S.' },
  { id: 3, title: '2017 Honda Civic', price: 9800, city: 'Leeds', meta: '61,000 mi · Manual · Petrol', seller: 'Idris K.' },
  { id: 4, title: '2020 Mercedes A-Class', price: 19750, city: 'Birmingham', meta: '27,000 mi · Automatic · Petrol', seller: 'Fatima Z.' },
]

export const properties = [
  { id: 1, title: '3-bed semi-detached house', price: 245000, kind: 'Sale', city: 'Bolton', meta: '3 bed · 1 bath · Garden' },
  { id: 2, title: '2-bed city apartment', price: 1350, kind: 'Rent', city: 'Manchester', meta: '2 bed · 2 bath · Per month' },
  { id: 3, title: 'Ground-floor shop unit', price: 2200, kind: 'Rent', city: 'Bradford', meta: '65 m² · High street · Per month' },
  { id: 4, title: '4-bed detached family home', price: 410000, kind: 'Sale', city: 'Leicester', meta: '4 bed · 2 bath · Driveway' },
]

export const chats = [
  { id: 1, name: 'Yusuf Khan', last: 'Sounds good, I will send the quote.', msgs: [
    { from: 'them', text: 'Assalamu alaikum, saw your post about delivery.' },
    { from: 'me', text: 'Wa alaikum assalam! Do you cover Bolton?' },
    { from: 'them', text: 'Sounds good, I will send the quote.' } ] },
  { id: 2, name: 'Northwest Founders (group)', last: 'Hamza: See you all Thursday', msgs: [
    { from: 'them', text: 'Hamza: See you all Thursday' } ] },
  { id: 3, name: 'Bilal H. (Corolla)', last: 'Still available, viewing is fine.', msgs: [
    { from: 'me', text: 'Is the Corolla still available?' },
    { from: 'them', text: 'Still available, viewing is fine.' } ] },
]

export const notifications = [
  { id: 1, text: 'Yusuf Khan accepted your connection request.', time: '10m' },
  { id: 2, text: 'Your post was approved by a moderator.', time: '1h' },
  { id: 3, text: 'New listing in AutoTrade near you: 2020 Mercedes A-Class.', time: '3h' },
  { id: 4, text: 'Maryam Ali sent you a message.', time: '1d' },
]

export const events = [
  { id: 1, title: 'Northwest Founders Networking Evening', date: 'Thu 29 Oct', place: 'Manchester hub' },
  { id: 2, title: 'Halal Investing Workshop', date: 'Sat 7 Nov', place: 'Online' },
  { id: 3, title: 'Eid Business Bazaar planning call', date: 'Wed 11 Nov', place: 'Online' },
]
export const communities = [
  { id: 1, name: 'MBO Property & Investment', cat: 'Business', members: 1240, official: true },
  { id: 2, name: 'Fantasy Premier League', cat: 'Football', members: 860, official: false },
  { id: 3, name: 'Women in Business', cat: 'Business', members: 640, official: true },
  { id: 4, name: 'Modest Fashion Makers', cat: 'Fashion', members: 410, official: false },
  { id: 5, name: 'Halal Food Founders', cat: 'Business', members: 530, official: true },
  { id: 6, name: 'Faith & Focus', cat: 'Faith', members: 975, official: false },
]
export const products = [
  { id: 1, title: 'Wireless Bluetooth Headphones', price: 45, city: 'Manchester', meta: 'New · Free delivery', seller: 'Sana T.' },
  { id: 2, title: 'Handwoven prayer mat', price: 22, city: 'Bradford', meta: 'New · Cotton', seller: 'Modest Studio' },
  { id: 3, title: 'Oud perfume oil, 12ml', price: 30, city: 'London', meta: 'New · Alcohol free', seller: 'Amal K.' },
]
export const services = [
  { id: 1, title: 'Bookkeeping for small business', price: 60, city: 'London', meta: 'Per hour · Remote', seller: 'Sheikh & Partners' },
  { id: 2, title: 'Logo and brand identity', price: 250, city: 'Dubai', meta: 'Fixed price · 2 weeks', seller: 'Noor Digital' },
  { id: 3, title: 'Arabic tutoring', price: 20, city: 'Leeds', meta: 'Per hour · 1 to 1', seller: 'Idris K.' },
]
export const skills = ['Financial Analysis', 'Financial Planning', 'Business Strategy', 'Investment Management']
export const points = { total: 270, referral: 40, breakdown: [['Referral points', 'Friends who joined with your code', 40], ['Engagement points', 'Posting, reacting and showing up', 230]], code: 'AMINA270' }
