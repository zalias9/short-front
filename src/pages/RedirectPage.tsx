import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Loader, Message } from "semantic-ui-react";

function RedirectPage() {
  let { shortUrl } = useParams<{ shortUrl: string }>();
  let [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      axios.get(`${process.env.REACT_APP_BACKEND}/${shortUrl}`).then((res) => {
        if (res.data) {
          window.location.href = res.data;
        } else {
          setError(
            `${process.env.REACT_APP_FRONTEND}/${shortUrl} not found on our server`
          );
        }
      });
    }, 2000); // TODO: Remove this, simulates redirection.
  });

  return (
    <Container>
      {!error ? (
        <Loader
          active
          size="huge"
        >{`Forwarding to ${process.env.REACT_APP_FRONTEND}/${shortUrl}`}</Loader>
      ) : (
        <Message negative size="huge">
          <Message.Header>{error}</Message.Header>
          <a href="/">Return to Home Page</a>
        </Message>
      )}
    </Container>
  );
}

export default RedirectPage;
