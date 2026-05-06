"use client";

import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { Share2, X } from "lucide-react";

export function ShareButton() {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  function handleOpen() {
    setUrl(window.location.href);
    setOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#be0505] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#9a0404] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <Share2 className="size-4 shrink-0" aria-hidden />
        Compartilhar
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-[2px]"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="share-dialog-title"
            className="relative w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#be0505]"
              aria-label="Fechar"
            >
              <X className="size-5" />
            </button>

            <h2
              id="share-dialog-title"
              className="pr-10 text-lg font-semibold text-zinc-900"
            >
              QR code da página
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              Escaneie para abrir esta página no celular.
            </p>

            <div className="mx-auto mt-6 flex justify-center rounded-xl border border-zinc-200 bg-white p-4">
              {url ? (
                <QRCode value={url} size={220} />
              ) : (
                <div className="flex h-[220px] w-[220px] items-center justify-center text-sm text-zinc-400">
                  Carregando…
                </div>
              )}
            </div>

            <p className="mt-4 break-all text-xs text-zinc-500">{url}</p>
          </div>
        </div>
      )}
    </>
  );
}
