import React from 'react';

const SkeletonProductInfo = () => {
  return (
    <div className='flex flex-col gap-5'>
    <div className="h-400px w-400px bg-slate-200 animate-pulse">

</div>
<div className="h-20px w-400px bg-slate-200 animate-pulse">

</div>
<div className="h-20px w-400px bg-slate-200 animate-pulse">

</div>
<div className="h-20px w-400px bg-slate-200 animate-pulse">

</div>
<div className="h-10px w-400px bg-slate-200 animate-pulse">

</div>
    </div>
  );
}

export default SkeletonProductInfo;
