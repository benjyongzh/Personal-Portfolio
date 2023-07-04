export interface imageReference {
  image: string;
  name: string;
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
