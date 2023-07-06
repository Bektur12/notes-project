import { styled } from "@mui/material";
import React from "react";

export const InnerPage = () => {
  return (
    <Container>
      <span>29.11.2022</span>
      <h3>Заголовок новости</h3>
      <Image
        src="https://beta.ems.ladbiblegroup.com/s3/content/d0051ad45cfdc44feb1305e9124a9faa.jpg"
        alt=""
      />
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse
        ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
        convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
        quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
        vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu
        vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
        porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non
        ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia.
        Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem
        condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi,
        ac posuere leo. Nam pulvinar blandit velit, id condimentum diam faucibus
        at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue
        felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non
        odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque,
        pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus
        tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat
        sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus
        dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem.
        Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus
        vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus.
        Mauris consequat tellus id tempus aliquet.
      </Description>
    </Container>
  );
};

const Image = styled("img")`
  width: 40%;
`;

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Description = styled("p")`
  width: 40%;
  font-family: Inter;
  color: #858080;
  white-space: pre-line;
`;
