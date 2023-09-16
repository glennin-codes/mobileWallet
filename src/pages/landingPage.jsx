import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';

export default function HomePage() {
  // sample cards data
  const cards = [
    {
      id: 1,
      title: 'Send Money',
      image: 'https://images.unsplash.com/photo-1518546305927-5a555bb70259',
      description: 'Send money to your friends and family instantly and securely',
      action: 'Send Now',
    },
    {
      id: 2,
      title: 'Receive Money',
      image: 'https://images.unsplash.com/photo-1556742526-795a8eac090d',
      description: 'Receive money from anyone with a mobile wallet account',
      action: 'Request Now',
    },
    {
      id: 3,
      title: 'Pay Bills',
      image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
      description: 'Pay your bills online with ease and convenience',
      action: 'Pay Now',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Mobile Wallet
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Your One-Stop Solution for All Your Payments
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', width: { xs: '100%', sm: '80%' } }}>
        {cards.map((card) => (
          <Card key={card.id} sx={{ width: { xs: '90%', sm: '30%' }, m: 1 }}>
            <CardMedia component="img" height="140" image={card.image} alt={card.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                {card.action}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}