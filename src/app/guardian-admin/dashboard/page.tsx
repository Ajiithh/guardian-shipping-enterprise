"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const statuses = [
  "Shipment Registered",
  "Packed",
  "Warehouse Processing",
  "Customs Clearance",
  "In Transit",
  "Destination Hub",
  "Out for Delivery",
  "Delivered",
];

export default function DashboardPage() {
  const [shipments, setShipments] =
    useState<any[]>([]);

  const [trackingId, setTrackingId] =
    useState("");

  const [customerName, setCustomerName] =
    useState("");

  const [shipmentType, setShipmentType] =
    useState("");

  const [status, setStatus] =
    useState("Shipment Registered");

  const [location, setLocation] =
    useState("");

  const [eta, setEta] = useState("");

  const [editingId, setEditingId] =
    useState<number | null>(null);

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    fetchShipments();
    generateTrackingId();
  }, []);

  async function fetchShipments() {
    const { data } = await supabase
      .from("shipments")
      .select("*")
      .order("id", {
        ascending: false,
      });

    if (data) {
      setShipments(data);
    }
  }

  async function generateTrackingId() {
    const { count } = await supabase
      .from("shipments")
      .select("*", {
        count: "exact",
        head: true,
      });

    const nextNumber =
      (count || 0) + 1;

    setTrackingId(
      `GS${String(nextNumber).padStart(
        4,
        "0"
      )}`
    );
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    if (editingId) {
      const { error } =
        await supabase
          .from("shipments")
          .update({
            customer_name:
              customerName,
            shipment_type:
              shipmentType,
            status,
            current_location:
              location,
            eta,
          })
          .eq("id", editingId);

      if (error) {
        alert(error.message);
      } else {
        alert("Shipment Updated");
      }
    } else {
      const { error } =
        await supabase
          .from("shipments")
          .insert([
            {
              tracking_id:
                trackingId,
              customer_name:
                customerName,
              shipment_type:
                shipmentType,
              status,
              current_location:
                location,
              eta,
            },
          ]);

      if (error) {
        alert(error.message);
      } else {
        alert(
          `Shipment Created: ${trackingId}`
        );
      }
    }

    resetForm();
    fetchShipments();
    generateTrackingId();

    setLoading(false);
  }

  function editShipment(
    shipment: any
  ) {
    setEditingId(shipment.id);

    setTrackingId(
      shipment.tracking_id
    );

    setCustomerName(
      shipment.customer_name
    );

    setShipmentType(
      shipment.shipment_type
    );

    setStatus(shipment.status);

    setLocation(
      shipment.current_location
    );

    setEta(shipment.eta);
  }

  function resetForm() {
    setEditingId(null);

    setCustomerName("");
    setShipmentType("");
    setLocation("");
    setEta("");

    setStatus(
      "Shipment Registered"
    );
  }

  async function deleteShipment(
    id: number
  ) {
    const confirmDelete =
      confirm(
        "Delete shipment?"
      );

    if (!confirmDelete)
      return;

    await supabase
      .from("shipments")
      .delete()
      .eq("id", id);

    fetchShipments();
  }

  return (
    <main className="min-h-screen bg-[#F7F8FA] p-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[4px] text-[#355AA3]">
            GUARDIAN SHIPPING
          </p>

          <h1 className="text-5xl font-semibold text-slate-800">
            Admin Dashboard
          </h1>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* FORM */}
          <div className="rounded-[40px] bg-white p-10 shadow-sm">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                value={trackingId}
                readOnly
                className="w-full rounded-2xl border bg-slate-100 px-5 py-4"
              />

              <input
                value={customerName}
                onChange={(e) =>
                  setCustomerName(
                    e.target.value
                  )
                }
                placeholder="Customer Name"
                className="w-full rounded-2xl border px-5 py-4 text-slate-800"
              />

              <input
                value={shipmentType}
                onChange={(e) =>
                  setShipmentType(
                    e.target.value
                  )
                }
                placeholder="Shipment Type"
                className="w-full rounded-2xl border px-5 py-4 text-slate-800"
              />

              <select
                value={status}
                onChange={(e) =>
                  setStatus(
                    e.target.value
                  )
                }
                className="w-full rounded-2xl border px-5 py-4 text-slate-800"
              >
                {statuses.map(
                  (item) => (
                    <option
                      key={item}
                    >
                      {item}
                    </option>
                  )
                )}
              </select>

              <input
                value={location}
                onChange={(e) =>
                  setLocation(
                    e.target.value
                  )
                }
                placeholder="Current Location"
                className="w-full rounded-2xl border px-5 py-4 text-slate-800"
              />

              <input
                value={eta}
                onChange={(e) =>
                  setEta(
                    e.target.value
                  )
                }
                placeholder="ETA"
                className="w-full rounded-2xl border px-5 py-4 text-slate-800"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#355AA3] px-8 py-5 text-white"
              >
                {editingId
                  ? "Update Shipment"
                  : "Create Shipment"}
              </button>

            </form>
          </div>

          {/* SHIPMENT LIST */}
          <div className="rounded-[40px] bg-white p-10 shadow-sm">

            <h2 className="mb-6 text-2xl font-semibold">
              Shipments
            </h2>

            <div className="space-y-4">

              {shipments.map(
                (shipment) => (
                  <div
                    key={shipment.id}
                    className="rounded-3xl border border-slate-200 p-5"
                  >

                    <h3 className="font-semibold text-slate-800">
                      {
                        shipment.tracking_id
                      }
                    </h3>

                    <p className="text-sm text-slate-600">
                      {
                        shipment.customer_name
                      }
                    </p>

                    <p className="text-sm text-[#355AA3]">
                      {
                        shipment.status
                      }
                    </p>

                    <div className="mt-4 flex gap-3">

                      <button
                        onClick={() =>
                          editShipment(
                            shipment
                          )
                        }
                        className="rounded-full bg-[#355AA3] px-5 py-2 text-sm text-white"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteShipment(
                            shipment.id
                          )
                        }
                        className="rounded-full bg-red-500 px-5 py-2 text-sm text-white"
                      >
                        Delete
                      </button>

                    </div>
                  </div>
                )
              )}

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}