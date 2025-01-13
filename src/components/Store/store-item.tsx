import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { useState } from 'react';
import { useShoppingCart } from '../../context/shopping-cart';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={imgUrl} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ${price}
          </Typography>
        </CardContent>
        <CardActions sx={{ alignItems: 'center' }}>
          {quantity === 0 ? (
            <Button variant="contained" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart{' '}
            </Button>
          ) : (
            <>
              <Button variant="contained" onClick={() => decreaseCartQuantity(id)}>
                -
              </Button>
              <span>{quantity} in cart</span>
              <Button variant="contained" onClick={() => increaseCartQuantity(id)}>
                +
              </Button>
              <Button variant="contained" color="error" onClick={() => removeFromCart(id)}>
                Remove
              </Button>
            </>
          )}
        </CardActions>
      </Card>
    </>
  );
}
