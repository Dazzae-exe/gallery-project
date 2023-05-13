import { atom, selector } from 'recoil';

export const GalleryBoxState = atom({
    key: "GalleryBoxState",
    default: []
})

export const GetGalleryBoxState = selector({
    key: "GetGalleryBoxState",
    get: ({ get }) => {
        const galleryState = get(GalleryBoxState);

        return galleryState;
    }
})