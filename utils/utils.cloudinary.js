import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'testcloud910',
    api_key: '475778727294858',
    api_secret: 'JlPWtfY1kSAJ1iAjyW6Fjh_K84M'
});

export default async function uploadToCloudinary(filePath) {
    const res = await cloudinary.uploader.upload(filePath,{
        resource_type : "auto",
        folder : "pranav images"
    });
        return res;
}