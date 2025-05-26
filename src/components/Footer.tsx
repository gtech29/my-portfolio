export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-700 text-center py-6 text-sm text-slate-600 dark:text-slate-400">
      <p>© {year} Juan Rodriguez.</p>
    </footer>
  );
}
