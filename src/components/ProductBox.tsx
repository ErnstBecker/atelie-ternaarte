import React from "react";

interface ProductBoxProps{
  className?: string;
}

// const getFileNumbers = (): number[] => {
//   const fileNumbers: number[] = [];

//   for (let i = 0; i <= 7; i++) {
//     fileNumbers.push(i);
//   }

//   return fileNumbers;
// };

export const ProductBox = ({className}: ProductBoxProps): JSX.Element => {
  const imgClasses = `rounded-2xl
  ${className}`

  // const getImageUrl = (fileNumber: number): string => {
  //   const folderPath = './src/images/products/';
  //   return `${folderPath}${fileNumber}.jpg`;
  // };

  return (
  <>
    <div className="aspect-square w-96 terna-arte-gradient rounded-3xl">
    {/* {getFileNumbers().map((fileNumber) => (
          <img
            key={fileNumber}
            src={getImageUrl(fileNumber)}
            alt={`Product Image ${fileNumber}`}
            className={imgClasses}
          />
        ))} */}
    </div>
  </>
  );
};
