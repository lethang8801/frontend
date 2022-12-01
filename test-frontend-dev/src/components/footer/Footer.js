import {Box, Stack, styled, Typography} from "@mui/material";

export const Footer = () => {
  return (
    <SiteFooter>
      <Box sx={{flex:1}}>
        <H6>About</H6>
        <Typography>React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.</Typography>
      </Box>
      <Box sx={{flex:1}}>
        <Box>
          <H6>Categories</H6>
          <UlFooter>
            <LiFooter><LinkFooter href="#">Reactjs</LinkFooter></LiFooter>
            <LiFooter><LinkFooter href="#">Nextjs</LinkFooter></LiFooter>
            <LiFooter><LinkFooter href="#">Chakra UI</LinkFooter></LiFooter>
            <LiFooter><LinkFooter href="#">MUI</LinkFooter></LiFooter>
            <LiFooter><LinkFooter href="#">React Route</LinkFooter></LiFooter>
          </UlFooter>
        </Box>
        <Box>
          <H6>Quick Links</H6>
          <UlFooter class="footer-links">
            <LiFooter><LinkFooter href="#">Home</LinkFooter></LiFooter>
            <LiFooter><LinkFooter href="#">Contract</LinkFooter></LiFooter>
            <LiFooter><LinkFooter href="#">Fee management</LinkFooter></LiFooter>
            <LiFooter><LinkFooter href="#">Limit management</LinkFooter></LiFooter>
            <LiFooter><LinkFooter href="#">Transaction</LinkFooter></LiFooter>
            <LiFooter><LinkFooter href="#">System</LinkFooter></LiFooter>
            <LiFooter><LinkFooter href="#">Report</LinkFooter></LiFooter>
          </UlFooter>
        </Box>
      </Box>
    </SiteFooter>
  )
}
const SiteFooter = styled(Stack)(
  () => `
    background-color:#26272b;
    padding:45px 0 20px;
    font-size:15px;
    line-height:24px;
    color:#737373;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 10%;
  `
)
const H6 = styled(Typography)(
  () => `
    color:#fff;
    font-size:16px;
    text-transform:uppercase;
    margin-top:5px;
    letter-spacing:2px
  `
)
const LinkFooter = styled("a")(
  () => `
    color:#737373;
    text-decoration:none;
    &:hover{
      color:#3366cc;
    }
  `
)
const UlFooter = styled("ul")(
  () => `
    padding-left:0;
    list-style:none;
    padding-inline-start: 0
  `
)
const LiFooter = styled("li")(
  () => `
   display:block
  `
)
