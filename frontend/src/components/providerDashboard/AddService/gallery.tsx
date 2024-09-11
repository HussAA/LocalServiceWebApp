'use client'

import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload, Button, Modal } from 'antd';
import type { UploadFile, UploadProps } from 'antd';
import ProgressLayout from './progressLayout';
import Link from 'next/link';
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';

const completedSteps: boolean[] = [true, true, true, true, false];

const CreateServiceGallery: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  
  const getBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as File);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleRemove = (file: UploadFile) => {
    setFileList(prevList => prevList.filter(item => item.uid !== file.uid));
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <div>
      <ProgressLayout completedSteps={completedSteps} />
      {/* File Upload Area */}
      <div className='mx-auto p-4 lg:w-11/12 xl:w-9/12'>
        <div className='bg-white p-7 rounded-lg shadow-md pb-20'>
        <div className="text-2xl font-medium mb-1">Service Gallery</div>
        <hr className="mb-7" />
        <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" // Replace with your upload URL
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
            onRemove={handleRemove}
            showUploadList={{ showRemoveIcon: true }}
            className="upload-list"
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <Modal
            visible={previewOpen}
            footer={null}
            onCancel={() => setPreviewOpen(false)}
            bodyStyle={{ padding: 0 }}
            className="preview-modal"
          >
            <Image
              src={previewImage}
              alt="Image preview"
              style={{ width: '100%' }}
            />
          </Modal>
          {/* Next and Back buttons */}
          <div className='text-center mt-10'>
            <div className='flex justify-center gap-4'>
              <Link
                href='/provider-dashboard/create-service/location'
                className='inline-flex items-center bg-gray-300 text-black p-2 px-5 rounded-md text-sm group'
              >
                <FaArrowLeftLong className='mr-2 transition-transform group-hover:-translate-x-1' />
                Back
              </Link>
              <Link
                href='/provider-dashboard/create-service/seo'
                className='inline-flex items-center bg-[#365BAB] text-white p-2 px-5 rounded-md text-sm group'
              >
                Next
                <FaArrowRightLong className='ml-2 transition-transform group-hover:translate-x-1' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateServiceGallery;
