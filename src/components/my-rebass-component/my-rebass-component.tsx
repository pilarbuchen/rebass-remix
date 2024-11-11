import { Box, Card, Heading, Text, Button } from 'rebass';

const MyRebassComponent = () => {
  return (
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: 3 }}>
        <Card
          sx={{ maxWidth: 300, borderRadius: 8, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
        >
          <Box sx={{ padding: 3 }}>
            <Heading as="h3" fontSize={3} mb={2}>
              Rebass Card
            </Heading>
            <Text fontSize={2} color="gray">
              This is a simple card component built with Rebass. Customize it with different colors, paddings, and layouts.
            </Text>
          </Box>
          <Box sx={{ paddingX: 3, paddingBottom: 3 }}>
            <Button variant="primary" sx={{ width: '100%', bg: 'primary', color: 'white' }}>
              Learn More
            </Button>
          </Box>
        </Card>
      </Box>
  );
};

export default MyRebassComponent;
