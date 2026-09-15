import {
    createContext,
    useContext,
    useMemo,
    useState,
} from "react";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
    const [wishlistItems, setWishlistItems] = useState([]);
    const [wishlistNotification, setWishlistNotification] =
        useState(null);

    const isInWishlist = (productId) => {
        return wishlistItems.some(
            (item) => item.id === productId
        );
    };

    const addToWishlist = (product) => {
        setWishlistItems((currentItems) => {
            if (
                currentItems.some(
                    (item) => item.id === product.id
                )
            ) {
                return currentItems;
            }

            return [...currentItems, product];
        });

        setWishlistNotification({
            type: "added",
            product,
        });

        setTimeout(() => {
            setWishlistNotification(null);
        }, 3000);
    };

    const removeFromWishlist = (productId) => {
        const product = wishlistItems.find(
            (item) => item.id === productId
        );

        setWishlistItems((currentItems) =>
            currentItems.filter(
                (item) => item.id !== productId
            )
        );

        if (product) {
            setWishlistNotification({
                type: "removed",
                product,
            });

            setTimeout(() => {
                setWishlistNotification(null);
            }, 3000);
        }
    };

    const toggleWishlist = (product) => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    const clearWishlist = () => {
        setWishlistItems([]);
    };

    const closeWishlistNotification = () => {
        setWishlistNotification(null);
    };

    const wishlistCount = useMemo(
        () => wishlistItems.length,
        [wishlistItems]
    );

    const value = {
        wishlistItems,
        wishlistCount,
        wishlistNotification,
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        clearWishlist,
        closeWishlistNotification,
    };

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);

    if (!context) {
        throw new Error(
            "useWishlist must be used inside WishlistProvider"
        );
    }

    return context;
}