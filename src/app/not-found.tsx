import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F5F0E8]/30 text-center px-4">
            <div>
                <div className="text-8xl mb-6">🥛</div>
                <h1
                    className="text-6xl font-bold text-[#1B6B3A] mb-2"
                    style={{ fontFamily: 'Playfair Display' }}
                >
                    404
                </h1>
                <h2
                    className="text-2xl font-bold text-gray-800 mb-4"
                    style={{ fontFamily: 'Playfair Display' }}
                >
                    Page Not Found
                </h2>
                <p className="text-gray-500 mb-8">
                    Looks like this page has gone sour. Let's get you back to the good stuff.
                </p>
                <Link
                    href="/"
                    className="btn-primary px-8 py-3 inline-block"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
