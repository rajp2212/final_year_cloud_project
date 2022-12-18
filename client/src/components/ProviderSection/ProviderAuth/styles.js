import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    
    paper: {
    width:"50%",
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:"center",
    padding: theme.spacing(2),
    boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
    placeholder: {
      color: "#aaa"
    }

 
}));