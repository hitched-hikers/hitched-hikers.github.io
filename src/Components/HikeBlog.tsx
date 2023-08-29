import {
  Card,
  Carousel,
  Heading,
  Image,
  Markdown,
  PageContent,
  PageHeader,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "grommet";
import AppHeader from "./Header/AppHeader";
import AppPage from "./AppPage";
import styled from "styled-components";
import { imageUrlFormatter } from "../Utils/images";

interface HikeBlogProps {}

function HikeBlog(props: HikeBlogProps): JSX.Element {
  return (
    <AppPage>
      <AppHeader title="" />

      <StyledPageContent id="inner" alignContent="center">
        <PageHeader
          title={"Algonquin Peak"}
          subtitle={
            "An overnight backpacking trip. The muddiest & slippiest of hikes yet."
          }
        />

        <StyledCarousel controls="arrows" wrap width="640px" play={5000} fill>
          <StyledImage
            fit="cover"
            src={imageUrlFormatter("1eaJxC2abW2XT3GNjUugENRpaDjRhnpWo")}
          />
          <StyledImage
            fit="cover"
            src={imageUrlFormatter("1ST7TQ_i3EaHpdASGsvAPSKO6wdh_OndW")}
          />
          <StyledImage
            fit="cover"
            src={imageUrlFormatter("1AcjFQMg-dETWdHdHGeV5DUBp3zYami0c")}
          />
          <StyledImage
            fit="cover"
            src={imageUrlFormatter("13iVrbQLE46PI4i2thgn1Uj9KkmmmjUPq")}
          />
          <StyledImage
            fit="cover"
            src={imageUrlFormatter("1IGHtrr8E155juihXv2CnuzEUxMAKR23J")}
          />
          <StyledImage
            fit="cover"
            src={imageUrlFormatter("1taDbdZ4vL6UqGlIuLs6jGvKH7KXb7KGd")}
          />
          <StyledImage
            fit="cover"
            src={imageUrlFormatter("14hi3ICHlfO_WH_nTrcFb8dYB0rcB6uc_")}
          />
          <StyledImage
            fit="cover"
            src={imageUrlFormatter("1NOji8GDyE7RMqyfwhu-Nys3E9HWJ72Bi")}
          />
          <StyledImage
            fit="cover"
            src={imageUrlFormatter("1ITAfDzga7ujGGUL5D4tGMV-by8aT2tQ4")}
          />
        </StyledCarousel>

        <Heading level={2}>In Numbers</Heading>
        <StatsCard
          alignSelf="center"
          background={{ dark: "dark-2", light: "light-3" }}
        >
          <Table>
            <TableBody>
              <TableRow>
                <TableCell scope="row">
                  <strong>Mileage</strong>
                </TableCell>
                <TableCell>16.32 mi</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <strong>Elevation Gain</strong>
                </TableCell>
                <TableCell>3,632 ft</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </StatsCard>

        <Heading level={2}>The Hike</Heading>
        <Markdown>
          It was a grueling climb with the gruesome twosome. Much mud and
          slippery rocks were encountered along the way.
        </Markdown>
      </StyledPageContent>
    </AppPage>
  );
}

const StyledPageContent = styled(PageContent)`
  width: 100%;
  max-width: 1024px;
`;

const StyledImage = styled(Image)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

const StyledCarousel = styled(Carousel)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

const StatsCard = styled(Card)`
  width: 100%;
  box-shadow: none;
`;

export default HikeBlog;
