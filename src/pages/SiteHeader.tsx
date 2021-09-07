import React from "react";
import { Container, Grid, Header, Label, Divider } from "semantic-ui-react";
/**
 * Sitewide Header appears on every page.
 */
export default function SiteHeader() {
  return (
    <Container textAlign="center">
      <br />
      <Grid columns="equal" verticalAlign="middle">
        <Grid.Column></Grid.Column>
        <Grid.Column width="8">
          <Header as="h1">
            <Header as="a" href="/" color="orange">
              ShortUrl
            </Header>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <Label as="a" href="/top100" color="blue" tag>
            Top 100
          </Label>
        </Grid.Column>
      </Grid>
      <Divider />
    </Container>
  );
}
