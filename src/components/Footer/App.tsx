import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          © {new Date().getFullYear()} Memória a Dois. Todos os direitos
          reservados.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <img
            src="/dev.jpg" // Substitua pelo caminho da sua foto
            alt="Sua Foto"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-sm">Desenvolvido por João Vitor Oliveira</span>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-6">
          Tema inspirado no Ghibli Studio para shadcn/ui feito por Matt
          Wierzbicki
        </p>
      </div>
    </footer>
  );
};

export default Footer;
