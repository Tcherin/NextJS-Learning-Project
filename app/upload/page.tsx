'use client';
import { CldUploadWidget, CldImage } from 'next-cloudinary';
import { useState } from 'react';

interface CloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('')

  return (<>
  {publicId && <CldImage src={publicId} width={270} height={180} alt='pikachu' />}
  <CldUploadWidget uploadPreset="w0wvs2ty"
  onUpload={(result, widget) => {
    if(result.event !== 'success') return;
    const info = result.info as CloudinaryResult;
    setPublicId(info.public_id);
  }}>
  {({ open }) => {
    return (
      <button className="btn btn-primary" onClick={() => open()}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>
</>
  )
}

export default UploadPage