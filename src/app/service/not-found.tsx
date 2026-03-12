
import Link from "next/link";

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Услуга не найдена</h1>
        <Link
          href='/'
          className="px-6 py-3 bg-gradient-to-r from-primary to-[#ffd700] text-background rounded-xl hover:scale-105 transition-all"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}