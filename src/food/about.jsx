import React from "react";
import Layout from "../component/layout/layout";
import { Box, Typography } from "@mui/material";
import "../style/about.css";
function About() {
  return (
    <>
      <div className="about">
        <Box sx={{
            my:15,
            textAlign:"center",
            p:2
,            "& h4":{
                fontWeight:"bold",
                my:2,
                fontSize:"2 rem"
            },
            "& p":{
                textAlign:"justify",
            }, 
            "@media (max-width:600px)":{
                mt:0,
                "& h4":{
                    fontSize:"1.5 rem"
                },
            }
            }}>
          <Typography variant="h4">Welcome To My Resturant</Typography>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            reprehenderit veniam illo. Dolore incidunt harum repudiandae, nam
            adipisci quae eaque quibusdam ab optio omnis quo odio dignissimos
            asperiores ipsam voluptatibus voluptatum quisquam alias ipsa. Porro
            facilis velit ducimus consequatur atque voluptatibus natus id
            aspernatur cum accusantium, obcaecati soluta nihil officia, error
            dolor reiciendis adipisci magni ut! Mollitia, molestiae voluptate
            sunt veniam veritatis illo aliquam aliquid, voluptates rem deleniti
            aperiam eaque obcaecati eligendi necessitatibus cupiditate sed
            repellendus soluta consequuntur ullam adipisci voluptatem
            consequatur debitis dicta? Rem tempora aliquam tenetur velit.
            Reiciendis reprehenderit a enim quisquam dignissimos ducimus
            praesentium ab ea quia.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quod cupiditate temporibus totam dolorem quas consequuntur alias
            corrupti exercitationem unde laboriosam magnam, nobis inventore
            laudantium nemo, assumenda quisquam quos nam ab earum animi illum
            quia explicabo? Quos totam blanditiis hic beatae officia cupiditate
            eligendi obcaecati rerum facere nesciunt suscipit, in nobis facilis
            incidunt velit, molestias nostrum explicabo provident tempora.
            Asperiores vitae aut itaque voluptas labore praesentium a ratione
            impedit nemo cupiditate perspiciatis aperiam iste eos, alias ab
            facere quis tenetur architecto iusto aliquam. Animi quasi, aut omnis
            placeat voluptatum, voluptas deserunt mollitia aspernatur ipsam,
            officiis fugit! Nesciunt, quo est. Exercitationem.
          </p>
        </Box>
      </div>
      <Layout />
    </>
  );
}
export default About;
