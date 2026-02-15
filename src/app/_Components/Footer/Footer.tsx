"use client"

import { Button } from "@/components/ui/button";
import logoInterlink from "@/public/assets/img/InterlinkLogofinal/2.svg";
import Image from "next/image";
import Link from "next/link";
import { ButtonUp } from "./ButtonUp";

function Facebook() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2.53906C17.5229 2.53906 22 7.01621 22 12.5391C22 17.5304 18.3431 21.6674 13.5625 22.4176V15.4297H15.8926L16.3359 12.5391L13.5625 12.5387V10.6632C13.5625 10.657 13.5625 10.6509 13.5626 10.6447C13.5626 10.6354 13.5628 10.6262 13.5629 10.6169C13.578 9.84259 13.9742 9.10156 15.1921 9.10156H16.4531V6.64062C16.4531 6.64062 15.3087 6.44492 14.2146 6.44492C11.966 6.44492 10.4842 7.78652 10.4386 10.2193C10.4379 10.2578 10.4375 10.2965 10.4375 10.3355V12.5387H7.89844V15.4293L10.4375 15.4297V22.4172C5.65686 21.667 2 17.5304 2 12.5391C2 7.01621 6.47715 2.53906 12 2.53906Z"
        fill="currentColor"
      />
    </svg>
  );
}

