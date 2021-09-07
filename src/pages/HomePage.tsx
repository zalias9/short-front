import axios from "axios";
import { ReactElement, useState } from "react";
import { Container, Form, Button, Input } from "semantic-ui-react";
import TopPage from "./TopPage";

function HomePage(): ReactElement {
  //State for the input value
  let [inputValue, setInputValue] = useState<string>("");
  // State for the shortened Url
  let [shortened, setShortened] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // If a shortened value already exists, resets the page to take in a new long url.
    if (shortened) {
      setInputValue("");
      setShortened("");
      return;
    }
    // If shortened Url does not exist, validate and call API to create short Url.
    let url: string = encodeURI(inputValue.trim());
    if (!url) {
      // Empty URL
      alert("Please enter a URL");
      return;
    }
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = `http://${url}`;
    }
    //Check URL String Validity
    if (isUrlValid(url)) {
      // Call API method
      axios
        .post(`${process.env.REACT_APP_BACKEND}/shorten`, { url })
        .then((response) => {
          // Set shortened link
          setShortened(response.data.short_url);
          setInputValue(url);
        });
    } else {
      alert("This is not a Valid URL");
    }
  };

  const isUrlValid = (url: string): boolean => {
    try {
      // If the URL object is created successfully,
      // and the URL has a '.' in it, then it is considered valid
      // NOTE: This prevents localhost from being accepted.
      return new URL(url).hostname.includes(".");
    } catch {
      return false;
    }
  };

  return (
    <div>
      <br />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              width={16}
              placeholder="Enter a long url"
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
              readOnly={shortened}
            />
            <Button
              type="submit"
              color={!shortened ? "orange" : "blue"}
              content={!shortened ? "Shorten!" : "Again!"}
            />
          </Form.Group>
        </Form>
        <Container align="center">
          {shortened ? (
            <Input
              fluid
              action={{
                content: "Copy",
                color: "orange",
                onClick: () => {
                  navigator.clipboard.writeText(
                    `${process.env.REACT_APP_FRONTEND}/${shortened}`
                  );
                },
              }}
              labelPosition="left"
              label="ShortUrl"
              value={`${process.env.REACT_APP_FRONTEND}/${shortened}`}
              readOnly
            />
          ) : null}
        </Container>
      </Container>
      <br />
      <TopPage num={10} />
    </div>
  );
}

export default HomePage;
