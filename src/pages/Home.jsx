import { Box, Container, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom>
          Welcome
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          This is your React + MUI boilerplate homepage. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Deserunt voluptatem, quo illo, libero veniam magnam labore iusto a ipsam sint ad dolore quae, distinctio
          qui vero sed omnis consequuntur asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
          vitae iste explicabo fugiat error quaerat, totam molestias dignissimos laborum saepe consectetur. Non
          tempore iure odio nam eligendi rerum. Commodi, corrupti? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Labore sapiente ex maiores dicta vitae harum explicabo, repudiandae nobis vero est odit
          voluptatem fugit. Asperiores corporis suscipit sed, magni repellendus in. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Accusamus dolorem rem ab. Itaque, cumque delectus. Nihil nam, beatae iste
          eos in iure, ea mollitia ad labore animi explicabo numquam distinctio? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Deserunt dignissimos et aut harum delectus nihil, eum nulla reprehenderit
          ab repellat. Neque sunt dignissimos saepe porro, optio rem adipisci pariatur suscipit? lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, quidem. This is your React + MUI boilerplate homepage.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptatem, quo illo, libero veniam
          magnam labore iusto a ipsam sint ad dolore quae, distinctio qui vero sed omnis consequuntur asperiores.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut vitae iste explicabo fugiat error quaerat,
          totam molestias dignissimos laborum saepe consectetur. Non tempore iure odio nam eligendi rerum. Commodi,
          corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sapiente ex maiores dicta vitae
          harum explicabo, repudiandae nobis vero est odit voluptatem fugit. Asperiores corporis suscipit sed,
          magni repellendus in. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus dolorem rem ab.
          Itaque, cumque delectus. Nihil nam, beatae iste eos in iure, ea mollitia ad labore animi explicabo
          numquam distinctio? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt dignissimos et aut
          harum delectus nihil, eum nulla reprehenderit ab repellat. Neque sunt dignissimos saepe porro, optio rem
          adipisci pariatur suscipit? lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
          This is your React + MUI boilerplate homepage. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Deserunt voluptatem, quo illo, libero veniam magnam labore iusto a ipsam sint ad dolore quae, distinctio
          qui vero sed omnis consequuntur asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
          vitae iste explicabo fugiat error quaerat, totam molestias dignissimos laborum saepe consectetur. Non
          tempore iure odio nam eligendi rerum. Commodi, corrupti? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Labore sapiente ex maiores dicta vitae harum explicabo, repudiandae nobis vero est odit
          voluptatem fugit. Asperiores corporis suscipit sed, magni repellendus in. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Accusamus dolorem rem ab. Itaque, cumque delectus. Nihil nam, beatae iste
          eos in iure, ea mollitia ad labore animi explicabo numquam distinctio? Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Deserunt dignissimos et aut harum delectus nihil, eum nulla reprehenderit
          ab repellat. Neque sunt dignissimos saepe porro, optio rem adipisci pariatur suscipit? lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quisquam, quidem.
        </Typography>

        <Button variant="contained">Get Started</Button>
      </Container>
    </Box>
  );
}
