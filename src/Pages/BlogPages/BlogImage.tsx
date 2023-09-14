import { Image } from "grommet";
import styled from "styled-components";

interface BlogImageProps {
  src: string;
}

function BlogImage(props: BlogImageProps): JSX.Element {
  return (
    <StyledImage
      fit="cover"
      src="https://drive.google.com/thumbnail?id=1ST7TQ_i3EaHpdASGsvAPSKO6wdh_OndW&sz=w1024"
    />
  );
}

const StyledImage = styled(Image)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default BlogImage;
