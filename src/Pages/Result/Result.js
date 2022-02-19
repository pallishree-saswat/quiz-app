import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./Result.css";

const Result = ({ name, score, questions }) => {
  const navigate = useNavigate();
  let res = JSON.parse(localStorage.getItem("res")) || [];
  useEffect(() => {
    if (!name) {
      navigate.push("/");
    }

    console.log(res);
  }, [name, navigate]);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {res.length > 0 &&
          res.map((r) => (
            <>
              <div className="col-md-2 " style={{ color: "rgb(40, 82, 161)"}}>
                <h4  style={{fontSize:"14pt"}}>Name-: {r.name} </h4>
                <h4 style={{fontSize:"14pt"}}>Category:-{r.categoryName} </h4>
                <h4  style={{fontSize:"14pt"}}> Score:-{r.score} </h4>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  style={{ alignSelf: "center", marginTop: 8 }}
                  href="/"
                >
                  Go to homepage
                </Button>
              </div>
            </>
          ))}
      </div>
      {/* <span>{questions[1].category}</span> */}
      {/* 
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button> */}
    </div>
  );
};

export default Result;
