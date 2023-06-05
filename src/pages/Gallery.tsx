import React from 'react';
import DisplayBox from '../components/DisplayBox';

const getFileNumbers = (): number[] => {
  const fileNumbers: number[] = [];

  for (let i = 0; i <= 29; i++) {
    fileNumbers.push(i);
  }

  return fileNumbers;
};

const GalleryPage: React.FC = () => {
  const getImageUrl = (fileNumber: number): string => {
    const folderPath = 'src/gallery/';
    return `${folderPath}${fileNumber}.jpg`;
  };

  return (
  <>
  <DisplayBox className='left-[47.5px] w-[95%] absolute'>
    <div className='flex flex-wrap gap-[40.5px] justify-center mt-2'>
      {getFileNumbers().map((fileNumber) => (
        <div key={fileNumber}>
          <img
            src={getImageUrl(fileNumber)}
            alt={`Product Image ${fileNumber+1}`}
            className='terna-arte-gradient rounded-3xl w-[306.5px]'
          />
          <p className='mt-2 text-xl'><b>Imagem {fileNumber+1}</b></p>
        </div>
      ))}
    </div>
  </DisplayBox>
  </>
  );
};

export default GalleryPage;
