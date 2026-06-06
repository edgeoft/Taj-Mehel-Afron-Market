import { images } from '@/assets';
import {
  Box,
  Button,
  Flex,
  Group,
  Modal,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { X } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

type Props = {
  opened: boolean;
  close: () => void;
  title: string;
  description: string;
  type?: 'delete';
  btnLabel: string;
  showImage?: boolean;
  image?: string;
};

const ConfirmationModal = ({
  opened,
  close,
  title,
  description,
  type,
  btnLabel,
  showImage = false,
  image,
}: Props) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      withCloseButton={false}
      centered
      className="confirmation-modal"
    >
      <Stack gap={32} align="center" w={'100%'}>
        <Stack gap={12} align="center" w={'100%'}>
          <Flex justify={'space-between'} align={'center'} w={'100%'}>
            <Box />
            <Title order={3} c={'neutral.10'} className="text-center">
              {title}
            </Title>

            <X
              size={20}
              onClick={close}
              color="#212121"
              className="cursor-pointer"
            />
          </Flex>

          <Text className="body-2 text-center" c={'#595959'}>
            {description}
          </Text>
        </Stack>

        {showImage ? (
          <Image
            src={image ? image : images.deleteModalImg}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full"
          />
        ) : null}

        <Group gap={8} wrap="nowrap" w={'100%'}>
          <Button
            className="w-full"
            variant={type === 'delete' ? 'danger' : 'filled'}
          >
            {btnLabel}
          </Button>

          <Button className="w-full" variant={'outline'} onClick={close}>
            Cancel
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};

export default ConfirmationModal;
