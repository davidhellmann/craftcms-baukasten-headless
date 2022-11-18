import { Container } from "../Container/Container"
const year = new Date().getFullYear()

export const Footer = () => (
  <footer className="w-full  text-center text-xl text-gray-500">
    <Container className={'border-t border-black py-20'}>
      <p>Copyright Baukasten {year}</p>
    </Container>
  </footer>
);
