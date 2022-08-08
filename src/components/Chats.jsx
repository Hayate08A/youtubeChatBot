import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import { Chat } from "./index";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Chats = (props) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.chats.map((chat, i) => {
        return <Chat text={chat.text} type={chat.type} key={`Chat_${i}`} />;
      })}
    </List>
  );
};

export default Chats;
