import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Download,
  FileText,
  FileIcon as FilePdf,
  FileSpreadsheet,
} from "lucide-react";

export default function DownloadsPage() {
  const downloadFiles = [
    {
      name: "Company Profile",
      description:
        "Detailed information about Living T&M Services Private Limited",
      icon: <FilePdf className="h-10 w-10 text-red-500" />,
      fileType: "PDF",
      fileSize: "2.4 MB",
      link: "/downloads/company-profile.pdf",
    },
    {
      name: "Service Brochure",
      description: "Overview of our services and solutions",
      icon: <FilePdf className="h-10 w-10 text-red-500" />,
      fileType: "PDF",
      fileSize: "3.1 MB",
      link: "/downloads/service-brochure.pdf",
    },
    {
      name: "Client Registration Form",
      description: "Form for new clients to register with our services",
      icon: <FileText className="h-10 w-10 text-blue-500" />,
      fileType: "DOCX",
      fileSize: "1.2 MB",
      link: "/downloads/client-registration-form.docx",
    },
    {
      name: "Candidate Information Form",
      description: "Form for candidates to submit their information",
      icon: <FileText className="h-10 w-10 text-blue-500" />,
      fileType: "DOCX",
      fileSize: "1.5 MB",
      link: "/downloads/candidate-information-form.docx",
    },
    {
      name: "Industry Insights Report",
      description:
        "Latest trends and insights in the talent acquisition industry",
      icon: <FilePdf className="h-10 w-10 text-red-500" />,
      fileType: "PDF",
      fileSize: "4.7 MB",
      link: "/downloads/industry-insights-report.pdf",
    },
    {
      name: "Salary Survey Data",
      description: "Comprehensive salary data across various industries",
      icon: <FileSpreadsheet className="h-10 w-10 text-green-500" />,
      fileType: "XLSX",
      fileSize: "2.8 MB",
      link: "/downloads/salary-survey-data.xlsx",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
            Downloads
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fadeIn">
            Access and download useful resources, forms, and documents.
          </p>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadFiles.map((file, index) => (
              <div
                key={index}
                className="flex flex-col justify-between h-full bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-start mb-4">
                    {file.icon}
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {file.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {file.fileType} • {file.fileSize}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">{file.description}</p>
                </div>
                <div className="mt-6">
                  <Link href={file.link}>
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
