import React from 'react';
import Image from 'next/image';

const ProjectBanner = ({ product }) => {
  // Extract the image URL from the provided data
  const imageUrl = product?.attributes?.banner?.data?.[0]?.attributes?.url;

  console.log('Image URL:', imageUrl); // Debugging: Verify the URL is correct

  return (

    <div className="relative w-full h-64"> {/* Set a height for the container */}
      {product ? <Image 
        src={imageUrl || '/images/placeholder-image.png'} // Fallback image if URL is not available
        alt={product?.attributes?.banner?.data?.[0]?.attributes?.alternativeText || 'banner'}
        layout="fill" // Use layout fill to cover the container
        objectFit="cover" // Maintain aspect ratio and cover the container
        className='rounded-lg object-cover text-center sm:float-right' // Apply rounded corners
      />:
          <div className="h-350px w-350px bg-slate-200 animate-pulse">

          </div>}

    </div>
  );
}

export default ProjectBanner;
