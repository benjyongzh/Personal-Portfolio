import { isArrayOfInterface } from "@/utils/objects";

export interface imageReference {
  image: string;
  name: string;
}

export interface slideshowInfo {
  currentImage: imageReference;
  images: imageReference[];
}

export function isSlideshowInfo(arg: any): arg is slideshowInfo {
  return (
    arg &&
    arg.currentImage &&
    isimageReference(arg.currentImage) &&
    arg.images &&
    Array.isArray(arg.images) &&
    isArrayOfInterface(arg.images, isimageReference)
  );
}

export function isimageReference(arg: any): arg is imageReference {
  return (
    arg &&
    arg.image &&
    typeof arg.image === "string" &&
    arg.name &&
    typeof arg.name === "string"
  );
}
