import Image from "next/image";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className={`flex items-center`}>
      <Image
        width={500}
        height={200}
        src={picture}
        className="w-12 h-12 border-2 border-blue-400 object-cover rounded-full mr-4"
        alt={name}
      />
    </div>
  );
};

export default Avatar;
