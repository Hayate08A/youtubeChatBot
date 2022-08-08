// import * as React from 'react';
import Button from "@material-ui/core/Button";

const Answer = (props) => {
  return (
    <Button
      variant="outlined"
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
    </Button>
  );
};

export default Answer;
