import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export interface IImage {
    text: string;
    url: string;
}

export interface IState {
    images: IImage[];
    selectedImageIndex: number;
}

export interface IUpdateImagesPayload {
    images: IImage[];
}

export interface ISelectImagePayload {
    index: number;
}

export const store = new Vuex.Store({
    strict: true,
    state: {
        images: [],
        selectedImageIndex: 0,
    } as IState,
    mutations: {
        updateImages(state: IState, payload: IUpdateImagesPayload) {
            state.images = payload.images;
        },
        selectImage(state: IState, payload: ISelectImagePayload) {
            state.selectedImageIndex = payload.index;
        },
    },
    getters: {
        selectedImage(state) {
            return state.images[state.selectedImageIndex];
        },
    },
    actions: {
        updateImages({ commit }, payload: IUpdateImagesPayload) {
            commit("updateImages", payload);
            commit("selectImage", { index: 0 });
        },
        selectImage({ commit }, payload: ISelectImagePayload) {
            commit('selectImage', payload);
        },
        selectImageUp({ commit, state }) {
            let index = state.images.length - 1;
            if (state.selectedImageIndex > 0) {
                index = state.selectedImageIndex - 1;
            }
            commit("selectImage", { index });
        },
        selectImageDown({ commit, state }) {
            let index = 0;
            if (state.selectedImageIndex < state.images.length - 1) {
                index = state.selectedImageIndex + 1;
            }
            commit("selectImage", { index });
        },
    },
});
