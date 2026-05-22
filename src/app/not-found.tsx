import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-creamCare px-5 py-16 text-center">
      <div className="max-w-xl rounded-[2rem] bg-white p-8 shadow-soft">
        <h1 className="text-4xl font-black text-inkCare">העמוד לא נמצא</h1>
        <p className="mt-4 text-lg leading-8 text-inkCare/70">יכול להיות שהקישור השתנה או שהקטגוריה עוד לא נוצרה.</p>
        <Link className="mt-7 inline-flex rounded-full bg-coralCare px-6 py-3 font-black text-white" href="/categories">
          חזרה לקטגוריות
        </Link>
      </div>
    </main>
  );
}
