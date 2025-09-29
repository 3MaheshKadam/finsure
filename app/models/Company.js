import mongoose from 'mongoose';

const socialLinkSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., 'Facebook'
  href: { type: String, required: true }, // e.g., 'https://facebook.com/finsuresolutions'
  icon: { type: String, required: true }, // e.g., 'Facebook' (string name for lucide-react icon)
});

const linkSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., 'About Us'
  href: { type: String, required: true }, // e.g., '/about'
});

const statSchema = new mongoose.Schema({
  number: { type: String, required: true }, // e.g., '8+'
  label: { type: String, required: true }, // e.g., 'Years of Excellence'
  icon: { type: String, required: true }, // e.g., 'Calendar'
  color: { type: String, required: true }, // e.g., '#4248f8'
});

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., 'Rajesh Mehta'
  position: { type: String, required: true }, // e.g., 'Founder & CEO'
  experience: { type: String, required: true }, // e.g., '15+ years'
  image: { type: String, required: true }, // e.g., '👨‍💼' or image URL
  description: { type: String, required: true }, // e.g., 'Former VP at HDFC Bank...'
  linkedin: { type: String, required: true }, // e.g., '#'
  specialization: { type: String, required: true }, // e.g., 'Strategic Leadership'
});

const milestoneSchema = new mongoose.Schema({
  year: { type: String, required: true }, // e.g., '2016'
  event: { type: String, required: true }, // e.g., 'Company Founded'
  description: { type: String, required: true }, // e.g., 'Started with a vision...'
});

const achievementSchema = new mongoose.Schema({
  title: { type: String, required: true }, // e.g., 'Best Fintech Startup 2023'
  issuer: { type: String, required: true }, // e.g., 'Banking Technology Awards'
  icon: { type: String, required: true }, // e.g., 'Award'
  color: { type: String, required: true }, // e.g., '#4248f8'
});

const valueSchema = new mongoose.Schema({
  icon: { type: String, required: true }, // e.g., 'Heart'
  title: { type: String, required: true }, // e.g., 'Customer First'
  description: { type: String, required: true }, // e.g., 'Every decision we make...'
});

const missionVisionSchema = new mongoose.Schema({
  title: { type: String, required: true }, // e.g., 'Our Mission'
  content: { type: String, required: true }, // e.g., 'To democratize access...'
  icon: { type: String, required: true }, // e.g., 'Target'
});

const contactMethodSchema = new mongoose.Schema({
  icon: { type: String, required: true }, // e.g., 'Phone'
  title: { type: String, required: true }, // e.g., 'Call Us'
  subtitle: { type: String, required: true }, // e.g., 'Speak with our experts'
  details: { type: String, required: true }, // e.g., '+91 98765 43210'
  subDetails: { type: String, required: true }, // e.g., 'Mon-Sat: 9:00 AM - 6:00 PM'
  action: { type: String, required: true }, // e.g., 'Call Now'
  color: { type: String, required: true }, // e.g., '#4248f8'
  bgColor: { type: String, required: true }, // e.g., '#eff6ff'
});

const officeLocationSchema = new mongoose.Schema({
  city: { type: String, required: true }, // e.g., 'Pune (Head Office)'
  address: { type: String, required: true }, // e.g., 'Finsure Solutions Pvt Ltd...'
  phone: { type: String, required: true }, // e.g., '+91 98765 43210'
  email: { type: String, required: true }, // e.g., 'pune@finsuresolutions.com'
  timing: { type: String, required: true }, // e.g., 'Mon-Sat: 9:00 AM - 6:00 PM'
  isHeadOffice: { type: Boolean, required: true }, // e.g., true
});

const supportFeatureSchema = new mongoose.Schema({
  icon: { type: String, required: true }, // e.g., 'Headphones'
  title: { type: String, required: true }, // e.g., '24/7 Support'
  description: { type: String, required: true }, // e.g., 'Round-the-clock assistance...'
});

const companySchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., 'Finsure Solutions'
  tagline: { type: String, required: true }, // e.g., 'Your Financial Partner'
  description: { type: String, required: true }, // Company description
  logoLetter: { type: String, required: true }, // e.g., 'F' (for logo)
  address: { type: String, required: true }, // e.g., 'Kolhapur, Maharashtra, India'
  phone: { type: String, required: true }, // e.g., '+91 98765 43210'
  email: { type: String, required: true }, // e.g., 'info@finsuresolutions.com'
  website: { type: String, required: true }, // e.g., 'www.finsuresolutions.com'
  cin: { type: String, required: true }, // e.g., 'U65999MH2020PTC123456'
  gst: { type: String, required: true }, // e.g., '27AABCU9603R1ZX'
  disclaimer: { type: String, required: true }, // Disclaimer text
  supportHours: {
    weekdays: { type: String }, // e.g., '9:00 AM - 7:00 PM'
    saturday: { type: String }, // e.g., '9:00 AM - 5:00 PM'
    sunday: { type: String }, // e.g., '10:00 AM - 4:00 PM'
    emergency: { type: String }, // e.g., '24/7 Emergency Support'
  },
  socialLinks: [socialLinkSchema], // Array of social media links
  quickLinks: [linkSchema], // Array of quick links
  legalLinks: [linkSchema], // Array of legal links
  companyStats: [statSchema], // Array of company stats
  teamMembers: [teamMemberSchema], // Array of team members
  milestones: [milestoneSchema], // Array of milestones
  achievements: [achievementSchema], // Array of achievements
  values: [valueSchema], // Array of company values
  missionVision: {
    mission: missionVisionSchema,
    vision: missionVisionSchema,
  }, // Mission and vision
  contactMethods: [contactMethodSchema], // Array of contact methods
  officeLocations: [officeLocationSchema], // Array of office locations
  supportFeatures: [supportFeatureSchema], // Array of support features
}, { timestamps: true });
delete mongoose.models.Company;
const Company = mongoose.models.Company || mongoose.model('Company', companySchema);

export default Company;