// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// const CompanyForm = () => {
//   const router = useRouter();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     companyName: "",
//     email: "",
//     location: [{ street: "", city: "", country: "", pincode: "" }],
//     phone: "",
//     website: "",
//     description: "",
//     kyc_status: "Pending", // Default value
//     GST_IN: "",
//     aadharNumber: "",
//     industry: ""
//   });

//   const [errors, setErrors] = useState({});

//   // Handle input changes for basic fields
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
    
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }));
//     }
//   };

//   // Handle location field changes
//   const handleLocationChange = (e, field) => {
//     const { value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       location: [{ ...prev.location[0], [field]: value }]
//     }));
    
//     // Clear location errors
//     if (errors[`location.${field}`]) {
//       setErrors((prev) => ({ ...prev, [`location.${field}`]: "" }));
//     }
//   };

//   // Form validation
//   const validateForm = () => {
//     const newErrors = {};
    
//     // Basic validations
//     if (!formData.companyName.trim()) 
//       newErrors.companyName = "Company name is required";
      
//     if (!formData.email.trim()) 
//       newErrors.email = "Email is required";
//     else if (!/^\S+@\S+\.\S+$/.test(formData.email))
//       newErrors.email = "Please enter a valid email address";
      
//     if (!formData.phone.trim())
//       newErrors.phone = "Phone number is required";
//     else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, '')))
//       newErrors.phone = "Please enter a valid 10-digit phone number";
      
//     // Location validations
//     if (!formData.location[0].street.trim())
//       newErrors["location.street"] = "Street address is required";
      
//     if (!formData.location[0].city.trim())
//       newErrors["location.city"] = "City is required";
      
//     if (!formData.location[0].country.trim())
//       newErrors["location.country"] = "Country is required";
      
//     if (!formData.location[0].pincode.trim())
//       newErrors["location.pincode"] = "Pincode is required";
//     else if (!/^\d{6}$/.test(formData.location[0].pincode))
//       newErrors["location.pincode"] = "Please enter a valid 6-digit pincode";
    
//     // Business ID validations
//     if (formData.GST_IN.trim() && !/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/.test(formData.GST_IN))
//       newErrors.GST_IN = "Please enter a valid GST number (e.g. 33BCNPJ3749P1ZY)";
      
//     if (formData.aadharNumber.trim() && !/^\d{12}$/.test(formData.aadharNumber))
//       newErrors.aadharNumber = "Please enter a valid 12-digit Aadhar number";
      
//     if (!formData.industry.trim())
//       newErrors.industry = "Please select an industry";
      
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!validateForm()) return;
    
//     setIsSubmitting(true);
    
//     try {
//       // Replace with your actual API endpoint
//       const response = await fetch("http://localhost:4000/api/v1/company/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
      
//       if (response.ok) {
//         // Redirect or show success message
//         router.push("/company/registration-success");
//       } else {
//         const data = await response.json();
//         throw new Error(data.message || "Registration failed");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Registration failed: " + error.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Company Registration</h1>
      
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Basic Company Information */}
//         <div className="bg-gray-50 p-4 rounded-md">
//           <h2 className="text-lg font-semibold mb-4 text-gray-700">Basic Information</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Company Name */}
//             <div>
//               <label className="block text-sm font-medium mb-1">Company Name*</label>
//               <input
//                 type="text"
//                 name="companyName"
//                 value={formData.companyName}
//                 onChange={handleInputChange}
//                 placeholder="Enter company name"
//                 className={`w-full p-2 border rounded-md ${
//                   errors.companyName ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.companyName && (
//                 <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
//               )}
//             </div>

//             {/* Industry */}
//             <div>
//               <label className="block text-sm font-medium mb-1">Industry*</label>
//               <select
//                 name="industry"
//                 value={formData.industry}
//                 onChange={handleInputChange}
//                 className={`w-full p-2 border rounded-md ${
//                   errors.industry ? "border-red-500" : "border-gray-300"
//                 }`}
//               >
//                 <option value="">Select Industry</option>
//                 <option value="technology">Technology</option>
//                 <option value="healthcare">Healthcare</option>
//                 <option value="finance">Finance</option>
//                 <option value="education">Education</option>
//                 <option value="retail">Retail</option>
//                 <option value="manufacturing">Manufacturing</option>
//                 <option value="coperate">Corporate</option>
//                 <option value="other">Other</option>
//               </select>
//               {errors.industry && (
//                 <p className="text-red-500 text-xs mt-1">{errors.industry}</p>
//               )}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium mb-1">Email*</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="company@example.com"
//                 className={`w-full p-2 border rounded-md ${
//                   errors.email ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//               )}
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block text-sm font-medium mb-1">Phone Number*</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 placeholder="10-digit phone number"
//                 className={`w-full p-2 border rounded-md ${
//                   errors.phone ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.phone && (
//                 <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
//               )}
//             </div>

