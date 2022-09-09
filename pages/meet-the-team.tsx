import { Center, Text, Card, Group, Stack } from '@mantine/core';
import type { NextPage } from 'next';
import Image from 'next/image';

const MeetTheTeam: NextPage = () => {
  return (
    <Stack>
      <Center>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Center>
            <Card.Section
              style={{
                position: 'relative',
                width: '100px',
                height: '100px'
              }}
            >
              <Image src={'/images/rekt.gif'} layout="fill" alt="Rekt Guy" />
            </Card.Section>
          </Center>
          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Etheriad</Text>
          </Group>
          <Text size="sm" color="dimmed">
            Etheriad Text here
          </Text>
        </Card>
      </Center>
      <Center>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          <Center>
            <Card.Section
              style={{
                position: 'relative',
                width: '100px',
                height: '100px'
              }}
            >
              <Image src={'/images/rekt.gif'} layout="fill" alt="Rekt Guy" />
            </Card.Section>
          </Center>
          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>Rekt Boi</Text>
          </Group>
          <Text size="sm" color="dimmed">
            New to the Web3.0 space, Rekt Boi is still trying to get his wits
            about him.
          </Text>
        </Card>
      </Center>
    </Stack>
  );
};

export default MeetTheTeam;
