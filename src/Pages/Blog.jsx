import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "আইনের চোখে ন্যায়বিচার",
    date: "১১ মে ২০২৫",
    image: "/public/blog1.jpg",
    content: `ন্যায়বিচার সমাজের মৌলিক ভিত্তি। একজন আইনজীবী হিসেবে আমাদের দায়িত্ব হলো বিচারপ্রার্থীদের সঠিক পথে পরিচালিত করা ও ন্যায়বিচার নিশ্চিত করা। এ প্রবন্ধে আলোচনা করা হবে কীভাবে আমরা প্রতিদিন আইনের মাধ্যমে সমাজে ইতিবাচক পরিবর্তন আনতে পারি।`,
  },
  {
    id: 2,
    title: "মামলার প্রস্তুতি ও পরিকল্পনা",
    date: "৯ মে ২০২৫",
    image: "/public/blog2.jpg",
    content: `প্রতিটি মামলার জন্য যথাযথ প্রস্তুতি এবং কৌশল নির্ধারণ গুরুত্বপূর্ণ। মামলার আগে তথ্য সংগ্রহ, সাক্ষ্য যাচাই এবং প্রমাণ বিশ্লেষণ করার মাধ্যমে আপনি কোর্টে সফলতা অর্জন করতে পারেন।`,

  },
  {
    id: 3,
    title: "আইনজীবীর নৈতিকতা ও দায়িত্ব",
    date: "৫ মে ২০২৫",
    image:  "/public/blog3.jpg",
    content: `একজন আইনজীবীর পেশাগত নৈতিকতা এবং সততা অত্যন্ত গুরুত্বপূর্ণ। একজন সৎ এবং দায়িত্বশীল আইনজীবী সমাজের সম্মান বৃদ্ধি করে এবং বিচার ব্যবস্থায় মানুষের আস্থা বাড়ায়।`,
  },

  {
    id: 4,
    title: "আইনের দৃষ্টিতে নারী অধিকার",
    date: "২ মে ২০২৫",
    image:  "/public/blog4.jpg",
    content: `নারীর অধিকার নিশ্চিত করতে আমাদের আইনজীবীদের সক্রিয় ভূমিকা রাখতে হবে। নারী নির্যাতন ও বৈষম্যের বিরুদ্ধে আইনি সহায়তা জরুরি।`,
  },
  {
    id: 5,
    title: "ডিজিটাল নিরাপত্তা আইন ও নাগরিক অধিকার",
    date: "৩০ এপ্রিল ২০২৫",
    image:  "/public/blog5.jpg",
    content: `ডিজিটাল নিরাপত্তা আইন যেমন নিরাপত্তা দেয়, তেমনি কখনো কখনো মতপ্রকাশের স্বাধীনতায় বাধা সৃষ্টি করতে পারে। সচেতনভাবে আইনের প্রয়োগ জরুরি।`,
  },
];

const Blog = () => {
  return (
    <div className="bg-orange-50 py-10 px-4 md:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-10">
   Our Blogs
      </h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-700 text-sm">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
