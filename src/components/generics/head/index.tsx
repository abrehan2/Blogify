// Imports:
import Link from 'next/link';

export function HeadComponent() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-slate-400 py-8">
        <div className="md:float-left block">
          <Link href={'/'}>
            <span className="cursor-pointer font-bold text-4xl">Blogify</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
