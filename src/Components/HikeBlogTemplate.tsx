import {
  Card,
  Carousel,
  Heading,
  Image,
  PageContent,
  PageHeader,
  Table,
  Text,
  TableBody,
  TableCell,
  TableRow,
  Button,
  Skeleton,
} from "grommet";
import AppPage from "./AppPage";
import styled from "styled-components";
import { imageUrlFormatter } from "../Utils/images";
import { Link } from "react-router-dom";
import { ReactNode, useState } from "react";

interface HikeBlogProps {
  coverPhotoId: string;
  title: string;
  date: Date;
  summary: string;
  allTrailsIframeSource: string;
  galleryImageIds: string[];
  latitude: number;
  longitude: number;
  distance: number;
  elevationGain: number;
  children: ReactNode;
}

function HikeBlogTemplate(props: HikeBlogProps): JSX.Element {
  const [loadedImages, setLoadedImages] = useState(0);
  const [isAllTrailsIframeLoaded, setIsAlltrailsIframeLoaded] = useState(false);
  const [isCoverImageLoaded, setIsCoverImageLoaded] = useState(false);

  return (
    <AppPage>
      <StyledPageContent alignContent="center">
        {!isCoverImageLoaded && <CoverImageSkeleton />}
        <CoverImage
          onLoad={() => setIsCoverImageLoaded(true)}
          fit="cover"
          src={imageUrlFormatter(props.coverPhotoId)}
          hidden={!isCoverImageLoaded}
        />
        <HeaderContainer>
          <TitleContainer>
            <PageHeader
              title={props.title}
              subtitle={props.date.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            />
          </TitleContainer>
        </HeaderContainer>

        <SummaryText>{props.summary}</SummaryText>

        <Heading level={2}>The Trail</Heading>
        {!isAllTrailsIframeLoaded && <AllTrailsSkeleton />}
        <AllTrailsIFrame
          onLoad={() => setIsAlltrailsIframeLoaded(true)}
          className="alltrails"
          src={props.allTrailsIframeSource}
          title={props.title}
          hidden={!isAllTrailsIframeLoaded}
        />
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
                <TableCell>{props.distance} mi</TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <strong>Elevation Gain</strong>
                </TableCell>
                <TableCell>{props.elevationGain} ft</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </StatsCard>

        <Link
          to={`/3d?name=${props.title}&latitude=${String(
            props.latitude
          )}&longitude=${String(props.longitude)}`}
        >
          <ThreeDimensionalMapButton primary label="See Mountain in 3D" />
        </Link>

        <Heading level={2}>Gallery</Heading>
        {loadedImages !== props.galleryImageIds.length && <CarouselSkeleton />}
        <StyledCarousel
          hidden={loadedImages !== props.galleryImageIds.length}
          controls="arrows"
          wrap
          width="640px"
          play={5000}
          fill
        >
          {props.galleryImageIds.map((imageId) => {
            return (
              <CarouselImage
                onLoad={() =>
                  setLoadedImages((loadedImages) => loadedImages + 1)
                }
                fit="cover"
                src={imageUrlFormatter(imageId)}
              />
            );
          })}
        </StyledCarousel>

        <Heading level={2}>The Hike</Heading>
        <MarkdownContainer>{props.children}</MarkdownContainer>
      </StyledPageContent>
    </AppPage>
  );
}

const StyledPageContent = styled(PageContent)`
  width: 100%;
  max-width: 1024px;
`;

const HeaderContainer = styled.div`
  position: relative;
  color: white;
`;

const CoverImage = styled(Image)`
  max-height: 400px;
  border-radius: 8px;
`;

const CoverImageSkeleton = styled(Skeleton)`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

const TitleContainer = styled.div`
  position: absolute;
  bottom: 8px;
  left: 16px;
`;

const SummaryText = styled(Text)`
  padding: 24px 0;
`;

const StatsCard = styled(Card)`
  width: 100%;
  box-shadow: none;
  padding: 4px 0;
  margin: 8px 0;
  border-radius: 8px;
`;

const AllTrailsIFrame = styled.iframe`
  width: 100%;
  border-radius: 8px;
  height: 400px;
`;

const AllTrailsSkeleton = styled(Skeleton)`
  width: 100%;
  border-radius: 8px;
  height: 400px;
`;

const CarouselImage = styled(Image)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

const StyledCarousel = styled(Carousel)`
  max-width: 100%;
  width: auto;
  height: auto;
  border-radius: 8px;
`;

const CarouselSkeleton = styled(Skeleton)`
  width: 100;
  border-radius: 8px;
  height: 480px;
`;

const ThreeDimensionalMapButton = styled(Button)`
  width: 100%;
  margin: 4px 0;
`;

const MarkdownContainer = styled.div`
  p {
    max-width: 100%;
  }
  img {
    max-width: 100%;
    width: auto;
    height: auto;
    border-radius: 8px;
  }
`;

export default HikeBlogTemplate;
