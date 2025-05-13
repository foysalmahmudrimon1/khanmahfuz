import React from 'react';
import {
  Gavel,
  Scale3D,
  Briefcase,
  BookOpen,
  Users,
  ShieldCheck,
  Landmark,
  Banknote,
  FolderKanban,
  FileText,
  ScrollText,
  ClipboardList
} from 'lucide-react';

const services = [
  {
    icon: <Gavel className="h-10 w-10 text-gray-700 mx-auto" />,
    title: 'ফৌজদারি মামলা পরিচালনা',
    description: 'ফৌজদারি মামলার দক্ষ ও পেশাদার সহায়তা।'
  },
  {
    icon: <Scale3D className="h-10 w-10 text-gray-700 mx-auto" />,
    title: 'সিভিল মামলা পরিচালনা',
    description: 'দায়, জমিজমা, উত্তরাধিকারসহ বিভিন্ন সিভিল বিষয়।'
  },
  {
    icon: <Briefcase className="h-10 w-10 text-gray-700  mx-auto" />,
    title: 'কর্পোরেট আইন পরামর্শ',
    description: 'ব্যবসা ও কোম্পানি সংক্রান্ত আইনগত পরামর্শ।'
  },
  {
    icon: <BookOpen className="h-10 w-10 text-gray-700 mx-auto" />,
    title: 'চুক্তিপত্র খতিয়ে দেখা',
    description: 'চুক্তিপত্র রিভিউ ও বৈধতা যাচাই।'
  },
  {
    icon: <Users className="h-10 w-10 text-gray-700 mx-auto" />,
    title: 'পারিবারিক মামলা',
    description: 'বিবাহ, তালাক, ভরণপোষণ ও উত্তরাধিকার মামলা।'
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-gray-700  mx-auto" />,
    title: 'আইনগত পরামর্শ',
    description: 'যেকোনো আইনগত বিষয়ে পরামর্শ প্রদান।'
  },
  {
    icon: <Landmark className="h-10 w-10 text-gray-700 mx-auto" />,
    title: 'রেজিস্ট্রি ও জমি সংক্রান্ত সহায়তা',
    description: 'জমির দলিল, খতিয়ান ও মিউটেশন প্রসেস।'
  },
  {
    icon: <Banknote className="h-10 w-10 text-gray-700 mx-auto" />,
    title: 'ট্যাক্স ও ভ্যাট',
    description: 'ট্যাক্স রিটার্ন দাখিল, পরামর্শ ও আপিল।'
  },
  {
    icon: <FolderKanban className="h-10 w-10 text-gray-700  mx-auto" />,
    title: 'বাণিজ্যিক মামলা',
    description: 'বাণিজ্যিক বিরোধ নিষ্পত্তি ও মামলা পরিচালনা।'
  },
  {
    icon: <FileText className="h-10 w-10 text-gray-700 mx-auto" />,
    title: 'আইনি নোটিশ প্রেরণ',
    description: 'প্রতিপক্ষকে আইনি নোটিশ প্রেরণের সেবা।'
  },
  {
    icon: <ScrollText className="h-10 w-10 text-gray-700  mx-auto" />,
    title: 'ডকুমেন্ট রেজিস্ট্রেশন',
    description: 'চুক্তিপত্র, দলিল, পাওয়ার অব অ্যাটর্নি ইত্যাদি।'
  },
  {
    icon: <ClipboardList className="h-10 w-10 text-gray-700 mx-auto" />,
    title: 'দ্রুত মামলা স্ট্যাটাস আপডেট',
    description: 'মামলার অবস্থা দ্রুত জানার বিশেষ সুবিধা।'
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">Our Services</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center relative"
            >
              <div className="absolute inset-0 rounded-2xl z-0 group-hover:animate-border-glow pointer-events-none"></div>
              <div className="relative z-10">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-orange-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
