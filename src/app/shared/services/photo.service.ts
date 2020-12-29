import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

export class PhotoService {
    public async addNewToGallery() {
        // Take a photo
        const capturedPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri, 
            source: CameraSource.Camera, 
            quality: 100 
        });
    }
}