function X() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7512 2.96094H20.818L14.1179 10.6187L22 21.0391H15.8284L10.9946 14.7191L5.4636 21.0391H2.39492L9.56132 12.8483L2 2.96094H8.32824L12.6976 8.73762L17.7512 2.96094ZM16.6748 19.2035H18.3742L7.40492 4.70014H5.58132L16.6748 19.2035Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Linkedin() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Instagram() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.6672 12C8.6672 10.1591 10.1591 8.6664 12 8.6664C13.8409 8.6664 15.3336 10.1591 15.3336 12C15.3336 13.8409 13.8409 15.3336 12 15.3336C10.1591 15.3336 8.6672 13.8409 8.6672 12ZM6.86512 12C6.86512 14.836 9.164 17.1349 12 17.1349C14.836 17.1349 17.1349 14.836 17.1349 12C17.1349 9.164 14.836 6.86512 12 6.86512C9.164 6.86512 6.86512 9.164 6.86512 12ZM16.1382 6.66152C16.1381 6.89886 16.2084 7.13089 16.3401 7.32829C16.4719 7.52568 16.6593 7.67956 16.8785 7.77047C17.0977 7.86138 17.339 7.88525 17.5718 7.83904C17.8046 7.79283 18.0185 7.67862 18.1863 7.51087C18.3542 7.34311 18.4686 7.12934 18.515 6.89658C18.5614 6.66382 18.5377 6.42253 18.447 6.20322C18.3563 5.98392 18.2025 5.79644 18.0052 5.6645C17.808 5.53257 17.576 5.4621 17.3386 5.462H17.3382C17.02 5.46215 16.715 5.58856 16.49 5.81347C16.265 6.03837 16.1384 6.34339 16.1382 6.66152ZM7.96 20.1398C6.98504 20.0954 6.45512 19.933 6.10296 19.7958C5.63608 19.614 5.30296 19.3975 4.95272 19.0478C4.60248 18.698 4.38568 18.3652 4.20472 17.8983C4.06744 17.5463 3.90504 17.0162 3.86072 16.0413C3.81224 14.9872 3.80256 14.6706 3.80256 12.0001C3.80256 9.3296 3.81304 9.01384 3.86072 7.95888C3.90512 6.98392 4.06872 6.45488 4.20472 6.10184C4.38648 5.63496 4.60296 5.30184 4.95272 4.9516C5.30248 4.60136 5.63528 4.38456 6.10296 4.2036C6.45496 4.06632 6.98504 3.90392 7.96 3.8596C9.01408 3.81112 9.33072 3.80144 12 3.80144C14.6693 3.80144 14.9862 3.81192 16.0412 3.8596C17.0162 3.904 17.5452 4.0676 17.8982 4.2036C18.3651 4.38456 18.6982 4.60184 19.0485 4.9516C19.3987 5.30136 19.6147 5.63496 19.7965 6.10184C19.9338 6.45384 20.0962 6.98392 20.1405 7.95888C20.189 9.01384 20.1986 9.3296 20.1986 12.0001C20.1986 14.6706 20.189 14.9863 20.1405 16.0413C20.0961 17.0162 19.9329 17.5462 19.7965 17.8983C19.6147 18.3652 19.3982 18.6983 19.0485 19.0478C18.6987 19.3972 18.3651 19.614 17.8982 19.7958C17.5462 19.933 17.0162 20.0954 16.0412 20.1398C14.9871 20.1882 14.6705 20.1979 12 20.1979C9.32952 20.1979 9.01376 20.1882 7.96 20.1398ZM7.8772 2.06056C6.81264 2.10904 6.0852 2.27784 5.44992 2.52504C4.792 2.78032 4.23504 3.1228 3.67848 3.67848C3.12192 4.23416 2.78032 4.792 2.52504 5.44992C2.27784 6.0856 2.10904 6.81264 2.06056 7.8772C2.01128 8.94344 2 9.28432 2 12C2 14.7157 2.01128 15.0566 2.06056 16.1228C2.10904 17.1874 2.27784 17.9144 2.52504 18.5501C2.78032 19.2076 3.122 19.7661 3.67848 20.3215C4.23496 20.877 4.792 21.219 5.44992 21.475C6.0864 21.7222 6.81264 21.891 7.8772 21.9394C8.944 21.9879 9.28432 22 12 22C14.7157 22 15.0566 21.9887 16.1228 21.9394C17.1874 21.891 17.9144 21.7222 18.5501 21.475C19.2076 21.219 19.765 20.8772 20.3215 20.3215C20.8781 19.7658 21.219 19.2076 21.475 18.5501C21.7222 17.9144 21.8918 17.1874 21.9394 16.1228C21.9879 15.0558 21.9992 14.7157 21.9992 12C21.9992 9.28432 21.9879 8.94344 21.9394 7.8772C21.891 6.81256 21.7222 6.0852 21.475 5.44992C21.219 4.7924 20.8772 4.23504 20.3215 3.67848C19.7658 3.12192 19.2076 2.78032 18.5509 2.52504C17.9144 2.27784 17.1874 2.10824 16.1236 2.06056C15.0574 2.01208 14.7165 2 12.0008 2C9.28512 2 8.944 2.01128 7.8772 2.06056Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#185397d7] text-white border-white/5">
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-8">
            <Image
              src={logoInterlink}
              width={220}
              height={60}
              className="brightness-0 invert opacity-90"
              alt="Interlink Logo"
              priority
            />
            <p className="text-white/70 font-medium leading-relaxed max-w-xs">
              VOTRE PARTENAIRE DE DIGITALISATION. Propulsé par l&apos;innovation et
              l&apos;excellence.
            </p>
            <div className="flex items-center gap-3">
              <SocialLink href="#" icon={<Facebook />} label="Facebook" />
              <SocialLink href="#" icon={<X />} label="X" />
              <SocialLink href="#" icon={<Instagram />} label="Instagram" />
              <SocialLink href="#" icon={<Linkedin />} label="Linkedin" />
            </div>
          </div>

          {/* Expertises Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Expertises</h4>
            <ul className="space-y-4  ">
              <FooterLink href="/">Site Internet</FooterLink>
              <FooterLink href="#">IA générative</FooterLink>
              <FooterLink href="#">Développement Web</FooterLink>
              <FooterLink href="#">Développement Mobile</FooterLink>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Entreprise</h4>
            <ul className="space-y-4">
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="/pricing">Nos Offres</FooterLink>
              <FooterLink href="#">Produits</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/article">Articles</FooterLink>
            </ul>
          </div>

          {/* Contact info or extra column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <address className="not-italic space-y-4 text-white/70 font-medium">
              <p>055 Ilot C Zone Château D’Eau Nouakchott – Mauritanie</p>
              <p>info@interlink.mr</p>
              <p>+(222) 45 25 23 56</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white ">
          <p>
            &copy; {new Date().getFullYear()} Interlink. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link href="#" className=" text-white hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="#" className=" text-white hover:text-white transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>

      {/* Go to Top */}
      {/* <Link
        href="#"
        className="fixed bottom-8 right-8 h-12 w-12 flex items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/20 transition-all hover:scale-110 hover:shadow-primary/40 active:scale-95 z-50"
      >
        <i className="lni lni-arrow-up text-xl"></i>
      </Link> */}

      <ButtonUp />
    </footer>
  );
}

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <li>
    <Link
      href={href}
      className="text-white/70 hover:text-white transition-colors duration-200 block py-1 font-medium"
    >
      {children}
    </Link>
  </li>
);

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <Link
    href={href}
    aria-label={label}
    className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-white/30 hover:text-white transition-all duration-300"
  >
    {icon}
  </Link>
);
