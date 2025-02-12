import { EmbedPDF } from "@simplepdf/react-embed-pdf";

export default function PDFViewer() {
  return (
    <main className="bg-[#F1F7FF]">
      <ul className="flex gap-4 w-full  items-center justify-center ">
        <li className="w-full flex items-center justify-center">
          <EmbedPDF>
            <a
              className="inline-block mt-4 px-8 py-3  text-lg font-semibold text-white bg-[#3E8EFF] rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              href="https://cdn.simplepdf.com/simple-pdf/assets/example_en.pdf"
            >
              Nümunə PDF-ə bax
            </a>
          </EmbedPDF>
        </li>
      </ul>

      <EmbedPDF
      
        locale="en"
        className="w-full h-full p-4"
        mode="inline"
        documentURL="/sample.pdf"
        style={{ width: "100%", height: "100vh" }}
      />
    </main>
  );
}
