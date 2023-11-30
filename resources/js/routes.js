import Home from './components/Home'
import Categories from './screens/admin/category/Categories'
import AddCategory from './screens/admin/category/AddCategory'
import EditCategory from './screens/admin/category/EditCategory'
import AddProduct from './screens/admin/product/AddProduct'
import Products from './screens/admin/product/Products'
import EditProduct from './screens/admin/product/EditProduct'
import HomePage from './screens/client/HomePage'
import Login from './screens/auth/Login'
import Shop from './screens/client/shop/Shop'
import ProductDetails from './screens/client/shop/ProductDetails'
import CategoryProducts from './screens/client/shop/CategoryProducts'
import Cart from './screens/client/shop/Cart'

export default {
    mode:'history',
    routes: [
        {
            path:'/admin',
            component: Home
        },

        {
            path:'/admin/categories',
            component: Categories
        },

        {
            path:'/admin/addCategory',
            component: AddCategory
        },

        {
            path:'/admin/editCategory',
            component: EditCategory,
            props: true,
            name: 'EditCategory'
        },

        {
            path:'/admin/addProduct',
            component: AddProduct
        },

        {
            path:'/admin/products',
            component: Products
        },

        {
            path: '/admin/editProduct',
            component: EditProduct,
            props: true,
            name: 'EditProduct'
        },

        {
            path: '/home',
            component: HomePage
        },

        {
            path: '/login',
            component: Login,
            name: 'Login'
        },

        {
            path: '/shop',
            component: Shop,
            name: 'Shop'
        },

        {
            path: '/shop/productDetails',
            component: ProductDetails,
            props: true,
            name: 'ProductDetails'
        },

        {
            path: '/shop/category/products',
            component: CategoryProducts,
            props: true,
            name: 'CategoryProducts'
        },

        {
            path: '/shop/cart',
            component: Cart,
            name: 'Cart'
        }
    ],
}