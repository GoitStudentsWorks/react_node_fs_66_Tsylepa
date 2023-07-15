import ChooseYourBreakfast from "components/ChooseYourBreakfast/ChooseYourBreakfast";
import PreviewCategories from "components/PreviewCategories/PreviewCategories";
import Search from "components/Search/Search";
<<<<<<< Updated upstream
import {BackgroundWrapper, MainTitle, Paragraph, TitleSpan, OtherCategoriesBtn, OtherCategoriesContainer} from "./Main.styled";
import { Link } from "react-router-dom";
=======
import {BackgroundPicture, BackgroundWrapper, MainTitle, Paragraph, TitleSpan, OtherCategoriesBtn, OtherCategoriesContainer} from "./Main.styled";

>>>>>>> Stashed changes



const Main = () => {
  return (
    <><BackgroundPicture>
    <BackgroundWrapper>
    <MainTitle><TitleSpan>So</TitleSpan>Yummy</MainTitle>
    <Paragraph>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</Paragraph>
   <ChooseYourBreakfast />
    <Search />
    </BackgroundWrapper>
    </BackgroundPicture>
    <PreviewCategories />
    <OtherCategoriesContainer>
        <OtherCategoriesBtn to = "/categories/:categoryName">Other categories</OtherCategoriesBtn>
    </OtherCategoriesContainer>
    </>
  );
};

export default Main;
