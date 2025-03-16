import Image from "next/image";
import React from "react";

interface PerfilImageProps {
  readonly img: string;
  readonly alt?: string;
}

const PerfilImage: React.FC<PerfilImageProps> = ({
  img,
  alt,
}: PerfilImageProps) => {
  return <Image src={img} alt={alt ? alt : "imagen"} className="image" />;
};

export default PerfilImage;
