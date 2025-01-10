import apiClient from "../config/axios";

const CategoryService = {

    getCategories: async () => {
        const {data} = await apiClient.get('/category');
        return data;
    }
}

export default CategoryService;