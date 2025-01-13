import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
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

  const [qty, setQty] = useState(0);
  const increaseQty = () => {
    setQty((cur) => cur + 1);
  };
  const decreaseQty = () => {
    setQty((cur) => cur - 1);
  };
  const removeItem = () => {
    setQty(0);
  };
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
          {qty === 0 ? (
            <Button variant="contained" onClick={increaseQty}>
              + Add To Cart{' '}
            </Button>
          ) : (
            <>
              <Button variant="contained" onClick={decreaseQty}>
                -
              </Button>
              <span>{qty} in cart</span>
              <Button variant="contained" onClick={increaseQty}>
                +
              </Button>
              <Button variant="contained" color="error" onClick={removeItem}>
                Remove
              </Button>
            </>
          )}
        </CardActions>
      </Card>
    </>
  );
}
