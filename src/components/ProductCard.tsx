import type { Product } from "../types/product.types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const priceInINR = Math.round(product.price * 83).toLocaleString("en-IN");

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50 sm:h-56">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm backdrop-blur-sm">
          ⭐ {product.rating}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="inline-flex rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            {product.category}
          </span>
          {product.brand && (
            <span className="inline-flex rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              {product.brand}
            </span>
          )}
        </div>

        <h3
          className="mb-1 text-lg font-bold text-gray-900 line-clamp-1"
          title={product.title}
        >
          {product.title}
        </h3>
        <p
          className="mb-4 text-sm text-gray-500 line-clamp-2"
          title={product.description}
        >
          {product.description}
        </p>

        <div className="mt-auto flex items-end justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-400">Price</p>
            <p className="text-xl font-black text-gray-900">₹{priceInINR}</p>
          </div>

          <div
            className={`text-sm font-medium ${product.stock > 10 ? "text-green-600" : "text-red-600"}`}
          >
            {product.stock > 10 ? "In Stock" : `Only ${product.stock} left`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
