import { styled } from "@material-ui/styles";
import { Container } from "@mui/material";
import { RoundedButton } from "ui/components/inputs/RoundedButton/RoundedButton.style";
import { LinkProps } from "ui/components/navigation/Link/Link";

export const SectionContainer = styled("section")``;

export const ContainerStyled = styled(Container)``;

export const SectionTitle = styled("h1")``;

export const SectionDescription = styled("p")``;

export const SectionButton = styled((props: LinkProps) => (
  <Link {...props} Component={RoundedButton} />
))``;

export const SectionPictureContainer = styled("p")``;
