import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    maxWidth: "100%",
    flexGrow: 1,
    height: '60vh'
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    marginTop: "30",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  price: {
      color: "#00e676",
      marginTOp: '10px'
  }, 
  description: {
      marginTop: "30px"
  }, 
  priceCntr: {
    marginTop: '10px'
  },
  center: {
    textAlign: 'center',
  },
}));
