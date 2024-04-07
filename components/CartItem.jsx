import { useCart } from "@/Hooks/use-cart";
import { formatPrice } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const CartItem = ({ item }) => {
  const { image, name, price, description, id } = item;
  const { removeItem } = useCart();
  return (
    <div className="space-y-3 py-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative aspect-square w-16 h-16 min-w-fit overflow-hidden rounded">
            <Image
              src={image}
              alt={name}
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="flex flex-col self-start">
            <span className="line-clamp-1 text-sm font-medium mb-1">
              {name}
            </span>
            <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
              {description}
            </span>
            <span className="line-clamp-1 text-xs capitalize text-muted-foreground mt-2">
              Qty: {item.quantity}
            </span>
            <div className="mt-4 text-xs text-muted-foreground">
              <button
                onClick={() => {
                  removeItem(id);
                }}
                className="flex items-center gap-0.5 text-[#bb2124]"
              >
                <X className="w-3 h-3 text-[#bb2124]" />
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-1 font-medium">
          <span className="ml-auto line-clamp-1 text-sm">
            {formatPrice(price)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
