// "use client";

// import React, { useState } from "react";
// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import { Textarea } from "../../components/ui/textarea";
// import { Card, CardContent } from "../../components/ui/card";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contact: "",
//     company: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       contact: "",
//       company: "",
//       message: "",
//     });
//     setIsSubmitting(false);
//     alert("Thank you for your message! We'll get back to you soon.");
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <div>
//         {/* Banner */}
//         <div
//           className="w-full h-[300px] md:h-[400px] bg-cover bg-center relative"
//           style={{
//             backgroundImage:
//               "url('https://images.pexels.com/photos/6153345/pexels-photo-6153345.jpeg?auto=compress&cs=tinysrgb&w=1600')",
//           }}
//         >
//           <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
//             <h1 className="text-4xl md:text-5xl font-bold text-white">
//               Contact Us
//             </h1>
//           </div>
//         </div>

//         <main className="py-10 px-4 md:px-8 lg:px-16">
//           <div className="max-w-3xl mx-auto">
//             <p className="text-gray-600 mb-10 text-lg text-center">
//               Get in touch with us if you share our enthusiasm about the
//               potential.
//             </p>

//             {/* Contact Form Only */}
//             <Card className="bg-white shadow-md">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-semibold text-red-700 mb-4">
//                   Feel free to reach us by filling out the form below
//                 </h3>
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <Input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleInputChange}
//                       required
//                       placeholder="First Name"
//                     />
//                     <Input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleInputChange}
//                       required
//                       placeholder="Last Name"
//                     />
//                   </div>
//                   <Input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Official Email"
//                   />
//                   <Input
//                     type="tel"
//                     name="contact"
//                     value={formData.contact}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Contact Number"
//                   />
//                   <Input
//                     type="text"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Company Name"
//                   />
//                   <Textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Availability For Call"
//                     rows={5}
//                   />
//                   <Button
//                     type="submit"
//                     className="w-full bg-red-700 hover:bg-red-800 text-white text-lg"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Submitting..." : "Submit"}
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div>
        {/* Banner */}
        <div
          className="w-full h-[300px] md:h-[400px] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6153345/pexels-photo-6153345.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Contact Us
            </h1>
          </div>
        </div>

        <main className="py-10 px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-10 text-lg text-center">
              Get in touch with us if you share our enthusiasm about the potential.
            </p>

            {/* Contact Information Card */}
            <Card className="bg-white shadow-md">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-red-700 mb-2">
                  Reach Out to Us
                </h3>
                <p className="text-gray-700">
                  <strong>Address:</strong>Living T&M Services Private Limited, Unit No. 401, 4th Floor, Tanvi's Tanishka Industrial Estate Cooperative Society Ltd., CST No. 1588/3, Tanvi Complex, S. V. Road, Near HPCL Petrol Pump, Dahisar East, Mumbai - 400068
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> info@livinghr.in
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> +91 22 4029 7000
                </p>
                {/* <p className="text-gray-700">
                  <strong>Office Hours:</strong> Monday to Friday, 10:00 AM – 6:00 PM
                </p> */}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

