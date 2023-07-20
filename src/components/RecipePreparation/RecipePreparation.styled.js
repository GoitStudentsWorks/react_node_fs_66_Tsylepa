import styled from "styled-components"
import mediaRule from "utils/mediaRule"

const RecipePreparationContainer = styled.div`
margin-top: 50px;

${mediaRule("tablet", "desktop", `
margin-top: 96px;
`)};

${mediaRule("desktop", "", `
position: relative;
margin-top: 101px;
width: 757px;
text-align: start;
align-self: flex-start;
`)};
`





const RecipePreparationTitle = styled.h4`
margin-bottom: 32px;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 24px;
letter-spacing: -0.24px;

${mediaRule("tablet", "desktop", `
margin-bottom: 33,5px;
`)};`

const RecipePreparationList = styled.ul`
width: 270px;

${mediaRule("desktop", "", `
width: 696px;
`)};`

const RecipePreparationItem = styled.li`
margin-bottom: 10px;
&:last-child {
  margin-bottom: 0;
}
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px;
letter-spacing: -0.28px;

${mediaRule("tablet", "desktop", `
margin-bottom: 18px;
&:last-child {
  margin-bottom: 0;
}`)};

${mediaRule("desktop", "", `
margin-bottom: 21px;
&:last-child {
  margin-bottom: 0;
}`)};

`

const RecipePreparationImage = styled.img`
margin-top: 40px;
margin-bottom: 100px;
border-radius: 8px;

${mediaRule("tablet", "desktop", `
margin-top: 53px;
margin-bottom: 200px;
`)};

${mediaRule("desktop", "", `
position: absolute;
top: -51px;
left: 890px;
margin-top: 53px;
margin-bottom: 200px;
`)};`

const StepNumber = styled.span`
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--accent-color);
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    margin-right: 8px;
  `



export {RecipePreparationContainer, RecipePreparationTitle, RecipePreparationItem, 
    RecipePreparationList, RecipePreparationImage, StepNumber}