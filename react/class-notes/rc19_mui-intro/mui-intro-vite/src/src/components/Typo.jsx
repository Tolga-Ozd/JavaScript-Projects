import Typography from "@mui/material/Typography" ;
import Box from "@mui/material/Box"
import { Button, Container, Stack } from "@mui/material";

const Typo = () => {
  return (
    <Container maxWidth= "sm">
         <Box sx={{
        padding:"1rem" ,
        display :"flex",
        flexDirection:"column",
        }}>
        <Typography variant="h6" component= "h3" color={"lightcoral"} mt={4}> Mui Typo </Typography >

        <Typography variant="subtitle3" component= "h1" color={"lightcoral"}> Mui Typo </Typography >

            {/* span elementi */}
        <Typography variant="button"  color={"yellow"} >Button Text </Typography >

        {/* p elementi */}
        <Typography variant="body2"  sx= {{color: "blue" , backgroundColor :"red" , mt:"1rem"}} align="center">Button Text </Typography >

    </Box>

    <Stack direction={"row"} spacing={2}>
        <Button variant = "outlined" color="success">
            Click
        </Button>

        <Button variant = "contained">
            Click
        </Button>
        <Button variant = "contained" sx={{color:"warning.light" ,backgroundColor:"error.dark"}}>
            Click
        </Button>


    </Stack>

    </Container>
   
  )
}

export default Typo 