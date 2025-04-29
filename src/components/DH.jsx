import React from "react";

export default function DH() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white rounded-xl shadow-lg max-w-4xl w-full p-6 sm:p-10 border-t-4 border-purple-600 transition-all duration-500 hover:shadow-2xl relative">
        <div className="absolute top-0 left-0 w-16 h-1 bg-purple-300 rounded-full -translate-y-4"></div>

        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8">
          Diffie-Hellman Key Exchange & AES Encryption
        </h1>
        <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-poppins tracking-wide mb-6 sm:mb-8">
          This project demonstrates secure client-server communication by implementing the Diffie-Hellman key exchange protocol
          for shared secret key generation and AES encryption for message confidentiality. It consists of a server (DHServer), a client (DHClient), 
          and a graphical interface (DHClientGUI) that facilitates seamless user interaction. The server initializes a secure key exchange 
          upon client connection, enabling encrypted message transmission. The client encrypts user-inputted messages before sending them, 
          while the server decrypts and logs them, ensuring protocol correctness. The project highlights cryptographic principles in action, 
          bridging theory with practical implementation. While offering robust security, it also identifies vulnerabilities, such as the risk of 
          man-in-the-middle attacks due to the lack of public key validation. 
          This project serves as a foundational step in understanding secure communication protocols and enhancing cybersecurity awareness.
        </p>

        {/* GitHub Button */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <a
            href="https://github.com/foziamohammed/DH-AES.git" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white py-3 sm:py-4 px-8 sm:px-10 rounded-lg shadow-md text-lg sm:text-xl font-poppins tracking-wide hover:bg-purple-700 transition-all duration-300 ease-in-out"
          >
            Visit GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
}
