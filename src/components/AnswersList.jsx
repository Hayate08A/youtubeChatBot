import { Answer } from "./index";

const AnswersList = (props) => {
  return (
    <div className="c-grid__answer">
      {props.answers.map((v, i) => {
        return <Answer content={v.content} key={`Answer_${i}`} />;
      })}
    </div>
  );
};

export default AnswersList;
