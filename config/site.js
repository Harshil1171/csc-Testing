/**
 * Central configuration for CSC Lok Vigyan Kendra Palanpur
 */

export const siteConfig = {
  name: "Community Science Center - Lok Vigyan Kendra",
  shortName: "CSC Palanpur",
  tagline: "Promoting Science & Energy Conservation",
  whatsappNumber: "919327013544",
  email: "cscpln142@gmail.com",
  email2: "bgvsf313@gmail.com",
  phone: "+91 9327013544",
  address: {
    line1: "Prajapti Chhatralaya",
    line2: "Ahmedabad Highway",
    city: "Palanpur",
    state: "Gujarat",
    pincode: "385001",
  },
};

/* Latest Jaherat / announcements for the home page. */
export const latestJaherat = [
  // {
  //   id: "summer-camp-2026",
  //   title: "Registration open for Summer Science Camp 2026",
  //   registrationUrl:
  //     "https://example.com/registration-form",
  //   note: "For students of Std. 6 to 10 limited seats.",
  // },
];

/** Build image paths for an event folder */
function eventImages(folderName, count) {
  const base = `/${folderName}/`;
  return Array.from({ length: count }, (_, i) => `${base}${i + 1}.jpeg`);
}

/** Slug from event title for routing/ids */
function slug(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[()']/g, "")
    .replace(/--+/g, "-")
    .trim();
}

const eventDefinitions = [
  { title: "AI Camp", imageCount: 4 },
  { title: "Bal Urja Rakshak Dal (BURD) Program", imageCount: 15 },
  { title: "Summer Camp", imageCount: 22 },
  { title: "Superstition Removal Program", imageCount: 6 },
  { title: "Teacher Orientation Program", imageCount: 19 },
  { title: "World Environment Day Celebration", imageCount: 10 },
  { title: "Sky Gazing", imageCount: 12 },
  { title: "Rural IT Quiz competition", imageCount: 12 },
  { title: "National Space Day", imageCount: 4 },
  { title: "National Science Seminar (NSS)", imageCount: 18 },
  { title: "National Science Drama Festival (NSDF)", imageCount: 9 },
  { title: "National Science Day (NSD) Celebration", imageCount: 10 },
  { title: "National Mathematics Day (NMD) Celebration", imageCount: 5 },
  { title: "National Children's Science Congress (NCSC)", imageCount: 22 },
  { title: "Matrubhasha Mahotsav Celebration", imageCount: 7 },
  {
    title: "Hand's On Drone RC plane making  Robotics",
    imageCount: 7,
  },
];

export const eventsGallery = eventDefinitions.map(({ title, imageCount }) => ({
  id: slug(title),
  title,
  description: `Glimpses from ${title}.`,
  images: eventImages(title, imageCount),
}));

/** Latest events for homepage: first image of each event, same display size (4/3). */
export const latestEvents = eventsGallery.slice(0, 6).map((event, i) => ({
  id: String(i + 1),
  title: event.title,
  date: "2025",
  summary: event.description,
  image: event.images[0],
  slug: event.id,
}));
