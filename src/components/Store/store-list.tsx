import { Grid2 } from '@mui/material';
import storeItems from '../../data/items.json';
import { StoreItem } from './store-item';

export function StoreList() {
  return (
    <>
      <Grid2 container spacing={2} sx={{mt:4}}>
        {storeItems.map((item, id) => (
          <Grid2 size={{ xs: 6, md: 4, xl: 2 }} key={id}>
            <StoreItem
              id={item.id}
              name={item.name}
              price={item.price}
              imgUrl={item.imgUrl}
              key={id}
            />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}
