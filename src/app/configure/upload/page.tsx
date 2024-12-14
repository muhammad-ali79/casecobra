"use client";

import Dropzone, { FileRejection } from "react-dropzone";
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react";
import { useState, useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@radix-ui/react-progress";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";

export default function page() {
  const { toast } = useToast();
  const router = useRouter();
  const [isDragActive, setisDragActive] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId;
      startTransition(() => {
        router.push(`/configure/design?id=${configId}`);
      });
    },

    onUploadProgress(p) {
      setUploadProgress(p);
    },
  });

  const onDropAccepted = (acceptedFiles: File[]) => {
    setisDragActive(false);

    startUpload(acceptedFiles, { configId: undefined });
  };

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles;

    setisDragActive(false);

    toast({
      title: `${file.file.type} is not Supported`,
      description: "Please insted use PNG, JPG, JPEG",
      variant: "destructive",
    });
  };

  const [isPending, startTransition] = useTransition();
  // lg:rounded-2xl lg:py-20 xl:py-52
  return (
    <div
      className={`${isDragActive ? "bg-blue-900/10 ring-blue-900/10" : ""} my-16 flex h-full w-full flex-col items-center justify-center rounded-xl bg-gray-900/5 py-4 ring-1 ring-inset ring-gray-900/10`}
    >
      <Dropzone
        accept={{
          "image/png": [".png"],
          "image/jpg": [".jpg"],
          "image/jpeg": [".jpeg"],
        }}
        onDropRejected={onDropRejected}
        onDropAccepted={onDropAccepted}
        // onDrag over set the is Active to ture so that i can update the ui
        onDragEnter={() => setisDragActive(true)}
        onDragLeave={() => setisDragActive(false)}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="flex h-full w-full flex-col items-center justify-center"
          >
            <input {...getInputProps()} type="file" />
            {isDragActive ? (
              <MousePointerSquareDashed className="mb-2 h-6 w-6 text-zinc-500" />
            ) : isUploading || isPending ? (
              <Loader2 className="mb-2 h-6 w-6 animate-spin text-zinc-500" />
            ) : (
              <Image className="mb-2 h-6 w-6 text-zinc-500" />
            )}

            <div className="mb-2 flex flex-col justify-center text-sm text-zinc-700">
              {isUploading ? (
                <div className="flex flex-col items-center">
                  <p>Uploading...</p>
                  <Progress
                    value={uploadProgress}
                    className="mt-2 h-2 w-40 bg-gray-300"
                  />
                </div>
              ) : isPending ? (
                <div className="flex flex-col items-center">
                  <p>Redirecting, please wait...</p>
                </div>
              ) : isDragActive ? (
                <p>
                  <span className="font-semibold">Drop file</span> to upload
                </p>
              ) : (
                <p>
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
              )}
            </div>
          </div>
        )}
      </Dropzone>
    </div>
  );
}
