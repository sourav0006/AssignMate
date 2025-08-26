"use client";

import React from "react";

type FileLike = File | { name: string; size?: number; type?: string; url?: string };

function formatBytes(bytes?: number) {
  if (!bytes) return "";
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
}

export const FilePreviewList: React.FC<{
  files: FileLike[];
  onRemove?: (index: number) => void;
}> = ({ files, onRemove }) => {
  if (!files?.length) return null;
  return (
    <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
      {files.map((file, idx) => {
        const isImage = (file as File).type?.startsWith?.("image/") || (file as any).type?.startsWith?.("image/");
        const isPdf = (file as File).type === "application/pdf" || (file as any).name?.toLowerCase?.().endsWith?.(".pdf");
        const url = (file as any).url || (isImage ? URL.createObjectURL(file as File) : undefined);
        return (
          <div key={idx} className="relative overflow-hidden rounded-md border p-2">
            {isImage && url ? (
              <img src={url} alt={(file as any).name} className="h-28 w-full rounded object-cover" />
            ) : (
              <div className="flex h-28 w-full flex-col items-center justify-center rounded bg-muted text-center">
                <span className="text-xs font-medium">{(file as any).name}</span>
                <span className="text-[10px] text-muted-foreground">{formatBytes((file as any).size)}</span>
                {isPdf && (
                  <a
                    className="mt-2 text-xs text-primary underline"
                    href={url || "#"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open / Download
                  </a>
                )}
              </div>
            )}
            {onRemove && (
              <button
                type="button"
                onClick={() => onRemove(idx)}
                className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-background/90 text-xs shadow"
                aria-label="Remove file"
              >
                ×
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};


