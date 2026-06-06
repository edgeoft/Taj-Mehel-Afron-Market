import { Button, Flex, TextInput, TextInputProps } from '@mantine/core';

import '@/styles/components/form/__newsletterInput.scss';

interface Props extends TextInputProps {}

function NewsletterInput({ ...props }: Props) {
  return (
    <Flex className="newsletter-container">
      <TextInput className="newsletter-container-input" {...props} />

      <Button
        h={'auto'}
        variant="secondary"
        className="newsletter-container-button"
      >
        Send
      </Button>
    </Flex>
  );
}

export default NewsletterInput;
