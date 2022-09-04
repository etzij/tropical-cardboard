import { Alert, Center, Container } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';

const ALERT_TITLE = 'Oops!';
const ALERT_CONTENT =
  'You need MetaMask to access this site. Follow the link to install 👇🏼';
const META_MASK_LINK = 'https://metamask.io/download.html';

const Install = () => {
  return (
    <Center>
      <Container>
        <Alert
          icon={<IconAlertCircle size={16} />}
          title={ALERT_TITLE}
          color="red"
        >
          {ALERT_CONTENT}
          <br />
          <a href={META_MASK_LINK}>Meta Mask</a>
        </Alert>
      </Container>
    </Center>
  );
};

export default Install;
