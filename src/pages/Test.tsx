// src/pages/Tests.tsx
import React, { JSX, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type TestItem = {
  id: string;
  name: string;
  price: number;
  duration: string;
  description?: string;
};

const SAMPLE_TESTS: TestItem[] = [
  { id: "t1", name: "Complete Blood Count (CBC)", price: 199, duration: "1 day", description: "Checks your overall blood health." },
  { id: "t2", name: "Lipid Profile", price: 499, duration: "2 days", description: "Measures cholesterol & triglycerides." },
  { id: "t3", name: "Thyroid Profile (T3/T4/TSH)", price: 399, duration: "2 days", description: "Checks thyroid hormone levels." },
  { id: "t4", name: "Blood Sugar (Fasting & PP)", price: 149, duration: "Same day", description: "Fasting and post-meal glucose levels." },
  { id: "t5", name: "Vitamin D", price: 599, duration: "2 days", description: "Vitamin D level check." },
];

export default function Tests(): JSX.Element {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [bookingId, setBookingId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SAMPLE_TESTS;
    return SAMPLE_TESTS.filter(
      (t) => t.name.toLowerCase().includes(q) || (t.description || "").toLowerCase().includes(q)
    );
  }, [query]);

  const handleBook = (test: TestItem) => {
    // Simulate a booking action
    // In real app: call API -> response contains booking id -> navigate to confirmation page
    const fakeBookingId = `BK-${Date.now()}-${test.id}`;
    setBookingId(fakeBookingId);

    // For demo, navigate to a detail/confirmation route (you can implement this route if needed)
    // navigate(`/tests/${test.id}`, { state: { bookingId: fakeBookingId } });

    // For now show a simple confirmation UI by selecting the test
    setSelected(test.id);

    // optionally show a toast / alert
    window.setTimeout(() => {
      alert(`Booked "${test.name}" successfully (booking id: ${fakeBookingId})`);
    }, 200);
  };

  return (
    <div className="min-h-[70vh] px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Available Tests</h1>
            <p className="text-sm text-gray-500">Choose a test and book a slot. You can search or filter below.</p>
          </div>

          <div className="w-full max-w-xs">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tests..."
              className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
        </div>

        <div className="grid gap-4">
          {filtered.map((test) => (
            <div key={test.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg shadow-sm bg-white/80">
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-medium">{test.name}</h2>
                    <p className="text-sm text-gray-600">{test.description}</p>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-gray-500">{test.duration}</div>
                    <div className="text-lg font-semibold mt-1">₹{test.price}</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-0 md:ml-6 flex items-center gap-3">
                <button
                  onClick={() => navigate(`/tests/${test.id}`)}
                  className="px-3 py-2 rounded-md border hover:bg-gray-50"
                >
                  Details
                </button>

                <button
                  onClick={() => handleBook(test)}
                  className={`px-4 py-2 rounded-md text-white ${selected === test.id ? "bg-green-700" : "bg-teal-600"} `}
                >
                  {selected === test.id ? "Booked" : "Book"}
                </button>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="p-6 text-center text-gray-600 border rounded">
              No tests match “{query}”. Try a different search.
            </div>
          )}
        </div>

        {/* Simple booking summary (optional) */}
        {bookingId && (
          <div className="mt-6 p-4 border-l-4 border-teal-500 bg-teal-50 rounded">
            <div className="text-sm text-gray-700">
              Latest booking id: <span className="font-medium">{bookingId}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
