interface VisitCounter {
    count: number;
    increment: () => void;
    getCount: () => number;
}

interface PhotoUpload {
    fileInput: HTMLInputElement;
    previewContainer: HTMLElement;
    upload: () => void;
}

declare module "visitCounter" {
    export function initializeVisitCounter(): VisitCounter;
}

declare module "photoUpload" {
    export function initializePhotoUpload(): PhotoUpload;
}