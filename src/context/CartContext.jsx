import {
    createContext,
    useContext,
    useMemo,
    useState,
} from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartNotification, setCartNotification] = useState(null);

    const addToCart = (product, quantity = 1) => {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find(
                (item) => item.id === product.id
            );

            if (existingItem) {
                return currentItems.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity:
                                  item.quantity + quantity,
                          }
                        : item
                );
            }

            return [
                ...currentItems,
                {
                    ...product,
                    quantity,
                },
            ];
        });

        setCartNotification({
            product,
        });

        setTimeout(() => {
            setCartNotification(null);
        }, 3500);
    };

    const closeCartNotification = () => {
        setCartNotification(null);
    };

    const updateQuantity = (productId, quantity) => {
        setCartItems((currentItems) =>
            currentItems
                .map((item) =>
                    item.id === productId
                        ? {
                              ...item,
                              quantity: Math.max(1, quantity),
                          }
                        : item
                )
        );
    };

    const removeFromCart = (productId) => {
        setCartItems((currentItems) =>
            currentItems.filter(
                (item) => item.id !== productId
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartCount = useMemo(
        () =>
            cartItems.reduce(
                (total, item) => total + item.quantity,
                0
            ),
        [cartItems]
    );

    const cartTotal = useMemo(
        () =>
            cartItems.reduce(
                (total, item) =>
                    total + item.price * item.quantity,
                0
            ),
        [cartItems]
    );

    const value = {
        cartItems,
        cartCount,
        cartTotal,
        cartNotification,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        closeCartNotification,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used inside CartProvider"
        );
    }

    return context;
}