import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';


const ItemList = ({ data }) => {
  return (
                <Card  className="styleCard" style={{margin:40, minWidth:200} } sx={{ maxWidth: 345 }} >
                    <CardMedia
                        component="img"
                        height="140"
                        image={data.avatar_url}
                        alt="green iguana"
                    />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                        
                            <h4>Nombre: <strong>{data.login}</strong></h4>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Stock:<strong>{data.id}</strong>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button  size="small">Ver detalle del producto</Button>
                        </CardActions>
                </Card>
  );
}

export default ItemList;
