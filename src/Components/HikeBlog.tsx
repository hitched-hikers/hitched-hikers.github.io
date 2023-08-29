import { Carousel, Image, PageContent } from "grommet";
import AppHeader from "./AppHeader";
import AppPage from "./AppPage";
import styled from "styled-components";
import { imageUrlFormatter } from "../Utils/images";

interface HikeBlogProps {}

function HikeBlog(props: HikeBlogProps): JSX.Element {
  return (
    <AppPage>
      <AppHeader title="ALGONQUIN PEAK" />

      <StyledPageContent alignContent="center">
        <Carousel fill>
          {/* <Image
            fit="cover"
            src={imageUrlFormatter("1eaJxC2abW2XT3GNjUugENRpaDjRhnpWo")}
          />
          <Image
            fit="cover"
            src={imageUrlFormatter("1ST7TQ_i3EaHpdASGsvAPSKO6wdh_OndW")}
          />
          <Image
            fit="cover"
            src={imageUrlFormatter("1AcjFQMg-dETWdHdHGeV5DUBp3zYami0c")}
          />
          <Image
            fit="cover"
            src={imageUrlFormatter("13iVrbQLE46PI4i2thgn1Uj9KkmmmjUPq")}
          />
          <Image
            fit="cover"
            src={imageUrlFormatter("1IGHtrr8E155juihXv2CnuzEUxMAKR23J")}
          />
          <Image
            fit="cover"
            src={imageUrlFormatter("1taDbdZ4vL6UqGlIuLs6jGvKH7KXb7KGd")}
          />
          <Image
            fit="cover"
            src={imageUrlFormatter("14hi3ICHlfO_WH_nTrcFb8dYB0rcB6uc_")}
          />
          <Image
            fit="cover"
            src={imageUrlFormatter("1NOji8GDyE7RMqyfwhu-Nys3E9HWJ72Bi")}
          />
          <Image
            fit="cover"
            src={imageUrlFormatter("1ITAfDzga7ujGGUL5D4tGMV-by8aT2tQ4")}
          /> */}
          <Image
            fit="cover"
            src={imageUrlFormatter("1ovTryrjR_i6MODZSe9ihTQAaiUQczXdq")}
          />
        </Carousel>
      </StyledPageContent>
    </AppPage>
  );
}

const StyledPageContent = styled(PageContent)`
  width: 100%;
  max-width: 640px;
`;

export default HikeBlog;