//             {/* Website */}
//             <div>
//               <label className="block text-sm font-medium mb-1">Website</label>
//               <input
//                 type="url"
//                 name="website"
//                 value={formData.website}
//                 onChange={handleInputChange}
//                 placeholder="https://yourcompany.com"
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Location Information */}
//         <div className="bg-gray-50 p-4 rounded-md">
//           <h2 className="text-lg font-semibold mb-4 text-gray-700">Location</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Street */}
//             <div>
//               <label className="block text-sm font-medium mb-1">Street Address*</label>
//               <input
//                 type="text"
//                 value={formData.location[0].street}
//                 onChange={(e) => handleLocationChange(e, "street")}
//                 placeholder="Street address"
//                 className={`w-full p-2 border rounded-md ${
//                   errors["location.street"] ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors["location.street"] && (
//                 <p className="text-red-500 text-xs mt-1">{errors["location.street"]}</p>
//               )}
//             </div>

//             {/* City */}
//             <div>
//               <label className="block text-sm font-medium mb-1">City*</label>
//               <input
//                 type="text"
//                 value={formData.location[0].city}
//                 onChange={(e) => handleLocationChange(e, "city")}
//                 placeholder="City"
//                 className={`w-full p-2 border rounded-md ${
//                   errors["location.city"] ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors["location.city"] && (
//                 <p className="text-red-500 text-xs mt-1">{errors["location.city"]}</p>
//               )}
//             </div>

//             {/* Country */}
//             <div>
//               <label className="block text-sm font-medium mb-1">Country*</label>
//               <input
//                 type="text"
//                 value={formData.location[0].country}
//                 onChange={(e) => handleLocationChange(e, "country")}
//                 placeholder="Country"
//                 className={`w-full p-2 border rounded-md ${
//                   errors["location.country"] ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors["location.country"] && (
//                 <p className="text-red-500 text-xs mt-1">{errors["location.country"]}</p>
//               )}
//             </div>

//             {/* Pincode */}
//             <div>
//               <label className="block text-sm font-medium mb-1">Pincode*</label>
//               <input
//                 type="text"
//                 value={formData.location[0].pincode}
//                 onChange={(e) => handleLocationChange(e, "pincode")}
//                 placeholder="6-digit pincode"
//                 className={`w-full p-2 border rounded-md ${
//                   errors["location.pincode"] ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors["location.pincode"] && (
//                 <p className="text-red-500 text-xs mt-1">{errors["location.pincode"]}</p>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Company Description */}
//         <div className="bg-gray-50 p-4 rounded-md">
//           <label className="block text-sm font-medium mb-1">Company Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleInputChange}
//             placeholder="Tell us about your company..."
//             rows="4"
//             className="w-full p-2 border border-gray-300 rounded-md"
//           ></textarea>
//         </div>

//         {/* KYC and Legal Information */}
//         <div className="bg-gray-50 p-4 rounded-md">
//           <h2 className="text-lg font-semibold mb-4 text-gray-700">Legal Information</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* GST Number */}
//             <div>
//               <label className="block text-sm font-medium mb-1">GST Number</label>
//               <input
//                 type="text"
//                 name="GST_IN"
//                 value={formData.GST_IN}
//                 onChange={handleInputChange}
//                 placeholder="e.g. 33BCNPJ3749P1ZY"
//                 className={`w-full p-2 border rounded-md ${
//                   errors.GST_IN ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.GST_IN && (
//                 <p className="text-red-500 text-xs mt-1">{errors.GST_IN}</p>
//               )}
//             </div>

//             {/* Aadhar Number */}
//             <div>
//               <label className="block text-sm font-medium mb-1">Aadhar Number</label>
//               <input
//                 type="text"
//                 name="aadharNumber"
//                 value={formData.aadharNumber}
//                 onChange={handleInputChange}
//                 placeholder="12-digit Aadhar number"
//                 className={`w-full p-2 border rounded-md ${
//                   errors.aadharNumber ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.aadharNumber && (
//                 <p className="text-red-500 text-xs mt-1">{errors.aadharNumber}</p>
//               )}
//             </div>

