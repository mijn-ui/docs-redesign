// biome-ignore-all lint/correctness/useImageSize: off
// biome-ignore-all lint/performance/noImgElement: off

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@mijn-ui/react";
import { ShoppingCart } from "lucide-react";

const ProductCard = () => (
  <Card className="w-full max-w-80 rounded-2xl">
    <CardHeader className="p-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl">
        <img
          alt="gray water bottle"
          className="absolute inset-0 size-full object-cover object-center"
          src="https://images.unsplash.com/photo-1544003484-3cd181d17917?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D"
        />
      </div>
    </CardHeader>
    <CardContent>
      <CardTitle className="text-lg">HydroPure Go</CardTitle>
      <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-4">
        <Badge className="text-fg-secondary" radius="full" variant="outlined">
          300ML
        </Badge>
        <Badge className="text-fg-secondary" radius="full" variant="outlined">
          500ML
        </Badge>
        <Badge color="brand" radius="full" variant="subtle">
          800ML
        </Badge>
        <Badge className="text-fg-secondary" radius="full" variant="outlined">
          1 Litre
        </Badge>
      </div>
      <CardDescription className="mt-3">
        <p>
          Durable bottle with a simple, modern feel. Perfect for workouts,
          commutes, and staying hydrated all day.
        </p>
      </CardDescription>
    </CardContent>
    <CardFooter className="flex items-center justify-between gap-4">
      <p className="font-semibold text-2xl">$120</p>
      <Button
        className="rounded-full sm:w-42"
        color="brand"
        size="lg"
        variant="filled"
      >
        <ShoppingCart />
        Add To Cart
      </Button>
    </CardFooter>
  </Card>
);

export default ProductCard;
