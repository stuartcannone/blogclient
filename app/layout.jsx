import './globals.css';
import Navbar from './components/Navbar';
export const metadata = {
    title: "Stu's Blog",
    description: 'Created by Stuart Cannone',
};
export default function RootLayout({ children, }) {
    return (<html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
      </body>
    </html>);
}