//             {/* KYC Status */}
//             <div>
//               <label className="block text-sm font-medium mb-1">KYC Status</label>
//               <select
//                 name="kyc_status"
//                 value={formData.kyc_status}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//               >
//                 <option value="Pending">Pending</option>
//                 <option value="In Progress">In Progress</option>
//                 <option value="Completed">Completed</option>
//                 <option value="Rejected">Rejected</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Terms and Conditions */}
//         <div className="flex items-start">
//           <input
//             type="checkbox"
//             id="terms"
//             className="mt-1 mr-2"
//             required
//           />
//           <label htmlFor="terms" className="text-sm text-gray-600">
//             I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and acknowledge that my information will be used in accordance with the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
//           </label>
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-end">
//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-200 disabled:bg-gray-400"
//           >
//             {isSubmitting ? "Submitting..." : "Register Company"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CompanyForm;


"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const CompanyForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    location: [{ street: "", city: "", country: "", pincode: "" }],
    phone: "",
    website: "",
    description: "",
    kyc_status: "Pending", // Default value
    GST_IN: "",
    aadharNumber: "",
    industry: ""
  });

  const [errors, setErrors] = useState({});

  // Handle input changes for basic fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle location field changes
  const handleLocationChange = (e, field) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      location: [{ ...prev.location[0], [field]: value }]
    }));
    
    // Clear location errors
    if (errors[`location.${field}`]) {
      setErrors((prev) => ({ ...prev, [`location.${field}`]: "" }));
    }
  };

  // Pre-populate with test data (for development only)
  const fillTestData = () => {
    if (process.env.NODE_ENV !== "production") {
      setFormData({
        companyName: "",
        email: "",
        location: [{ street: "", city: "", country: "", pincode: "" }],
        phone: "",
        website: "",
        description: "",
        kyc_status: "",
        GST_IN: "",
        aadharNumber: "",
        industry: ""
      });
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    // Basic validations
    if (!formData.companyName.trim()) 
      newErrors.companyName = "Company name is required";
      
    if (!formData.email.trim()) 
      newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address";
      
    if (!formData.phone.trim())
      newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, '')))
      newErrors.phone = "Please enter a valid 10-digit phone number";
      
    // Location validations
    if (!formData.location[0].street.trim())
      newErrors["location.street"] = "Street address is required";
      
    if (!formData.location[0].city.trim())
      newErrors["location.city"] = "City is required";
      
    if (!formData.location[0].country.trim())
      newErrors["location.country"] = "Country is required";
      
    if (!formData.location[0].pincode.trim())
      newErrors["location.pincode"] = "Pincode is required";
    else if (!/^\d{6}$/.test(formData.location[0].pincode))
      newErrors["location.pincode"] = "Please enter a valid 6-digit pincode";
    
    // Business ID validations
    if (formData.GST_IN.trim() && !/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/.test(formData.GST_IN))
      newErrors.GST_IN = "Please enter a valid GST number (e.g. 33BCNPJ3749P1ZY)";
      
    if (formData.aadharNumber.trim() && !/^\d{12}$/.test(formData.aadharNumber))
      newErrors.aadharNumber = "Please enter a valid 12-digit Aadhar number";
      
    if (!formData.industry.trim())
      newErrors.industry = "Please select an industry";
      
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Using axios instead of fetch for better error handling
      const response = await axios.post(
        "http://localhost:4000/api/v1/company/register", 
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // Enable credentials if your API requires cookies or auth headers
          withCredentials: true
        }
      );
      
      // Success handling
      toast.success("Company registered successfully!");
      
      // Optional: Save auth token or company ID if returned from API
      if (response.data.token) {
        localStorage.setItem("companyToken", response.data.token);
      }
      
      if (response.data.companyId) {
        localStorage.setItem("companyId", response.data.companyId);
      }
      
      // Reset form
      setFormData({
        companyName: "",
        email: "",
        location: [{ street: "", city: "", country: "", pincode: "" }],
        phone: "",
        website: "",
        description: "",
        kyc_status: "Pending",
        GST_IN: "",
        aadharNumber: "",
        industry: ""
      });
      
      // Redirect after short delay to allow user to see success message
      setTimeout(() => {
        router.push("/company/dashboard");
      }, 1500);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      
      // Handle different error types
      if (error.response) {
        // Server responded with error
        const status = error.response.status;
        
        if (status === 400) {
          toast.error(error.response.data.message || "Invalid form data. Please check your entries.");
        } else if (status === 409) {
          toast.error("A company with this email already exists.");
        } else if (status === 401 || status === 403) {
          toast.error("Authentication failed. Please login again.");
        } else {
          toast.error(error.response.data.message || "Server error. Please try again later.");
        }
      } else if (error.request) {
        // No response received
        toast.error("Could not connect to server. Please check your internet connection.");
      } else {
        // Request setup error
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-center text-gray-800">Company Registration</h1>
          {process.env.NODE_ENV !== "production" && (
            <button 
              type="button" 
              onClick={fillTestData}
              className="text-xs text-gray-500 underline"
            >
              Fill Test Data
            </button>
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Company Information */}
          <div className="bg-gray-50 p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Basic Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium mb-1">Company Name*</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Enter company name"
                  className={`w-full p-2 border rounded-md ${
                    errors.companyName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
                )}
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium mb-1">Industry*</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className={`w-full p-2 border rounded-md ${
                    errors.industry ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select Industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="coperate">Corporate</option>
                  <option value="other">Other</option>
                </select>
                {errors.industry && (
                  <p className="text-red-500 text-xs mt-1">{errors.industry}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="company@example.com"
                  className={`w-full p-2 border rounded-md ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="10-digit phone number"
                  className={`w-full p-2 border rounded-md ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Website */}
              <div>
                <label className="block text-sm font-medium mb-1">Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://yourcompany.com"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Location Information */}
          <div className="bg-gray-50 p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Location</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Street */}
              <div>
                <label className="block text-sm font-medium mb-1">Street Address*</label>
                <input
                  type="text"
                  value={formData.location[0].street}
                  onChange={(e) => handleLocationChange(e, "street")}
                  placeholder="Street address"
                  className={`w-full p-2 border rounded-md ${
                    errors["location.street"] ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors["location.street"] && (
                  <p className="text-red-500 text-xs mt-1">{errors["location.street"]}</p>
                )}
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium mb-1">City*</label>
                <input
                  type="text"
                  value={formData.location[0].city}
                  onChange={(e) => handleLocationChange(e, "city")}
                  placeholder="City"
                  className={`w-full p-2 border rounded-md ${
                    errors["location.city"] ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors["location.city"] && (
                  <p className="text-red-500 text-xs mt-1">{errors["location.city"]}</p>
                )}
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-medium mb-1">Country*</label>
                <input
                  type="text"
                  value={formData.location[0].country}
                  onChange={(e) => handleLocationChange(e, "country")}
                  placeholder="Country"
                  className={`w-full p-2 border rounded-md ${
                    errors["location.country"] ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors["location.country"] && (
                  <p className="text-red-500 text-xs mt-1">{errors["location.country"]}</p>
                )}
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-sm font-medium mb-1">Pincode*</label>
                <input
                  type="text"
                  value={formData.location[0].pincode}
                  onChange={(e) => handleLocationChange(e, "pincode")}
                  placeholder="6-digit pincode"
                  className={`w-full p-2 border rounded-md ${
                    errors["location.pincode"] ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors["location.pincode"] && (
                  <p className="text-red-500 text-xs mt-1">{errors["location.pincode"]}</p>
                )}
              </div>
            </div>
          </div>

          {/* Company Description */}
          <div className="bg-gray-50 p-4 rounded-md">
            <label className="block text-sm font-medium mb-1">Company Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Tell us about your company..."
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>

          {/* KYC and Legal Information */}
          <div className="bg-gray-50 p-4 rounded-md">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Legal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* GST Number */}
              <div>
                <label className="block text-sm font-medium mb-1">GST Number</label>
                <input
                  type="text"
                  name="GST_IN"
                  value={formData.GST_IN}
                  onChange={handleInputChange}
                  placeholder="e.g. 33BCNPJ3749P1ZY"
                  className={`w-full p-2 border rounded-md ${
                    errors.GST_IN ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.GST_IN && (
                  <p className="text-red-500 text-xs mt-1">{errors.GST_IN}</p>
                )}
              </div>

              {/* Aadhar Number */}
              <div>
                <label className="block text-sm font-medium mb-1">Aadhar Number</label>
                <input
                  type="text"
                  name="aadharNumber"
                  value={formData.aadharNumber}
                  onChange={handleInputChange}
                  placeholder="12-digit Aadhar number"
                  className={`w-full p-2 border rounded-md ${
                    errors.aadharNumber ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.aadharNumber && (
                  <p className="text-red-500 text-xs mt-1">{errors.aadharNumber}</p>
                )}
              </div>

              {/* KYC Status */}
              <div>
                <label className="block text-sm font-medium mb-1">KYC Status</label>
                <select
                  name="kyc_status"
                  value={formData.kyc_status}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 mr-2"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and acknowledge that my information will be used in accordance with the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-200 disabled:bg-gray-400 flex items-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : "Register Company"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          background: "#111",
          color: "#fff",
          border: "1px solid rgba(230, 0, 0, 0.3)",
          borderRadius: "8px"
        }}
        progressStyle={{
          background: "linear-gradient(to right, #e60000, #ff4d4d)"
        }}
      />
    </>
  );
};

export default CompanyForm;