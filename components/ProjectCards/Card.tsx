import { CardContainer } from "@/components/ProjectCards/Card.styled";
import DialogProject from "components/ProjectDialog";
import { projectCardData } from "@/components/ProjectCards/";
import Box from "@mui/material/Box";

export default function Card(): JSX.Element {
  return (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="row"
      sx={{ flexFlow: "wrap" }}
    >
      {projectCardData.map((projectDetails, idx) => (
        <>
          <CardContainer key={idx} imgSrc={projectDetails.images[0].src}>
            <div className="cardBody">
              <div className="cardOverlay">
                <div className="overlayText">
                  <h3>{projectDetails.title}</h3>
                  <p className="description">{projectDetails.description}</p>
                  <DialogProject projectDetails={projectDetails} />
                </div>
              </div>
            </div>
          </CardContainer>
        </>
      ))}
    </Box>
  );
}
