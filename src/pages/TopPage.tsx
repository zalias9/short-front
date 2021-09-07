import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Container, Header, Table } from "semantic-ui-react";

interface Props {
  num: number;
}

interface TopResults {
  original_url: string;
  short_url: string;
  visits: number;
}
/**
 * This page displays the top "num" number of Urls sorted by total visits.
 */
export default function TopPage(props: Props): ReactElement {
  let [urlInfo, setUrlInfo] = useState<TopResults[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/top/${props.num}`)
      .then((res) => setUrlInfo(res.data));
  });

  return (
    <div>
      <br />
      <Container textAlign="center">
        <Header as="h3" color="orange">
          Top {props.num} Visits
        </Header>
        <br />
      </Container>

      <Container>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#</Table.HeaderCell>
              <Table.HeaderCell>Original URL</Table.HeaderCell>
              <Table.HeaderCell>Short URL</Table.HeaderCell>
              <Table.HeaderCell>Visits</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {urlInfo.map((obj, index) => {
              return (
                <Table.Row key={obj.short_url}>
                  <Table.Cell>{index + 1}</Table.Cell>
                  <Table.Cell>{obj.original_url}</Table.Cell>
                  <Table.Cell>
                    <b>
                      <a
                        href={`/${obj.short_url}`}
                      >{`${process.env.REACT_APP_FRONTEND}/${obj.short_url}`}</a>
                    </b>
                  </Table.Cell>
                  <Table.Cell>{obj.visits}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}
