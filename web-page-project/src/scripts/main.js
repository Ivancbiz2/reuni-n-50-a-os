// This file initializes the visit counter and photo upload functionality.

import { initializeVisitCounter } from '../components/visitCounter.js';
import { initializePhotoUpload } from '../components/photoUpload.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeVisitCounter();
    initializePhotoUpload();
});