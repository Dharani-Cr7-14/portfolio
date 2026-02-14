
export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/10 text-white py-6 text-center">
            <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Dharani S. All rights reserved.
            </p>
        </footer>
    );
}