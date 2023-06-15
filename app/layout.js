import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Navigation } from '../components/Navigation';
const inter = Inter({ subsets: ['latin'] });
// import { ErrorB } from '../components/ErrorB.jsx';


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <title>My app Natalia Gomez</title>
      </head>
      <body >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
