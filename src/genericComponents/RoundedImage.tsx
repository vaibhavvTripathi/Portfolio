// components/RoundedImage.js
import Image from "next/image";

const RoundedImage = ({
  src,
  alt,
  width,
  height,
  isRound 
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  isRound : boolean
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ borderRadius: isRound?"100%":"20px" }}
    />
  );
};

export default RoundedImage;
