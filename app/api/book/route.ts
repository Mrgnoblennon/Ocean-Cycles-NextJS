// app/lib/booqable.ts
import axios from 'axios';

const booqableApi = axios.create({
  baseURL: 'https://api.booqable.com/v1',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_BOOQABLE_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const fetchProducts = async () => {
  try {
    const response = await booqableApi.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
